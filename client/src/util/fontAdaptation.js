'use strict';

exports.__esModule = true;
exports.default = void 0;

function fontAdapt(baseWidth) {
  if (baseWidth === void 0) {
    baseWidth = 7.5;
  }

  var docEl = document.documentElement;
  docEl.style.fontSize = docEl.clientWidth / baseWidth + 'px';
}

window.addEventListener('resize', fontAdapt, false);
var _default = fontAdapt;
exports.default = _default;
