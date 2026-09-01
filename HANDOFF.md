# 할부노트 프로젝트 인수인계

> 작성 기준일: 2026-09-01
> 사이트 구현 기준 커밋: `6089c86` (`Rebrand site as Halbu Note`)
> 운영 브랜치: `main`

## 1. 프로젝트 개요

- 브랜드명: **할부노트**
- 사이트 성격: 상품권 카드결제·할부구매 전 확인해야 할 조건과 절차를 설명하는 정보형 가이드
- 주요 이용자: 카드별 할부 조건, 결제 절차, 예상 납부액, 주의사항을 미리 확인하려는 사용자
- 공개 사이트: <https://26-08-27giftplan.pages.dev/>
- GitHub 저장소: <https://github.com/increw01-alt/26.08.27giftplan>
- 기술 구성: Next.js App Router, React, TypeScript, Vinext, 정적 내보내기(Static Export)

이 사이트는 상담이나 거래를 직접 처리하는 쇼핑몰이 아니라, 이용자가 공식 판매처와 카드사 조건을 스스로 확인할 수 있도록 돕는 정보 제공 사이트로 설계했다.

현재 API, 데이터베이스, D1, R2 저장소는 사용하지 않는다. 계산기 입력값은 브라우저 안에서만 계산되고 저장·전송되지 않으며, 상담·전화·구매 CTA를 누를 때만 외부 채널로 이동한다.

## 2. 현재 운영 상태

| 구분 | 상태 | 비고 |
| --- | --- | --- |
| GitHub | 정상 | `main` 브랜치에서 관리 |
| Cloudflare Pages | 정상 공개 | 2026-09-01 기준 `/`, `/cards/` HTTP 200 응답 확인 |
| 페이지 구조 | 완료 | 기획서 기준 13개 독립 URL 구현 |
| 브랜드 변경 | 완료 | 사이트명, 메타데이터, 구조화 데이터, 소셜 이미지에 `할부노트` 반영 |
| 검색 색인 | 보류 | `robots.txt`는 크롤링을 허용하지만 페이지 메타는 최종 운영 정보 승인 전 `noindex, nofollow` 유지 |
| OpenAI Sites 사본 | 별도 확인 필요 | 소스 버전은 저장됐으나 최근 비공개 배포가 인증 콜백 충돌로 완료되지 않음 |

현재 실제 공개본과 검수 기준은 **Cloudflare Pages 사이트**다. OpenAI Sites 사본은 보조 경로이며, Cloudflare 공개 상태를 판단하는 근거로 사용하지 않는다.

## 3. 완료한 작업

1. 원페이지 초안을 기획서의 검색 의도에 맞는 13개 독립 페이지로 재구성했다.
2. 공통 헤더, 모바일 메뉴, 푸터, 브레드크럼, 하단 CTA를 컴포넌트로 통합했다.
3. 카드별 확인사항, 상품권 유형, 이용 절차, 체크리스트, FAQ, 공지, 소개, 문의 콘텐츠를 페이지별로 분리했다.
4. 구매금액·할부 개월·연이율을 입력하는 예상 납부액 계산기를 구현했다.
5. 페이지별 메타 타이틀, 설명, canonical URL, Open Graph, 사이트맵, robots, 404 페이지를 구성했다.
6. Organization, WebSite, BreadcrumbList, FAQPage 등 페이지 성격에 맞는 구조화 데이터를 적용했다.
7. Cloudflare Pages용 정적 빌드와 OpenAI Sites용 빌드를 분리해 두 배포 경로를 유지했다.
8. 브랜드를 `할부노트`로 변경하고 1200×630 소셜 공유 이미지를 적용했다.
9. 모바일 우선 반응형 레이아웃, 키보드 메뉴 이용, 명확한 포커스 표시 등 기본 접근성을 반영했다.
10. 확인되지 않은 카드사 정책, 수수료, 이용 한도는 확정적으로 단정하지 않고 공식 안내 확인 문구를 사용했다.

## 4. 페이지 구조

| URL | 역할 |
| --- | --- |
| `/` | 사이트 소개, 핵심 가이드 및 주요 페이지 연결 |
| `/installment-guide/` | 상품권 카드결제·할부 확인의 기본 개념 |
| `/cards/` | 카드별 확인 항목과 공식 안내 확인 방법 |
| `/cultureland/` | 컬쳐랜드 상품권 관련 확인사항 |
| `/department-store/` | 백화점 상품권 관련 확인사항 |
| `/gift-cards/` | 상품권 유형별 비교와 확인 포인트 |
| `/process/` | 확인부터 결제 후 점검까지의 절차 |
| `/checklist/` | 결제 전·중·후 체크리스트 |
| `/calculator/` | 예상 월 납부액 계산기 |
| `/faq/` | 자주 묻는 질문 |
| `/notices/` | 정보 이용 시 주의사항과 공지 |
| `/about/` | 할부노트의 목적과 콘텐츠 원칙 |
| `/contact/` | 일반 문의 범위와 개인정보 입력 주의 안내 |

사이트맵은 위 13개 URL을 각각 독립 주소로 제공한다. 검색 의도가 다른 페이지를 다시 한 페이지로 합치지 않는다.

## 5. 주요 파일

| 경로 | 역할 |
| --- | --- |
| `app/page.tsx` | 메인 페이지 |
| `app/[slug]/page.tsx` | 세부 가이드 페이지 공통 템플릿 |
| `app/_data/guide-content.ts` | 페이지별 제목, 설명, 본문, FAQ 등 콘텐츠 데이터 |
| `app/_components/` | 헤더, 푸터, 브레드크럼, CTA, 계산기 |
| `app/layout.tsx` | 전역 메타데이터, 브랜드, 구조화 데이터, 검색 색인 설정 |
| `app/sitemap.ts` | 13개 URL 사이트맵 생성 |
| `app/robots.ts` | 검색 로봇 정책 생성 |
| `app/not-found.tsx` | 404 페이지 |
| `app/globals.css` | 디자인 시스템과 반응형 스타일 |
| `public/og.png` | 할부노트 소셜 공유 이미지(1200×630) |
| `scripts/build-pages.mjs` | Cloudflare Pages용 정적 내보내기 빌드 |
| `next.config.ts` | 배포 모드별 Next.js 설정 |
| `package.json` | Node.js 버전 조건과 실행·빌드·검수 스크립트 |
| `vite.config.ts` | Vinext 및 OpenAI Sites 빌드 설정 |
| `wrangler.jsonc` | Cloudflare Pages 출력 경로 `./out` 설정 |
| `CLOUDFLARE_PAGES.md` | Cloudflare Pages 연결 및 빌드 설정 |
| `.openai/hosting.json` | OpenAI Sites 프로젝트 연결 정보 |

### 수정 시 주의할 부분

- 메인 페이지의 계산기 로직은 `app/page.tsx`, 계산기 전용 페이지의 로직은 `app/_components/InstallmentCalculator.tsx`에 각각 있다. 계산식이나 안내 문구를 변경하면 두 화면을 함께 수정하고 결과를 비교한다.
- 일부 페이지 링크와 요약 문구는 `app/page.tsx`와 `app/_data/guide-content.ts`에 각각 사용된다. URL이나 페이지명을 바꾸기 전에 전체 검색해 누락된 링크가 없는지 확인한다.
- 기본 브랜드명과 공개 URL은 `app/_data/guide-content.ts`에서 관리하지만, 메타데이터와 구조화 데이터 사용처도 함께 검수한다.
- 대표번호는 `app/layout.tsx`, `app/page.tsx`, `app/[slug]/page.tsx`, `FinalCTA.tsx`, `SiteFooter.tsx`에 사용되고, 채널톡·플러스유 URL도 메인 페이지와 콘텐츠 데이터에 중복되어 있다. 운영 정보 변경 시 `rg -n "기존 값" app`으로 전체 사용처를 찾는다.
- `app/sitemap.ts`의 `lastModified`는 현재 `2026-08-28`로 고정되어 있다. 주요 콘텐츠를 갱신하면 검증한 실제 수정일로 함께 변경한다.

## 6. 로컬 실행과 검수

Node.js 22.13 이상을 사용한다.

```powershell
git clone https://github.com/increw01-alt/26.08.27giftplan.git
cd 26.08.27giftplan
npm ci
npm run dev
```

로컬 개발 서버가 시작되면 터미널에 표시된 주소를 브라우저에서 연다.

변경 후 기본 검수 명령은 다음과 같다.

```powershell
npm run lint
npm run build
git diff --check
```

- `npm run build`: Cloudflare Pages용 정적 사이트를 `out/`에 생성
- `npm run build:sites`: OpenAI Sites용 빌드를 `dist/`에 생성
- 일반적인 Cloudflare 수정 작업에서는 `npm run lint`와 `npm run build`를 모두 통과시킨다.

## 7. Cloudflare Pages 설정

Cloudflare Pages 저장소 연결값은 다음과 같다.

- Production branch: `main`
- Framework preset: `Next.js (Static HTML Export)` 또는 `None`
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: 비워 둠

상세 내용은 [`CLOUDFLARE_PAGES.md`](./CLOUDFLARE_PAGES.md)를 참고한다. GitHub `main`에 푸시하면 연결된 Cloudflare Pages 프로젝트가 자동 빌드를 시작할 수 있다.

## 8. 다른 PC에서 이어서 작업하기

현재 작업 폴더의 원격 저장소 별칭은 다음과 같이 분리되어 있다.

| 원격 별칭 | 대상 | 용도 |
| --- | --- | --- |
| `github` | `github.com/increw01-alt/26.08.27giftplan.git` | GitHub 및 Cloudflare Pages 배포 기준 |
| `origin` | OpenAI Sites 소스 저장소 | 보조 Sites 배포용 |

현재 `main` 브랜치의 upstream은 `github/main`이다. **이 기존 작업 폴더에서 GitHub에 올릴 때는 `git push github main`을 사용하며, `git push origin`을 사용하지 않는다.**

```powershell
git pull --ff-only github main
git push github main
git ls-remote github refs/heads/main
```

처음 내려받는 PC에서는 다음 순서로 시작한다.

```powershell
git clone https://github.com/increw01-alt/26.08.27giftplan.git
cd 26.08.27giftplan
git switch main
git pull --ff-only origin main
npm ci
npm run dev
```

작업 시작 전과 푸시 후에는 로컬과 GitHub 상태를 비교한다.

```powershell
git status -sb
git rev-parse HEAD
git ls-remote origin refs/heads/main
```

`git rev-parse HEAD`와 `git ls-remote`의 커밋 SHA가 같고 작업 트리가 깨끗하면 GitHub와 동기화된 상태다. Git은 브라우저 로그인, Cloudflare 계정 세션, 로컬 개발 도구 설정까지 옮기지는 않으므로 새 PC에서 별도로 로그인해야 한다.

새로 `git clone`한 폴더에서는 GitHub가 기본적으로 `origin`이 되므로 위 새 PC 명령을 그대로 사용한다. 기존 작업 폴더와 새 clone의 `origin` 대상이 다를 수 있으니 푸시 전에는 항상 `git remote -v`를 확인한다.

## 9. 검색 색인·정식 운영 승인 전 남은 작업

1. 브랜드명과 사용할 최종 도메인을 확정하고 상표·도메인 중복 여부를 별도로 확인한다.
2. 문의 방법, 운영 주체 표시, 연결할 공식 판매처·카드사 안내 링크를 실제 운영 정보로 승인한다.
3. 카드사별 할부 개월, 수수료, 한도 등 변동 가능한 정보를 공식 출처와 대조한다.
4. 검색 공개가 승인되면 `app/layout.tsx`의 `noindex`를 해제하고 `app/robots.ts`가 계속 크롤링과 사이트맵 접근을 허용하는지 재확인한다.
5. 색인 허용 후 Google Search Console과 네이버 서치어드바이저에 사이트맵을 제출한다.
6. 사용자 지정 도메인을 연결한 경우 `NEXT_PUBLIC_SITE_URL` 배포 환경변수만 바꾸지 말고, `app/_data/guide-content.ts`의 `siteUrl`, `app/layout.tsx`의 `metadataBase` 기본값과 WebSite JSON-LD URL도 함께 변경한다. 이후 canonical, Open Graph, 사이트맵, 구조화 데이터의 도메인이 모두 같은지 검수한다.
7. OpenAI Sites 사본도 계속 운영할 경우 인증 콜백 충돌을 해결한 뒤 별도로 다시 배포하고 공개 URL을 검증한다.

`noindex` 해제는 코드 변경만으로 검색엔진 등록 완료를 의미하지 않는다. 실제 공개 HTML과 검색 도구의 계정 화면에서 각각 확인해야 한다.

## 10. 콘텐츠와 광고 문구 원칙

- `현금화`, `카드깡`, `급전`, `무조건 가능`, `신용 무관`, `100% 안전`처럼 금융 오해나 광고 정책 위험이 큰 표현은 사용하지 않는다.
- 합법성, 공식성, 수수료, 승인 가능 여부를 근거 없이 보장하지 않는다.
- 카드사·판매처마다 달라질 수 있는 조건은 기준일과 공식 확인 경로를 함께 표시한다.
- 일반 문의 페이지에서 카드번호, CVC, 비밀번호, 주민등록번호 등 민감정보 입력을 요구하지 않는다.
- 판매와 매입 서비스를 연결할 때도 정보 제공 페이지와 실제 거래 주체의 역할을 혼동하지 않는다.

## 11. 배포 전 최종 체크리스트

- [ ] `npm run lint` 통과
- [ ] `npm run build` 통과
- [ ] `git diff --check` 통과
- [ ] 13개 사이트맵 URL이 모두 정상 응답
- [ ] 모바일·태블릿·PC에서 가로 스크롤과 메뉴 동작 확인
- [ ] 페이지별 H1, title, description, canonical 중복 확인
- [ ] 내부 링크, 브레드크럼, 404 페이지 확인
- [ ] 계산기 입력값과 결과 안내 문구 확인
- [ ] 소셜 공유 이미지와 Open Graph 메타 확인
- [ ] 공개 승인 여부에 맞는 `index/noindex` 확인
- [ ] GitHub `main`과 로컬 HEAD 일치 확인

## 12. 주요 커밋 이력

| 커밋 | 내용 |
| --- | --- |
| `987bc4c` | 상품권 할부 가이드 초기 구현 |
| `ae507c5` | 배포 도메인을 소셜 메타데이터에 반영 |
| `2fa8c97` | Cloudflare Pages 정적 내보내기 수정 |
| `50c74fe` | Cloudflare Pages 출력 디렉터리 설정 |
| `410c3fe` | 기획서 기준 다중 페이지 구조 구현 |
| `6089c86` | 브랜드를 할부노트로 변경 |

앞으로 작업할 때는 기능·콘텐츠·배포 설정을 가능한 한 별도 커밋으로 나눠 변경 이유와 검수 범위를 추적할 수 있게 유지한다.
