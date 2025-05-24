# YouTube 6열 레이아웃 사용자 스크립트

이 사용자 스크립트는 유튜브 홈 화면의 동영상 열 수를 기본 4개에서 **6개**로 변경해주는 간단한 유저 스크립트입니다.

✅ 영상 재배열 없음
✅ Tampermonkey, OrangeMonkey에서 안전하게 작동
✅ 가볍고 최소한의 코드

## 📦 설치 방법

1. [Tampermonkey](https://www.tampermonkey.net/) 또는 [OrangeMonkey](https://github.com/originell/OrangeMonkey) 확장 프로그램을 설치하세요.
2. 아래 링크를 클릭하여 스크립트를 설치하세요:

👉 [스크립트 설치하기](https://raw.githubusercontent.com/Saccharine1211/youtube-6col-layout/main/youtube-6col-layout.user.js)

### ⚠️ 크롬 보안 경고 주의사항

설치 링크를 눌렀을 때 아래와 같은 메시지가 뜨는 경우가 있습니다:

> "This site can't add apps, extensions, or user scripts."

이는 크롬 브라우저의 최근 보안 제한으로 인해 발생합니다. 자동 설치가 되지 않는다면 다음 방법을 이용하세요.

#### 🛠️ 수동 설치 방법

1. 확장 프로그램 아이콘 클릭 → `Dashboard(대시보드)` 클릭
2. `+ 새 스크립트` 클릭
3. [이 링크](https://github.com/Saccharine1211/youtube-6col-layout/blob/main/youtube-6col-layout.user.js)에서 코드를 복사해서 붙여넣기
4. 저장 (Ctrl+S)

---

## 🔧 기능 요약

* 유튜브 그리드 레이아웃 관련 CSS 변수를 수정하여 6열 배치 적용
* 페이지 이동 시 자동으로 다시 적용되도록 MutationObserver 사용
* 유튜브의 기본 기능 및 동작에는 영향을 주지 않음

## 📁 파일 구성

```
youtube-6col-layout/
├── README.md (영문)
├── README_KO.md (한글)
├── LICENSE
└── youtube-6col-layout.user.js
```

## 📝 라이선스

MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](./LICENSE) 파일을 참고하세요.
