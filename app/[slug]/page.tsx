import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../_components/Breadcrumbs';
import FinalCTA from '../_components/FinalCTA';
import GuideSharedCards from '../_components/GuideSharedCards';
import InstallmentPromo from '../_components/InstallmentPromo';
import InstallmentCalculator from '../_components/InstallmentCalculator';
import SiteFooter from '../_components/SiteFooter';
import SiteHeader from '../_components/SiteHeader';
import {
  brandName,
  cardSources,
  channelTalkUrl,
  faqs,
  guidePageMap,
  guidePages,
  paymentChecklist,
  processSteps,
  siteUrl,
} from '../_data/guide-content';

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return guidePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = guidePageMap.get(slug);
  if (!page) return {};
  const path = `/${page.slug}/`;
  return {
    title: page.metaTitle,
    description: page.description,
    alternates: { canonical: path },
    openGraph: {
      title: `${page.metaTitle} | ${brandName}`,
      description: page.description,
      type: 'article',
      locale: 'ko_KR',
      url: path,
      images: [{ url: '/og.png', width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${page.metaTitle} | ${brandName}`,
      description: page.description,
      images: ['/og.png'],
    },
  };
}

function CardsTable() {
  return (
    <section className="guide-special guide-special--soft" aria-labelledby="official-card-sources">
      <div className="site-shell">
        <div className="guide-section-heading">
          <span className="section-kicker">OFFICIAL SOURCES</span>
          <h2 id="official-card-sources">카드사 공식 안내에서 확인할 항목</h2>
          <p>아래 링크는 일반 행사 확인 경로입니다. 상품권 구매 적용 여부는 판매처 조건과 결제 화면에서 별도로 확인하세요.</p>
        </div>
        <div className="table-card">
          <div className="table-scroll" tabIndex={0} aria-label="카드사 공식 안내 표, 좌우 스크롤 가능">
            <table>
              <caption>카드사별 공식 할부 안내 확인 경로</caption>
              <thead><tr><th scope="col">카드사</th><th scope="col">확인할 내용</th><th scope="col">상품권 적용</th><th scope="col">공식 출처</th></tr></thead>
              <tbody>{cardSources.map(([name, url]) => <tr key={name}><th scope="row">{name}</th><td>행사기간·개월·최소금액·제외 대상</td><td><span className="status status--check">별도 확인 필요</span></td><td><a href={url} target="_blank" rel="noopener noreferrer">공식 페이지 <span aria-hidden="true">↗</span></a></td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessTimeline() {
  return (
    <section className="guide-special guide-special--soft" aria-labelledby="process-timeline-title">
      <div className="site-shell">
        <div className="guide-section-heading"><span className="section-kicker">6 STEPS</span><h2 id="process-timeline-title">상담부터 발송 확인까지</h2><p>각 단계에서 확인한 내용이 다음 단계의 기준이 됩니다.</p></div>
        <ol className="process-list">{processSteps.map(([title, description], index) => <li key={title}><span className="process-list__number">{String(index + 1).padStart(2, '0')}</span><span className="process-list__line" aria-hidden="true" /><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>
      </div>
    </section>
  );
}

function ChecklistPanel() {
  return (
    <section className="guide-special guide-special--soft" aria-labelledby="checklist-panel-title">
      <div className="site-shell">
        <div className="guide-section-heading"><span className="section-kicker">8 POINT CHECK</span><h2 id="checklist-panel-title">결제 직전 체크리스트</h2><p>한 항목이라도 확인되지 않았다면 결제 전에 공식 안내나 상담으로 다시 확인하세요.</p></div>
        <ol className="checklist-card checklist-card--page">{paymentChecklist.map((item, index) => <li key={item}><span className="check-box" aria-hidden="true">✓</span><span><small>CHECK {String(index + 1).padStart(2, '0')}</small><strong>{item}</strong></span></li>)}</ol>
      </div>
    </section>
  );
}

function FaqPanel() {
  return (
    <section className="guide-special guide-special--soft" aria-labelledby="faq-panel-title">
      <div className="site-shell guide-faq-layout">
        <div className="guide-section-heading"><span className="section-kicker">12 QUESTIONS</span><h2 id="faq-panel-title">많이 확인하는 질문</h2><p>답변 안의 확인 원칙을 실제 상품권·카드·판매처 조건에 적용해 주세요.</p></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span className="faq-number">Q{String(index + 1).padStart(2, '0')}</span><strong>{question}</strong><span className="faq-toggle" aria-hidden="true" /></summary><div className="faq-answer"><p>{answer}</p></div></details>)}</div>
      </div>
    </section>
  );
}

function GiftCardDirectory() {
  const cards = [
    { title: '컬쳐랜드', category: '온라인 문화상품권', href: '/cultureland/', description: '상품 형태, 카드 조건, 본인확인과 발송·취소 기준을 확인합니다.' },
    { title: '모바일 문화상품권', category: '모바일 발송형', href: '/contact/', description: '수신 정보, 사용처, 유효기간과 취급 여부를 상담으로 확인합니다.' },
    { title: '백화점상품권', category: '지류·모바일 교환형', href: '/department-store/', description: '브랜드·권종, 수령·교환 형태와 취소 기준을 확인합니다.' },
  ];
  return (
    <section className="guide-special guide-special--soft" aria-labelledby="gift-directory-title">
      <div className="site-shell">
        <div className="guide-section-heading"><span className="section-kicker">DIRECTORY</span><h2 id="gift-directory-title">상품권 유형별 전용 안내</h2><p>정확한 상품명을 확인한 뒤 해당 안내 페이지로 이동하세요.</p></div>
        <div className="guide-directory">{cards.map((card, index) => <article key={card.title}><span className="guide-directory__number">{String(index + 1).padStart(2, '0')}</span><small>{card.category}</small><h3>{card.title}</h3><p>{card.description}</p><Link href={card.href}>전용 안내 보기 <span aria-hidden="true">→</span></Link></article>)}</div>
      </div>
    </section>
  );
}

function ContactChannels() {
  return (
    <section className="guide-special guide-special--soft" aria-labelledby="contact-channels-title">
      <div className="site-shell">
        <div className="guide-section-heading"><span className="section-kicker">CONTACT CHANNELS</span><h2 id="contact-channels-title">상담 채널 선택</h2><p>상담은 확인 경로를 안내하기 위한 절차이며 승인이나 혜택 적용을 보장하지 않습니다.</p></div>
        <div className="contact-channel-grid">
          <a href={channelTalkUrl} target="_blank" rel="noopener noreferrer"><span>권장</span><h3>채널톡 1:1 상담</h3><p>상품권 종류, 카드사, 희망 금액과 기간을 정리해 문의합니다.</p><strong>상담 시작하기 →</strong></a>
          <a href="tel:18002434"><span>전화</span><h3>1800-2434</h3><p>전화 상담이 편한 경우 준비한 기본 정보를 기준으로 문의합니다.</p><strong>전화 연결하기 →</strong></a>
        </div>
      </div>
    </section>
  );
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const page = guidePageMap.get(slug);
  if (!page) notFound();

  const path = `/${page.slug}/`;
  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: page.title,
      description: page.description,
      url: `${siteUrl}${path}`,
      inLanguage: 'ko-KR',
      isPartOf: { '@type': 'WebSite', name: brandName, url: siteUrl },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: `${siteUrl}/` },
        { '@type': 'ListItem', position: 2, name: page.title, item: `${siteUrl}${path}` },
      ],
    },
  ];
  if (slug === 'faq') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
    });
  }

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
        <section className="subpage-hero">
          <div className="subpage-hero__glow" aria-hidden="true" />
          <div className="site-shell">
            <Breadcrumbs current={page.title} />
            <span className="section-kicker">{page.eyebrow}</span>
            <p className="subpage-hero__lead">{page.intro}</p>
            <ul className="subpage-keypoints">{page.keyPoints.map((point) => <li key={point}><span aria-hidden="true">✓</span>{point}</li>)}</ul>
          </div>
        </section>

        <section className="guide-content">
          <h1 className="site-shell guide-content__page-title">{page.title}</h1>
          <div className="site-shell guide-content__grid">
            {page.sections.map((section, index) => (
              <article className="guide-content-card" key={section.title}>
                <span className="guide-content-card__number">{String(index + 1).padStart(2, '0')}</span>
                <div><h2>{section.title}</h2><p>{section.description}</p>{section.items && <ul>{section.items.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>}{section.note && <p className="guide-note"><strong>확인:</strong> {section.note}</p>}</div>
              </article>
            ))}
          </div>
          <GuideSharedCards />
        </section>

        {slug === 'cards' && <CardsTable />}
        {slug === 'process' && <ProcessTimeline />}
        {slug === 'checklist' && <ChecklistPanel />}
        {slug === 'calculator' && <section className="guide-special guide-special--calculator" aria-labelledby="calculator-tool-title"><div className="site-shell"><div className="guide-section-heading"><span className="section-kicker section-kicker--light">CALCULATOR</span><h2 id="calculator-tool-title">회차별 예상 납부액 계산</h2><p>입력값은 저장하지 않으며 실제 가능 개월과 수수료율은 카드사에서 확인해야 합니다.</p></div><InstallmentCalculator /></div></section>}
        {slug === 'faq' && <FaqPanel />}
        {slug === 'gift-cards' && <GiftCardDirectory />}
        {slug === 'contact' && <ContactChannels />}

        <section className="related-guides" aria-labelledby="related-guides-title">
          <div className="site-shell">
            <div className="guide-section-heading"><span className="section-kicker">NEXT GUIDE</span><h2 id="related-guides-title">함께 확인할 안내</h2></div>
            <div className="related-guides__grid">{page.related.map((item) => <Link href={item.href} key={item.href}><strong>{item.label}</strong><p>{item.description}</p><span>안내 보기 →</span></Link>)}</div>
          </div>
        </section>

        <section className="policy-notice">
          <div className="site-shell policy-notice__inner"><span className="notice-icon notice-icon--light" aria-hidden="true">i</span><div><h2>카드 및 결제 정책 변동 안내</h2><p>할부 가능 여부, 수수료, 무이자·부분무이자 혜택과 카드 실적 인정 조건은 카드사, 가맹점, 결제대행사, 판매처 정책과 행사기간에 따라 달라질 수 있습니다. 결제 전에 최신 공식 안내를 확인해 주세요.</p></div></div>
        </section>
        <InstallmentPromo />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
