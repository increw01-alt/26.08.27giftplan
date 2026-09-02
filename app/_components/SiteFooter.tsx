import Link from 'next/link';
import { associationUrl, brandName, channelTalkUrl } from '../_data/guide-content';

export default function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <div className="site-shell footer-grid">
          <div>
            <Link className="brand brand--footer" href="/">
              <span className="brand__mark" aria-hidden="true">할</span>
              <span><strong>{brandName}</strong><small>한국상품권협회 안내</small></span>
            </Link>
            <p>상품권 카드결제와 할부구매 전에 확인할 정보와 상담 경로를 안내합니다.</p>
          </div>
          <div>
            <h2>이용 안내</h2>
            <Link href="/installment-guide/">할부 방식 안내</Link>
            <Link href="/cards/">카드별 확인 경로</Link>
            <Link href="/gift-cards/">상품권별 안내</Link>
            <Link href="/calculator/">예상 납부액 계산기</Link>
            <Link href="/faq/">자주 묻는 질문</Link>
          </div>
          <div>
            <h2>운영 안내</h2>
            <Link href="/notices/">정책 변경 안내</Link>
            <Link href="/about/">한국상품권협회 안내</Link>
            <Link href="/contact/">상담 문의</Link>
            <a href={associationUrl} target="_blank" rel="noopener noreferrer">협회 공식 사이트</a>
            <a href={channelTalkUrl} target="_blank" rel="noopener noreferrer">채널톡 상담</a>
            <a href="tel:18002434">대표번호 1800-2434</a>
          </div>
        </div>
        <div className="site-shell footer-bottom">
          <p>© 2026 한국상품권협회. {brandName}.</p>
          <p>본 사이트는 카드사 또는 금융기관의 공식 사이트가 아닙니다.</p>
        </div>
      </footer>
      <a
        className="channel-floating-button"
        href={channelTalkUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="채널톡 상담 열기"
      >
        <span className="channel-floating-button__label" aria-hidden="true">채널톡 상담</span>
        <span className="channel-floating-button__icon" aria-hidden="true">
          <span />
          <span />
        </span>
      </a>
      <div className="mobile-bottom-cta" aria-label="모바일 상담 바로가기">
        <a href="tel:18002434">전화하기</a>
        <a href={channelTalkUrl} target="_blank" rel="noopener noreferrer">채널톡 상담</a>
      </div>
    </>
  );
}
