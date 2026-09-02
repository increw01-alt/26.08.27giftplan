'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, type FormEvent } from 'react';
import InstallmentPromo from './_components/InstallmentPromo';
import SiteFooter from './_components/SiteFooter';
import SiteHeader from './_components/SiteHeader';

const channelTalkUrl = 'https://koreagiftcard.channel.io/';
const plusYouUrl = 'https://plusyou.co.kr/';

const paymentTypes = [
  {
    number: '01',
    title: '일시불',
    description: '결제금액 전액을 다음 결제일에 납부하는 방식입니다. 상품권 결제 가능 여부와 카드 한도를 함께 확인합니다.',
    tag: '한 번에 납부',
  },
  {
    number: '02',
    title: '일반 할부',
    description: '결제금액을 여러 회차로 나누어 납부합니다. 개인별 할부수수료율과 선택 가능한 개월 수를 확인해야 합니다.',
    tag: '수수료 확인',
  },
  {
    number: '03',
    title: '무이자 할부',
    description: '행사 조건에 맞을 때 할부수수료를 카드사가 부담하는 방식입니다. 상품권 결제에 자동 적용되지는 않습니다.',
    tag: '대상 업종 확인',
  },
  {
    number: '04',
    title: '부분무이자',
    description: '초기 일부 회차는 고객이 수수료를 부담하고 나머지 회차는 카드사가 부담하는 조건입니다.',
    tag: '부담 회차 확인',
  },
  {
    number: '05',
    title: '결제 후 분할납부',
    description: '일시불 결제 뒤 카드사에서 할부로 전환하는 서비스입니다. 최초 무이자 행사와는 조건이 다를 수 있습니다.',
    tag: '전환 조건 확인',
  },
];

const giftCards = [
  {
    title: '컬쳐랜드',
    category: '온라인 문화상품권',
    description: '상품권의 정확한 종류와 충전·사용 방식, 판매처의 발송 및 취소 기준을 결제 전에 확인합니다.',
    checks: ['상품권 형태', '발송 방식', '취소 조건'],
  },
  {
    title: '모바일 문화상품권',
    category: '모바일 발송형',
    description: '수신 휴대전화 정보, 사용처, 유효기간과 주문 이후 변경 가능 여부를 구매 페이지에서 확인합니다.',
    checks: ['수신 정보', '사용처', '유효기간'],
  },
  {
    title: '백화점상품권',
    category: '지류·모바일 교환형',
    description: '신세계 등 상품권별 발송 또는 교환 형태가 다를 수 있어 실제 판매 페이지의 조건을 우선 확인합니다.',
    checks: ['수령 형태', '교환 방법', '판매 조건'],
  },
  {
    title: '기타 상품권',
    category: '상담 후 확인',
    description: '취급 여부를 먼저 상담하고, 안내받은 상품권명과 금액, 결제·발송 조건을 다시 확인합니다.',
    checks: ['취급 여부', '결제 조건', '안내 페이지'],
  },
];

const giftCardLinks = ['/cultureland/', '/contact/', '/department-store/', '/gift-cards/'];

const cardSources = [
  ['KB국민카드', 'https://m.kbcard.com/BON/DVIEW/MBEMCXHIABNC0005'],
  ['신한카드', 'https://www.shinhancard.com/pconts/html/benefit/info/CONFM50046/CONFM50046R01.html'],
  ['삼성카드', 'https://www.samsungcard.com/home/main/benefit/PGHPPCCMainBenefitViewInterestFreeStore001'],
  ['현대카드', 'https://www.hyundaicard.com/cpb/ev/CPBEV0101_06.hc?bnftWebEvntCd=XJO693'],
  ['하나카드', 'https://m.hanacard.co.kr/MKEVT1010M.web?EVN_SEQ=8699'],
  ['우리카드', 'https://pc.wooricard.com/dcpc/yh1/bnf/bnf02/prgevnt/H1BNF202S01.do?evntSrno=30005237'],
  ['NH농협카드', 'https://card.nonghyup.com/servlet/IpCb2002R.act?EVT_CRT_SQNO=5896'],
];

const processSteps = [
  ['채널톡 상담', '구매하려는 상품권, 카드사, 희망 금액과 할부 개월 수를 전달합니다.'],
  ['상품권 종류와 금액 확인', '상품권의 정확한 종류와 현재 안내 가능한 구매 조건을 확인합니다.'],
  ['본인 명의 정보 확인', '본인 명의 휴대전화와 신용카드 등 필요한 확인 절차를 안내받습니다.'],
  ['구매 쇼핑몰 안내', '확인된 조건에 따라 구매 페이지와 결제 전 주의사항을 안내받습니다.'],
  ['상품권 선택 및 할부결제', '상품명, 금액, 할부 개월 수와 최종 결제금액을 다시 확인합니다.'],
  ['발송 및 구매내역 확인', '판매 페이지에 표시된 발송 방식과 구매내역을 확인합니다.'],
];

const checklist = [
  '본인 명의 카드인지 확인',
  '카드 이용 가능 한도 확인',
  '실제 선택 가능한 할부 개월 수 확인',
  '할부수수료·무이자·부분무이자 적용 여부 확인',
  '카드 실적·포인트·마일리지 인정 여부 확인',
  '상품권 발송 형태와 수령 정보 확인',
  '취소·환불 가능 조건과 제한 시점 확인',
  '상품권 금액과 최종 결제금액 확인',
];

const faqs = [
  ['상품권을 신용카드로 구매할 수 있나요?', '상품권 종류, 판매처, 카드사, 가맹점 업종과 결제대행사 정책에 따라 달라집니다. 구매하려는 상품권과 카드사를 선택해 확인할 항목을 살펴본 뒤 상담해 주세요.'],
  ['상품권 할부구매는 몇 개월까지 가능한가요?', '공통으로 적용되는 고정 개월 수는 없습니다. 카드사 행사와 가맹점, 쇼핑몰 운영 조건에 따라 선택 가능한 기간이 달라지므로 결제 화면과 공식 안내를 확인해야 합니다.'],
  ['모든 카드가 할부 가능한가요?', '모든 카드에 동일한 할부 조건이 적용되지 않습니다. 개인카드, 법인카드, 체크카드 등 카드 종류와 상품권 결제 정책을 각각 확인해야 합니다.'],
  ['삼성카드도 할부가 가능한가요?', '삼성카드의 일반 할부 행사와 상품권 구매 적용 조건은 별개입니다. 안내받은 구매 쇼핑몰의 최신 운영 상태와 결제 화면에서 선택 가능한 조건을 상담으로 다시 확인해 주세요.'],
  ['무이자 할부가 적용되나요?', '카드사의 일반 무이자 행사가 상품권 구매에 자동 적용되는 것은 아닙니다. 대상 업종, 가맹점, 최소 결제금액, 제외 카드와 행사기간을 확인해야 합니다.'],
  ['카드 한도는 어떻게 확인하나요?', '카드사 앱, 홈페이지 또는 고객센터에서 이용 가능 한도를 확인할 수 있습니다. 상품권 관련 별도 제한이나 일시적인 승인 조건이 있는지도 카드사에 함께 문의해 주세요.'],
  ['본인 명의 카드만 가능한가요?', '한국상품권협회의 안내 절차는 본인 명의 휴대전화와 신용카드 확인을 전제로 구성합니다. 필요한 확인 범위는 상담 단계에서 안내받아야 합니다.'],
  ['할부수수료는 어떻게 계산되나요?', '일반적으로 남은 할부원금, 개인에게 적용되는 수수료율과 이용 기간을 기준으로 회차별 수수료가 산정됩니다. 실제 수수료율과 계산 방식은 카드사 안내를 우선 확인해야 합니다.'],
  ['상품권 구매도 카드 실적에 포함되나요?', '카드 상품과 실적 산정 기준에 따라 제외될 수 있습니다. 포인트·마일리지 적립 여부도 별도 조건이므로 해당 카드의 상품설명서와 카드사 공식 안내를 확인해 주세요.'],
  ['구매 후 취소할 수 있나요?', '취소 가능 여부는 상품권 발송, 사용 또는 등록 여부와 판매처 정책에 따라 달라질 수 있습니다. 결제 전에 취소 가능 시점과 처리 방식을 반드시 확인해야 합니다.'],
  ['상품권은 언제 받을 수 있나요?', '상품권 종류와 발송 방식, 본인확인 및 주문 처리 상태에 따라 달라질 수 있습니다. 고정 발송시간을 약속하지 않으며 해당 구매 페이지의 발송 기준을 확인해야 합니다.'],
  ['처음 이용하는 경우 어떤 확인이 필요한가요?', '상품권 종류와 금액, 카드사, 희망 할부기간, 본인 명의 휴대전화·카드 여부를 먼저 정리해 주세요. 카드번호, CVC, 비밀번호는 일반 문의 입력란에 남기지 않습니다.'],
];

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

export default function Home() {
  const quickFormRef = useRef<HTMLFormElement>(null);
  const [quickGift, setQuickGift] = useState('');
  const [quickCard, setQuickCard] = useState('');
  const [quickMonths, setQuickMonths] = useState('');
  const [quickError, setQuickError] = useState('');
  const [quickResult, setQuickResult] = useState(false);

  const [amount, setAmount] = useState('');
  const [months, setMonths] = useState('');
  const [feeMode, setFeeMode] = useState('principal');
  const [rate, setRate] = useState('');
  const [burdenRounds, setBurdenRounds] = useState('');
  const [calcError, setCalcError] = useState('');
  const [calcNotice, setCalcNotice] = useState('');
  const [calcResult, setCalcResult] = useState<CalculatorResult | null>(null);

  const submitQuickCheck = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!quickGift || !quickCard || !quickMonths) {
      setQuickError('상품권, 카드사, 희망 할부 개월 수를 모두 선택해 주세요.');
      setQuickResult(false);
      const invalidSelect = quickFormRef.current?.querySelector('select:invalid') as
        | { focus: () => void }
        | null
        | undefined;
      invalidSelect?.focus();
      return;
    }
    setQuickError('');
    setQuickResult(true);
  };

  const calculatePayment = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCalcError('');
    setCalcNotice('');

    const principalAmount = Number(amount.replaceAll(',', ''));
    const installmentMonths = Number(months);
    if (!Number.isSafeInteger(principalAmount) || principalAmount <= 0) {
      setCalcError('구매금액을 0보다 큰 원 단위 정수로 입력해 주세요.');
      setCalcResult(null);
      return;
    }
    if (!Number.isInteger(installmentMonths) || installmentMonths < 2) {
      setCalcError('희망 할부 개월 수를 선택해 주세요.');
      setCalcResult(null);
      return;
    }

    const rateNumber = Number(rate);
    const needsRate = feeMode !== 'principal';
    const hasRate = needsRate && Number.isFinite(rateNumber) && rateNumber > 0 && rateNumber <= 100;
    if (needsRate && rate && !hasRate) {
      setCalcError('연간 예상 수수료율은 0보다 크고 100 이하인 숫자로 입력해 주세요.');
      setCalcResult(null);
      return;
    }

    let burdenRoundSet = new Set<number>();
    if (feeMode === 'partial' && hasRate) {
      const parsed = burdenRounds.split(',').map((value) => Number(value.trim())).filter((value) => Number.isFinite(value));
      const unique = new Set(parsed);
      const invalid = parsed.length === 0 || unique.size !== parsed.length || parsed.some((value) => !Number.isInteger(value) || value < 1 || value > installmentMonths);
      if (invalid) {
        setCalcError(`고객 부담 회차를 1~${installmentMonths} 사이의 중복 없는 숫자로 입력해 주세요. 예: 1,2`);
        setCalcResult(null);
        return;
      }
      burdenRoundSet = unique;
    }

    if (needsRate && !hasRate) {
      setCalcNotice('수수료율을 입력하지 않아 원금 기준 결과만 계산했습니다. 실제 수수료율은 카드사에서 확인해 주세요.');
    } else {
      setCalcNotice('선택한 할부 기간의 실제 적용 가능 여부는 결제 화면과 상담에서 확인해 주세요.');
    }

    const basePrincipal = Math.floor(principalAmount / installmentMonths);
    let principalPaid = 0;
    const rows: CalculatorRow[] = [];
    for (let index = 1; index <= installmentMonths; index += 1) {
      const balance = principalAmount - principalPaid;
      const roundPrincipal = index === installmentMonths ? balance : basePrincipal;
      let fee: number | null = 0;
      if (hasRate) {
        if (feeMode === 'partial' && !burdenRoundSet.has(index)) {
          fee = null;
        } else {
          fee = Math.round(balance * (rateNumber / 100) / 12);
        }
      }
      rows.push({
        round: index,
        balance,
        principal: roundPrincipal,
        fee,
        payment: roundPrincipal + (fee ?? 0),
      });
      principalPaid += roundPrincipal;
    }
    const totalFee = rows.reduce((sum, row) => sum + (row.fee ?? 0), 0);
    setCalcResult({
      amount: principalAmount,
      months: installmentMonths,
      rows,
      totalFee,
      totalPayment: principalAmount + totalFee,
      hasRate,
    });
  };

  const resetCalculator = () => {
    setAmount('');
    setMonths('');
    setFeeMode('principal');
    setRate('');
    setBurdenRounds('');
    setCalcError('');
    setCalcNotice('');
    setCalcResult(null);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteHeader />
      <main id="main-content">
      <section className="hero" id="top">
        <div className="hero__media" aria-hidden="true" />
        <div className="site-shell hero__grid">
          <div className="hero__copy">
            <div className="eyebrow"><span className="eyebrow__dot" aria-hidden="true" />한국상품권협회 공식 상품권 이용 가이드</div>
            <h1>상품권 카드결제와 할부구매,<span>안전한 확인 절차로 진행합니다.</span></h1>
            <p className="hero__lead">카드별 이용 조건부터 상품권 종류, 본인확인, 결제 절차까지. 한국상품권협회가 확인 순서를 알기 쉽게 안내합니다.</p>
            <ul className="hero__certifications" aria-label="한국상품권협회 인증 안내">
              <li><span aria-hidden="true">✓</span>상품권 전문 법인 인증 기업</li>
              <li><span aria-hidden="true">✓</span>상품권의 기준 한국상품권협회</li>
            </ul>
            <div className="hero__actions">
              <Link className="button button--hero-outline button--hover-cyan" href="/gift-cards/">상품권별 이용 방법</Link>
              <Link className="button button--hero-light button--hover-pink" href="/checklist/">상황별 대처 방법</Link>
              <a className="button button--hero-outline button--hover-cyan" href={channelTalkUrl} target="_blank" rel="noopener noreferrer"><span className="chat-icon" aria-hidden="true" />상담 바로가기</a>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="사이트 안내 원칙">
        <div className="site-shell trust-strip__panel">
          <div className="trust-strip__heading"><strong>한국상품권협회 이용 안내</strong><span>확인된 정보와 공식 상담 경로를 기준으로 안내합니다.</span></div>
          <div className="trust-strip__grid">
          {[['01', '정보 중심 안내', '과장 없이 확인 순서를 설명합니다.'], ['02', '정책 변동 고지', '최종 조건은 결제 전에 재확인합니다.'], ['03', '상담 연결', '궁금한 조건은 1:1로 확인합니다.']].map(([number, title, copy]) => (
            <div key={number}><span className="trust-strip__number">{number}</span><p><strong>{title}</strong><span>{copy}</span></p></div>
          ))}
          </div>
        </div>
      </section>

      <section className="section section--quick" id="quick-check">
        <div className="site-shell purchase-shortcuts__grid" aria-label="상품권 할부 구매 상담">
          <a className="purchase-shortcut purchase-shortcut--cultureland" href={channelTalkUrl} target="_blank" rel="noopener noreferrer">
            <span className="purchase-shortcut__top">
              <Image src="/gift-cards/cultureland-cards.png" alt="컬쳐랜드 상품권" width={112} height={68} />
              <span className="purchase-shortcut__arrow" aria-hidden="true">↗</span>
            </span>
            <span className="purchase-shortcut__copy">
              <strong>컬쳐랜드 할부 구매</strong>
              <small>CULTURELAND Gift Card</small>
            </span>
          </a>
          <a className="purchase-shortcut purchase-shortcut--department" href={channelTalkUrl} target="_blank" rel="noopener noreferrer">
            <span className="purchase-shortcut__top">
              <Image src="/gift-cards/lotte-50k.png" alt="백화점 상품권" width={112} height={68} />
              <span className="purchase-shortcut__arrow" aria-hidden="true">↗</span>
            </span>
            <span className="purchase-shortcut__copy">
              <strong>백화점상품권 할부 구매</strong>
              <small>Department Store Gift Card</small>
            </span>
          </a>
        </div>
        <div className="site-shell quick-grid">
          <div className="section-heading section-heading--side">
            <span className="section-kicker">QUICK GUIDE</span>
            <h2>내가 먼저 확인할 항목을 찾아보세요</h2>
            <p>가능 여부를 확정하는 심사가 아니라, 상담 전에 확인할 내용을 정리하는 기능입니다. 카드번호나 개인정보는 입력하지 않습니다.</p>
          </div>
          <form ref={quickFormRef} className="quick-form" onSubmit={submitQuickCheck} noValidate>
            <div className="form-grid form-grid--three">
              <label className="field"><span>1. 어떤 상품권인가요?</span><select value={quickGift} onChange={(e) => { setQuickGift(e.target.value); setQuickResult(false); }} required aria-invalid={Boolean(quickError && !quickGift)}><option value="">상품권 선택</option><option>컬쳐랜드</option><option>모바일 문화상품권</option><option>백화점상품권</option><option>기타 상품권</option></select></label>
              <label className="field"><span>2. 어느 카드사인가요?</span><select value={quickCard} onChange={(e) => { setQuickCard(e.target.value); setQuickResult(false); }} required aria-invalid={Boolean(quickError && !quickCard)}><option value="">카드사 선택</option>{cardSources.map(([name]) => <option key={name}>{name}</option>)}<option>기타 카드사</option></select></label>
              <label className="field"><span>3. 희망 할부 개월은?</span><select value={quickMonths} onChange={(e) => { setQuickMonths(e.target.value); setQuickResult(false); }} required aria-invalid={Boolean(quickError && !quickMonths)}><option value="">희망 기간 선택</option><option value="2">2개월 희망</option><option value="3">3개월 희망</option><option value="6">6개월 희망</option><option value="12">12개월 희망</option><option value="other">기타 기간</option></select></label>
            </div>
            {quickError && <p className="form-error" role="alert">{quickError}</p>}
            <button className="button button--primary quick-submit" type="submit">관련 확인 항목 보기 <span aria-hidden="true">→</span></button>
            {quickResult && (
              <div className="quick-result" role="status" aria-live="polite">
                <div><span className="result-label">선택 내용</span><strong>{quickGift} · {quickCard} · {quickMonths === 'other' ? '기타 기간' : `${quickMonths}개월 희망`}</strong></div>
                <p>이 선택만으로 할부 가능 여부를 확정할 수 없습니다. 상품권 안내와 카드사 공식 정보, 실제 결제 화면을 함께 확인해 주세요.</p>
                <div className="result-actions"><Link href="/gift-cards/">상품권 확인사항</Link><Link href="/cards/">카드 안내 확인</Link><a href={channelTalkUrl} target="_blank" rel="noopener noreferrer">상담으로 최종 확인</a></div>
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="section" id="installment-guide">
        <div className="site-shell">
          <div className="section-heading section-heading--center"><span className="section-kicker">INSTALLMENT BASICS</span><h2>할부 방식은 같아 보여도 확인 조건이 다릅니다</h2><p>용어의 차이를 먼저 이해하면 결제 화면과 카드사 안내를 더 정확하게 비교할 수 있습니다.</p></div>
          <div className="payment-grid">
            {paymentTypes.map((item) => <article className="info-card payment-card" key={item.number}><div className="card-number">{item.number}</div><h3>{item.title}</h3><p>{item.description}</p><span className="card-tag">{item.tag}</span></article>)}
          </div>
          <aside className="example-box"><span className="example-box__label">부분무이자 예시</span><p><strong>‘6개월 부분무이자, 1~2회차 고객 부담’</strong>이라면 첫 두 회차 수수료는 고객이 부담하고 나머지 회차의 부담 조건은 카드사 공지를 따릅니다. 특정 카드사의 현재 혜택을 뜻하는 예시가 아닙니다.</p></aside>
          <div className="section-more"><Link href="/installment-guide/">할부 방식 전체 안내 보기 <span aria-hidden="true">→</span></Link></div>
          <figure className="installment-trust-banner">
            <Image
              src="/installment-trust-banner-sharp.png"
              alt="한국상품권협회 소액결제 상품권 구매 안내"
              width={2170}
              height={725}
            />
          </figure>
        </div>
      </section>

      <section className="section section--soft" id="gift-cards">
        <div className="site-shell">
          <div className="section-heading"><span className="section-kicker">GIFT CARD GUIDE</span><h2>상품권 종류별로 확인할 내용이 다릅니다</h2><p>판매 여부를 미리 단정하지 않고 실제 안내받은 구매 페이지의 상품명·발송·취소 조건을 기준으로 확인합니다.</p></div>
          <div className="gift-grid">
            {giftCards.map((card, index) => <article className="gift-card" key={card.title}><div className="gift-card__visual" aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span><div /><div /></div><span className="gift-card__category">{card.category}</span><h3>{card.title}</h3><p>{card.description}</p><ul>{card.checks.map((check) => <li key={check}><span aria-hidden="true">✓</span>{check}</li>)}</ul><Link href={giftCardLinks[index]}>상세 안내 보기 <span aria-hidden="true">→</span></Link></article>)}
          </div>
          <div className="section-more"><Link href="/gift-cards/">상품권별 전체 안내 보기 <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="section" id="card-policies">
        <div className="site-shell">
          <div className="section-heading"><span className="section-kicker">CARD POLICY</span><h2>카드사 일반 혜택과 상품권 적용 조건은 분리해서 확인하세요</h2><p>카드사의 일반 무이자·부분무이자 행사가 상품권 결제에 자동 적용되는 것은 아닙니다. 대상 업종, 가맹점, 결제대행사와 구매 쇼핑몰 정책을 함께 확인해야 합니다.</p></div>

          <div className="policy-tabs" aria-label="두 가지 확인 범위">
            <article className="policy-summary"><span className="policy-summary__number">A</span><div><h3>카드사 일반 혜택</h3><p>행사기간, 대상 카드, 최소금액, 업종, 제외 대상과 고객 부담 회차를 공식 페이지에서 확인합니다.</p></div></article>
            <article className="policy-summary policy-summary--accent"><span className="policy-summary__number">B</span><div><h3>상품권 결제 실제 조건</h3><p>상품권 종류, 안내받은 구매 쇼핑몰, 결제대행사와 결제 화면에서 최종 적용 여부를 확인합니다.</p></div></article>
          </div>

          <div className="table-card">
            <div className="table-card__head"><div><span className="section-kicker">OFFICIAL SOURCES</span><h3>카드사별 공식 안내 확인 경로</h3></div><span className="verification-badge">결제 전 재확인</span></div>
            <p className="table-scroll-guide">표를 좌우로 스크롤해 확인할 수 있습니다.</p>
            <div className="table-scroll" tabIndex={0} aria-label="카드사 공식 안내 표, 좌우 스크롤 가능">
              <table><caption className="sr-only">카드사별 공식 할부 안내 확인 링크</caption><thead><tr><th scope="col">카드사</th><th scope="col">확인할 항목</th><th scope="col">상품권 적용</th><th scope="col">공식 확인</th></tr></thead><tbody>{cardSources.map(([name, url]) => <tr key={name}><th scope="row">{name}</th><td>행사기간·개월·최소금액·제외 대상</td><td><span className="status status--check">별도 확인 필요</span></td><td><a href={url} target="_blank" rel="noopener noreferrer">공식 페이지 <span aria-hidden="true">↗</span></a></td></tr>)}</tbody></table>
            </div>
          </div>

          <div className="actual-policy">
            <div><span className="section-kicker">PURCHASE CHECK</span><h3>안내받은 구매 쇼핑몰에서는 다시 확인합니다</h3><p>현재 공개 페이지에는 검증되지 않은 카드별 가능 개월이나 수수료를 숫자로 게시하지 않습니다. 상담 후 실제 결제 화면에서 아래 항목을 확인하세요.</p></div>
            <dl><div><dt>할부 가능 여부</dt><dd>카드사·상품권·결제환경별 상담 후 확인</dd></div><div><dt>선택 가능 개월</dt><dd>실제 결제 화면에서 확인</dd></div><div><dt>무이자·부분무이자</dt><dd>일반 행사와 상품권 적용을 별도 확인</dd></div><div><dt>실적·포인트</dt><dd>카드 상품설명서와 공식 안내 확인</dd></div></dl>
            <a className="button button--primary" href={channelTalkUrl} target="_blank" rel="noopener noreferrer">내 카드 조건 상담하기</a>
          </div>
          <div className="section-more"><Link href="/cards/">카드별 할부 이용 안내 보기 <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="section section--calculator" id="calculator">
        <div className="site-shell calculator-grid">
          <div className="section-heading section-heading--side"><span className="section-kicker section-kicker--light">PAYMENT CALCULATOR</span><h2>월 예상 납부액을 원금 기준으로 계산해 보세요</h2><p>수수료를 반영하려면 카드사에서 확인한 개인 적용 예상 수수료율을 직접 입력해야 합니다. 임의 수수료율은 제공하지 않습니다.</p><ul className="calculator-points"><li><span aria-hidden="true">✓</span> 입력값은 저장하지 않습니다.</li><li><span aria-hidden="true">✓</span> 원 단위 나머지는 마지막 회차에 반영합니다.</li><li><span aria-hidden="true">✓</span> 실제 가능 개월은 별도 확인이 필요합니다.</li></ul></div>
          <div className="calculator-card">
            <form onSubmit={calculatePayment} noValidate>
              <div className="form-grid form-grid--two">
                <label className="field"><span>상품권 구매금액</span><div className="input-suffix"><input type="text" inputMode="numeric" autoComplete="off" value={amount} onChange={(e) => { const digits = e.target.value.replace(/\D/g, ''); setAmount(digits ? Number(digits).toLocaleString('ko-KR') : ''); }} placeholder="예: 1,000,000" aria-invalid={Boolean(calcError && !amount)} /><em>원</em></div></label>
                <label className="field"><span>희망 할부 개월 수</span><select value={months} onChange={(e) => setMonths(e.target.value)} aria-invalid={Boolean(calcError && !months)}><option value="">기간 선택</option><option value="2">2개월 희망</option><option value="3">3개월 희망</option><option value="6">6개월 희망</option><option value="12">12개월 희망</option><option value="24">24개월 희망</option></select></label>
              </div>
              <fieldset className="fee-options"><legend>할부수수료 반영 방식</legend><div><label><input type="radio" name="fee-mode" value="principal" checked={feeMode === 'principal'} onChange={(e) => setFeeMode(e.target.value)} /><span><strong>원금만</strong><small>수수료를 계산하지 않음</small></span></label><label><input type="radio" name="fee-mode" value="standard" checked={feeMode === 'standard'} onChange={(e) => setFeeMode(e.target.value)} /><span><strong>일반 할부</strong><small>확인한 수수료율 입력</small></span></label><label><input type="radio" name="fee-mode" value="partial" checked={feeMode === 'partial'} onChange={(e) => setFeeMode(e.target.value)} /><span><strong>부분무이자</strong><small>고객 부담 회차 입력</small></span></label></div></fieldset>
              {feeMode !== 'principal' && <div className="form-grid form-grid--two conditional-fields"><label className="field"><span>연간 예상 수수료율</span><div className="input-suffix"><input type="text" inputMode="decimal" value={rate} onChange={(e) => setRate(e.target.value.replace(/[^0-9.]/g, ''))} placeholder="카드사 확인값 직접 입력" /><em>%</em></div></label>{feeMode === 'partial' && <label className="field"><span>고객 부담 회차</span><input type="text" inputMode="numeric" value={burdenRounds} onChange={(e) => setBurdenRounds(e.target.value.replace(/[^0-9, ]/g, ''))} placeholder="예: 1,2" /><small className="field-help">쉼표로 구분해 입력하세요.</small></label>}</div>}
              {calcError && <p className="form-error" role="alert">{calcError}</p>}
              <div className="calculator-actions"><button className="button button--primary" type="submit">예상 금액 계산하기</button><button className="button button--ghost" type="button" onClick={resetCalculator}>초기화</button></div>
            </form>

            {calcResult && <div className="calculator-result" aria-live="polite"><div className="result-summary"><div><span>원금 기준 월 예상액</span><strong>{formatWon(Math.floor(calcResult.amount / calcResult.months))}</strong></div><div><span>예상 수수료 합계</span><strong>{calcResult.hasRate ? formatWon(calcResult.totalFee) : '미반영'}</strong></div><div className="result-summary__total"><span>예상 총 납부액</span><strong>{formatWon(calcResult.totalPayment)}</strong></div></div>{calcNotice && <p className="calc-notice">{calcNotice}</p>}<div className="table-scroll calculator-table" tabIndex={0} aria-label="회차별 예상 납부액 표, 좌우 스크롤 가능"><table><caption>회차별 원금·수수료 단순 예상</caption><thead><tr><th scope="col">회차</th><th scope="col">남은 원금</th><th scope="col">회차 원금</th><th scope="col">예상 수수료</th><th scope="col">예상 납부액</th></tr></thead><tbody>{calcResult.rows.map((row) => <tr key={row.round}><th scope="row">{row.round}회차</th><td>{formatWon(row.balance)}</td><td>{formatWon(row.principal)}</td><td>{row.fee === null ? '카드사 부담 조건 확인' : formatWon(row.fee)}</td><td><strong>{formatWon(row.payment)}</strong></td></tr>)}</tbody></table></div><p className="result-disclaimer">계산 결과는 입력값을 이용한 단순 예상치입니다. 실제 수수료율, 청구일수, 원 단위 처리 방식과 최종 청구금액은 카드사 정책 및 개인별 적용 조건에 따라 달라질 수 있습니다.</p><a className="button button--primary result-consult" href={channelTalkUrl} target="_blank" rel="noopener noreferrer">이 결과를 기준으로 상담하기</a></div>}
          </div>
          <div className="section-more section-more--light"><Link href="/calculator/">계산기 전용 페이지 열기 <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="section" id="process">
        <div className="site-shell">
          <div className="section-heading section-heading--center"><span className="section-kicker">PROCESS</span><h2>상담부터 상품권 구매내역 확인까지</h2><p>조건을 먼저 확인하고 안내받은 구매 페이지에서 결제 내용을 다시 확인하는 순서입니다.</p></div>
          <ol className="process-list">{processSteps.map(([title, copy], index) => <li key={title}><span className="process-list__number">{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{copy}</p></div>{index < processSteps.length - 1 && <span className="process-list__line" aria-hidden="true" />}</li>)}</ol>
          <div className="section-more"><Link href="/process/">6단계 진행 절차 자세히 보기 <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="section section--soft" id="checklist">
        <div className="site-shell checklist-grid">
          <div className="checklist-intro"><span className="section-kicker">FINAL CHECK</span><h2>결제 버튼을 누르기 전<br />8가지를 확인하세요</h2><p>카드사 정책과 가맹점·쇼핑몰 정책은 서로 다를 수 있습니다. 하나의 안내만 보고 결제하지 말고 양쪽 조건을 함께 확인해 주세요.</p><a className="button button--secondary" href={channelTalkUrl} target="_blank" rel="noopener noreferrer">확인할 내용 상담하기</a></div>
          <ul className="checklist-card">{checklist.map((item, index) => <li key={item}><span className="check-box" aria-hidden="true">✓</span><div><small>{String(index + 1).padStart(2, '0')}</small><strong>{item}</strong></div></li>)}</ul>
        </div>
        <div className="site-shell section-more"><Link href="/checklist/">결제 전 체크리스트 전용 페이지 <span aria-hidden="true">→</span></Link></div>
      </section>

      <section className="section association-section">
        <div className="site-shell">
          <div className="section-heading section-heading--center"><span className="section-kicker">OUR PRINCIPLES</span><h2>확인 기준과 진행 절차를 명확하게 안내합니다</h2><p>공식 기관 또는 카드사를 대신하지 않으며, 결제 전 확인 순서와 상담 경로를 제공합니다.</p></div>
          <div className="principle-grid">{[['구매 관련 상담', '구매하려는 상품권과 결제 조건을 확인할 수 있도록 상담 경로를 제공합니다.'], ['본인확인 안내', '본인 명의 휴대전화와 카드 등 필요한 확인 절차를 안내합니다.'], ['조건별 절차 안내', '카드사 일반 혜택과 실제 상품권 적용 조건을 구분해 설명합니다.'], ['채널톡 1:1 상담', '결제 전에 확인할 내용을 채널톡으로 문의할 수 있습니다.']].map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="section section--faq" id="faq">
        <div className="site-shell faq-grid">
          <div className="section-heading section-heading--side faq-heading"><span className="section-kicker">FAQ</span><h2>자주 묻는 질문</h2><p>상품권 카드결제와 할부구매 전에 많이 확인하는 내용을 모았습니다. 실제 조건은 결제 시점에 다시 확인해야 합니다.</p><a className="text-link" href={channelTalkUrl} target="_blank" rel="noopener noreferrer">해결되지 않은 질문 상담하기 <span aria-hidden="true">→</span></a></div>
          <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span className="faq-number">{String(index + 1).padStart(2, '0')}</span><strong>{question}</strong><span className="faq-toggle" aria-hidden="true" /></summary><div className="faq-answer"><p>{answer}</p></div></details>)}</div>
        </div>
        <div className="site-shell section-more"><Link href="/faq/">FAQ 전체 페이지 보기 <span aria-hidden="true">→</span></Link></div>
      </section>

      <section className="policy-notice" id="policy">
        <div className="site-shell policy-notice__inner"><span className="notice-icon notice-icon--light" aria-hidden="true">i</span><div><h2>카드 및 결제 정책 변동 안내</h2><p>카드사별 할부 가능 여부, 할부수수료, 무이자·부분무이자 혜택, 포인트·카드 실적 인정 조건은 카드사, 가맹점, 결제대행사, 쇼핑몰 정책과 행사기간에 따라 달라질 수 있습니다. 결제 전 카드사 공식 홈페이지와 한국상품권협회 상담을 통해 최신 조건을 확인해 주세요.</p></div></div>
      </section>

      <InstallmentPromo />

      <section className="final-cta" id="contact">
        <div className="final-cta__glow" aria-hidden="true" />
        <div className="site-shell final-cta__inner"><span className="section-kicker section-kicker--light">CHECK BEFORE PAYMENT</span><h2>내 카드로 상품권 할부구매가 가능한지<br />먼저 확인해 보세요</h2><p>상품권 종류와 카드사, 희망 금액·기간을 정리해 상담하면 확인이 더 빠릅니다. 카드번호, CVC, 비밀번호는 남기지 마세요.</p><div className="final-cta__actions"><a className="button button--light button--large" href={channelTalkUrl} target="_blank" rel="noopener noreferrer">채널톡 1:1 상담 <span aria-hidden="true">→</span></a><a className="button button--outline-light button--large" href="tel:18002434">1800-2434 전화하기</a><a className="button button--outline-light button--large" href={plusYouUrl} target="_blank" rel="noopener noreferrer">플러스유 구매 페이지</a></div></div>
      </section>
      </main>
      <SiteFooter />
    </>
  );
}
