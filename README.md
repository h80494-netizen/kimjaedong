# 김재동 회장 개인 홈페이지 — kimjaedong.com

**최종 반영: 2026-09-14 · build 20260914d**
2026.09.07 회장님 문구 수정안 반영 + 브로슈어(14p)·사업계획서 기반 「밸류업 모델」「사업아이템」 페이지 신설 + 안내·고지 문구 전면 삭제 + 네이버 서치어드바이저 소유확인 태그 적용. 총 14개 페이지.

HMK홀딩스그룹 김재동 회장의 퍼스널 브랜딩 사이트입니다. 정적 HTML로 제작되어 서버나 빌드 과정 없이 그대로 배포할 수 있습니다.

---

## 폴더 구조

```
site/
├── index.html            홈
├── profile.html          인물 › 프로필
├── journey.html          인물 › 사업 여정
├── philosophy.html       인물 › 경영 철학
├── track-record.html     성과 › 트랙 레코드
├── cases.html            성과 › 대표 사례
├── expertise.html        전문성 › NPL 특수물건
├── methodology.html      전문성 › 문제 해결 방법
├── hmk-group.html        현재 › HMK홀딩스그룹
├── vision.html           현재 › 앞으로의 계획
├── press.html            미디어 › 언론 보도
├── contact.html          연락처
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── img/
        ├── portrait.jpg
        ├── portrait@2x.jpg
        └── hmk-logo.png
```

---

## 이번 업데이트 반영 방법 (기존 저장소 덮어쓰기)

저장소 `naadaa87/kimjaedong`이 이미 Cloudflare Pages에 연결돼 있으므로, 파일만 교체하면 자동 배포됩니다.

1. GitHub 저장소 화면 → **Add file → Upload files**
2. `site` 폴더 안의 내용물 전체(Ctrl+A)를 드래그 앤 드롭 — 같은 이름의 파일은 자동으로 덮어써집니다
3. Commit changes → 1~2분 뒤 kimjaedong.com 새로고침
4. 페이지 소스 하단에 `<!-- build 20260914d -->`가 보이면 반영 완료

CSS·JS에 `?v=20260914d` 버전 문자열이 붙어 있어 브라우저 캐시 문제 없이 갱신됩니다.

---

## 처음부터 올릴 때 (참고)

1. GitHub에서 새 저장소를 만듭니다. (예: `kimjaedong`)
2. 저장소 화면에서 **Add file → Upload files**를 누릅니다.
3. **파일 선택 버튼을 쓰지 말고, `site` 폴더 안의 내용물을 통째로 드래그 앤 드롭**합니다.
   - 파일 선택 버튼을 쓰면 폴더 경로가 사라져 `assets/` 하위 파일이 루트로 올라갑니다.
   - `index.html`부터 `assets` 폴더까지 한 번에 끌어다 놓으면 경로가 유지됩니다.
4. Commit changes를 눌러 저장합니다.

업로드 후 저장소 루트에 `index.html`과 `assets` 폴더가 나란히 보이면 정상입니다.

---

## Cloudflare Pages 배포

1. Cloudflare 대시보드 → **Workers & Pages → Create → Pages → Connect to Git**
2. 방금 만든 GitHub 저장소를 선택합니다.
3. 빌드 설정은 아래와 같이 둡니다.

   | 항목 | 값 |
   |---|---|
   | Framework preset | **None** |
   | Build command | *(비워둠)* |
   | Build output directory | **`/`** |

4. Save and Deploy를 누르면 1~2분 안에 `프로젝트명.pages.dev` 주소가 생성됩니다.

### 도메인 연결

Pages 프로젝트 → **Custom domains → Set up a domain**에서 원하는 도메인을 입력하면 됩니다.

---

## 수정 방법

- **내용 수정**: 각 HTML 파일을 텍스트 편집기로 열어 본문을 고칩니다.
- **색상·서체 수정**: `assets/css/style.css` 최상단 `:root` 블록의 변수만 바꾸면 전체에 반영됩니다.

```css
--accent: #E76D27;   /* 포인트 컬러 (HMK 오렌지) */
--ink:    #14203A;   /* 본문·제목 색 */
--paper:  #FFFFFF;   /* 기본 배경 */
--paper-2:#F4F6F8;   /* 섹션 교차 배경 */
```

- **사진 교체**: `assets/img/portrait@2x.jpg`를 같은 이름으로 덮어씁니다. 세로가 긴 인물 사진(3:4 비율)이 잘 맞습니다.

---

## 네이버 서치어드바이저 소유확인

전 페이지 `<head>`에 아래 두 줄이 들어가 있습니다.

```html
<meta name="naver-site-verification" content="5c83f0580ba2dbf93f9a06dd07752e1a1329735f" />
<meta name="naver-site-verification" content="e4e9728e44005eb7ffdd98626daec364b08c9742" />
```

앞줄은 `kimjaedong.com`, 뒷줄은 `www.kimjaedong.com` 용입니다. 배포가 끝난 뒤 서치어드바이저에서 두 사이트 각각 [소유확인]을 누르면 됩니다.

사이트맵(`sitemap.xml`)도 함께 등록하시면 색인이 빨라집니다.
→ 서치어드바이저 › 요청 › 사이트맵 제출 › `https://kimjaedong.com/sitemap.xml`

---

## 사용 서체

| 용도 | 서체 | 출처 |
|---|---|---|
| 제목 | Gowun Batang | Google Fonts |
| 본문 | Pretendard | jsDelivr CDN |
| 숫자·라벨 | IBM Plex Mono | Google Fonts |

세 가지 모두 CDN에서 불러옵니다. 별도 설치가 필요 없습니다.

---

## 확인된 사항

- 12개 페이지 내부 링크 전수 검증 완료 (깨진 링크 없음)
- 모바일(390px)부터 데스크톱(1440px)까지 반응형 확인
- 키보드 포커스 표시, `prefers-reduced-motion` 대응 적용
- `robots.txt`, `sitemap.xml`, Open Graph 메타태그 포함

---

## 게재 내용에 관한 안내

본 사이트의 수치와 이력은 HMK홀딩스그룹 제공 자료 및 공개된 언론 보도를 정리한 것입니다.
투자 권유나 청약 안내에 해당하지 않으며, 공개 전 아래 항목을 한 번 확인하시기를 권합니다.

- 트랙 레코드 수치(60억 → 1조 2천억, 142,000건, 21건 등)의 최종 표기 기준
- 보유 자산 명칭과 지역 표기
- 연락처, 주소, 관련 사이트 주소
