import type { Metadata } from 'next';
import { brandDescriptor, brandName, siteUrl } from './_data/guide-content';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brandName} | 상품권 카드결제·할부구매 전 확인 가이드`,
    template: `%s | ${brandName}`,
  },
  description: `${brandName}는 상품권 카드결제와 할부구매 전 카드별 조건, 본인확인, 결제 절차, 예상 납부액과 확인사항을 안내합니다.`,
  alternates: { canonical: '/' },
  openGraph: {
    title: `${brandName} | ${brandDescriptor}`,
    description: '카드별 이용 조건부터 본인확인, 결제 절차까지 할부노트에서 결제 전에 확인하세요.',
    type: 'website',
    url: '/',
    locale: 'ko_KR',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: `${brandName} - ${brandDescriptor}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${brandName} | ${brandDescriptor}`,
    description: '카드별 이용 조건부터 본인확인, 결제 절차까지 할부노트에서 결제 전에 확인하세요.',
    images: ['/og.png'],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const siteSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: '한국상품권협회',
      url: 'https://koreagiftcard.co.kr/',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+82-1800-2434',
        contactType: 'customer support',
        availableLanguage: 'Korean',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: brandName,
      alternateName: brandDescriptor,
      url: `${siteUrl}/`,
      inLanguage: 'ko-KR',
      publisher: { '@type': 'Organization', name: '한국상품권협회' },
    },
  ];
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
        {children}
      </body>
    </html>
  );
}
