exports.ids = [0];
exports.modules = [
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);


function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

//   function getComponent() {
//     var element = document.createElement('div');

//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
//       var element = document.createElement('div');
 
//       element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 
//       return element;
 
//     }).catch(error => 'An error occurred while loading the component');
//   }

// document.body.appendChild(component());
// getComponent().then(component => {
//     document.body.appendChild(component);
// })

/***/ })
];;