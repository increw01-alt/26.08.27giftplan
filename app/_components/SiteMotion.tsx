'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const titleSelector = [
  '.section-heading',
  '.guide-section-heading',
  '.guide-content__page-title',
  '.guide-shared-cards__title',
  '.checklist-intro',
  '.faq-heading',
  '.trust-strip__heading',
  '.installment-promo__copy',
  '.final-cta__inner > .section-kicker',
  '.final-cta__inner > h2',
  '.final-cta__inner > p',
].join(',');

const cardSelector = [
  '.trust-strip__grid > div',
  '.purchase-shortcut',
  '.quick-form',
  '.payment-card',
  '.gift-card',
  '.policy-summary',
  '.table-card',
  '.actual-policy',
  '.calculator-card',
  '.example-box',
  '.installment-trust-banner',
  '.process-list > li',
  '.checklist-card > li',
  '.principle-grid > article',
  '.faq-list > details',
  '.guide-content-card',
  '.guide-shared-card',
  '.guide-shared-banner',
  '.guide-directory > article',
  '.related-guides__grid > a',
  '.contact-channel-grid > a',
  '.subpage-keypoints > li',
  '.policy-notice__inner',
  '.installment-promo__nav > a',
  '.installment-promo__card',
  '.final-cta__actions > a',
  '.footer-grid > div',
].join(',');

const motionSelector = `${titleSelector},${cardSelector}`;
const hoverSelector = [
  '.trust-strip__grid > div',
  '.purchase-shortcut',
  '.payment-card',
  '.gift-card',
  '.policy-summary',
  '.process-list > li',
  '.checklist-card > li',
  '.principle-grid > article',
  '.faq-list > details',
  '.guide-content-card',
  '.guide-shared-card',
  '.guide-shared-banner',
  '.guide-directory > article',
  '.related-guides__grid > a',
  '.contact-channel-grid > a',
  '.subpage-keypoints > li',
  '.installment-promo__nav > a',
  '.installment-promo__card',
].join(',');

export default function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(motionSelector));

    root.classList.add('motion-ready');
    elements.forEach((element) => {
      const isTitle = element.matches(titleSelector);
      const siblings = element.parentElement
        ? Array.from(element.parentElement.children).filter((sibling) => sibling.matches(cardSelector))
        : [];
      const siblingIndex = Math.max(0, siblings.indexOf(element));

      element.classList.add('motion-element', isTitle ? 'motion-title' : 'motion-card');
      if (!isTitle && element.matches(hoverSelector)) element.classList.add('motion-hover');
      element.style.setProperty('--motion-delay', `${Math.min(siblingIndex, 5) * 65}ms`);
    });

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible', 'motion-settled'));
      return () => root.classList.remove('motion-ready');
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.addEventListener('transitionend', () => target.classList.add('motion-settled'), { once: true });
          target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      root.classList.remove('motion-ready');
    };
  }, [pathname]);

  return null;
}
