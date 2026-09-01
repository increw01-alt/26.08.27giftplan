export type GuideSection = {
  title: string;
  description: string;
  items?: string[];
  note?: string;
};

export type RelatedLink = {
  href: string;
  label: string;
  description: string;
};

export type GuidePageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  keyPoints: string[];
  sections: GuideSection[];
  related: RelatedLink[];
};

export const channelTalkUrl = 'https://koreagiftcard.channel.io/';
export const plusYouUrl = 'https://plusyou.co.kr/';
export const associationUrl = 'https://koreagiftcard.co.kr/';
export const siteUrl = 'https://26-08-27giftplan.pages.dev';
export const brandName = '할부노트';
export const brandDescriptor = '상품권 카드결제·할부 확인 가이드';

export const navItems = [
  { label: '상품권 할부안내', href: '/installment-guide/' },
  { label: '카드별 안내', href: '/cards/' },
  { label: '진행 절차', href: '/process/' },
  { label: '확인사항', href: '/checklist/' },
  { label: 'FAQ', href: '/faq/' },
] as const;

export const cardSources = [
  ['KB국민카드', 'https://m.kbcard.com/BON/DVIEW/MBEMCXHIABNC0005'],
  ['신한카드', 'https://www.shinhancard.com/pconts/html/benefit/info/CONFM50046/CONFM50046R01.html'],
  ['삼성카드', 'https://www.samsungcard.com/home/main/benefit/PGHPPCCMainBenefitViewInterestFreeStore001'],
  ['현대카드', 'https://www.hyundaicard.com/cpb/ev/CPBEV0101_06.hc?bnftWebEvntCd=XJO693'],
  ['하나카드', 'https://m.hanacard.co.kr/MKEVT1010M.web?EVN_SEQ=8699'],
  ['우리카드', 'https://pc.wooricard.com/dcpc/yh1/bnf/bnf02/prgevnt/H1BNF202S01.do?evntSrno=30005237'],
  ['NH농협카드', 'https://card.nonghyup.com/servlet/IpCb2002R.act?EVT_CRT_SQNO=5896'],
] as const;

export const processSteps = [
  ['채널톡 상담', '상품권 종류, 카드사, 희망 금액과 할부 개월 수를 정리해 문의합니다.'],
  ['상품권·금액 확인', '상품권의 정확한 명칭과 현재 안내 가능한 구매 조건을 확인합니다.'],
  ['본인 명의 확인', '본인 명의 휴대전화와 신용카드 등 필요한 확인 절차를 안내받습니다.'],
  ['구매 페이지 확인', '안내받은 판매 페이지와 결제 전 주의사항을 직접 확인합니다.'],
  ['결제 조건 재확인', '상품명, 금액, 할부 개월 수와 최종 결제금액을 다시 확인합니다.'],
  ['발송·내역 확인', '판매 페이지에 표시된 발송 방식과 구매내역을 보관합니다.'],
] as const;

export const paymentChecklist = [
  '본인 명의 카드인지 확인',
  '카드 이용 가능 한도와 별도 제한 확인',
  '실제 선택 가능한 할부 개월 수 확인',
  '할부수수료·무이자·부분무이자 적용 여부 확인',
  '카드 실적·포인트·마일리지 인정 여부 확인',
  '상품권 발송 형태와 수령 정보 확인',
  '취소·환불 가능 조건과 제한 시점 확인',
  '상품권 금액과 최종 결제금액 확인',
] as const;

export const faqs = [
  ['상품권을 신용카드로 구매할 수 있나요?', '상품권 종류, 판매처, 카드사, 가맹점 업종과 결제대행사 정책에 따라 달라집니다. 구매 전 해당 판매 페이지와 카드사 공식 안내를 함께 확인해 주세요.'],
  ['상품권 할부구매는 몇 개월까지 가능한가요?', '공통으로 적용되는 고정 개월 수는 없습니다. 카드사 행사와 판매처 운영 조건에 따라 선택 가능한 기간이 달라지므로 실제 결제 화면에서 확인해야 합니다.'],
  ['모든 신용카드가 할부 가능한가요?', '모든 카드에 동일한 조건이 적용되지 않습니다. 개인카드, 법인카드, 체크카드 등 카드 종류와 상품권 결제 정책을 각각 확인해야 합니다.'],
  ['카드사 무이자 할부가 자동 적용되나요?', '일반 무이자 행사가 상품권 구매에 자동 적용되는 것은 아닙니다. 대상 업종, 가맹점, 최소 결제금액, 제외 카드와 행사기간을 확인해야 합니다.'],
  ['부분무이자는 무엇인가요?', '일부 회차의 수수료는 이용자가 부담하고 나머지 회차는 카드사가 부담하는 방식입니다. 부담 회차와 실제 적용 여부는 카드사 안내를 확인해야 합니다.'],
  ['카드 이용 가능 한도는 어디에서 확인하나요?', '카드사 앱, 홈페이지 또는 고객센터에서 확인할 수 있습니다. 상품권 관련 별도 제한이나 승인 조건이 있는지도 함께 문의해 주세요.'],
  ['본인 명의 카드만 가능한가요?', '이 안내 사이트의 상담 절차는 본인 명의 휴대전화와 신용카드 확인을 전제로 합니다. 필요한 확인 범위는 상담 단계에서 안내받아야 합니다.'],
  ['할부수수료는 어떻게 계산되나요?', '일반적으로 남은 할부원금, 개인에게 적용되는 수수료율과 이용 기간을 기준으로 산정됩니다. 실제 수수료율과 청구 방식은 카드사 안내가 우선합니다.'],
  ['상품권 구매도 카드 실적에 포함되나요?', '카드 상품과 실적 산정 기준에 따라 제외될 수 있습니다. 포인트·마일리지 적립 여부도 해당 카드의 상품설명서와 공식 안내를 확인해 주세요.'],
  ['구매 후 취소할 수 있나요?', '상품권의 발송, 사용 또는 등록 여부와 판매처 정책에 따라 달라질 수 있습니다. 결제 전에 취소 가능 시점과 처리 방식을 확인해야 합니다.'],
  ['상품권은 언제 받을 수 있나요?', '상품권 종류, 발송 방식, 본인확인 및 주문 처리 상태에 따라 달라질 수 있습니다. 고정 발송시간을 단정하지 않고 구매 페이지의 기준을 확인해야 합니다.'],
  ['상담할 때 어떤 정보를 준비해야 하나요?', '상품권 종류와 금액, 카드사, 희망 할부기간, 본인 명의 여부를 정리해 주세요. 카드번호 전체, CVC, 비밀번호는 일반 문의에 남기지 않습니다.'],
] as const;

export const guidePages: GuidePageContent[] = [
  {
    slug: 'installment-guide',
    eyebrow: 'INSTALLMENT BASICS',
    title: '상품권 할부구매란? 결제 방식부터 확인하세요',
    metaTitle: '상품권 할부구매란? 무이자·부분무이자 차이',
    description: '일시불, 일반 할부, 무이자·부분무이자, 결제 후 분할납부의 차이와 상품권 결제 전 확인할 조건을 안내합니다.',
    intro: '할부라는 이름이 같아도 수수료 부담 주체와 적용 조건은 서로 다릅니다. 먼저 결제 방식을 구분한 뒤 카드사와 판매처의 실제 적용 여부를 확인해야 합니다.',
    keyPoints: ['다섯 가지 결제 방식 구분', '개인별 수수료율 확인', '상품권 적용 여부 별도 확인'],
    sections: [
      {
        title: '결제 방식은 다섯 가지로 나누어 확인합니다',
        description: '일시불과 일반 할부뿐 아니라 무이자, 부분무이자, 결제 후 분할납부는 비용 구조가 다릅니다.',
        items: [
          '일시불: 결제금액 전액을 다음 결제일에 납부',
          '일반 할부: 원금과 개인별 할부수수료를 여러 회차로 납부',
          '무이자 할부: 행사 조건에 맞을 때 카드사가 수수료 부담',
          '부분무이자: 일부 회차 수수료는 이용자가 부담',
          '결제 후 분할납부: 일시불 승인 뒤 카드사에서 전환',
        ],
      },
      {
        title: '수수료는 결제 전 카드사 기준으로 확인합니다',
        description: '같은 금액과 개월 수라도 개인별 수수료율, 청구일수와 카드사 계산 방식에 따라 실제 청구액이 달라질 수 있습니다.',
        items: ['적용 수수료율', '선택 가능한 개월 수', '회차별 부담액', '중도상환·전환 조건'],
        note: '사이트 계산기는 비교를 돕는 단순 예상치이며 카드사 청구금액을 보장하지 않습니다.',
      },
      {
        title: '카드사 행사와 상품권 판매처 조건은 따로 봅니다',
        description: '카드사에 일반 무이자 행사가 있어도 상품권 판매처나 결제 가맹점이 제외 대상이면 적용되지 않을 수 있습니다.',
        items: ['카드사 공식 행사 대상', '가맹점·업종 제외 조건', '판매처 결제 화면의 할부 선택값', '최종 승인 전 표시 금액'],
      },
    ],
    related: [
      { href: '/cards/', label: '카드별 할부 안내', description: '카드사 공식 확인 경로와 점검 항목을 봅니다.' },
      { href: '/calculator/', label: '월 예상 납부액 계산기', description: '원금과 수수료를 구분해 예상액을 계산합니다.' },
      { href: '/checklist/', label: '결제 전 체크리스트', description: '결제 버튼을 누르기 전 확인할 8가지를 봅니다.' },
    ],
  },
  {
    slug: 'cards',
    eyebrow: 'CARD POLICY GUIDE',
    title: '상품권 할부 가능 카드, 공식 조건과 실제 적용을 나눠 확인하세요',
    metaTitle: '상품권 할부 가능 카드 확인 | 카드별 할부 안내',
    description: '카드사 일반 할부 혜택과 상품권 판매처의 실제 적용 조건을 분리해 확인하고 공식 출처와 확인 항목을 안내합니다.',
    intro: '카드사 공식 행사 안내는 출발점입니다. 실제 상품권 구매에 적용되는지는 카드 종류, 가맹점, 판매처와 결제 시점의 조건을 다시 확인해야 합니다.',
    keyPoints: ['카드사 일반 혜택 확인', '상품권 적용 여부 분리', '결제 시점 최종 확인'],
    sections: [
      {
        title: '공식 행사와 실제 상품권 적용은 같은 정보가 아닙니다',
        description: '카드사 페이지는 일반적인 행사 조건을 안내합니다. 상품권 구매 페이지의 업종·가맹점·카드 제외 조건은 별도로 확인합니다.',
        items: ['행사기간', '최소 결제금액', '대상 할부 개월 수', '제외 카드·업종·가맹점'],
      },
      {
        title: '결제 화면에서 마지막으로 확인할 내용',
        description: '상담이나 안내 페이지를 확인했더라도 승인 전 화면에 표시된 조건을 기준으로 최종 판단합니다.',
        items: ['선택 가능한 할부 개월', '무이자·부분무이자 표시', '최종 결제금액', '포인트·실적 제외 고지'],
      },
    ],
    related: [
      { href: '/installment-guide/', label: '할부 방식 이해하기', description: '일반·무이자·부분무이자의 차이를 확인합니다.' },
      { href: '/notices/', label: '정책 변경 안내', description: '검증된 카드·판매처 정책 변경 기록을 확인합니다.' },
      { href: '/contact/', label: '내 카드 조건 상담', description: '상품권과 카드 정보를 정리해 상담합니다.' },
    ],
  },
  {
    slug: 'cultureland',
    eyebrow: 'CULTURELAND GUIDE',
    title: '컬쳐랜드 할부구매 전 확인해야 할 사항',
    metaTitle: '컬쳐랜드 할부구매 전 확인사항',
    description: '컬쳐랜드 상품권의 형태, 카드 조건, 본인확인, 발송과 취소 기준을 구매 전에 점검하는 방법을 안내합니다.',
    intro: '컬쳐랜드 관련 상품은 명칭과 형태, 사용 방식이 다를 수 있습니다. 결제 전에 정확한 상품명과 판매 페이지의 최신 조건을 먼저 확인합니다.',
    keyPoints: ['정확한 상품 형태 확인', '카드·판매처 조건 확인', '발송·취소 기준 확인'],
    sections: [
      { title: '상품권 형태와 사용 방식을 확인합니다', description: '비슷한 명칭만 보고 판단하지 말고 판매 페이지에 표시된 상품명, 발송 형태와 사용 안내를 확인합니다.', items: ['정확한 상품명', '모바일 발송·온라인 등록 등 전달 방식', '사용처와 유효기간', '수신정보 변경 가능 여부'] },
      { title: '카드 조건과 본인확인 절차를 확인합니다', description: '카드사 행사와 판매처 정책은 달라질 수 있으며 상담 절차는 본인 명의 확인을 전제로 합니다.', items: ['본인 명의 휴대전화와 카드', '이용 가능 한도', '선택 가능한 할부 개월', '결제 화면의 최종 조건'] },
      { title: '발송 전 취소 기준을 먼저 봅니다', description: '상품권은 발송·등록·사용 상태에 따라 취소 가능 여부가 달라질 수 있습니다.', items: ['발송 예정 방식', '취소 가능 시점', '오입력 시 처리 기준', '구매내역 보관'] },
    ],
    related: [
      { href: '/gift-cards/', label: '상품권별 구매 안내', description: '다른 상품권 유형과 확인 항목을 비교합니다.' },
      { href: '/process/', label: '구매 진행 절차', description: '상담부터 발송 확인까지 순서를 봅니다.' },
      { href: '/checklist/', label: '결제 전 체크', description: '최종 결제 전에 8개 항목을 점검합니다.' },
    ],
  },
  {
    slug: 'department-store',
    eyebrow: 'DEPARTMENT STORE GUIDE',
    title: '백화점상품권 할부구매 전 확인 가이드',
    metaTitle: '백화점상품권 할부구매 전 확인 가이드',
    description: '백화점상품권의 상품명, 수령 형태, 카드 조건, 교환과 취소 기준을 결제 전에 확인하는 방법을 안내합니다.',
    intro: '백화점상품권은 지류, 모바일 교환형 등 전달 형태가 다를 수 있습니다. 현재 실제 판매 중인 상품과 수령·교환 조건을 확인한 뒤 결제합니다.',
    keyPoints: ['브랜드·권종 확인', '수령·교환 형태 확인', '취소 제한 시점 확인'],
    sections: [
      { title: '판매 중인 상품과 권종을 확인합니다', description: '운영 여부가 검증된 상품만 기준으로 보며 상품명, 권종과 판매 페이지 표시 금액을 대조합니다.', items: ['백화점 브랜드', '지류·모바일 교환형 여부', '권종과 수량', '최종 결제금액'] },
      { title: '수령과 교환 절차를 확인합니다', description: '상품마다 수령 장소, 교환 방법과 준비물이 다를 수 있어 판매처 안내를 우선합니다.', items: ['수령 대상자 정보', '교환 장소와 운영시간', '본인확인 필요 여부', '미교환·분실 처리 기준'] },
      { title: '발송 또는 교환 전 취소 조건을 확인합니다', description: '결제 이후 상태가 바뀌면 취소가 제한될 수 있으므로 구매 전에 가능 시점과 절차를 확인합니다.', items: ['발송 전 취소', '교환 후 취소 제한', '오입력 처리', '환불 처리 기간 안내'] },
    ],
    related: [
      { href: '/gift-cards/', label: '상품권 종류 비교', description: '문화·모바일·백화점상품권 확인 항목을 비교합니다.' },
      { href: '/cards/', label: '카드별 조건 확인', description: '카드사 공식 안내와 실제 적용을 나눠 봅니다.' },
      { href: '/contact/', label: '취급 여부 상담', description: '상품명과 금액을 정리해 현재 안내 가능 여부를 확인합니다.' },
    ],
  },
  {
    slug: 'gift-cards',
    eyebrow: 'GIFT CARD DIRECTORY',
    title: '상품권별 카드구매 확인사항',
    metaTitle: '상품권 카드구매 종류별 확인 가이드',
    description: '컬쳐랜드, 모바일 문화상품권, 백화점상품권 등 상품권 유형별 카드구매 확인사항을 비교해 안내합니다.',
    intro: '상품권이라는 공통 명칭보다 실제 상품 형태와 전달 방식을 기준으로 확인해야 합니다. 유형별 차이를 비교한 뒤 전용 안내로 이동하세요.',
    keyPoints: ['상품권 형태 비교', '전달·사용 방식 확인', '유형별 상세 안내 연결'],
    sections: [
      { title: '온라인 문화상품권', description: '정확한 상품명, 온라인 등록 방식과 사용처를 확인합니다.', items: ['상품명·발행 주체', '등록·충전 방식', '사용처', '발송·취소 기준'] },
      { title: '모바일 발송형 상품권', description: '수신 휴대전화 정보와 유효기간, 재발송 가능 여부를 확인합니다.', items: ['수신 정보', '발송 시점', '유효기간', '오입력 처리'] },
      { title: '백화점상품권', description: '지류 또는 모바일 교환형 여부와 수령·교환 절차를 확인합니다.', items: ['브랜드·권종', '수령 형태', '교환 장소', '취소 제한 시점'] },
    ],
    related: [
      { href: '/cultureland/', label: '컬쳐랜드 안내', description: '상품 형태와 결제 전 확인사항을 자세히 봅니다.' },
      { href: '/department-store/', label: '백화점상품권 안내', description: '수령·교환·취소 조건을 자세히 봅니다.' },
      { href: '/process/', label: '공통 진행 절차', description: '상품권 종류를 정한 뒤 진행 순서를 확인합니다.' },
    ],
  },
  {
    slug: 'process',
    eyebrow: 'PURCHASE PROCESS',
    title: '상품권 할부구매 진행 절차',
    metaTitle: '상품권 할부구매 진행 절차 | 6단계 안내',
    description: '상담 준비부터 본인확인, 구매 페이지 확인, 결제와 발송 확인까지 6단계 절차와 주의사항을 안내합니다.',
    intro: '상품권과 카드 조건을 먼저 정리하면 불필요한 재확인을 줄일 수 있습니다. 민감한 카드정보는 일반 상담창에 남기지 않고 안내받은 공식 절차에서만 확인합니다.',
    keyPoints: ['상담 전 정보 정리', '본인 명의 확인', '구매내역 보관'],
    sections: [
      { title: '상담 전에 네 가지를 준비합니다', description: '상품권 종류, 희망 금액, 카드사와 희망 할부 개월 수를 정리합니다.', items: ['구매하려는 상품권명', '희망 금액', '카드사', '희망 할부 기간'] },
      { title: '민감정보는 일반 문의에 남기지 않습니다', description: '상담 단계에서는 확인에 필요한 최소 정보만 전달합니다.', items: ['카드번호 전체 입력 금지', 'CVC·비밀번호 입력 금지', '주민등록번호 전달 금지', '안내받은 공식 결제 화면 확인'] },
      { title: '결제 후 구매내역을 보관합니다', description: '상품명, 금액, 할부 개월 수, 주문 상태와 판매처 문의 경로를 확인합니다.', items: ['주문번호', '결제금액·할부기간', '발송 상태', '취소·문의 경로'] },
    ],
    related: [
      { href: '/checklist/', label: '결제 전 확인사항', description: '결제 직전 점검할 8개 항목을 확인합니다.' },
      { href: '/contact/', label: '상담 준비하기', description: '준비 정보와 안전한 상담 범위를 확인합니다.' },
      { href: '/faq/', label: '자주 묻는 질문', description: '절차와 본인확인 관련 질문을 확인합니다.' },
    ],
  },
  {
    slug: 'checklist',
    eyebrow: 'FINAL CHECKLIST',
    title: '상품권 카드결제 전 확인사항',
    metaTitle: '상품권 구매 전 확인사항 | 결제 체크리스트',
    description: '카드 한도, 할부 개월과 수수료, 카드 실적, 상품권 발송과 취소 조건을 결제 전에 점검할 수 있습니다.',
    intro: '카드사 안내와 판매처 안내 중 한쪽만 확인하면 실제 결제 조건을 놓칠 수 있습니다. 아래 8개 항목을 모두 확인한 뒤 결제하세요.',
    keyPoints: ['카드 조건', '비용·실적', '발송·취소'],
    sections: [
      { title: '카드와 비용 조건', description: '본인 명의, 이용 가능 한도, 할부 개월과 실제 수수료 조건을 확인합니다.', items: ['본인 명의 카드', '이용 가능 한도', '할부 개월 수', '수수료 부담 회차'] },
      { title: '혜택과 실적 조건', description: '무이자 표시뿐 아니라 포인트, 마일리지와 카드 실적 제외 여부를 확인합니다.', items: ['무이자·부분무이자', '전월실적 포함 여부', '포인트·마일리지', '쿠폰·할인 중복 여부'] },
      { title: '상품권 전달과 취소 조건', description: '상품권이 발송되거나 등록된 뒤에는 취소가 제한될 수 있습니다.', items: ['수령 정보', '발송 형태', '취소 가능 시점', '최종 상품권·결제 금액'] },
    ],
    related: [
      { href: '/calculator/', label: '예상 납부액 계산', description: '확인한 개월 수와 수수료로 예상액을 비교합니다.' },
      { href: '/cards/', label: '카드 공식 안내 확인', description: '카드사별 공식 확인 경로를 확인합니다.' },
      { href: '/contact/', label: '최종 조건 상담', description: '확인이 어려운 항목을 정리해 상담합니다.' },
    ],
  },
  {
    slug: 'calculator',
    eyebrow: 'PAYMENT CALCULATOR',
    title: '상품권 할부 월 예상 납부액 계산기',
    metaTitle: '상품권 할부 월 예상 납부액 계산기',
    description: '구매금액, 할부 개월 수와 예상 수수료율을 입력해 회차별 원금과 단순 예상 납부액을 계산합니다.',
    intro: '계산 결과는 비교를 위한 단순 예상치입니다. 개인별 수수료율, 청구일수와 카드사 원 단위 처리 방식에 따라 실제 청구액은 달라질 수 있습니다.',
    keyPoints: ['원금 균등 기준', '예상 수수료 분리', '회차별 표 제공'],
    sections: [
      { title: '계산 전에 확인할 값', description: '구매금액과 할부 개월 수를 입력하고, 카드사에서 확인한 예상 수수료율이 있을 때만 선택적으로 반영합니다.', items: ['상품권 구매금액', '할부 개월 수', '예상 연 수수료율', '부분무이자 부담 회차'] },
      { title: '계산 결과의 한계', description: '계산기는 승인 가능 여부나 최종 청구액을 판단하지 않습니다.', items: ['개인별 적용 수수료율 차이', '청구일수 차이', '원 단위 처리 방식', '카드사·판매처 정책 변경'] },
    ],
    related: [
      { href: '/installment-guide/', label: '할부 방식 설명', description: '계산 전 일반·무이자·부분무이자 차이를 확인합니다.' },
      { href: '/cards/', label: '카드별 조건', description: '수수료와 개월 수를 카드사에서 확인합니다.' },
      { href: '/checklist/', label: '결제 전 최종 확인', description: '계산 뒤 실제 결제 조건을 다시 점검합니다.' },
    ],
  },
  {
    slug: 'faq',
    eyebrow: 'FREQUENTLY ASKED QUESTIONS',
    title: '상품권 카드결제·할부구매 FAQ',
    metaTitle: '상품권 카드결제·할부구매 FAQ',
    description: '상품권 카드결제 가능 여부, 할부 개월 수, 무이자, 본인확인, 발송과 취소 관련 자주 묻는 질문을 안내합니다.',
    intro: '아래 답변은 공통 확인 원칙을 설명합니다. 실제 이용 가능 여부와 비용은 상품권, 카드사, 판매처와 결제 시점에 따라 달라질 수 있습니다.',
    keyPoints: ['카드·한도', '비용·수수료', '본인확인·취소'],
    sections: [
      { title: '답변을 읽을 때 확인할 원칙', description: '고정된 가능 여부나 혜택을 단정하지 않고 공식 안내와 실제 결제 화면을 기준으로 확인합니다.', items: ['카드사 공식 안내', '판매처 최신 조건', '결제 시점 화면', '본인 명의 확인'] },
    ],
    related: [
      { href: '/cards/', label: '카드별 안내', description: '카드 관련 답변의 공식 확인 경로를 봅니다.' },
      { href: '/process/', label: '진행 절차', description: '처음 이용할 때의 순서를 확인합니다.' },
      { href: '/contact/', label: '해결되지 않은 질문 상담', description: '상품권과 카드 조건을 정리해 문의합니다.' },
    ],
  },
  {
    slug: 'notices',
    eyebrow: 'POLICY UPDATES',
    title: '공지사항 및 카드 정책 변경 안내',
    metaTitle: '카드 할부 정책 변경 및 공지사항',
    description: '검증된 카드사·상품권 판매처 정책 변경 사항을 적용기간, 영향 범위, 공식 출처와 함께 안내하는 페이지입니다.',
    intro: '확인되지 않은 행사나 조건을 공지로 만들지 않습니다. 공식 출처와 적용기간, 영향 범위가 확인된 내용만 기록합니다.',
    keyPoints: ['공식 출처 필수', '적용기간 표시', '종료 정책 구분'],
    sections: [
      { title: '공지에 반드시 포함하는 정보', description: '정책 제목만으로 판단하지 않도록 적용 대상과 확인 근거를 함께 제공합니다.', items: ['정책 종류', '적용기간', '영향 대상', '공식 출처', '최종 확인일'] },
      { title: '현재 공개된 검증 공지', description: '현재 이 사이트에 게시할 수 있도록 검증이 완료된 개별 정책 공지는 없습니다.', note: '카드사와 판매처의 최신 안내는 카드별 안내 페이지의 공식 링크에서 직접 확인해 주세요.' },
    ],
    related: [
      { href: '/cards/', label: '카드별 공식 출처', description: '주요 카드사의 공식 행사 안내를 확인합니다.' },
      { href: '/checklist/', label: '결제 시점 확인', description: '정책 변경 가능성을 고려해 최종 점검합니다.' },
      { href: '/contact/', label: '최신 조건 상담', description: '결제 전에 현재 안내 가능한 조건을 확인합니다.' },
    ],
  },
  {
    slug: 'about',
    eyebrow: 'ABOUT THE GUIDE',
    title: '한국상품권협회 안내',
    metaTitle: '한국상품권협회 할부노트 운영 안내',
    description: '한국상품권협회가 운영하는 할부노트의 목적, 정보 안내 원칙, 본인확인과 상담 범위를 안내합니다.',
    intro: '이 사이트는 상품권 카드결제와 할부구매 전에 필요한 확인 항목과 공식 확인 경로를 정리하는 정보·상담 안내 사이트입니다.',
    keyPoints: ['확인 중심 정보', '과장 없는 안내', '민감정보 보호'],
    sections: [
      { title: '가이드의 역할', description: '상품권과 카드 조건을 한 번에 단정하지 않고 사용자가 확인해야 할 순서와 공식 경로를 안내합니다.', items: ['결제 방식 설명', '카드사 공식 출처 연결', '예상 납부액 계산', '상담 준비사항 안내'] },
      { title: '안내 원칙', description: '확인되지 않은 수치, 행사, 취급 상품이나 이용 가능 여부를 확정적으로 표시하지 않습니다.', items: ['공식 자료 우선', '최종 확인일 표시', '정책 변동 가능성 고지', '광고와 정보 구분'] },
      { title: '안내 범위와 한계', description: '이 사이트는 카드사 또는 금융기관의 공식 사이트가 아니며 승인이나 혜택 적용을 보장하지 않습니다.', items: ['카드 승인 보장 아님', '최종 청구액 보장 아님', '카드사 공식 안내 우선', '판매처 약관 확인'] },
    ],
    related: [
      { href: '/installment-guide/', label: '가이드 시작하기', description: '할부 결제 방식부터 순서대로 확인합니다.' },
      { href: '/notices/', label: '정책 변경 안내', description: '검증된 변경 기록의 게시 원칙을 확인합니다.' },
      { href: '/contact/', label: '상담 안내', description: '문의 준비사항과 채널을 확인합니다.' },
    ],
  },
  {
    slug: 'contact',
    eyebrow: 'CONTACT & SUPPORT',
    title: '상품권 구매 상담',
    metaTitle: '상품권 구매 상담 | 한국상품권협회',
    description: '상품권 종류, 카드사, 희망 금액과 할부기간을 정리해 상담하는 방법과 민감정보 제출 금지사항을 안내합니다.',
    intro: '상담 전에 네 가지 기본 정보를 정리하면 확인이 빨라집니다. 카드번호 전체, CVC와 비밀번호 같은 민감정보는 일반 문의창에 남기지 마세요.',
    keyPoints: ['상품권·금액 준비', '카드사·기간 준비', '민감정보 입력 금지'],
    sections: [
      { title: '상담 전에 준비할 정보', description: '가능 여부를 단정하지 않고 현재 확인할 수 있는 조건을 안내받기 위한 기본 정보입니다.', items: ['상품권 종류', '희망 구매금액', '카드사', '희망 할부 개월 수'] },
      { title: '일반 상담에 남기지 않을 정보', description: '결제나 본인확인에 필요한 민감정보는 안내받은 공식 절차 외의 문의창에 입력하지 않습니다.', items: ['카드번호 전체', 'CVC·비밀번호', '주민등록번호', '인증번호'] },
      { title: '안내받은 뒤 다시 확인할 내용', description: '구매 페이지에서 상품명, 결제금액, 할부기간, 발송과 취소 조건을 직접 확인합니다.', items: ['정확한 상품명', '최종 결제금액', '할부 개월', '발송·취소 기준'] },
    ],
    related: [
      { href: '/process/', label: '전체 진행 절차', description: '상담 이후 구매와 발송 확인 순서를 봅니다.' },
      { href: '/checklist/', label: '결제 전 체크리스트', description: '상담 후에도 직접 확인할 항목을 봅니다.' },
      { href: '/faq/', label: '자주 묻는 질문', description: '문의 전 공통 질문을 먼저 확인합니다.' },
    ],
  },
];

export const guidePageMap = new Map(guidePages.map((page) => [page.slug, page]));
