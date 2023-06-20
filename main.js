/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Nunito-VariableFont_wght.ttf */ "./src/fonts/Nunito-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Nunito";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

body,
html {
  height: 100%;
  margin: 0;
  background-color: black;
  font-family: "Nunito";
}

.container {
  text-align: center;
  height: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 240px 5fr;
  grid-template-rows: 135px 6fr 0.25fr;
}

.header {
  background-color: #2b2b2c;
  grid-column: 2 / 3;
  padding: 15px;
  display: grid;
  grid-template-rows: 1fr 1fr;
}

.button-container {
  display: flex;
  justify-content: end;
}

.button-container button {
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2b2b2c;
  border: none;
  border-radius: 10px;
}

.button-container button:hover {
  background-color: #363637;
}

.plus-icon {
  height: 24px;
  width: 24px;
  filter: invert(37%) sepia(10%) saturate(0%) hue-rotate(281deg)
    brightness(102%) contrast(92%);
}

.header-text-container {
  font-family: "Nunito";
  font-weight: 800;
  font-size: 38px;
  letter-spacing: -1px;
  grid-row: 2 / 3;
  display: flex;
  justify-content: space-between;
}

.today-header {
  color: #007aff;
}

.reminders-header {
  color: #ff9f0b;
}

.number {
  font-weight: 500;
}

/* 
    colors
    Today - blue #007aff
    Reminders - orange #ff9f0b
    scheduled - red #ff453a
    all - grey #5b626a
    boxes - lighter grey #595a5e
    font colors inside box - lighter grey #929295
*/

a {
  color: white;
}

.sidebar {
  grid-row: 1 / 3;
  background-color: #3f4044;

  display: grid;
  grid-template-rows: 110px 135px auto 32px;
}

.logo-container {
  display: grid;
  padding-bottom: 15px;
}

.logo-container input {
  align-self: self-end;
  justify-self: center;
  width: 90%;
  height: 25px;
  background-color: #4c4d51;
  border: none;
  border-radius: 5px;
  text-align: center;
}

.todo-category-container {
  width: 220px;
  justify-self: center;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.circle {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: relative;
  display: grid;
}

.circle-today {
  background-color: #007aff;
}

.circle-scheduled {
  background-color: #ff453a;
}

.todo-icons {
  width: 80%;
  height: 80%;
  object-fit: contain;
  align-self: center;
  justify-self: center;
  filter: invert(100%) sepia(0%) saturate(5447%) hue-rotate(176deg)
    brightness(126%) contrast(110%);
}

.todo {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  height: 90%;

  background-color: #595a5e;
  border-radius: 5px;
  border: none;
  padding-top: 10px;
  padding-bottom: 8px;
}

.all-button {
  grid-column: 1 / 3;
  background-color: #595a5e;
  border-radius: 5px;
  border: none;
  height: 90%;
  margin-top: -7px;
  padding-bottom: 15px;
}

.circle-all {
  background-color: #5b626a;
}

.todo-number {
  justify-self: end;
  align-self: start;
  color: #959598;
  font-family: "Nunito";
  font-size: 22px;
  font-weight: 600;
  margin-top: -3px;
}

.todo-title {
  color: #959598;
  font-family: "Nunito";
  font-size: 15px;
  font-weight: 600;
  align-self: end;
  justify-self: start;
}

.today-button:active {
  background-color: #007aff;
}

.today-button:active .todo-number,
.today-button:active .todo-title,
.scheduled-button:active .todo-number,
.scheduled-button:active .todo-title,
.all-button:active .todo-number,
.all-button:active .todo-title {
  color: #ffffff;
}

.today-button:active #calendar-blank {
  filter: invert(29%) sepia(98%) saturate(2592%) hue-rotate(201deg)
    brightness(103%) contrast(106%);
}

.today-button:active .circle-today,
.all-button:active .circle-all,
.scheduled-button:active .circle-scheduled {
  background-color: #ffffff;
}

.scheduled-button:active {
  background-color: #ff453a;
}

.scheduled-button:active #calendar-month {
  filter: invert(65%) sepia(67%) saturate(7444%) hue-rotate(339deg)
    brightness(101%) contrast(101%);
}

.all-button:active {
  background-color: #5b626a;
}
.all-button:active #inbox {
  filter: invert(40%) sepia(9%) saturate(495%) hue-rotate(172deg)
    brightness(90%) contrast(86%);
}
.my-lists {
  display: grid;
  grid-template-rows: 32px;
  grid-auto-rows: 36px;
  grid-template-columns: 1fr;
  margin-top: 5px;
  padding-top: 5px;

  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}

/* For WebKit browsers (Chrome, Safari) */
.my-lists::-webkit-scrollbar {
  width: 6px;
}

.my-lists::-webkit-scrollbar-track {
  background-color: transparent;
}

.my-lists::-webkit-scrollbar-thumb {
  background-color: transparent;
}

/* For Firefox */
.my-lists {
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}

.my-lists {
  scrollbar-color: transparent transparent;
}

.my-lists-title {
  padding-left: 16px;
  justify-self: start;
  align-self: end;

  font-family: "Nunito";
  color: #727377;
  font-size: 12px;
  font-weight: bold;
}

.circle-lists {
  background-color: #007aff;
}

.list-buttons {
  width: 220px;
  height: 100%;
  background-color: #3f4044;
  border-radius: 5px;
  border: none;
  margin-left: 10px;
  display: grid;
  grid-template-columns: auto 24px;
}

.left-list-panel {
  width: 100%;
  display: flex;
  justify-self: left;
  align-self: center;
  align-items: center;
}

.list-name {
  margin-left: 10px;
  color: white;
}

.list-number {
  align-self: center;
  color: #6f7074;
}

.list-buttons:active {
  background-color: #3375e1;
}

.list-buttons:active .list-number {
  color: #5087e5;
}

.add-list-button {
  background-color: #3f4044;
  border: none;
}

.add-list-text {
  margin-left: 8px;
  color: #727377;
}

.circle-add-list {
  width: 12px;
  height: 12px;
  border: 2px solid #727377;
  border-radius: 50%;
}

.todo-icons {
  width: 80%;
  height: 80%;
  object-fit: contain;
  align-self: center;
  justify-self: center;
  filter: invert(100%) sepia(0%) saturate(5447%) hue-rotate(176deg)
    brightness(126%) contrast(110%);
}

.add-list-icon {
  filter: invert(47%) sepia(13%) saturate(103%) hue-rotate(191deg)
    brightness(91%) contrast(90%);
}

.no-reminders {
  justify-self: center;
  align-self: center;
  color: #727377;
  font-size: x-large;
}

.round-checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #999;
  outline: none;
  cursor: pointer;
}

.round-checkbox:checked {
  background-color: #999;
}

ul {
  padding-left: 15px;
}

li {
  display: flex;
  justify-content: start;
  height: 36px;
  list-style: none;
}

.label-line {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #343435;
  margin-top: 4px;
}

label {
  width: 100%;
  padding-left: 10px;
  text-align: start;
  color: #d3d3d3;
  font-weight: 300;
}

.nav {
  background-color: #00ddff;
}

.article {
  background-color: #2b2b2c;
  display: grid;
  grid-auto-rows: 36px;
}

.article p {
  font-size: 18px;
  font-family: sans-serif;
  color: white;
  text-align: left;
}

.footer {
  background-color: black;
  grid-column: 1 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Nunito";
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"Nunito\";\n  src: url(\"./fonts/Nunito-VariableFont_wght.ttf\");\n}\n\nbody,\nhtml {\n  height: 100%;\n  margin: 0;\n  background-color: black;\n  font-family: \"Nunito\";\n}\n\n.container {\n  text-align: center;\n  height: 100%;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: 240px 5fr;\n  grid-template-rows: 135px 6fr 0.25fr;\n}\n\n.header {\n  background-color: #2b2b2c;\n  grid-column: 2 / 3;\n  padding: 15px;\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n}\n\n.button-container {\n  display: flex;\n  justify-content: end;\n}\n\n.button-container button {\n  height: 32px;\n  width: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #2b2b2c;\n  border: none;\n  border-radius: 10px;\n}\n\n.button-container button:hover {\n  background-color: #363637;\n}\n\n.plus-icon {\n  height: 24px;\n  width: 24px;\n  filter: invert(37%) sepia(10%) saturate(0%) hue-rotate(281deg)\n    brightness(102%) contrast(92%);\n}\n\n.header-text-container {\n  font-family: \"Nunito\";\n  font-weight: 800;\n  font-size: 38px;\n  letter-spacing: -1px;\n  grid-row: 2 / 3;\n  display: flex;\n  justify-content: space-between;\n}\n\n.today-header {\n  color: #007aff;\n}\n\n.reminders-header {\n  color: #ff9f0b;\n}\n\n.number {\n  font-weight: 500;\n}\n\n/* \n    colors\n    Today - blue #007aff\n    Reminders - orange #ff9f0b\n    scheduled - red #ff453a\n    all - grey #5b626a\n    boxes - lighter grey #595a5e\n    font colors inside box - lighter grey #929295\n*/\n\na {\n  color: white;\n}\n\n.sidebar {\n  grid-row: 1 / 3;\n  background-color: #3f4044;\n\n  display: grid;\n  grid-template-rows: 110px 135px auto 32px;\n}\n\n.logo-container {\n  display: grid;\n  padding-bottom: 15px;\n}\n\n.logo-container input {\n  align-self: self-end;\n  justify-self: center;\n  width: 90%;\n  height: 25px;\n  background-color: #4c4d51;\n  border: none;\n  border-radius: 5px;\n  text-align: center;\n}\n\n.todo-category-container {\n  width: 220px;\n  justify-self: center;\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.circle {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  position: relative;\n  display: grid;\n}\n\n.circle-today {\n  background-color: #007aff;\n}\n\n.circle-scheduled {\n  background-color: #ff453a;\n}\n\n.todo-icons {\n  width: 80%;\n  height: 80%;\n  object-fit: contain;\n  align-self: center;\n  justify-self: center;\n  filter: invert(100%) sepia(0%) saturate(5447%) hue-rotate(176deg)\n    brightness(126%) contrast(110%);\n}\n\n.todo {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: 1fr 1fr;\n  height: 90%;\n\n  background-color: #595a5e;\n  border-radius: 5px;\n  border: none;\n  padding-top: 10px;\n  padding-bottom: 8px;\n}\n\n.all-button {\n  grid-column: 1 / 3;\n  background-color: #595a5e;\n  border-radius: 5px;\n  border: none;\n  height: 90%;\n  margin-top: -7px;\n  padding-bottom: 15px;\n}\n\n.circle-all {\n  background-color: #5b626a;\n}\n\n.todo-number {\n  justify-self: end;\n  align-self: start;\n  color: #959598;\n  font-family: \"Nunito\";\n  font-size: 22px;\n  font-weight: 600;\n  margin-top: -3px;\n}\n\n.todo-title {\n  color: #959598;\n  font-family: \"Nunito\";\n  font-size: 15px;\n  font-weight: 600;\n  align-self: end;\n  justify-self: start;\n}\n\n.today-button:active {\n  background-color: #007aff;\n}\n\n.today-button:active .todo-number,\n.today-button:active .todo-title,\n.scheduled-button:active .todo-number,\n.scheduled-button:active .todo-title,\n.all-button:active .todo-number,\n.all-button:active .todo-title {\n  color: #ffffff;\n}\n\n.today-button:active #calendar-blank {\n  filter: invert(29%) sepia(98%) saturate(2592%) hue-rotate(201deg)\n    brightness(103%) contrast(106%);\n}\n\n.today-button:active .circle-today,\n.all-button:active .circle-all,\n.scheduled-button:active .circle-scheduled {\n  background-color: #ffffff;\n}\n\n.scheduled-button:active {\n  background-color: #ff453a;\n}\n\n.scheduled-button:active #calendar-month {\n  filter: invert(65%) sepia(67%) saturate(7444%) hue-rotate(339deg)\n    brightness(101%) contrast(101%);\n}\n\n.all-button:active {\n  background-color: #5b626a;\n}\n.all-button:active #inbox {\n  filter: invert(40%) sepia(9%) saturate(495%) hue-rotate(172deg)\n    brightness(90%) contrast(86%);\n}\n.my-lists {\n  display: grid;\n  grid-template-rows: 32px;\n  grid-auto-rows: 36px;\n  grid-template-columns: 1fr;\n  margin-top: 5px;\n  padding-top: 5px;\n\n  overflow-y: scroll;\n  scrollbar-width: thin;\n  scrollbar-color: transparent transparent;\n}\n\n/* For WebKit browsers (Chrome, Safari) */\n.my-lists::-webkit-scrollbar {\n  width: 6px;\n}\n\n.my-lists::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n\n.my-lists::-webkit-scrollbar-thumb {\n  background-color: transparent;\n}\n\n/* For Firefox */\n.my-lists {\n  scrollbar-width: thin;\n  scrollbar-color: transparent transparent;\n}\n\n.my-lists {\n  scrollbar-color: transparent transparent;\n}\n\n.my-lists-title {\n  padding-left: 16px;\n  justify-self: start;\n  align-self: end;\n\n  font-family: \"Nunito\";\n  color: #727377;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.circle-lists {\n  background-color: #007aff;\n}\n\n.list-buttons {\n  width: 220px;\n  height: 100%;\n  background-color: #3f4044;\n  border-radius: 5px;\n  border: none;\n  margin-left: 10px;\n  display: grid;\n  grid-template-columns: auto 24px;\n}\n\n.left-list-panel {\n  width: 100%;\n  display: flex;\n  justify-self: left;\n  align-self: center;\n  align-items: center;\n}\n\n.list-name {\n  margin-left: 10px;\n  color: white;\n}\n\n.list-number {\n  align-self: center;\n  color: #6f7074;\n}\n\n.list-buttons:active {\n  background-color: #3375e1;\n}\n\n.list-buttons:active .list-number {\n  color: #5087e5;\n}\n\n.add-list-button {\n  background-color: #3f4044;\n  border: none;\n}\n\n.add-list-text {\n  margin-left: 8px;\n  color: #727377;\n}\n\n.circle-add-list {\n  width: 12px;\n  height: 12px;\n  border: 2px solid #727377;\n  border-radius: 50%;\n}\n\n.todo-icons {\n  width: 80%;\n  height: 80%;\n  object-fit: contain;\n  align-self: center;\n  justify-self: center;\n  filter: invert(100%) sepia(0%) saturate(5447%) hue-rotate(176deg)\n    brightness(126%) contrast(110%);\n}\n\n.add-list-icon {\n  filter: invert(47%) sepia(13%) saturate(103%) hue-rotate(191deg)\n    brightness(91%) contrast(90%);\n}\n\n.no-reminders {\n  justify-self: center;\n  align-self: center;\n  color: #727377;\n  font-size: x-large;\n}\n\n.round-checkbox {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 1px solid #999;\n  outline: none;\n  cursor: pointer;\n}\n\n.round-checkbox:checked {\n  background-color: #999;\n}\n\nul {\n  padding-left: 15px;\n}\n\nli {\n  display: flex;\n  justify-content: start;\n  height: 36px;\n  list-style: none;\n}\n\n.label-line {\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: #343435;\n  margin-top: 4px;\n}\n\nlabel {\n  width: 100%;\n  padding-left: 10px;\n  text-align: start;\n  color: #d3d3d3;\n  font-weight: 300;\n}\n\n.nav {\n  background-color: #00ddff;\n}\n\n.article {\n  background-color: #2b2b2c;\n  display: grid;\n  grid-auto-rows: 36px;\n}\n\n.article p {\n  font-size: 18px;\n  font-family: sans-serif;\n  color: white;\n  text-align: left;\n}\n\n.footer {\n  background-color: black;\n  grid-column: 1 / 3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-family: \"Nunito\";\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/body.js":
/*!*********************!*\
  !*** ./src/body.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sidebar */ "./src/components/sidebar.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ "./src/components/header.js");
/* harmony import */ var _components_article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/article */ "./src/components/article.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/footer.js");





const body = () => {
    const containerElmt = document.createElement("div");
    containerElmt.classList.add("container");

    containerElmt.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_1__.header)());
    containerElmt.appendChild((0,_components_sidebar__WEBPACK_IMPORTED_MODULE_0__["default"])());
    containerElmt.appendChild((0,_components_article__WEBPACK_IMPORTED_MODULE_2__["default"])());
    containerElmt.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_3__["default"])());

    return containerElmt;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (body);



/***/ }),

/***/ "./src/components/article.js":
/*!***********************************!*\
  !*** ./src/components/article.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const article = () => {
    const articleElmt = document.createElement("article");
    // articleElmt.appendChild(noReminders());
    articleElmt.appendChild(remindItems());
    articleElmt.classList.add("article");
    return articleElmt;
}

const remindItems = () => {
    const todoListContainer = document.createElement('div');
    todoListContainer.classList.add("todo-list");
    const todoList = document.createElement('ul');
    
    const todoItems = [
      'Schema',
      'Figure out hosting',
      'Task 3'
    ];
    
    todoItems.forEach(function(item) {
      const li = document.createElement('li');
    
      li.style.listStyle = 'none';
    
      const label = document.createElement('label');
      label.textContent = item;
    
      const line = document.createElement('span');
      line.classList.add('label-line'); 
    
      label.appendChild(line);
    
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('round-checkbox');
    
      li.appendChild(checkbox);
      li.appendChild(label);
    
      todoList.appendChild(li);
    });
    
    todoListContainer.appendChild(todoList);
    return todoListContainer;

}

const noReminders = () => {
    const noRemindersElmt = document.createElement("div");
    noRemindersElmt.classList.add("no-reminders")
    noRemindersElmt.innerText = "No Reminders";

    return noRemindersElmt;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (article);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   header: () => (/* binding */ header),
/* harmony export */   today: () => (/* binding */ today)
/* harmony export */ });
/* harmony import */ var _assets_plus_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/plus.svg */ "./src/components/assets/plus.svg");


const header = () => {
  const headerElmt = document.createElement("header");
  headerElmt.classList.add("header");
  headerElmt.classList.add("reminders-header");

  const buttonCtnElmt = document.createElement("div");
  buttonCtnElmt.classList.add("button-container");

  const buttonElmt = document.createElement("button");
  const plusElmt = new Image();
  plusElmt.src = _assets_plus_svg__WEBPACK_IMPORTED_MODULE_0__;
  plusElmt.classList.add("plus-icon");
  buttonElmt.appendChild(plusElmt);


  buttonCtnElmt.appendChild(buttonElmt);
  headerElmt.appendChild(buttonCtnElmt);

  const headerTextContainerElmt = document.createElement("div");
  headerTextContainerElmt.classList.add("header-text-container");

  const title = document.createElement("span");
  title.innerHTML = "Reminders";
  headerTextContainerElmt.appendChild(title);

  const number = document.createElement("span");
  number.classList.add("number");
  number.innerHTML = "17";
  headerTextContainerElmt.appendChild(number);

  headerElmt.appendChild(headerTextContainerElmt);

  return headerElmt;
};

const today = () => {
  const headerElmt = document.createElement("header");
  headerElmt.classList.add("header");
  headerElmt.classList.add("today-header");
  headerElmt.innerText = "Today";
  return headerElmt;
};


/***/ }),

/***/ "./src/components/sidebar.js":
/*!***********************************!*\
  !*** ./src/components/sidebar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_calendar_blank_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/calendar-blank.svg */ "./src/components/assets/calendar-blank.svg");
/* harmony import */ var _assets_calendar_month_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/calendar-month.svg */ "./src/components/assets/calendar-month.svg");
/* harmony import */ var _assets_inbox_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/inbox.svg */ "./src/components/assets/inbox.svg");
/* harmony import */ var _assets_format_list_bulleted_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/format-list-bulleted.svg */ "./src/components/assets/format-list-bulleted.svg");
/* harmony import */ var _assets_plus_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/plus.svg */ "./src/components/assets/plus.svg");






const sidebar = () => {
  const sidebarElmt = document.createElement("div");
  sidebarElmt.classList.add("sidebar");

  const logoContainerElmt = document.createElement("div");
  logoContainerElmt.classList.add("logo-container");

  const inputLogo = document.createElement("input");
  inputLogo.placeholder = "Apple Reminders Clone";
  logoContainerElmt.appendChild(inputLogo);
  sidebarElmt.appendChild(logoContainerElmt);

  const todoCategoryContainer = document.createElement("div");
  todoCategoryContainer.classList.add("todo-category-container");

  const todayButtonElmt = document.createElement("button");
  todayButtonElmt.classList.add("todo");
  todayButtonElmt.classList.add("today-button");

  const todayCircleElmt = document.createElement("div");
  const calendarBlankIcon = document.createElement("img");
  calendarBlankIcon.classList.add("todo-icons");
  calendarBlankIcon.id = "calendar-blank";
  calendarBlankIcon.src = _assets_calendar_blank_svg__WEBPACK_IMPORTED_MODULE_0__;
  todayCircleElmt.appendChild(calendarBlankIcon);
  todayCircleElmt.classList.add("circle");
  todayCircleElmt.classList.add("circle-today");
  todayButtonElmt.appendChild(todayCircleElmt);


  const todayNumberElmt = document.createElement("div");
  todayNumberElmt.classList.add("todo-number");
  todayNumberElmt.innerHTML = 5;
  todayButtonElmt.appendChild(todayNumberElmt);

  const todayTitleElmt = document.createElement("div");
  todayTitleElmt.classList.add("todo-title");
  todayTitleElmt.innerText = "Today";
  todayButtonElmt.appendChild(todayTitleElmt);

  todoCategoryContainer.appendChild(todayButtonElmt);

  const scheduledButtonElmt = document.createElement("button");
  scheduledButtonElmt.classList.add("todo");
  scheduledButtonElmt.classList.add("scheduled-button");

  const scheduledCircleElmt = document.createElement("div");
  const calendarMonthIcon = document.createElement("img");
  calendarMonthIcon.classList.add("todo-icons")
  calendarMonthIcon.id = "calendar-month";
  calendarMonthIcon.src = _assets_calendar_month_svg__WEBPACK_IMPORTED_MODULE_1__;
  scheduledCircleElmt.appendChild(calendarMonthIcon);
  scheduledCircleElmt.classList.add("circle");
  scheduledCircleElmt.classList.add("circle-scheduled");
  scheduledButtonElmt.appendChild(scheduledCircleElmt);


  const scheduledNumberElmt = document.createElement("div");
  scheduledNumberElmt.classList.add("todo-number");
  scheduledNumberElmt.innerHTML = 5;
  scheduledButtonElmt.appendChild(scheduledNumberElmt);

  const scheduledTitleElmt = document.createElement("div");
  scheduledTitleElmt.classList.add("todo-title");
  scheduledTitleElmt.innerText = "Scheduled";
  scheduledButtonElmt.appendChild(scheduledTitleElmt);

  todoCategoryContainer.appendChild(scheduledButtonElmt);

  const allButtonElmt = document.createElement("button");
  allButtonElmt.classList.add("all-button");
  allButtonElmt.classList.add("todo");

  const allCircleElmt = document.createElement("div");
  const inboxIcon = document.createElement("img");
  inboxIcon.src = _assets_calendar_blank_svg__WEBPACK_IMPORTED_MODULE_0__
  inboxIcon.classList.add("todo-icons");
  inboxIcon.id = "inbox";
  inboxIcon.src = _assets_inbox_svg__WEBPACK_IMPORTED_MODULE_2__;
  allCircleElmt.appendChild(inboxIcon);
  allCircleElmt.classList.add("circle");
  allCircleElmt.classList.add("circle-all");
  allButtonElmt.appendChild(allCircleElmt);


  const allNumberElmt = document.createElement("div");
  allNumberElmt.classList.add("todo-number");
  allNumberElmt.innerHTML = "17";
  allButtonElmt.appendChild(allNumberElmt);

  const allTitleElmt = document.createElement("div");
  allTitleElmt.classList.add("todo-title");
  allTitleElmt.innerText = "All";
  allButtonElmt.appendChild(allTitleElmt);

  todoCategoryContainer.appendChild(allButtonElmt);

  sidebarElmt.appendChild(todoCategoryContainer);

  // create mylists
  const myListsContainerElmt = document.createElement("div");
  myListsContainerElmt.classList.add("my-lists");

  const myListsTitleElmt = document.createElement("div");
  myListsTitleElmt.classList.add("my-lists-title");
  myListsTitleElmt.innerText = "My Lists"
  myListsContainerElmt.appendChild(myListsTitleElmt);

  for (let i = 0; i < 3; i++) {
    const listTest = document.createElement("div");

    const listButtonElmt = document.createElement("button");
    listButtonElmt.classList.add("list-buttons");

    const leftListPanelElmt = document.createElement("div");
    leftListPanelElmt.classList.add("left-list-panel");
    const listCircleElmt = document.createElement("div");
    const inboxIcon = document.createElement("img");
    inboxIcon.classList.add("todo-icons")
    inboxIcon.src = _assets_format_list_bulleted_svg__WEBPACK_IMPORTED_MODULE_3__;
    listCircleElmt.appendChild(inboxIcon);
    listCircleElmt.classList.add("circle");
    listCircleElmt.classList.add("circle-lists");
    leftListPanelElmt.appendChild(listCircleElmt);

    const listName = document.createElement("span");
    listName.classList.add("list-name");
    listName.innerText = "Reminders";
    leftListPanelElmt.appendChild(listName);
    listButtonElmt.appendChild(leftListPanelElmt);

    const listNumber = document.createElement("div");
    listNumber.classList.add("list-number");
    listNumber.innerText = "3";
    listButtonElmt.appendChild(listNumber);

    listTest.appendChild(listButtonElmt);
    myListsContainerElmt.appendChild(listTest);
  }

  sidebarElmt.appendChild(myListsContainerElmt);

  // add list button
  const addListButtonElmt = document.createElement("button");
  addListButtonElmt.classList.add("add-list-button");

  const leftListPanelElmt = document.createElement("div");
  leftListPanelElmt.classList.add("left-list-panel");
  const listCircleElmt = document.createElement("div");
  const plusIcon = document.createElement("img");
  plusIcon.classList.add("todo-icons")
  plusIcon.classList.add("add-list-icon");
  plusIcon.src = _assets_plus_svg__WEBPACK_IMPORTED_MODULE_4__;
  listCircleElmt.appendChild(plusIcon);
  listCircleElmt.classList.add("circle");
  listCircleElmt.classList.add("circle-add-list");
  leftListPanelElmt.appendChild(listCircleElmt);

  const listName = document.createElement("span");
  listName.classList.add("add-list-text");
  listName.innerText = "Add List";
  leftListPanelElmt.appendChild(listName);
  addListButtonElmt.appendChild(leftListPanelElmt);
  sidebarElmt.appendChild(addListButtonElmt);


  return sidebarElmt;
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar);


/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const footer = () => {
    const footerElmt = document.createElement("footer");
    footerElmt.classList.add("footer");

    const footerContainerElmt = document.createElement("div");
    footerContainerElmt.classList.add("footer-container");

    const footerContentElmt = document.createElement("span");
    const footerAnchorElmt = document.createElement("a");
    footerAnchorElmt.innerText = "Copyright @ 2023 ejcanoy";
    footerAnchorElmt.href = "https://github.com/ejcanoy";
    footerAnchorElmt.target = "_blank"


    footerContentElmt.appendChild(footerAnchorElmt);
    footerContainerElmt.appendChild(footerContentElmt);

    footerElmt.appendChild(footerContainerElmt);
    return footerElmt;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);

/***/ }),

/***/ "./src/components/assets/calendar-blank.svg":
/*!**************************************************!*\
  !*** ./src/components/assets/calendar-blank.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2bfc126c976ac859a6a9.svg";

/***/ }),

/***/ "./src/components/assets/calendar-month.svg":
/*!**************************************************!*\
  !*** ./src/components/assets/calendar-month.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1514cb89e66edd886067.svg";

/***/ }),

/***/ "./src/components/assets/format-list-bulleted.svg":
/*!********************************************************!*\
  !*** ./src/components/assets/format-list-bulleted.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "365f3e7f182c9f913994.svg";

/***/ }),

/***/ "./src/components/assets/inbox.svg":
/*!*****************************************!*\
  !*** ./src/components/assets/inbox.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "939f2a757e3335be71bb.svg";

/***/ }),

/***/ "./src/components/assets/plus.svg":
/*!****************************************!*\
  !*** ./src/components/assets/plus.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cffe9a515498593b872.svg";

/***/ }),

/***/ "./src/fonts/Nunito-VariableFont_wght.ttf":
/*!************************************************!*\
  !*** ./src/fonts/Nunito-VariableFont_wght.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a3eef3e0a61b7eb3eda.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./body */ "./src/body.js");



document.body.appendChild((0,_body__WEBPACK_IMPORTED_MODULE_1__["default"])());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFKQUF1RDtBQUNuRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxVQUFVLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdB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dXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2JvZHkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb21wb25lbnRzL2FydGljbGUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvTnVuaXRvLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuYm9keSxcbmh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiO1xufVxuXG4uY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjQwcHggNWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEzNXB4IDZmciAwLjI1ZnI7XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJjO1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmM7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNztcbn1cblxuLnBsdXMtaWNvbiB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGZpbHRlcjogaW52ZXJ0KDM3JSkgc2VwaWEoMTAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgyODFkZWcpXG4gICAgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCg5MiUpO1xufVxuXG4uaGVhZGVyLXRleHQtY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIGdyaWQtcm93OiAyIC8gMztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udG9kYXktaGVhZGVyIHtcbiAgY29sb3I6ICMwMDdhZmY7XG59XG5cbi5yZW1pbmRlcnMtaGVhZGVyIHtcbiAgY29sb3I6ICNmZjlmMGI7XG59XG5cbi5udW1iZXIge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4vKiBcbiAgICBjb2xvcnNcbiAgICBUb2RheSAtIGJsdWUgIzAwN2FmZlxuICAgIFJlbWluZGVycyAtIG9yYW5nZSAjZmY5ZjBiXG4gICAgc2NoZWR1bGVkIC0gcmVkICNmZjQ1M2FcbiAgICBhbGwgLSBncmV5ICM1YjYyNmFcbiAgICBib3hlcyAtIGxpZ2h0ZXIgZ3JleSAjNTk1YTVlXG4gICAgZm9udCBjb2xvcnMgaW5zaWRlIGJveCAtIGxpZ2h0ZXIgZ3JleSAjOTI5Mjk1XG4qL1xuXG5hIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2lkZWJhciB7XG4gIGdyaWQtcm93OiAxIC8gMztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNDA0NDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDExMHB4IDEzNXB4IGF1dG8gMzJweDtcbn1cblxuLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi5sb2dvLWNvbnRhaW5lciBpbnB1dCB7XG4gIGFsaWduLXNlbGY6IHNlbGYtZW5kO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM0ZDUxO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udG9kby1jYXRlZ29yeS1jb250YWluZXIge1xuICB3aWR0aDogMjIwcHg7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uY2lyY2xlIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5jaXJjbGUtdG9kYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YWZmO1xufVxuXG4uY2lyY2xlLXNjaGVkdWxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQ1M2E7XG59XG5cbi50b2RvLWljb25zIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg1NDQ3JSkgaHVlLXJvdGF0ZSgxNzZkZWcpXG4gICAgYnJpZ2h0bmVzcygxMjYlKSBjb250cmFzdCgxMTAlKTtcbn1cblxuLnRvZG8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgaGVpZ2h0OiA5MCU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NWE1ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuXG4uYWxsLWJ1dHRvbiB7XG4gIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NWE1ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogOTAlO1xuICBtYXJnaW4tdG9wOiAtN3B4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLmNpcmNsZS1hbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWI2MjZhO1xufVxuXG4udG9kby1udW1iZXIge1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gIGNvbG9yOiAjOTU5NTk4O1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuXG4udG9kby10aXRsZSB7XG4gIGNvbG9yOiAjOTU5NTk4O1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBhbGlnbi1zZWxmOiBlbmQ7XG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XG59XG5cbi50b2RheS1idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2FmZjtcbn1cblxuLnRvZGF5LWJ1dHRvbjphY3RpdmUgLnRvZG8tbnVtYmVyLFxuLnRvZGF5LWJ1dHRvbjphY3RpdmUgLnRvZG8tdGl0bGUsXG4uc2NoZWR1bGVkLWJ1dHRvbjphY3RpdmUgLnRvZG8tbnVtYmVyLFxuLnNjaGVkdWxlZC1idXR0b246YWN0aXZlIC50b2RvLXRpdGxlLFxuLmFsbC1idXR0b246YWN0aXZlIC50b2RvLW51bWJlcixcbi5hbGwtYnV0dG9uOmFjdGl2ZSAudG9kby10aXRsZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udG9kYXktYnV0dG9uOmFjdGl2ZSAjY2FsZW5kYXItYmxhbmsge1xuICBmaWx0ZXI6IGludmVydCgyOSUpIHNlcGlhKDk4JSkgc2F0dXJhdGUoMjU5MiUpIGh1ZS1yb3RhdGUoMjAxZGVnKVxuICAgIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoMTA2JSk7XG59XG5cbi50b2RheS1idXR0b246YWN0aXZlIC5jaXJjbGUtdG9kYXksXG4uYWxsLWJ1dHRvbjphY3RpdmUgLmNpcmNsZS1hbGwsXG4uc2NoZWR1bGVkLWJ1dHRvbjphY3RpdmUgLmNpcmNsZS1zY2hlZHVsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc2NoZWR1bGVkLWJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0NTNhO1xufVxuXG4uc2NoZWR1bGVkLWJ1dHRvbjphY3RpdmUgI2NhbGVuZGFyLW1vbnRoIHtcbiAgZmlsdGVyOiBpbnZlcnQoNjUlKSBzZXBpYSg2NyUpIHNhdHVyYXRlKDc0NDQlKSBodWUtcm90YXRlKDMzOWRlZylcbiAgICBicmlnaHRuZXNzKDEwMSUpIGNvbnRyYXN0KDEwMSUpO1xufVxuXG4uYWxsLWJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWI2MjZhO1xufVxuLmFsbC1idXR0b246YWN0aXZlICNpbmJveCB7XG4gIGZpbHRlcjogaW52ZXJ0KDQwJSkgc2VwaWEoOSUpIHNhdHVyYXRlKDQ5NSUpIGh1ZS1yb3RhdGUoMTcyZGVnKVxuICAgIGJyaWdodG5lc3MoOTAlKSBjb250cmFzdCg4NiUpO1xufVxuLm15LWxpc3RzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMnB4O1xuICBncmlkLWF1dG8tcm93czogMzZweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcblxuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgc2Nyb2xsYmFyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cblxuLyogRm9yIFdlYktpdCBicm93c2VycyAoQ2hyb21lLCBTYWZhcmkpICovXG4ubXktbGlzdHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbn1cblxuLm15LWxpc3RzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubXktbGlzdHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qIEZvciBGaXJlZm94ICovXG4ubXktbGlzdHMge1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIHNjcm9sbGJhci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG5cbi5teS1saXN0cyB7XG4gIHNjcm9sbGJhci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG5cbi5teS1saXN0cy10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgYWxpZ24tc2VsZjogZW5kO1xuXG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiO1xuICBjb2xvcjogIzcyNzM3NztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNpcmNsZS1saXN0cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdhZmY7XG59XG5cbi5saXN0LWJ1dHRvbnMge1xuICB3aWR0aDogMjIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNDA0NDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMjRweDtcbn1cblxuLmxlZnQtbGlzdC1wYW5lbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxpc3QtbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5saXN0LW51bWJlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgY29sb3I6ICM2ZjcwNzQ7XG59XG5cbi5saXN0LWJ1dHRvbnM6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzNzVlMTtcbn1cblxuLmxpc3QtYnV0dG9uczphY3RpdmUgLmxpc3QtbnVtYmVyIHtcbiAgY29sb3I6ICM1MDg3ZTU7XG59XG5cbi5hZGQtbGlzdC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y0MDQ0O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5hZGQtbGlzdC10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgY29sb3I6ICM3MjczNzc7XG59XG5cbi5jaXJjbGUtYWRkLWxpc3Qge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjNzI3Mzc3O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50b2RvLWljb25zIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg1NDQ3JSkgaHVlLXJvdGF0ZSgxNzZkZWcpXG4gICAgYnJpZ2h0bmVzcygxMjYlKSBjb250cmFzdCgxMTAlKTtcbn1cblxuLmFkZC1saXN0LWljb24ge1xuICBmaWx0ZXI6IGludmVydCg0NyUpIHNlcGlhKDEzJSkgc2F0dXJhdGUoMTAzJSkgaHVlLXJvdGF0ZSgxOTFkZWcpXG4gICAgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDkwJSk7XG59XG5cbi5uby1yZW1pbmRlcnMge1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBjb2xvcjogIzcyNzM3NztcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG4ucm91bmQtY2hlY2tib3gge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yb3VuZC1jaGVja2JveDpjaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbn1cblxudWwge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbmxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ubGFiZWwtbGluZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzU7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxubGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY29sb3I6ICNkM2QzZDM7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5uYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBkZGZmO1xufVxuXG4uYXJ0aWNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmM7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1yb3dzOiAzNnB4O1xufVxuXG4uYXJ0aWNsZSBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxc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QjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9OdW5pdG8tVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjQwcHggNWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMzVweCA2ZnIgMC4yNWZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmM7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciBidXR0b24ge1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM3O1xcbn1cXG5cXG4ucGx1cy1pY29uIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgZmlsdGVyOiBpbnZlcnQoMzclKSBzZXBpYSgxMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDI4MWRlZylcXG4gICAgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCg5MiUpO1xcbn1cXG5cXG4uaGVhZGVyLXRleHQtY29udGFpbmVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBmb250LXNpemU6IDM4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50b2RheS1oZWFkZXIge1xcbiAgY29sb3I6ICMwMDdhZmY7XFxufVxcblxcbi5yZW1pbmRlcnMtaGVhZGVyIHtcXG4gIGNvbG9yOiAjZmY5ZjBiO1xcbn1cXG5cXG4ubnVtYmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi8qIFxcbiAgICBjb2xvcnNcXG4gICAgVG9kYXkgLSBibHVlICMwMDdhZmZcXG4gICAgUmVtaW5kZXJzIC0gb3JhbmdlICNmZjlmMGJcXG4gICAgc2NoZWR1bGVkIC0gcmVkICNmZjQ1M2FcXG4gICAgYWxsIC0gZ3JleSAjNWI2MjZhXFxuICAgIGJveGVzIC0gbGlnaHRlciBncmV5ICM1OTVhNWVcXG4gICAgZm9udCBjb2xvcnMgaW5zaWRlIGJveCAtIGxpZ2h0ZXIgZ3JleSAjOTI5Mjk1XFxuKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNDA0NDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDExMHB4IDEzNXB4IGF1dG8gMzJweDtcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyIGlucHV0IHtcXG4gIGFsaWduLXNlbGY6IHNlbGYtZW5kO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjNGQ1MTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tY2F0ZWdvcnktY29udGFpbmVyIHtcXG4gIHdpZHRoOiAyMjBweDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmNpcmNsZSB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5jaXJjbGUtdG9kYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2FmZjtcXG59XFxuXFxuLmNpcmNsZS1zY2hlZHVsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDUzYTtcXG59XFxuXFxuLnRvZG8taWNvbnMge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogODAlO1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDU0NDclKSBodWUtcm90YXRlKDE3NmRlZylcXG4gICAgYnJpZ2h0bmVzcygxMjYlKSBjb250cmFzdCgxMTAlKTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGhlaWdodDogOTAlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NWE1ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXG59XFxuXFxuLmFsbC1idXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NWE1ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogOTAlO1xcbiAgbWFyZ2luLXRvcDogLTdweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4uY2lyY2xlLWFsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWI2MjZhO1xcbn1cXG5cXG4udG9kby1udW1iZXIge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIGNvbG9yOiAjOTU5NTk4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbi10b3A6IC0zcHg7XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gIGNvbG9yOiAjOTU5NTk4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbi50b2RheS1idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdhZmY7XFxufVxcblxcbi50b2RheS1idXR0b246YWN0aXZlIC50b2RvLW51bWJlcixcXG4udG9kYXktYnV0dG9uOmFjdGl2ZSAudG9kby10aXRsZSxcXG4uc2NoZWR1bGVkLWJ1dHRvbjphY3RpdmUgLnRvZG8tbnVtYmVyLFxcbi5zY2hlZHVsZWQtYnV0dG9uOmFjdGl2ZSAudG9kby10aXRsZSxcXG4uYWxsLWJ1dHRvbjphY3RpdmUgLnRvZG8tbnVtYmVyLFxcbi5hbGwtYnV0dG9uOmFjdGl2ZSAudG9kby10aXRsZSB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnRvZGF5LWJ1dHRvbjphY3RpdmUgI2NhbGVuZGFyLWJsYW5rIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDI5JSkgc2VwaWEoOTglKSBzYXR1cmF0ZSgyNTkyJSkgaHVlLXJvdGF0ZSgyMDFkZWcpXFxuICAgIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoMTA2JSk7XFxufVxcblxcbi50b2RheS1idXR0b246YWN0aXZlIC5jaXJjbGUtdG9kYXksXFxuLmFsbC1idXR0b246YWN0aXZlIC5jaXJjbGUtYWxsLFxcbi5zY2hlZHVsZWQtYnV0dG9uOmFjdGl2ZSAuY2lyY2xlLXNjaGVkdWxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uc2NoZWR1bGVkLWJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDUzYTtcXG59XFxuXFxuLnNjaGVkdWxlZC1idXR0b246YWN0aXZlICNjYWxlbmRhci1tb250aCB7XFxuICBmaWx0ZXI6IGludmVydCg2NSUpIHNlcGlhKDY3JSkgc2F0dXJhdGUoNzQ0NCUpIGh1ZS1yb3RhdGUoMzM5ZGVnKVxcbiAgICBicmlnaHRuZXNzKDEwMSUpIGNvbnRyYXN0KDEwMSUpO1xcbn1cXG5cXG4uYWxsLWJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViNjI2YTtcXG59XFxuLmFsbC1idXR0b246YWN0aXZlICNpbmJveCB7XFxuICBmaWx0ZXI6IGludmVydCg0MCUpIHNlcGlhKDklKSBzYXR1cmF0ZSg0OTUlKSBodWUtcm90YXRlKDE3MmRlZylcXG4gICAgYnJpZ2h0bmVzcyg5MCUpIGNvbnRyYXN0KDg2JSk7XFxufVxcbi5teS1saXN0cyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMnB4O1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDM2cHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxuICBzY3JvbGxiYXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiBGb3IgV2ViS2l0IGJyb3dzZXJzIChDaHJvbWUsIFNhZmFyaSkgKi9cXG4ubXktbGlzdHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxufVxcblxcbi5teS1saXN0czo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5teS1saXN0czo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qIEZvciBGaXJlZm94ICovXFxuLm15LWxpc3RzIHtcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXG4gIHNjcm9sbGJhci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5teS1saXN0cyB7XFxuICBzY3JvbGxiYXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ubXktbGlzdHMtdGl0bGUge1xcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG5cXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIjtcXG4gIGNvbG9yOiAjNzI3Mzc3O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jaXJjbGUtbGlzdHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2FmZjtcXG59XFxuXFxuLmxpc3QtYnV0dG9ucyB7XFxuICB3aWR0aDogMjIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y0MDQ0O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDI0cHg7XFxufVxcblxcbi5sZWZ0LWxpc3QtcGFuZWwge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3QtbmFtZSB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxpc3QtbnVtYmVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiAjNmY3MDc0O1xcbn1cXG5cXG4ubGlzdC1idXR0b25zOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3NWUxO1xcbn1cXG5cXG4ubGlzdC1idXR0b25zOmFjdGl2ZSAubGlzdC1udW1iZXIge1xcbiAgY29sb3I6ICM1MDg3ZTU7XFxufVxcblxcbi5hZGQtbGlzdC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNDA0NDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmFkZC1saXN0LXRleHQge1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gIGNvbG9yOiAjNzI3Mzc3O1xcbn1cXG5cXG4uY2lyY2xlLWFkZC1saXN0IHtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzcyNzM3NztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnRvZG8taWNvbnMge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogODAlO1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDU0NDclKSBodWUtcm90YXRlKDE3NmRlZylcXG4gICAgYnJpZ2h0bmVzcygxMjYlKSBjb250cmFzdCgxMTAlKTtcXG59XFxuXFxuLmFkZC1saXN0LWljb24ge1xcbiAgZmlsdGVyOiBpbnZlcnQoNDclKSBzZXBpYSgxMyUpIHNhdHVyYXRlKDEwMyUpIGh1ZS1yb3RhdGUoMTkxZGVnKVxcbiAgICBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoOTAlKTtcXG59XFxuXFxuLm5vLXJlbWluZGVycyB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiAjNzI3Mzc3O1xcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcbn1cXG5cXG4ucm91bmQtY2hlY2tib3gge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yb3VuZC1jaGVja2JveDpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XFxufVxcblxcbnVsIHtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG59XFxuXFxubGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubGFiZWwtbGluZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM1O1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgY29sb3I6ICNkM2QzZDM7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGRkZmY7XFxufVxcblxcbi5hcnRpY2xlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDM2cHg7XFxufVxcblxcbi5hcnRpY2xlIHAge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBzaWRlYmFyIGZyb20gXCIuL2NvbXBvbmVudHMvc2lkZWJhclwiO1xuaW1wb3J0IHsgaGVhZGVyLCB0b2RheSB9IGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgYXJ0aWNsZSBmcm9tIFwiLi9jb21wb25lbnRzL2FydGljbGVcIjtcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5cbmNvbnN0IGJvZHkgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyRWxtdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyRWxtdC5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4gICAgY29udGFpbmVyRWxtdC5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG4gICAgY29udGFpbmVyRWxtdC5hcHBlbmRDaGlsZChzaWRlYmFyKCkpO1xuICAgIGNvbnRhaW5lckVsbXQuYXBwZW5kQ2hpbGQoYXJ0aWNsZSgpKTtcbiAgICBjb250YWluZXJFbG10LmFwcGVuZENoaWxkKGZvb3RlcigpKTtcblxuICAgIHJldHVybiBjb250YWluZXJFbG10O1xufVxuXG5leHBvcnQgZGVmYXVsdCBib2R5O1xuXG4iLCJjb25zdCBhcnRpY2xlID0gKCkgPT4ge1xuICAgIGNvbnN0IGFydGljbGVFbG10ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgLy8gYXJ0aWNsZUVsbXQuYXBwZW5kQ2hpbGQobm9SZW1pbmRlcnMoKSk7XG4gICAgYXJ0aWNsZUVsbXQuYXBwZW5kQ2hpbGQocmVtaW5kSXRlbXMoKSk7XG4gICAgYXJ0aWNsZUVsbXQuY2xhc3NMaXN0LmFkZChcImFydGljbGVcIik7XG4gICAgcmV0dXJuIGFydGljbGVFbG10O1xufVxuXG5jb25zdCByZW1pbmRJdGVtcyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9MaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxpc3RcIik7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIFxuICAgIGNvbnN0IHRvZG9JdGVtcyA9IFtcbiAgICAgICdTY2hlbWEnLFxuICAgICAgJ0ZpZ3VyZSBvdXQgaG9zdGluZycsXG4gICAgICAnVGFzayAzJ1xuICAgIF07XG4gICAgXG4gICAgdG9kb0l0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIFxuICAgICAgbGkuc3R5bGUubGlzdFN0eWxlID0gJ25vbmUnO1xuICAgIFxuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBpdGVtO1xuICAgIFxuICAgICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGxpbmUuY2xhc3NMaXN0LmFkZCgnbGFiZWwtbGluZScpOyBcbiAgICBcbiAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGxpbmUpO1xuICAgIFxuICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdyb3VuZC1jaGVja2JveCcpO1xuICAgIFxuICAgICAgbGkuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgbGkuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIFxuICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pO1xuICAgIFxuICAgIHRvZG9MaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9MaXN0KTtcbiAgICByZXR1cm4gdG9kb0xpc3RDb250YWluZXI7XG5cbn1cblxuY29uc3Qgbm9SZW1pbmRlcnMgPSAoKSA9PiB7XG4gICAgY29uc3Qgbm9SZW1pbmRlcnNFbG10ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBub1JlbWluZGVyc0VsbXQuY2xhc3NMaXN0LmFkZChcIm5vLXJlbWluZGVyc1wiKVxuICAgIG5vUmVtaW5kZXJzRWxtdC5pbm5lclRleHQgPSBcIk5vIFJlbWluZGVyc1wiO1xuXG4gICAgcmV0dXJuIG5vUmVtaW5kZXJzRWxtdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXJ0aWNsZSIsImltcG9ydCBQbHVzIGZyb20gXCIuL2Fzc2V0cy9wbHVzLnN2Z1wiO1xuXG5leHBvcnQgY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXJFbG10ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgaGVhZGVyRWxtdC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICBoZWFkZXJFbG10LmNsYXNzTGlzdC5hZGQoXCJyZW1pbmRlcnMtaGVhZGVyXCIpO1xuXG4gIGNvbnN0IGJ1dHRvbkN0bkVsbXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25DdG5FbG10LmNsYXNzTGlzdC5hZGQoXCJidXR0b24tY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGJ1dHRvbkVsbXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBwbHVzRWxtdCA9IG5ldyBJbWFnZSgpO1xuICBwbHVzRWxtdC5zcmMgPSBQbHVzO1xuICBwbHVzRWxtdC5jbGFzc0xpc3QuYWRkKFwicGx1cy1pY29uXCIpO1xuICBidXR0b25FbG10LmFwcGVuZENoaWxkKHBsdXNFbG10KTtcblxuXG4gIGJ1dHRvbkN0bkVsbXQuYXBwZW5kQ2hpbGQoYnV0dG9uRWxtdCk7XG4gIGhlYWRlckVsbXQuYXBwZW5kQ2hpbGQoYnV0dG9uQ3RuRWxtdCk7XG5cbiAgY29uc3QgaGVhZGVyVGV4dENvbnRhaW5lckVsbXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJUZXh0Q29udGFpbmVyRWxtdC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLXRleHQtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRpdGxlLmlubmVySFRNTCA9IFwiUmVtaW5kZXJzXCI7XG4gIGhlYWRlclRleHRDb250YWluZXJFbG10LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbnVtYmVyLmNsYXNzTGlzdC5hZGQoXCJudW1iZXJcIik7XG4gIG51bWJlci5pbm5lckhUTUwgPSBcIjE3XCI7XG4gIGhlYWRlclRleHRDb250YWluZXJFbG10LmFwcGVuZENoaWxkKG51bWJlcik7XG5cbiAgaGVhZGVyRWxtdC5hcHBlbmRDaGlsZChoZWFkZXJUZXh0Q29udGFpbmVyRWxtdCk7XG5cbiAgcmV0dXJuIGhlYWRlckVsbXQ7XG59O1xuXG5leHBvcnQgY29uc3QgdG9kYXkgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlckVsbXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBoZWFkZXJFbG10LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gIGhlYWRlckVsbXQuY2xhc3NMaXN0LmFkZChcInRvZGF5LWhlYWRlclwiKTtcbiAgaGVhZGVyRWxtdC5pbm5lclRleHQgPSBcIlRvZGF5XCI7XG4gIHJldHVybiBoZWFkZXJFbG10O1xufTtcbiIsImltcG9ydCBDYWxlbmRhckJsYW5rIGZyb20gXCIuL2Fzc2V0cy9jYWxlbmRhci1ibGFuay5zdmdcIjtcbmltcG9ydCBDYWxlbmRhck1vbnRoIGZyb20gXCIuL2Fzc2V0cy9jYWxlbmRhci1tb250aC5zdmdcIjtcbmltcG9ydCBJbmJveCBmcm9tIFwiLi9hc3NldHMvaW5ib3guc3ZnXCI7XG5pbXBvcnQgTGlzdGVkQnVsbGV0IGZyb20gXCIuL2Fzc2V0cy9mb3JtYXQtbGlzdC1idWxsZXRlZC5zdmdcIjtcbmltcG9ydCBQbHVzIGZyb20gXCIuL2Fzc2V0cy9wbHVzLnN2Z1wiO1xuXG5jb25zdCBzaWRlYmFyID0gKCkgPT4ge1xuICBjb25zdCBzaWRlYmFyRWxtdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGViYXJFbG10LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuXG4gIGNvbnN0IGxvZ29Db250YWluZXJFbG10ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9nb0NvbnRhaW5lckVsbXQuY2xhc3NMaXN0LmFkZChcImxvZ28tY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGlucHV0TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRMb2dvLnBsYWNlaG9sZGVyID0gXCJBcHBsZSBSZW1pbmRlcnMgQ2xvbmVcIjtcbiAgbG9nb0NvbnRhaW5lckVsbXQuYXBwZW5kQ2hpbGQoaW5wdXRMb2dvKTtcbiAgc2lkZWJhckVsbXQuYXBwZW5kQ2hpbGQobG9nb0NvbnRhaW5lckVsbXQpO1xuXG4gIGNvbnN0IHRvZG9DYXRlZ29yeUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9DYXRlZ29yeUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1jYXRlZ29yeS1jb250YWluZXJcIik7XG5cbiAgY29uc3QgdG9kYXlCdXR0b25FbG10ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdG9kYXlCdXR0b25FbG10LmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICB0b2RheUJ1dHRvbkVsbXQuY2xhc3NMaXN0LmFkZChcInRvZGF5LWJ1dHRvblwiKTtcblxuICBjb25zdCB0b2RheUNpcmNsZUVsbXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYWxlbmRhckJsYW5rSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNhbGVuZGFyQmxhbmtJY29uLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWljb25zXCIpO1xuICBjYWxlbmRhckJsYW5rSWNvbi5pZCA9IFwiY2FsZW5kYXItYmxhbmtcIjtcbiAgY2FsZW5kYXJCbGFua0ljb24uc3JjID0gQ2FsZW5kYXJCbGFuaztcbiAgdG9kYXlDaXJjbGVFbG10LmFwcGVuZENoaWxkKGNhbGVuZGFyQmxhbmtJY29uKTtcbiAgdG9kYXlDaXJjbGVFbG10LmNsYXNzTGlzdC5hZGQoXCJjaXJjbGVcIik7XG4gIHRvZGF5Q2lyY2xlRWxtdC5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLXRvZGF5XCIpO1xuICB0b2RheUJ1dHRvbkVsbXQuYXBwZW5kQ2hpbGQodG9kYXlDaXJjbGVFbG10KTtcblxuXG4gIGNvbnN0IHRvZGF5TnVtYmVyRWxtdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZGF5TnVtYmVyRWxtdC5jbGFzc0xpc3QuYWRkKFwidG9kby1udW1iZXJcIik7XG4gIHRvZGF5TnVtYmVyRWxtdC5pbm5lckhUTUwgPSA1O1xuICB0b2RheUJ1dHRvbkVsbXQuYXBwZW5kQ2hpbGQodG9kYXlOdW1iZXJFbG10KTtcblxuICBjb25zdCB0b2RheVRpdGxlRWxtdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZGF5VGl0bGVFbG10LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlXCIpO1xuICB0b2RheVRpdGxlRWxtdC5pbm5lclRleHQgPSBcIlRvZGF5XCI7XG4gIHRvZGF5QnV0dG9uRWxtdC5hcHBlbmRDaGlsZCh0b2RheVRpdGxlRWxtdCk7XG5cbiAgdG9kb0NhdGVnb3J5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZGF5QnV0dG9uRWxtdCk7XG5cbiAgY29uc3Qgc2NoZWR1bGVkQnV0dG9uRWxtdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHNjaGVkdWxlZEJ1dHRvbkVsbXQuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gIHNjaGVkdWxlZEJ1dHRvbkVsbXQuY2xhc3NMaXN0LmFkZChcInNjaGVkdWxlZC1idXR0b25cIik7XG5cbiAgY29uc3Qgc2NoZWR1bGVkQ2lyY2xlRWxtdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNhbGVuZGFyTW9udGhJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY2FsZW5kYXJNb250aEljb24uY2xhc3NMaXN0LmFkZChcInRvZG8taWNvbnNcIilcbiAgY2FsZW5kYXJNb250aEljb24uaWQgPSBcImNhbGVuZGFyLW1vbnRoXCI7XG4gIGNhbGVuZGFyTW9udGhJY29uLnNyYyA9IENhbGVuZGFyTW9udGg7XG4gIHNjaGVkdWxlZENpcmNsZUVsbXQuYXBwZW5kQ2hpbGQoY2FsZW5kYXJNb250aEljb24pO1xuICBzY2hlZHVsZWRDaXJjbGVFbG10LmNsYXNzTGlzdC5hZGQoXCJjaXJjbGVcIik7XG4gIHNjaGVkdWxlZENpcmNsZUVsbXQuY2xhc3NMaXN0LmFkZChcImNpcmNsZS1zY2hlZHVsZWRcIik7XG4gIHNjaGVkdWxlZEJ1dHRvbkVsbXQuYXBwZW5kQ2hpbGQoc2NoZWR1bGVkQ2lyY2xlRWxtdCk7XG5cblxuICBjb25zdCBzY2hlZHVsZWROdW1iZXJFbG10ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2NoZWR1bGVkTnVtYmVyRWxtdC5jbGFzc0xpc3QuYWRkKFwidG9kby1udW1iZXJcIik7XG4gIHNjaGVkdWxlZE51bWJlckVsbXQuaW5uZXJIVE1MID0gNTtcbiAgc2NoZWR1bGVkQnV0dG9uRWxtdC5hcHBlbmRDaGlsZChzY2hlZHVsZWROdW1iZXJFbG10KTtcblxuICBjb25zdCBzY2hlZHVsZWRUaXRsZUVsbXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzY2hlZHVsZWRUaXRsZUVsbXQuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XG4gIHNjaGVkdWxlZFRpdGxlRWxtdC5pbm5lclRleHQgPSBcIlNjaGVkdWxlZFwiO1xuICBzY2hlZHVsZWRCdXR0b25FbG10LmFwcGVuZENoaWxkKHNjaGVkdWxlZFRpdGxlRWxtdCk7XG5cbiAgdG9kb0NhdGVnb3J5Q29udGFpbmVyLmFwcGVuZENoaWxkKHNjaGVkdWxlZEJ1dHRvbkVsbXQpO1xuXG4gIGNvbnN0IGFsbEJ1dHRvbkVsbXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhbGxCdXR0b25FbG10LmNsYXNzTGlzdC5hZGQoXCJhbGwtYnV0dG9uXCIpO1xuICBhbGxCdXR0b25FbG10LmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuXG4gIGNvbnN0IGFsbENpcmNsZUVsbXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbmJveEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbmJveEljb24uc3JjID0gQ2FsZW5kYXJCbGFua1xuICBpbmJveEljb24uY2xhc3NMaXN0LmFkZChcInRvZG8taWNvbnNcIik7XG4gIGluYm94SWNvbi5pZCA9IFwiaW5ib3hcIjtcbiAgaW5ib3hJY29uLnNyYyA9IEluYm94O1xuICBhbGxDaXJjbGVFbG10LmFwcGVuZENoaWxkKGluYm94SWNvbik7XG4gIGFsbENpcmNsZUVsbXQuY2xhc3NMaXN0LmFkZChcImNpcmNsZVwiKTtcbiAgYWxsQ2lyY2xlRWxtdC5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLWFsbFwiKTtcbiAgYWxsQnV0dG9uRWxtdC5hcHBlbmRDaGlsZChhbGxDaXJjbGVFbG10KTtcblxuXG4gIGNvbnN0IGFsbE51bWJlckVsbXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhbGxOdW1iZXJFbG10LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLW51bWJlclwiKTtcbiAgYWxsTnVtYmVyRWxtdC5pbm5lckhUTUwgPSBcIjE3XCI7XG4gIGFsbEJ1dHRvbkVsbXQuYXBwZW5kQ2hpbGQoYWxsTnVtYmVyRWxtdCk7XG5cbiAgY29uc3QgYWxsVGl0bGVFbG10ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWxsVGl0bGVFbG10LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlXCIpO1xuICBhbGxUaXRsZUVsbXQuaW5uZXJUZXh0ID0gXCJBbGxcIjtcbiAgYWxsQnV0dG9uRWxtdC5hcHBlbmRDaGlsZChhbGxUaXRsZUVsbXQpO1xuXG4gIHRvZG9DYXRlZ29yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChhbGxCdXR0b25FbG10KTtcblxuICBzaWRlYmFyRWxtdC5hcHBlbmRDaGlsZCh0b2RvQ2F0ZWdvcnlDb250YWluZXIpO1xuXG4gIC8vIGNyZWF0ZSBteWxpc3RzXG4gIGNvbnN0IG15TGlzdHNDb250YWluZXJFbG10ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbXlMaXN0c0NvbnRhaW5lckVsbXQuY2xhc3NMaXN0LmFkZChcIm15LWxpc3RzXCIpO1xuXG4gIGNvbnN0IG15TGlzdHNUaXRsZUVsbXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBteUxpc3RzVGl0bGVFbG10LmNsYXNzTGlzdC5hZGQoXCJteS1saXN0cy10aXRsZVwiKTtcbiAgbXlMaXN0c1RpdGxlRWxtdC5pbm5lclRleHQgPSBcIk15IExpc3RzXCJcbiAgbXlMaXN0c0NvbnRhaW5lckVsbXQuYXBwZW5kQ2hpbGQobXlMaXN0c1RpdGxlRWxtdCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBjb25zdCBsaXN0VGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBsaXN0QnV0dG9uRWxtdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbGlzdEJ1dHRvbkVsbXQuY2xhc3NMaXN0LmFkZChcImxpc3QtYnV0dG9uc1wiKTtcblxuICAgIGNvbnN0IGxlZnRMaXN0UGFuZWxFbG10ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZWZ0TGlzdFBhbmVsRWxtdC5jbGFzc0xpc3QuYWRkKFwibGVmdC1saXN0LXBhbmVsXCIpO1xuICAgIGNvbnN0IGxpc3RDaXJjbGVFbG10ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmJveEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGluYm94SWNvbi5jbGFzc0xpc3QuYWRkKFwidG9kby1pY29uc1wiKVxuICAgIGluYm94SWNvbi5zcmMgPSBMaXN0ZWRCdWxsZXQ7XG4gICAgbGlzdENpcmNsZUVsbXQuYXBwZW5kQ2hpbGQoaW5ib3hJY29uKTtcbiAgICBsaXN0Q2lyY2xlRWxtdC5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlXCIpO1xuICAgIGxpc3RDaXJjbGVFbG10LmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtbGlzdHNcIik7XG4gICAgbGVmdExpc3RQYW5lbEVsbXQuYXBwZW5kQ2hpbGQobGlzdENpcmNsZUVsbXQpO1xuXG4gICAgY29uc3QgbGlzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBsaXN0TmFtZS5jbGFzc0xpc3QuYWRkKFwibGlzdC1uYW1lXCIpO1xuICAgIGxpc3ROYW1lLmlubmVyVGV4dCA9IFwiUmVtaW5kZXJzXCI7XG4gICAgbGVmdExpc3RQYW5lbEVsbXQuYXBwZW5kQ2hpbGQobGlzdE5hbWUpO1xuICAgIGxpc3RCdXR0b25FbG10LmFwcGVuZENoaWxkKGxlZnRMaXN0UGFuZWxFbG10KTtcblxuICAgIGNvbnN0IGxpc3ROdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxpc3ROdW1iZXIuY2xhc3NMaXN0LmFkZChcImxpc3QtbnVtYmVyXCIpO1xuICAgIGxpc3ROdW1iZXIuaW5uZXJUZXh0ID0gXCIzXCI7XG4gICAgbGlzdEJ1dHRvbkVsbXQuYXBwZW5kQ2hpbGQobGlzdE51bWJlcik7XG5cbiAgICBsaXN0VGVzdC5hcHBlbmRDaGlsZChsaXN0QnV0dG9uRWxtdCk7XG4gICAgbXlMaXN0c0NvbnRhaW5lckVsbXQuYXBwZW5kQ2hpbGQobGlzdFRlc3QpO1xuICB9XG5cbiAgc2lkZWJhckVsbXQuYXBwZW5kQ2hpbGQobXlMaXN0c0NvbnRhaW5lckVsbXQpO1xuXG4gIC8vIGFkZCBsaXN0IGJ1dHRvblxuICBjb25zdCBhZGRMaXN0QnV0dG9uRWxtdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZExpc3RCdXR0b25FbG10LmNsYXNzTGlzdC5hZGQoXCJhZGQtbGlzdC1idXR0b25cIik7XG5cbiAgY29uc3QgbGVmdExpc3RQYW5lbEVsbXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWZ0TGlzdFBhbmVsRWxtdC5jbGFzc0xpc3QuYWRkKFwibGVmdC1saXN0LXBhbmVsXCIpO1xuICBjb25zdCBsaXN0Q2lyY2xlRWxtdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBsdXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgcGx1c0ljb24uY2xhc3NMaXN0LmFkZChcInRvZG8taWNvbnNcIilcbiAgcGx1c0ljb24uY2xhc3NMaXN0LmFkZChcImFkZC1saXN0LWljb25cIik7XG4gIHBsdXNJY29uLnNyYyA9IFBsdXM7XG4gIGxpc3RDaXJjbGVFbG10LmFwcGVuZENoaWxkKHBsdXNJY29uKTtcbiAgbGlzdENpcmNsZUVsbXQuY2xhc3NMaXN0LmFkZChcImNpcmNsZVwiKTtcbiAgbGlzdENpcmNsZUVsbXQuY2xhc3NMaXN0LmFkZChcImNpcmNsZS1hZGQtbGlzdFwiKTtcbiAgbGVmdExpc3RQYW5lbEVsbXQuYXBwZW5kQ2hpbGQobGlzdENpcmNsZUVsbXQpO1xuXG4gIGNvbnN0IGxpc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxpc3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJhZGQtbGlzdC10ZXh0XCIpO1xuICBsaXN0TmFtZS5pbm5lclRleHQgPSBcIkFkZCBMaXN0XCI7XG4gIGxlZnRMaXN0UGFuZWxFbG10LmFwcGVuZENoaWxkKGxpc3ROYW1lKTtcbiAgYWRkTGlzdEJ1dHRvbkVsbXQuYXBwZW5kQ2hpbGQobGVmdExpc3RQYW5lbEVsbXQpO1xuICBzaWRlYmFyRWxtdC5hcHBlbmRDaGlsZChhZGRMaXN0QnV0dG9uRWxtdCk7XG5cblxuICByZXR1cm4gc2lkZWJhckVsbXQ7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHNpZGViYXI7XG4iLCJjb25zdCBmb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyRWxtdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgZm9vdGVyRWxtdC5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuXG4gICAgY29uc3QgZm9vdGVyQ29udGFpbmVyRWxtdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyQ29udGFpbmVyRWxtdC5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGZvb3RlckNvbnRlbnRFbG10ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29uc3QgZm9vdGVyQW5jaG9yRWxtdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGZvb3RlckFuY2hvckVsbXQuaW5uZXJUZXh0ID0gXCJDb3B5cmlnaHQgQCAyMDIzIGVqY2Fub3lcIjtcbiAgICBmb290ZXJBbmNob3JFbG10LmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9lamNhbm95XCI7XG4gICAgZm9vdGVyQW5jaG9yRWxtdC50YXJnZXQgPSBcIl9ibGFua1wiXG5cblxuICAgIGZvb3RlckNvbnRlbnRFbG10LmFwcGVuZENoaWxkKGZvb3RlckFuY2hvckVsbXQpO1xuICAgIGZvb3RlckNvbnRhaW5lckVsbXQuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGVudEVsbXQpO1xuXG4gICAgZm9vdGVyRWxtdC5hcHBlbmRDaGlsZChmb290ZXJDb250YWluZXJFbG10KTtcbiAgICByZXR1cm4gZm9vdGVyRWxtdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgYm9keSBmcm9tICcuL2JvZHknO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJvZHkoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=