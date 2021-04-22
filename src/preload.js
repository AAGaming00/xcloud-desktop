const { ipcRenderer } = require("electron");

const style = document.createElement('style');
style.textContent = `
    .uhf-header, .c-huff-nav, #locale-picker-link + nav {
        display: none !important;
    }
`;
document.addEventListener('DOMContentLoaded', () => {
    document.head.appendChild(style);
});
window.addEventListener('load', () => {
    requestAnimationFrame(() => ipcRenderer.send('SHOW'));    
});