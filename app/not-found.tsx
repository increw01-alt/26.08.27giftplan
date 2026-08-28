import Link from 'next/link';
import SiteFooter from './_components/SiteFooter';
import SiteHeader from './_components/SiteHeader';

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="not-found-page">
        <div className="site-shell">
          <span className="section-kicker">404 NOT FOUND</span>
          <h1>요청한 안내 페이지를 찾을 수 없습니다</h1>
          <p>주소가 변경되었거나 잘못 입력되었을 수 있습니다. 메인 또는 주요 안내 페이지에서 다시 확인해 주세요.</p>
          <div className="not-found-page__actions">
            <Link className="button button--primary button--large" href="/">메인으로 이동</Link>
            <Link className="button button--secondary button--large" href="/cards/">카드별 안내</Link>
            <Link className="button button--secondary button--large" href="/contact/">상담 문의</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
