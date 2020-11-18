const fontReSize = (baseWidth: number) => {
    if (!baseWidth) {
        baseWidth = 7.5;
    }

    const docEl = document.documentElement;
    docEl.style.fontSize = docEl.clientWidth / baseWidth + 'px';
}
export default fontReSize;