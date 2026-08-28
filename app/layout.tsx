import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      'https://26-08-27giftplan.pages.dev',
  ),
  title: '상품권 카드결제·할부구매 전 확인 가이드 | 한국상품권협회',
  description: '상품권 카드결제와 할부구매 전 카드별 조건, 본인확인, 결제 절차, 예상 납부액과 확인사항을 안내합니다.',
  openGraph: {
    title: '상품권 카드결제·할부구매 전 확인 가이드',
    description: '카드별 이용 조건부터 본인확인, 결제 절차까지 결제 전에 확인하세요.',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: '상품권 카드결제·할부구매 전 확인 가이드',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '상품권 카드결제·할부구매 전 확인 가이드',
    description: '카드별 이용 조건부터 본인확인, 결제 절차까지 결제 전에 확인하세요.',
    images: ['/og.png'],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
