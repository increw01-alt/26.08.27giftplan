# 할부노트

상품권 카드결제·할부구매 전에 카드별 조건, 결제 절차, 예상 납부액과 주의사항을 확인할 수 있는 정보형 가이드 사이트입니다.

- 공식 도메인: <https://plus24.co.kr/>
- Cloudflare Pages 기본 주소: <https://26-08-27giftplan.pages.dev/>
- 운영 브랜치: `main`
- 페이지 구성: 메인 1개와 세부 가이드 12개
- 배포 방식: GitHub → Cloudflare Pages 정적 배포
- 현재 검색 상태: 최종 운영 정보 승인 전 `noindex`

## 주요 기능

- 카드별 할부 조건 확인 가이드
- 컬쳐랜드·백화점상품권 등 유형별 확인사항
- 결제 전·중·후 절차와 체크리스트
- 구매금액·할부 개월·연이율 기반 예상 납부액 계산기
- FAQ, 공지, 소개, 일반 문의 안내
- 페이지별 SEO 메타데이터, 구조화 데이터, 사이트맵, 404 페이지

## 로컬 실행

Node.js 22.13 이상이 필요합니다.

```powershell
npm ci
npm run dev
```

변경 후에는 다음 명령으로 검수합니다.

```powershell
npm run lint
npm run build
git diff --check
```

Cloudflare Pages 빌드 결과는 `out/`에 생성됩니다.

## 배포 설정

- Build command: `npm run build`
- Build output directory: `out`
- Production branch: `main`

세부 설정은 [`CLOUDFLARE_PAGES.md`](./CLOUDFLARE_PAGES.md)를 참고하세요.

## 작업 인수인계

완료 작업, 13개 URL 구조, 주요 파일, 다른 PC에서 이어서 작업하는 방법, 남은 공개 전 작업과 최종 검수표는 [`HANDOFF.md`](./HANDOFF.md)에 정리되어 있습니다.
