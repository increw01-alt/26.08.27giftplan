import Image from 'next/image';
import { channelTalkUrl } from '../_data/guide-content';

export default function GuideSharedCards() {
  return (
    <section className="site-shell guide-shared-cards" aria-labelledby="guide-shared-cards-title">
      <h2 id="guide-shared-cards-title" className="guide-shared-cards__title">
        컬쳐랜드 할부 구매, <span>정확하고 안전한</span>
        <br />
        한국상품권협회에서 <span>이용하세요.</span>
      </h2>
      <div className="guide-shared-cards__grid">
        <article className="guide-shared-card">
          <Image
            src="/guide-shared/giftcard-association.png"
            alt="한국상품권협회 상품권 서비스 안내"
            width={352}
            height={251}
            sizes="(max-width: 760px) calc(100vw - 28px), 352px"
          />
          <div className="guide-shared-card__copy">
            <h3>상품권 전문 업체 한국상품권협회</h3>
            <p>한국상품권협회는 수년간의 경험으로 믿을 수 있는 상품권 서비스를 제공합니다.</p>
          </div>
        </article>
        <article className="guide-shared-card">
          <Image
            src="/guide-shared/safe-service.png"
            alt="안전하고 신뢰할 수 있는 상품권 서비스 안내"
            width={352}
            height={251}
            sizes="(max-width: 760px) calc(100vw - 28px), 352px"
          />
          <div className="guide-shared-card__copy">
            <h3>안전하고 신뢰할 수 있는 서비스 제공</h3>
            <p>모든 거래는 안전하게 이루어지며, 고객의 편리한 상품권 이용을 보장합니다.</p>
          </div>
        </article>
        <a
          className="guide-shared-card guide-shared-card--consult"
          href={channelTalkUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="한국상품권협회 채널톡 실시간 상담 열기"
        >
          <Image
            src="/guide-shared/channel-talk.png"
            alt="언제든 실시간 상담 가능, 한국상품권협회 채널톡으로 지금 바로 상담해 보세요"
            width={352}
            height={251}
            sizes="(max-width: 760px) calc(100vw - 28px), 352px"
          />
        </a>
      </div>
      <a
        className="guide-shared-banner"
        href={channelTalkUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="채널톡 상담 바로가기"
      >
        <span className="guide-shared-banner__main">
          <span className="guide-shared-banner__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img">
              <path d="M12 4.25c-4.13 0-7.5 2.94-7.5 6.57 0 2.2 1.26 4.16 3.22 5.35l-.56 3.12 3.12-1.96c.56.06 1.13.1 1.72.1 4.13 0 7.5-2.95 7.5-6.61S16.13 4.25 12 4.25Z" />
            </svg>
          </span>
          <span className="guide-shared-banner__copy">
            <small>문의사항은</small>
            <strong>채널톡으로 바로 문의!</strong>
          </span>
        </span>
        <span className="guide-shared-banner__action">채널톡 상담 바로가기 <span aria-hidden="true">↗</span></span>
      </a>
    </section>
  );
}
