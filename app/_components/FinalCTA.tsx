import Link from 'next/link';
import { channelTalkUrl, plusYouUrl } from '../_data/guide-content';

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta__glow" aria-hidden="true" />
      <div className="site-shell final-cta__inner">
        <span className="section-kicker section-kicker--light">CHECK BEFORE PAYMENT</span>
        <h2>내 카드와 상품권 조건을<br />결제 전에 확인해 보세요</h2>
        <p>상품권 종류와 카드사, 희망 금액·기간을 정리하면 확인이 더 빠릅니다. 카드번호, CVC, 비밀번호는 남기지 마세요.</p>
        <div className="final-cta__actions">
          <a className="button button--light button--large" href={channelTalkUrl} target="_blank" rel="noopener noreferrer">채널톡 1:1 상담 <span aria-hidden="true">→</span></a>
          <a className="button button--outline-light button--large" href="tel:18002434">1800-2434 전화하기</a>
          <a className="button button--outline-light button--large" href={plusYouUrl} target="_blank" rel="noopener noreferrer">플러스유 구매 페이지</a>
        </div>
        <Link className="final-cta__safe-link" href="/contact/">상담 준비사항과 민감정보 안내 보기</Link>
      </div>
    </section>
  );
}
