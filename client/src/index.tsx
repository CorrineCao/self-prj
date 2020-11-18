import * as React from "react";
import * as ReactDOM from "react-dom";
import fontAdaptation from 'util/fontAdaptation';
import AppRouter from './router';
import injectAccount from 'service/injectAccount';
import './style/index.less';

fontAdaptation(3.75);

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




