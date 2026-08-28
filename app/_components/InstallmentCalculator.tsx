'use client';

import { useState, type FormEvent } from 'react';
import { channelTalkUrl } from '../_data/guide-content';

type CalculatorRow = {
  round: number;
  balance: number;
  principal: number;
  fee: number | null;
  payment: number;
};

type CalculatorResult = {
  amount: number;
  months: number;
  rows: CalculatorRow[];
  totalFee: number;
  totalPayment: number;
  hasRate: boolean;
};

const formatWon = (value: number) => `${Math.round(value).toLocaleString('ko-KR')}원`;

export default function InstallmentCalculator() {
  const [amount, setAmount] = useState('');
  const [months, setMonths] = useState('');
  const [feeMode, setFeeMode] = useState('principal');
  const [rate, setRate] = useState('');
  const [burdenRounds, setBurdenRounds] = useState('');
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [result, setResult] = useState<CalculatorResult | null>(null);

  const calculate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setNotice('');

    const principalAmount = Number(amount.replaceAll(',', ''));
    const installmentMonths = Number(months);
    if (!Number.isSafeInteger(principalAmount) || principalAmount <= 0) {
      setError('구매금액을 0보다 큰 원 단위 정수로 입력해 주세요.');
      setResult(null);
      return;
    }
    if (!Number.isInteger(installmentMonths) || installmentMonths < 2) {
      setError('희망 할부 개월 수를 선택해 주세요.');
      setResult(null);
      return;
    }

    const rateNumber = Number(rate);
    const needsRate = feeMode !== 'principal';
    const hasRate = needsRate && Number.isFinite(rateNumber) && rateNumber > 0 && rateNumber <= 100;
    if (needsRate && rate && !hasRate) {
      setError('연간 예상 수수료율은 0보다 크고 100 이하인 숫자로 입력해 주세요.');
      setResult(null);
      return;
    }

    let burdenRoundSet = new Set<number>();
    if (feeMode === 'partial' && hasRate) {
      const parsed = burdenRounds.split(',').map((value) => Number(value.trim())).filter((value) => Number.isFinite(value));
      const unique = new Set(parsed);
      const invalid = parsed.length === 0 || unique.size !== parsed.length || parsed.some((value) => !Number.isInteger(value) || value < 1 || value > installmentMonths);
      if (invalid) {
        setError(`고객 부담 회차를 1~${installmentMonths} 사이의 중복 없는 숫자로 입력해 주세요. 예: 1,2`);
        setResult(null);
        return;
      }
      burdenRoundSet = unique;
    }

    setNotice(needsRate && !hasRate
      ? '수수료율을 입력하지 않아 원금 기준 결과만 계산했습니다. 실제 수수료율은 카드사에서 확인해 주세요.'
      : '선택한 할부 기간의 실제 적용 가능 여부는 결제 화면과 상담에서 확인해 주세요.');

    const basePrincipal = Math.floor(principalAmount / installmentMonths);
    let principalPaid = 0;
    const rows: CalculatorRow[] = [];
    for (let index = 1; index <= installmentMonths; index += 1) {
      const balance = principalAmount - principalPaid;
      const roundPrincipal = index === installmentMonths ? balance : basePrincipal;
      let fee: number | null = 0;
      if (hasRate) {
        fee = feeMode === 'partial' && !burdenRoundSet.has(index)
          ? null
          : Math.round(balance * (rateNumber / 100) / 12);
      }
      rows.push({ round: index, balance, principal: roundPrincipal, fee, payment: roundPrincipal + (fee ?? 0) });
      principalPaid += roundPrincipal;
    }
    const totalFee = rows.reduce((sum, row) => sum + (row.fee ?? 0), 0);
    setResult({ amount: principalAmount, months: installmentMonths, rows, totalFee, totalPayment: principalAmount + totalFee, hasRate });
  };

  const reset = () => {
    setAmount('');
    setMonths('');
    setFeeMode('principal');
    setRate('');
    setBurdenRounds('');
    setError('');
    setNotice('');
    setResult(null);
  };

  return (
    <div className="calculator-card calculator-card--page">
      <form onSubmit={calculate} noValidate>
        <div className="form-grid form-grid--two">
          <label className="field">
            <span>상품권 구매금액</span>
            <div className="input-suffix">
              <input type="text" inputMode="numeric" autoComplete="off" value={amount} onChange={(event) => { const digits = event.target.value.replace(/\D/g, ''); setAmount(digits ? Number(digits).toLocaleString('ko-KR') : ''); }} placeholder="예: 1,000,000" aria-invalid={Boolean(error && !amount)} />
              <em>원</em>
            </div>
          </label>
          <label className="field">
            <span>희망 할부 개월 수</span>
            <select value={months} onChange={(event) => setMonths(event.target.value)} aria-invalid={Boolean(error && !months)}>
              <option value="">기간 선택</option><option value="2">2개월 희망</option><option value="3">3개월 희망</option><option value="6">6개월 희망</option><option value="12">12개월 희망</option><option value="24">24개월 희망</option>
            </select>
          </label>
        </div>
        <fieldset className="fee-options">
          <legend>할부수수료 반영 방식</legend>
          <div>
            <label><input type="radio" name="page-fee-mode" value="principal" checked={feeMode === 'principal'} onChange={(event) => setFeeMode(event.target.value)} /><span><strong>원금만</strong><small>수수료를 계산하지 않음</small></span></label>
            <label><input type="radio" name="page-fee-mode" value="standard" checked={feeMode === 'standard'} onChange={(event) => setFeeMode(event.target.value)} /><span><strong>일반 할부</strong><small>확인한 수수료율 입력</small></span></label>
            <label><input type="radio" name="page-fee-mode" value="partial" checked={feeMode === 'partial'} onChange={(event) => setFeeMode(event.target.value)} /><span><strong>부분무이자</strong><small>고객 부담 회차 입력</small></span></label>
          </div>
        </fieldset>
        {feeMode !== 'principal' && (
          <div className="form-grid form-grid--two conditional-fields">
            <label className="field"><span>연간 예상 수수료율</span><div className="input-suffix"><input type="text" inputMode="decimal" value={rate} onChange={(event) => setRate(event.target.value.replace(/[^0-9.]/g, ''))} placeholder="카드사 확인값 직접 입력" /><em>%</em></div></label>
            {feeMode === 'partial' && <label className="field"><span>고객 부담 회차</span><input type="text" inputMode="numeric" value={burdenRounds} onChange={(event) => setBurdenRounds(event.target.value.replace(/[^0-9, ]/g, ''))} placeholder="예: 1,2" /><small className="field-help">쉼표로 구분해 입력하세요.</small></label>}
          </div>
        )}
        {error && <p className="form-error" role="alert">{error}</p>}
        <div className="calculator-actions"><button className="button button--primary" type="submit">예상 금액 계산하기</button><button className="button button--ghost" type="button" onClick={reset}>초기화</button></div>
      </form>

      {result && (
        <div className="calculator-result" aria-live="polite">
          <div className="result-summary">
            <div><span>원금 기준 월 예상액</span><strong>{formatWon(Math.floor(result.amount / result.months))}</strong></div>
            <div><span>예상 수수료 합계</span><strong>{result.hasRate ? formatWon(result.totalFee) : '미반영'}</strong></div>
            <div className="result-summary__total"><span>예상 총 납부액</span><strong>{formatWon(result.totalPayment)}</strong></div>
          </div>
          {notice && <p className="calc-notice">{notice}</p>}
          <div className="table-scroll calculator-table" tabIndex={0} aria-label="회차별 예상 납부액 표, 좌우 스크롤 가능">
            <table><caption>회차별 원금·수수료 단순 예상</caption><thead><tr><th scope="col">회차</th><th scope="col">남은 원금</th><th scope="col">회차 원금</th><th scope="col">예상 수수료</th><th scope="col">예상 납부액</th></tr></thead><tbody>{result.rows.map((row) => <tr key={row.round}><th scope="row">{row.round}회차</th><td>{formatWon(row.balance)}</td><td>{formatWon(row.principal)}</td><td>{row.fee === null ? '카드사 부담 조건 확인' : formatWon(row.fee)}</td><td><strong>{formatWon(row.payment)}</strong></td></tr>)}</tbody></table>
          </div>
          <p className="result-disclaimer">계산 결과는 입력값을 이용한 단순 예상치입니다. 실제 수수료율, 청구일수, 원 단위 처리 방식과 최종 청구금액은 카드사 정책 및 개인별 적용 조건에 따라 달라질 수 있습니다.</p>
          <a className="button button--primary result-consult" href={channelTalkUrl} target="_blank" rel="noopener noreferrer">이 결과를 기준으로 상담하기</a>
        </div>
      )}
    </div>
  );
}
