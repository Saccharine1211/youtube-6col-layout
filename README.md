# YouTube 6-Column Layout Userscript

This userscript forces YouTube's homepage to display 6 videos per row by adjusting CSS variables.

✅ No reordering logic involved
✅ Safe for Tampermonkey and OrangeMonkey
✅ Lightweight and minimal

## 📦 Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) or [OrangeMonkey](https://github.com/originell/OrangeMonkey).
2. Click the link below to install:

👉 [Install Script](https://raw.githubusercontent.com/Saccharine1211/youtube-6col-layout/main/youtube-6col-layout.user.js)

## 🔧 Features

* Adjusts `--ytd-rich-grid-items-per-row` and related CSS variables to display 6 columns
* Automatically re-applies on navigation using MutationObserver
* No interference with YouTube dynamic layout or script loading

## 📁 File Structure

```
youtube-6col-layout/
├── README.md
├── LICENSE
└── youtube-6col-layout.user.js
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
