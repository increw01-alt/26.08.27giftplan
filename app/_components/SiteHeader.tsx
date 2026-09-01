'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { brandName, channelTalkUrl, navItems } from '../_data/guide-content';

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 1040) setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href || pathname === href.slice(0, -1);

  return (
    <>
      <a className="skip-link" href="#main-content">본문 바로가기</a>
      <div className="policy-bar">
        <div className="site-shell policy-bar__inner">
          <span className="policy-bar__label">결제 전 확인</span>
          <p>카드사·가맹점·쇼핑몰 정책에 따라 실제 할부 조건이 달라질 수 있습니다.</p>
          <Link href="/checklist/">확인사항 보기</Link>
        </div>
      </div>
      <header className="site-header">
        <div className="site-shell site-header__inner">
          <Link className="brand" href="/" aria-label={`${brandName} 홈`} onClick={() => setMenuOpen(false)}>
            <span className="brand__mark" aria-hidden="true">할</span>
            <span><strong>{brandName}</strong><small>한국상품권협회 안내</small></span>
          </Link>
          <nav className="desktop-nav" aria-label="주요 메뉴">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? 'page' : undefined} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <a className="button button--primary button--header desktop-consult" href={channelTalkUrl} target="_blank" rel="noopener noreferrer">
            1:1 상담하기 <span aria-hidden="true">→</span>
          </a>
          <button
            ref={menuButtonRef}
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span /><span /><span />
          </button>
        </div>
        <nav id="mobile-menu" className={`mobile-menu${menuOpen ? ' is-open' : ''}`} aria-label="모바일 메뉴" hidden={!menuOpen}>
          <div className="site-shell">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? 'page' : undefined} onClick={() => setMenuOpen(false)}>
                {item.label}<span aria-hidden="true">→</span>
              </Link>
            ))}
            <a className="button button--primary" href={channelTalkUrl} target="_blank" rel="noopener noreferrer">1:1 상담하기</a>
          </div>
        </nav>
      </header>
    </>
  );
}
