import * as React from "react";
import * as ReactDOM from "react-dom";
import fontReSize from 'util/fontReSize';
import AppRouter from './router';
import injectAccount from 'service/injectAccount';
import './style/index.less';

// 字体rem基数
fontReSize(3.75);
// 调整窗口大小调整基数
window.addEventListener('resize', () => fontReSize(3.75), false);

const render = (): void => {
    ReactDOM.render(
        <AppRouter/>,
        document.getElementById("app")
    );
}

// 热加载
var module: any;
if (module && module.hot) {
    module.hot.accept();
    // injectAccount(render);
    render();
}




