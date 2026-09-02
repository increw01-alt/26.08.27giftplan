import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';

type GiftCardItem = {
  title: string;
  src: string;
  href: string;
  x: string;
  y: string;
  width: string;
  rotate: string;
  depth: string;
};

const cards: GiftCardItem[] = [
  { title: '컬처랜드', src: '/gift-cards/cultureland-logo.png', href: '/cultureland/', x: '14%', y: '36%', width: '14%', rotate: '-8deg', depth: '6' },
  { title: '도서문화상품권', src: '/gift-cards/book-culture-voucher.png', href: '/gift-cards/', x: '29%', y: '31%', width: '16%', rotate: '-4deg', depth: '7' },
  { title: '에그머니', src: '/gift-cards/eggmoney.png', href: '/gift-cards/', x: '44%', y: '28%', width: '14%', rotate: '-1deg', depth: '8' },
  { title: 'Google Play', src: '/gift-cards/google-play.png', href: '/gift-cards/', x: '58%', y: '28%', width: '14%', rotate: '1deg', depth: '8' },
  { title: '문화상품권', src: '/gift-cards/culture-voucher.png', href: '/cultureland/', x: '72%', y: '31%', width: '14%', rotate: '4deg', depth: '7' },
  { title: '넥슨', src: '/gift-cards/nexon.png', href: '/gift-cards/', x: '86%', y: '36%', width: '14%', rotate: '8deg', depth: '6' },
  { title: '스마일캐시', src: '/gift-cards/smilecash.png', href: '/gift-cards/', x: '7%', y: '54%', width: '16%', rotate: '-10deg', depth: '9' },
  { title: '틴캐시', src: '/gift-cards/tincash.png', href: '/gift-cards/', x: '22%', y: '50%', width: '14%', rotate: '-6deg', depth: '10' },
  { title: '신세계 10만원권', src: '/gift-cards/shinsegae-100k.png', href: '/department-store/', x: '38%', y: '49%', width: '20%', rotate: '-2deg', depth: '12' },
  { title: '신세계 5만원권', src: '/gift-cards/shinsegae-50k.png', href: '/department-store/', x: '57%', y: '48%', width: '18%', rotate: '2deg', depth: '12' },
  { title: '플러스유 모바일 상품권', src: '/gift-cards/plusu.png', href: '/gift-cards/', x: '73%', y: '50%', width: '15%', rotate: '6deg', depth: '10' },
  { title: '한국상품권협회', src: '/gift-cards/association.png', href: '/about/', x: '88%', y: '55%', width: '16%', rotate: '10deg', depth: '9' },
  { title: '틴캐시 로고', src: '/gift-cards/tincash-alt.png', href: '/gift-cards/', x: '13%', y: '73%', width: '14%', rotate: '-7deg', depth: '14' },
  { title: '신세계 상품권', src: '/gift-cards/shinsegae-building.png', href: '/department-store/', x: '30%', y: '69%', width: '15%', rotate: '-3deg', depth: '15' },
  { title: '롯데 상품권', src: '/gift-cards/lotte-50k.png', href: '/department-store/', x: '46%', y: '71%', width: '17%', rotate: '0deg', depth: '16' },
  { title: '컬처랜드 카드', src: '/gift-cards/cultureland-cards.png', href: '/cultureland/', x: '64%', y: '69%', width: '17%', rotate: '3deg', depth: '15' },
  { title: '현대 상품권', src: '/gift-cards/hyundai-vouchers.png', href: '/department-store/', x: '82%', y: '73%', width: '17%', rotate: '7deg', depth: '14' },
];

type CardStyle = CSSProperties & {
  '--card-x': string;
  '--card-y': string;
  '--card-width': string;
  '--card-rotate': string;
  '--card-depth': string;
};

export default function InteractiveGiftCardWall() {
  return (
    <div className="gift-wall" aria-label="상품권 종류별 안내 바로가기">
      <div className="gift-wall__globe" aria-hidden="true" />
      <div className="gift-wall__halo" aria-hidden="true" />
      <p className="gift-wall__hint"><span aria-hidden="true">↗</span> 카드에 마우스를 올려보세요</p>
      <div className="gift-wall__stage">
        {cards.map((card) => {
          const style: CardStyle = {
            '--card-x': card.x,
            '--card-y': card.y,
            '--card-width': card.width,
            '--card-rotate': card.rotate,
            '--card-depth': card.depth,
          };

          return (
            <Link
              className="gift-wall__card"
              href={card.href}
              key={`${card.title}-${card.src}`}
              style={style}
              aria-label={`${card.title} 안내 보기`}
            >
              <span className="gift-wall__image">
                <Image src={card.src} alt="" fill sizes="(max-width: 760px) 24vw, 12vw" />
              </span>
              <span className="gift-wall__label">{card.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
