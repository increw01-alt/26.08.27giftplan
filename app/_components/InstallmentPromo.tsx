import Image from 'next/image';
import Link from 'next/link';
import { channelTalkUrl } from '../_data/guide-content';

export default function InstallmentPromo() {
  return (
    <section className="installment-promo" aria-labelledby="installment-promo-title">
      <div className="site-shell installment-promo__inner">
        <div className="installment-promo__copy">
          <h2 id="installment-promo-title">상품권 할부 / 추가 구매</h2>
          <p>상품권 할부 및 추가 구매를 원하시면 채널톡으로 문의해 주세요.</p>
          <nav className="installment-promo__nav" aria-label="상품권 할부 구매 바로가기">
            <Link href="/cultureland/">컬쳐랜드 할부 구매</Link>
            <Link href="/department-store/">백화점 상품권 할부 구매</Link>
            <a href="https://gift-go.co.kr/" target="_blank" rel="noopener noreferrer">컬쳐랜드 원패스 안내</a>
            <a href={channelTalkUrl} target="_blank" rel="noopener noreferrer">채널톡 바로 상담</a>
            <a className="installment-promo__phone" href="tel:18002434">1800-2434</a>
          </nav>
        </div>
        <div className="installment-promo__cards">
          <a className="installment-promo__card" href={channelTalkUrl} target="_blank" rel="noopener noreferrer">
            <Image src="/installment-promo/culture-card.png" alt="컬쳐랜드 상품권" width={92} height={62} />
            <span className="installment-promo__arrow" aria-hidden="true">↗</span>
            <span><strong>컬쳐랜드 할부 구매</strong><small>CULTURELAND Gift Card</small></span>
          </a>
          <a className="installment-promo__card" href={channelTalkUrl} target="_blank" rel="noopener noreferrer">
            <Image src="/installment-promo/department-voucher.png" alt="백화점 상품권" width={92} height={62} />
            <span className="installment-promo__arrow" aria-hidden="true">↗</span>
            <span><strong>백화점상품권 할부 구매</strong><small>Department Store Gift Card</small></span>
          </a>
        </div>
      </div>
    </section>
  );
}
