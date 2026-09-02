'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { channelTalkUrl, navItems } from '../_data/guide-content';

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  const isActive = (href: string) => pathname === href || pathname === href.slice(0, -1);

  return (
    <>
      <a className="skip-link" href="#main-content">본문 바로가기</a>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="site-shell site-header__inner">
          <Link className="brand" href="/" aria-label="한국상품권협회 홈" onClick={() => setMenuOpen(false)}>
            <Image className="brand__logo brand__logo--dark" src="/header-logo-default-transparent.png" alt="한국상품권협회" width={2158} height={729} priority unoptimized />
            <Image className="brand__logo brand__logo--light" src="/header-logo-color-transparent.png" alt="" width={2135} height={736} priority unoptimized />
          </Link>
          <nav className="desktop-nav" aria-label="주요 메뉴">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? 'page' : undefined} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <a className="button button--primary button--header desktop-consult" href={channelTalkUrl} target="_blank" rel="noopener noreferrer">
            <span className="chat-icon chat-icon--header" aria-hidden="true" />채널톡 상담
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
            <a className="button button--primary" href={channelTalkUrl} target="_blank" rel="noopener noreferrer"><span className="chat-icon chat-icon--header" aria-hidden="true" />채널톡 상담</a>
          </div>
        </nav>
      </header>
    </>
  );
}
