# Cloudflare Pages 배포 설정

Cloudflare Pages 프로젝트의 **설정 → 빌드 및 배포**에서 다음 값으로 설정합니다.

- 프로덕션 브랜치: `main`
- 프레임워크 프리셋: `Next.js (Static HTML Export)` 또는 `없음`
- 빌드 명령: `npm run build`
- 빌드 출력 디렉터리: `out`
- 루트 디렉터리: 비워 둠

`npm run build`는 정적 내보내기를 실행하여 `out/index.html`을 생성합니다.

`wrangler.jsonc`에도 `pages_build_output_dir`을 `./out`으로 지정해 Git 자동 배포와 CLI 직접 배포가 같은 산출물을 사용하도록 고정했습니다.

기존 OpenAI Sites용 Worker 빌드는 `npm run build:sites`로 유지합니다.
