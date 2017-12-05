(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var myUrl = 'https://rex-tsou.com';
  var BOHAN = 'BOHAN Graphic Design Office';
  var urlBOHAN = 'https://goo.gl/bkAxv1';
  var styleConsole = '\n    background: #131313;\n    color: #B1F1F1;\n    font-size: 18px;\n    border-bottom: 1px solid transparent;\n    padding: .1rem .5rem;\n  ';
  var styleConsole2 = '\n    background: #131313;\n    color: #DFF1F1;\n    font-size: 12px;\n    border-bottom: 1px solid transparent;\n    padding: .1rem .5rem;\n  ';
  var animSwitch = document.querySelector('#switch');
  var sportPanels = document.querySelectorAll('.sport-panel');
  var switchAnims = function switchAnims() {
    sportPanels.forEach(function (panel) {
      return panel.classList.toggle('is-active');
    });
  };

  console.log('%cAuthor: Rex Tsou(akccakcctw), ' + myUrl, styleConsole);
  console.log('%cInspired: ' + BOHAN + ', ' + urlBOHAN, styleConsole2);

  animSwitch.addEventListener('click', switchAnims);
});

})));
