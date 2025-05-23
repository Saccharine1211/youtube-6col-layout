// ==UserScript==
// @name         YouTube 6-Column Layout
// @namespace    https://github.com/Saccharine1211/youtube-6col-layout
// @version      1.0
// @description  Force YouTube to show 6 videos per row on the home page. No video reordering involved.
// @author       Your Name
// @license      MIT
// @match        https://www.youtube.com/
// @grant        none
// @run-at       document-idle
// @updateURL    https://raw.githubusercontent.com/Saccharine1211/youtube-6col-layout/main/youtube-6col.user.js
// @downloadURL  https://raw.githubusercontent.com/Saccharine1211/youtube-6col-layout/main/youtube-6col.user.js
// ==/UserScript==

(function () {
    'use strict';

    function applyGridColumnStyle() {
        const gridRenderer = document.querySelector('ytd-rich-grid-renderer');
        if (gridRenderer) {
            gridRenderer.style.setProperty('--ytd-rich-grid-items-per-row', '6');
            gridRenderer.style.setProperty('--ytd-rich-grid-posts-per-row', '6');
            gridRenderer.style.setProperty('--ytd-rich-grid-game-cards-per-row', '6');
            gridRenderer.style.setProperty('--ytd-rich-grid-slim-items-per-row', '6');
            gridRenderer.style.setProperty('--ytd-rich-grid-mini-game-cards-per-row', '6');
            console.log('[YouTube Layout] 6-column style applied');
        }
    }

    const observer = new MutationObserver(() => {
        applyGridColumnStyle();
    });

    window.addEventListener('yt-page-data-updated', () => {
        setTimeout(applyGridColumnStyle, 300);
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    applyGridColumnStyle();
})();
