# YouTube 6-Column Layout Userscript

This userscript forces YouTube's homepage to display 6 videos per row by adjusting CSS variables.

✅ No reordering logic involved
✅ Safe for Tampermonkey and OrangeMonkey
✅ Lightweight and minimal

📄 **한국어 설명은 [README\_KO.md](./README_KO.md) 파일을 참고하세요.**

## 📦 Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) or [OrangeMonkey](https://github.com/originell/OrangeMonkey).
2. Click the link below to install:

👉 [Install Script](https://raw.githubusercontent.com/Saccharine1211/youtube-6col-layout/main/youtube-6col-layout.user.js)

### ⚠️ Note on Chrome Security

If you see the message:

> "This site can't add apps, extensions, or user scripts."

It is due to recent Chrome security restrictions for extensions and scripts from third-party domains.

If installation does not start automatically:

* Try opening the link in **Firefox** (which may not block it)
* Or follow the manual installation steps below

#### 🛠️ Manual Installation Steps:

1. Click the Tampermonkey (or OrangeMonkey) extension icon → `Dashboard`
2. Click `+ Create a new script`
3. Copy and paste the code from [this file](https://github.com/Saccharine1211/youtube-6col-layout/blob/main/youtube-6col-layout.user.js)
4. Save the script (Ctrl+S)

This ensures installation even when automatic script installation is blocked.

## 🔧 Features

* Adjusts `--ytd-rich-grid-items-per-row` and related CSS variables to display 6 columns
* Automatically re-applies on navigation using MutationObserver
* No interference with YouTube dynamic layout or script loading

## 📁 File Structure

```
youtube-6col-layout/
├── README.md
├── README_KO.md
├── LICENSE
└── youtube-6col-layout.user.js
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
