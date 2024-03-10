(self["webpackChunkwidget_panel"] = self["webpackChunkwidget_panel"] || []).push([["index"],{

/***/ 31017:
/*!***************************!*\
  !*** ./src/App/index.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 39471);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ 88495);
/* harmony import */ var antd_locale_ru_RU__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/locale/ru_RU */ 58177);
/* harmony import */ var _components_WidgetPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/WidgetPanel */ 16367);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ 47671);





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    locale: antd_locale_ru_RU__WEBPACK_IMPORTED_MODULE_4__["default"],
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_WidgetPanel__WEBPACK_IMPORTED_MODULE_1__["default"], {})
  });
}

/***/ }),

/***/ 21665:
/*!*****************************************!*\
  !*** ./src/components/Column/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 39471);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ 93886);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ 19673);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ 28669);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dnd-kit/core */ 96712);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ 66213);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ 47671);





var useToken = antd__WEBPACK_IMPORTED_MODULE_4__["default"].useToken;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref) {
  var children = _ref.children,
    id = _ref.id;
  var _useDroppable = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.useDroppable)({
      id: id
    }),
    isOver = _useDroppable.isOver,
    setNodeRef = _useDroppable.setNodeRef;
  var _useToken = useToken(),
    token = _useToken.token;
  var style = {
    borderColor: isOver ? token.colorPrimary : token.colorBgBase
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _index_less__WEBPACK_IMPORTED_MODULE_2__["default"].col,
    span: 8,
    ref: setNodeRef,
    style: style,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: _index_less__WEBPACK_IMPORTED_MODULE_2__["default"].space,
      direction: "vertical",
      children: children
    })
  });
}

/***/ }),

/***/ 35875:
/*!****************************************************************!*\
  !*** ./src/components/WeatherWidget/components/Body/index.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 39471);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ 94271);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ 47671);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var weather = _ref.weather,
    isDay = _ref.isDay,
    isTempatureUnitC = _ref.isTempatureUnitC,
    cityName = _ref.cityName;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: _index_less__WEBPACK_IMPORTED_MODULE_1__["default"].cityName,
      children: cityName
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
      className: _index_less__WEBPACK_IMPORTED_MODULE_1__["default"].conditionIcon,
      alt: "\u043F\u043E\u0433\u043E\u0434\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F",
      src: weather.conditionIconSrc
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h2", {
      className: _index_less__WEBPACK_IMPORTED_MODULE_1__["default"].tempature,
      children: [isTempatureUnitC ? weather.feelsLikeC : weather.feelsLikeF, "\xB0", isTempatureUnitC ? 'C' : 'F']
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      children: weather.conditionText[isDay ? 'day' : 'night']
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: ["\u0412\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C: ", weather.humidity, "%"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: ["\u0412\u0435\u0442\u0435\u0440: ", weather.wind, " \u043C/\u0441"]
    })]
  });
});

/***/ }),

/***/ 90309:
/*!**************************************************************************!*\
  !*** ./src/components/WeatherWidget/components/DeletionButton/index.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 39471);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ 28576);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ 47705);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ 48811);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ 87073);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ 88165);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ 47671);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref) {
  var customClassName = _ref.className,
    onClick = _ref.onClick;
  var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].button, _objectSpread({}, customClassName ? _defineProperty({}, customClassName, true) : {}));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: className,
      type: "primary",
      shape: "circle",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
      ghost: true,
      onClick: onClick
    })
  });
}

/***/ }),

/***/ 25179:
/*!*********************************************************************!*\
  !*** ./src/components/WeatherWidget/components/ErrorBody/index.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 39471);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ 36492);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 47671);



var Text = antd__WEBPACK_IMPORTED_MODULE_2__["default"].Text;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text, {
    type: "danger",
    children: "\u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u043F\u043E\u0433\u043E\u0434\u0435"
  });
});

/***/ }),

/***/ 83560:
/*!**************************************************************************!*\
  !*** ./src/components/WeatherWidget/components/SettingsButton/index.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 39471);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ 28576);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ 47705);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ 55683);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ 37619);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ 87073);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ 51434);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ 47671);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref) {
  var customClassName = _ref.className,
    onClick = _ref.onClick,
    isSettingMode = _ref.isSettingMode;
  var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].button, _objectSpread({}, customClassName ? _defineProperty({}, customClassName, true) : {}));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: className,
      type: "primary",
      shape: "circle",
      icon: isSettingMode ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
      ghost: true,
      onClick: onClick
    })
  });
}

/***/ }),

/***/ 5224:
/*!********************************************************************!*\
  !*** ./src/components/WeatherWidget/components/Settings/index.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 39471);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ 93886);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ 28669);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ 24644);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ 30133);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ 87073);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ 61342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ 47671);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






var useToken = antd__WEBPACK_IMPORTED_MODULE_4__["default"].useToken;
var spaceClassNames = {
  item: _index_less__WEBPACK_IMPORTED_MODULE_2__["default"].item
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref) {
  var customClassName = _ref.className,
    isTempatureUnitC = _ref.isTempatureUnitC,
    setIsTempatureUnitC = _ref.setIsTempatureUnitC,
    cities = _ref.cities,
    onCityChange = _ref.onCityChange,
    activeCityValue = _ref.activeCityValue;
  var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].settings, _objectSpread({}, customClassName ? _defineProperty({}, customClassName, true) : {}));
  var _useToken = useToken(),
    token = _useToken.token;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: className,
    direction: "vertical",
    size: "small",
    classNames: spaceClassNames,
    style: {
      'backgroundColor': token.colorBgBase
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__["default"].Group, {
      value: isTempatureUnitC,
      onChange: function onChange(e) {
        setIsTempatureUnitC(e.target.value);
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__["default"].Button, {
        value: true,
        children: "\xB0C"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__["default"].Button, {
        value: false,
        children: "\xB0F"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
      value: activeCityValue,
      className: _index_less__WEBPACK_IMPORTED_MODULE_2__["default"].citySelect,
      onChange: onCityChange,
      options: cities
    })]
  });
}

/***/ }),

/***/ 48329:
/*!****************************************************************!*\
  !*** ./src/components/WeatherWidget/hooks/useFetchWeather.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 39471);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ 4826);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/find */ 53698);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_conditions_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/conditions.json */ 45697);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var getCurrentWeatherURL = function getCurrentWeatherURL(cityName) {
  return "http://api.weatherapi.com/v1/current.json?q=".concat(cityName, "&key=").concat("b3d3cc323bfb484f809170534240603");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var activeCity = _ref.activeCity,
    setWeather = _ref.setWeather,
    api = _ref.api;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isPending = _useState2[0],
    setIsPending = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var timerId;
    var isActive = true;
    function queryWeather() {
      return _queryWeather.apply(this, arguments);
    }
    function _queryWeather() {
      _queryWeather = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$import, response, body, condition, localizedConditionTexts, iconSrc;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!activeCity) {
                _context.next = 38;
                break;
              }
              setIsPending(true);
              _context.prev = 2;
              _context.next = 5;
              return fetch(getCurrentWeatherURL(String(activeCity.value)));
            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();
            case 8:
              body = _context.sent;
              if (body !== null && body !== void 0 && body.current) {
                _context.next = 11;
                break;
              }
              throw new Error();
            case 11:
              condition = lodash_find__WEBPACK_IMPORTED_MODULE_2___default()(_assets_conditions_json__WEBPACK_IMPORTED_MODULE_3__, ['code', body.current.condition.code]);
              if (condition) {
                _context.next = 14;
                break;
              }
              throw new Error();
            case 14:
              localizedConditionTexts = lodash_find__WEBPACK_IMPORTED_MODULE_2___default()(condition.languages, ['lang_iso', 'ru']);
              if (localizedConditionTexts) {
                _context.next = 17;
                break;
              }
              throw new Error();
            case 17:
              _context.next = 19;
              return __webpack_require__(60096)("./" + condition.icon + ".png");
            case 19:
              _context.t1 = _yield$import = _context.sent;
              _context.t0 = _context.t1 === null;
              if (_context.t0) {
                _context.next = 23;
                break;
              }
              _context.t0 = _yield$import === void 0;
            case 23:
              if (!_context.t0) {
                _context.next = 27;
                break;
              }
              _context.t2 = void 0;
              _context.next = 28;
              break;
            case 27:
              _context.t2 = _yield$import["default"];
            case 28:
              iconSrc = _context.t2;
              if (isActive) {
                setWeather({
                  feelsLikeC: body.current.feelslike_c,
                  feelsLikeF: body.current.feelslike_f,
                  humidity: body.current.humidity,
                  wind: body.current.wind_kph,
                  localtime: dayjs__WEBPACK_IMPORTED_MODULE_1___default()(body.location.localtime),
                  conditionIconSrc: iconSrc,
                  conditionText: {
                    day: localizedConditionTexts.day_text,
                    night: localizedConditionTexts.night_text
                  }
                });
              }
              _context.next = 36;
              break;
            case 32:
              _context.prev = 32;
              _context.t3 = _context["catch"](2);
              api.error({
                message: "\u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u043F\u043E\u0433\u043E\u0434\u0435 \u0432 \u0433\u043E\u0440\u043E\u0434\u0435 \"".concat(activeCity.label, "\"")
              });
              if (isActive) {
                setWeather(null);
              }
            case 36:
              setIsPending(false);
              if (isActive) {
                timerId = setTimeout(queryWeather, 60000);
              }
            case 38:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 32]]);
      }));
      return _queryWeather.apply(this, arguments);
    }
    ;
    queryWeather();
    return function () {
      isActive = false;
      clearTimeout(timerId);
    };
  }, [activeCity, api.error, setWeather]);
  return {
    isPending: isPending
  };
});

/***/ }),

/***/ 90637:
/*!************************************************!*\
  !*** ./src/components/WeatherWidget/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 39471);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ 93886);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ 88495);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd */ 44723);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd */ 28669);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ 87073);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/find */ 53698);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_locale_ru_RU__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/locale/ru_RU */ 58177);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnd-kit/core */ 96712);
/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Body */ 35875);
/* harmony import */ var _components_SettingsButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/SettingsButton */ 83560);
/* harmony import */ var _components_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Settings */ 5224);
/* harmony import */ var _hooks_useFetchWeather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks/useFetchWeather */ 48329);
/* harmony import */ var _components_ErrorBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ErrorBody */ 25179);
/* harmony import */ var _components_DeletionButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/DeletionButton */ 90309);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.less */ 72617);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ 47671);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var useToken = antd__WEBPACK_IMPORTED_MODULE_12__["default"].useToken;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var api = _ref.api,
    id = _ref.id,
    activeCityValue = _ref.activeCityValue,
    isTempatureUnitC = _ref.isTempatureUnitC,
    setIsTempatureUnitC = _ref.setIsTempatureUnitC,
    setActiveCityValue = _ref.setActiveCityValue,
    cities = _ref.cities,
    deleteWidget = _ref["delete"];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isSettingMode = _useState2[0],
    setIsSettingMode = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    weather = _useState4[0],
    setWeather = _useState4[1];
  var activeCity = lodash_find__WEBPACK_IMPORTED_MODULE_2___default()(cities, ['value', activeCityValue]);
  var _useFetchWeather = (0,_hooks_useFetchWeather__WEBPACK_IMPORTED_MODULE_7__["default"])({
      activeCity: activeCity,
      setWeather: setWeather,
      api: api
    }),
    isPending = _useFetchWeather.isPending;
  var localHour = weather ? weather.localtime.hour() : 0;
  var isDay = weather ? localHour >= 6 && localHour < 22 : true;
  var cardClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_less__WEBPACK_IMPORTED_MODULE_10__["default"].card, _defineProperty({}, isDay ? _index_less__WEBPACK_IMPORTED_MODULE_10__["default"].day : _index_less__WEBPACK_IMPORTED_MODULE_10__["default"].night, weather && !isSettingMode));
  var _useToken = useToken(),
    token = _useToken.token;
  var _useDraggable = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_3__.useDraggable)({
      id: id
    }),
    attributes = _useDraggable.attributes,
    listeners = _useDraggable.listeners,
    setNodeRef = _useDraggable.setNodeRef,
    transform = _useDraggable.transform;
  var style = transform ? {
    zIndex: 100,
    transform: "translate3d(".concat(transform.x, "px, ").concat(transform.y, "px, 0)")
  } : undefined;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__["default"], {
    locale: antd_locale_ru_RU__WEBPACK_IMPORTED_MODULE_14__["default"],
    theme: {
      token: isDay ? {} : {
        colorTextBase: token.colorBgBase
      }
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_15__["default"], _objectSpread(_objectSpread(_objectSpread({
      className: cardClassName,
      size: "small",
      ref: setNodeRef,
      loading: isPending && (!weather || !activeCity),
      style: style
    }, listeners), attributes), {}, {
      children: [weather && activeCity && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Body__WEBPACK_IMPORTED_MODULE_4__["default"], {
          isTempatureUnitC: isTempatureUnitC,
          isDay: isDay,
          weather: weather,
          cityName: activeCity.label
        }), isSettingMode && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__["default"], {
          locale: antd_locale_ru_RU__WEBPACK_IMPORTED_MODULE_14__["default"],
          theme: {
            token: {
              colorTextBase: token.colorTextBase
            }
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Settings__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: _index_less__WEBPACK_IMPORTED_MODULE_10__["default"].settings,
            isTempatureUnitC: isTempatureUnitC,
            setIsTempatureUnitC: setIsTempatureUnitC,
            cities: cities,
            activeCityValue: activeCityValue,
            onCityChange: setActiveCityValue
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_16__["default"], {
          className: _index_less__WEBPACK_IMPORTED_MODULE_10__["default"].buttons,
          children: [!isSettingMode && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_DeletionButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
            onClick: function onClick() {
              deleteWidget();
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_SettingsButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
            isSettingMode: isSettingMode,
            onClick: function onClick() {
              setIsSettingMode(function (isOldSettingMode) {
                return !isOldSettingMode;
              });
            }
          })]
        })]
      }), (!weather || !activeCity) && !isPending && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_ErrorBody__WEBPACK_IMPORTED_MODULE_8__["default"], {})]
    }))
  });
});

/***/ }),

/***/ 20591:
/*!*********************************************************************!*\
  !*** ./src/components/WidgetPanel/hooks/useWidgetDatasRedusers.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 39471);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/map */ 27215);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/filter */ 27199);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/reduce */ 12019);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




function reducer(state, action) {
  if (action.type === 'addNew') {
    return [[].concat(_toConsumableArray(state[0]), [action.id]), [].concat(_toConsumableArray(state[1]), [{
      id: action.id,
      isTempatureUnitC: true,
      columnId: 1,
      activeCityValue: action.activeCityValue
    }])];
  }
  if (action.type === 'delete') {
    return [lodash_filter__WEBPACK_IMPORTED_MODULE_2___default()(state[0], function (id) {
      return id !== action.id;
    }), lodash_filter__WEBPACK_IMPORTED_MODULE_2___default()(state[1], function (_ref) {
      var id = _ref.id;
      return id !== action.id;
    })];
  }
  return [state[0], lodash_map__WEBPACK_IMPORTED_MODULE_1___default()(state[1], function (widgetData) {
    if (action.type === 'setActiveCityValue' && widgetData.id === action.id) {
      return _objectSpread(_objectSpread({}, widgetData), {}, {
        activeCityValue: action.activeCityValue
      });
    }
    if (action.type === 'setIsTempatureUnitC' && widgetData.id === action.id) {
      return _objectSpread(_objectSpread({}, widgetData), {}, {
        isTempatureUnitC: action.isTempatureUnitC
      });
    }
    if (action.type === 'setColimnId' && widgetData.id === action.id) {
      return _objectSpread(_objectSpread({}, widgetData), {}, {
        columnId: action.columnId
      });
    }
    return widgetData;
  })];
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref2) {
  var cities = _ref2.cities;
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, [[], []]),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    _useReducer2$ = _slicedToArray(_useReducer2[0], 2),
    widgetDataIds = _useReducer2$[0],
    widgetDatas = _useReducer2$[1],
    dispatch = _useReducer2[1];
  var nextWidgetId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  var onAdditionButtonClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    nextWidgetId.current = nextWidgetId.current + 1;
    var activeCityValue = cities.length > 0 ? String(cities[0].value) : undefined;
    if (!activeCityValue) {
      return;
    }
    dispatch({
      type: 'addNew',
      id: nextWidgetId.current,
      activeCityValue: activeCityValue
    });
  }, [cities, dispatch]);
  var changeColimnId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref3) {
    var id = _ref3.id,
      columnId = _ref3.columnId;
    dispatch({
      type: 'setColimnId',
      id: id,
      columnId: columnId
    });
  }, [dispatch]);
  var weaterWidgetHandlers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return lodash_reduce__WEBPACK_IMPORTED_MODULE_3___default()(widgetDataIds, function (result, widgetDataId) {
      result[widgetDataId] = {
        setActiveCityValue: function setActiveCityValue(activeCityValue) {
          dispatch({
            type: 'setActiveCityValue',
            activeCityValue: activeCityValue,
            id: widgetDataId
          });
        },
        setIsTempatureUnitC: function setIsTempatureUnitC(isTempatureUnitC) {
          dispatch({
            type: 'setIsTempatureUnitC',
            isTempatureUnitC: isTempatureUnitC,
            id: widgetDataId
          });
        },
        "delete": function _delete() {
          dispatch({
            type: 'delete',
            id: widgetDataId
          });
        }
      };
      return result;
    }, {});
  }, [dispatch, widgetDataIds]);
  return {
    onAdditionButtonClick: onAdditionButtonClick,
    weaterWidgetHandlers: weaterWidgetHandlers,
    widgetDatas: widgetDatas,
    changeColimnId: changeColimnId
  };
}

/***/ }),

/***/ 16367:
/*!**********************************************!*\
  !*** ./src/components/WidgetPanel/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 39471);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dnd-kit/core */ 96712);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ 53530);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ 47705);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ 87159);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ant-design/icons */ 21979);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/map */ 27215);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/filter */ 27199);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/noop */ 84165);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Column__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Column */ 21665);
/* harmony import */ var _components_WeatherWidget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/WeatherWidget */ 90637);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.less */ 31991);
/* harmony import */ var _hooks_useWidgetDatasRedusers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/useWidgetDatasRedusers */ 20591);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ 47671);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var cities = [{
  value: 'Paris',
  label: 'Париж'
}, {
  value: 'Smolensk',
  label: 'Смоленск'
}, {
  value: 'Ekaterinburg',
  label: 'Екатеринбург'
}, {
  value: 'HongKong',
  label: 'Гонконг'
}];
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var _notification$useNoti = antd__WEBPACK_IMPORTED_MODULE_10__["default"].useNotification(),
    _notification$useNoti2 = _slicedToArray(_notification$useNoti, 2),
    api = _notification$useNoti2[0],
    contextHolder = _notification$useNoti2[1];
  var _useWidgetDatasReduse = (0,_hooks_useWidgetDatasRedusers__WEBPACK_IMPORTED_MODULE_8__["default"])({
      cities: cities
    }),
    onAdditionButtonClick = _useWidgetDatasReduse.onAdditionButtonClick,
    widgetDatas = _useWidgetDatasReduse.widgetDatas,
    weaterWidgetHandlers = _useWidgetDatasReduse.weaterWidgetHandlers,
    changeColimnId = _useWidgetDatasReduse.changeColimnId;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    activeId = _useState2[0],
    setActiveId = _useState2[1];
  var sensors = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.useSensors)((0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.useSensor)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.PointerSensor, {
    activationConstraint: {
      distance: 8
    }
  }));
  var handleDragStart = function handleDragStart(event) {
    setActiveId(Number(event.active.id));
  };
  var handleDragEnd = function handleDragEnd(event) {
    setActiveId(null);
    if (event.active && event.active.id && event.over && event.over.id) {
      changeColimnId({
        id: Number(event.active.id),
        columnId: Number(event.over.id)
      });
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.DndContext, {
      onDragStart: handleDragStart,
      onDragEnd: handleDragEnd,
      sensors: sensors,
      children: [contextHolder, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_7__["default"].main,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__["default"], {
          className: _index_less__WEBPACK_IMPORTED_MODULE_7__["default"].addButton,
          type: "primary",
          shape: "circle",
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__["default"], {}),
          ghost: true,
          onClick: onAdditionButtonClick
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__["default"], {
          gutter: 16,
          className: _index_less__WEBPACK_IMPORTED_MODULE_7__["default"].row,
          children: lodash_map__WEBPACK_IMPORTED_MODULE_2___default()([1, 2, 3], function (columnId) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Column__WEBPACK_IMPORTED_MODULE_5__["default"], {
              id: columnId,
              children: lodash_map__WEBPACK_IMPORTED_MODULE_2___default()(lodash_filter__WEBPACK_IMPORTED_MODULE_3___default()(widgetDatas, ['columnId', columnId]), function (_ref) {
                var id = _ref.id,
                  activeCityValue = _ref.activeCityValue,
                  isTempatureUnitC = _ref.isTempatureUnitC;
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_WeatherWidget__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  cities: cities,
                  api: api,
                  id: id,
                  activeCityValue: activeCityValue,
                  isTempatureUnitC: isTempatureUnitC,
                  setActiveCityValue: weaterWidgetHandlers[id].setActiveCityValue,
                  setIsTempatureUnitC: weaterWidgetHandlers[id].setIsTempatureUnitC,
                  "delete": weaterWidgetHandlers[id]["delete"]
                }, id);
              })
            }, columnId);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.DragOverlay, {
        children: activeId ? lodash_map__WEBPACK_IMPORTED_MODULE_2___default()(lodash_filter__WEBPACK_IMPORTED_MODULE_3___default()(widgetDatas, ['id', activeId]), function (_ref2) {
          var id = _ref2.id,
            activeCityValue = _ref2.activeCityValue,
            isTempatureUnitC = _ref2.isTempatureUnitC;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_WeatherWidget__WEBPACK_IMPORTED_MODULE_6__["default"], {
            cities: cities,
            api: api,
            id: id,
            activeCityValue: activeCityValue,
            isTempatureUnitC: isTempatureUnitC,
            setActiveCityValue: (lodash_noop__WEBPACK_IMPORTED_MODULE_4___default()),
            setIsTempatureUnitC: (lodash_noop__WEBPACK_IMPORTED_MODULE_4___default()),
            "delete": (lodash_noop__WEBPACK_IMPORTED_MODULE_4___default())
          }, id);
        }) : null
      })]
    })
  });
}

/***/ }),

/***/ 19513:
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ 34723);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ 31017);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ 20801);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ 47671);




var domNode = document.getElementById('root');
if (!domNode) {
  domNode = document.createElement('div');
  domNode.id = 'root';
  document.body.appendChild(domNode);
}
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(domNode);
root.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_App__WEBPACK_IMPORTED_MODULE_1__["default"], {}));

/***/ }),

/***/ 66213:
/*!******************************************!*\
  !*** ./src/components/Column/index.less ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"col":"K8Cd22jfCRsni7oiKyjg","space":"fZHMX3RV663MgXKhDaWo"});

/***/ }),

/***/ 94271:
/*!*****************************************************************!*\
  !*** ./src/components/WeatherWidget/components/Body/index.less ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"cityName":"C04ksiAazI5d0FxyiA_J","tempature":"l9557CPeDPN0wY1i9Q4T","conditionIcon":"y5Ap27t_kXnDc33vWGjg"});

/***/ }),

/***/ 88165:
/*!***************************************************************************!*\
  !*** ./src/components/WeatherWidget/components/DeletionButton/index.less ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"button":"UDC4dcBdUXWcFvv1f5VM"});

/***/ }),

/***/ 51434:
/*!***************************************************************************!*\
  !*** ./src/components/WeatherWidget/components/SettingsButton/index.less ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"button":"XFQXz30JLdwrbmNazhqv"});

/***/ }),

/***/ 61342:
/*!*********************************************************************!*\
  !*** ./src/components/WeatherWidget/components/Settings/index.less ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"settings":"B2cneReRvVTkBawR3T9U","item":"M8DeSTT3oQSEJd9trYkT","citySelect":"okDk8kts6zo9lYm5pKsA"});

/***/ }),

/***/ 72617:
/*!*************************************************!*\
  !*** ./src/components/WeatherWidget/index.less ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"card":"osJymh9q3igk7lhcDrUi","day":"ZIxx7MOpOLAWHHoV9oGl","night":"NSInktsBoKkmjuqD0kxR","settings":"ENeQPVc6Yd8uJQUpuQO0","buttons":"i6Z0vBnv_6itGFvHYRVD"});

/***/ }),

/***/ 31991:
/*!***********************************************!*\
  !*** ./src/components/WidgetPanel/index.less ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"main":"Q3dCuOoBUVaveZDEzE4x","addButton":"mS49ARBPVA2V7KlXpkL1","row":"oK54Sit4MVXhfXBHe7jA"});

/***/ }),

/***/ 20801:
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ 60096:
/*!**************************************************************************************!*\
  !*** ./src/components/WeatherWidget/assets/day/ lazy ^\.\/.*\.png$ namespace object ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./113.png": [
		75811,
		"src_components_WeatherWidget_assets_day_113_png"
	],
	"./116.png": [
		47390,
		"src_components_WeatherWidget_assets_day_116_png"
	],
	"./119.png": [
		76297,
		"src_components_WeatherWidget_assets_day_119_png"
	],
	"./122.png": [
		83487,
		"src_components_WeatherWidget_assets_day_122_png"
	],
	"./143.png": [
		66196,
		"src_components_WeatherWidget_assets_day_143_png"
	],
	"./176.png": [
		49864,
		"src_components_WeatherWidget_assets_day_176_png"
	],
	"./179.png": [
		79711,
		"src_components_WeatherWidget_assets_day_179_png"
	],
	"./182.png": [
		89849,
		"src_components_WeatherWidget_assets_day_182_png"
	],
	"./185.png": [
		96774,
		"src_components_WeatherWidget_assets_day_185_png"
	],
	"./200.png": [
		52752,
		"src_components_WeatherWidget_assets_day_200_png"
	],
	"./227.png": [
		29989,
		"src_components_WeatherWidget_assets_day_227_png"
	],
	"./230.png": [
		16661,
		"src_components_WeatherWidget_assets_day_230_png"
	],
	"./248.png": [
		34756,
		"src_components_WeatherWidget_assets_day_248_png"
	],
	"./260.png": [
		71942,
		"src_components_WeatherWidget_assets_day_260_png"
	],
	"./263.png": [
		53149,
		"src_components_WeatherWidget_assets_day_263_png"
	],
	"./266.png": [
		68112,
		"src_components_WeatherWidget_assets_day_266_png"
	],
	"./281.png": [
		40705,
		"src_components_WeatherWidget_assets_day_281_png"
	],
	"./284.png": [
		17788,
		"src_components_WeatherWidget_assets_day_284_png"
	],
	"./293.png": [
		9672,
		"src_components_WeatherWidget_assets_day_293_png"
	],
	"./296.png": [
		22549,
		"src_components_WeatherWidget_assets_day_296_png"
	],
	"./299.png": [
		51698,
		"src_components_WeatherWidget_assets_day_299_png"
	],
	"./302.png": [
		93379,
		"src_components_WeatherWidget_assets_day_302_png"
	],
	"./305.png": [
		63212,
		"src_components_WeatherWidget_assets_day_305_png"
	],
	"./308.png": [
		93865,
		"src_components_WeatherWidget_assets_day_308_png"
	],
	"./311.png": [
		1055,
		"src_components_WeatherWidget_assets_day_311_png"
	],
	"./314.png": [
		48434,
		"src_components_WeatherWidget_assets_day_314_png"
	],
	"./317.png": [
		97225,
		"src_components_WeatherWidget_assets_day_317_png"
	],
	"./320.png": [
		47047,
		"src_components_WeatherWidget_assets_day_320_png"
	],
	"./323.png": [
		44396,
		"src_components_WeatherWidget_assets_day_323_png"
	],
	"./326.png": [
		61297,
		"src_components_WeatherWidget_assets_day_326_png"
	],
	"./329.png": [
		342,
		"src_components_WeatherWidget_assets_day_329_png"
	],
	"./332.png": [
		99982,
		"src_components_WeatherWidget_assets_day_332_png"
	],
	"./335.png": [
		98465,
		"src_components_WeatherWidget_assets_day_335_png"
	],
	"./338.png": [
		47028,
		"src_components_WeatherWidget_assets_day_338_png"
	],
	"./350.png": [
		46874,
		"src_components_WeatherWidget_assets_day_350_png"
	],
	"./353.png": [
		74014,
		"src_components_WeatherWidget_assets_day_353_png"
	],
	"./356.png": [
		34732,
		"src_components_WeatherWidget_assets_day_356_png"
	],
	"./359.png": [
		14619,
		"src_components_WeatherWidget_assets_day_359_png"
	],
	"./362.png": [
		58969,
		"src_components_WeatherWidget_assets_day_362_png"
	],
	"./365.png": [
		25926,
		"src_components_WeatherWidget_assets_day_365_png"
	],
	"./368.png": [
		69395,
		"src_components_WeatherWidget_assets_day_368_png"
	],
	"./371.png": [
		90313,
		"src_components_WeatherWidget_assets_day_371_png"
	],
	"./374.png": [
		8868,
		"src_components_WeatherWidget_assets_day_374_png"
	],
	"./377.png": [
		94143,
		"src_components_WeatherWidget_assets_day_377_png"
	],
	"./386.png": [
		78159,
		"src_components_WeatherWidget_assets_day_386_png"
	],
	"./389.png": [
		87000,
		"src_components_WeatherWidget_assets_day_389_png"
	],
	"./392.png": [
		72876,
		"src_components_WeatherWidget_assets_day_392_png"
	],
	"./395.png": [
		3043,
		"src_components_WeatherWidget_assets_day_395_png"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 1 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 60096;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 45697:
/*!*************************************************************!*\
  !*** ./src/components/WeatherWidget/assets/conditions.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"code":1000,"day":"Sunny","night":"Clear","icon":113,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"مشمس","night_text":"صافي"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"সূর্যোজ্জ্বল","night_text":"পরিষ্কার"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Слънчево","night_text":"Ясно"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"晴天","night_text":"晴朗"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"晴天","night_text":"晴朗"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Slunečno","night_text":"Jasno"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Zonnig","night_text":"Helder"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Aurinkoinen","night_text":"Pilvetön"},{"lang_name":"French","lang_iso":"fr","day_text":"Ensoleillé","night_text":"Clair"},{"lang_name":"German","lang_iso":"de","day_text":"Sonnig","night_text":"Klar"},{"lang_name":"Greek","lang_iso":"el","day_text":"Ηλιόλουστη/ο","night_text":"Αίθριος"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"धूप वाला","night_text":"साफ"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Napos idő","night_text":"Felhőtlen"},{"lang_name":"Italian","lang_iso":"it","day_text":"Soleggiato","night_text":"Sereno"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"晴れ","night_text":"快晴"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Srengenge Sumunar","night_text":"Resik"},{"lang_name":"Korean","lang_iso":"ko","day_text":"맑음","night_text":"화창함"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"晴天","night_text":"晴朗"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"लख्ख","night_text":"स्वच्छ"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Słonecznie","night_text":"Bezchmurnie"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Sol","night_text":"Céu limpo"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਧੁੱਪਦਾਰ","night_text":"ਸਾਫ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Soare","night_text":"Senin"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Солнечно","night_text":"Ясно"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Sunčano","night_text":"Vedro"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"හිරු එළිය සහිත","night_text":"පැහැදිලි"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Slnečno","night_text":"Jasno"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Soleado","night_text":"Despejado"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Soligt","night_text":"Klart"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"வெயில்","night_text":"தெளிவு"},{"lang_name":"Telugu","lang_iso":"te","day_text":"ఎండకాయడం","night_text":"స్పష్టంగా ఉండటం"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Güneşli","night_text":"Açık"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Сонячно","night_text":"Ясно"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"دھوپ والا","night_text":"شفاف"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Nhiều nắng","night_text":"Trời quang"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"贴金","night_text":"贴起好"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"有阳光","night_text":"晴朗"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"晴天","night_text":"晴朗"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Kuyashisa","night_text":"Licwathile"}]},{"code":1003,"day":"Partly Cloudy","night":"Partly Cloudy","icon":116,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"غائم جزئياً","night_text":"غائم جزئياً"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"অংশত মেঘলা","night_text":"অংশত মেঘলা"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Частична облачност","night_text":"Частична облачност"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"局部多云","night_text":"局部多云"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"局部多雲","night_text":"局部多雲"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Částečně oblačno","night_text":"Částečně oblačno"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Gedeeltelijk bewolkt","night_text":"Gedeeltelijk bewolkt"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Puolipilvinen","night_text":"Puolipilvinen"},{"lang_name":"French","lang_iso":"fr","day_text":"Partiellement nuageux","night_text":"Partiellement nuageux"},{"lang_name":"German","lang_iso":"de","day_text":"leicht bewölkt","night_text":"leicht bewölkt"},{"lang_name":"Greek","lang_iso":"el","day_text":"Κατά τόπους συννεφιά","night_text":"Κατά τόπους συννεφιά"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"हल्के बादल","night_text":"हल्के बादल"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Részben felhős","night_text":"Részben felhős"},{"lang_name":"Italian","lang_iso":"it","day_text":"Parzialmente nuvoloso","night_text":"Parzialmente nuvoloso"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"所により曇り","night_text":"所により曇り"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Mendhung sebagian","night_text":"Mendhung sebagian"},{"lang_name":"Korean","lang_iso":"ko","day_text":"대체로 맑음","night_text":"대체로 맑음"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"局部多云","night_text":"局部多云"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"अंशत: ढगाळ","night_text":"अंशत: ढगाळ"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Częściowe zachmurzenie","night_text":"Częściowe zachmurzenie"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Parcialmente nublado","night_text":"Parcialmente nublado"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਥੋੜ੍ਹਾਂ ਬੱਦਲਵਾਈ","night_text":"ਥੋੜ੍ਹਾਂ ਬੱਦਲਵਾਈ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Parțial noros","night_text":"Parțial noros"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Переменная облачность","night_text":"Переменная облачность"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Delimično oblačno","night_text":"Delimično oblačno"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"අඩ වශයෙන් වළාකුළු සහිත","night_text":"අඩ වශයෙන් වළාකුළු සහිත"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Čiastočne oblačno","night_text":"Čiastočne oblačno"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Parcialmente nublado","night_text":"Parcialmente nublado"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Växlande molnighet","night_text":"Växlande molnighet"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"கொஞ்சம் மேகமூட்டம்","night_text":"கொஞ்சம் மேகமூட்டம்"},{"lang_name":"Telugu","lang_iso":"te","day_text":"పాక్షికంగా మేఘావృతం","night_text":"పాక్షికంగా మేఘావృతం"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Parçalı Bulutlu","night_text":"Parçalı Bulutlu"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Невелика хмарність","night_text":"Невелика хмарність"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"تھوڑے بادلوں والا","night_text":"تھوڑے بادلوں والا"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Có Mây","night_text":"Có Mây"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"撅部兜云","night_text":"撅部兜云"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"局部多云","night_text":"局部多云"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"局部多雲","night_text":"局部多雲"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Lithe gqwa gqwa ngamafu","night_text":"Lithe gqwa gqwa ngamafu"}]},{"code":1006,"day":"Cloudy","night":"Cloudy","icon":119,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"غائم","night_text":"غائم"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"মেঘলা","night_text":"মেঘলা"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Облачно","night_text":"Облачно"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"多云","night_text":"多云"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"多雲","night_text":"多雲"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Oblačno","night_text":"Oblačno"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Bewolkt","night_text":"Bewolkt"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Pilvinen","night_text":"Pilvinen"},{"lang_name":"French","lang_iso":"fr","day_text":"Nuageux","night_text":"Nuageux"},{"lang_name":"German","lang_iso":"de","day_text":"bewölkt","night_text":"bewölkt"},{"lang_name":"Greek","lang_iso":"el","day_text":"Συννεφιά","night_text":"Συννεφιά"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"बादलों से भरा","night_text":"बादलों से भरा"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Felhős","night_text":"Felhős"},{"lang_name":"Italian","lang_iso":"it","day_text":"Nuvoloso","night_text":"Nuvoloso"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"曇り","night_text":"曇り"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Mendhung","night_text":"Mendhung"},{"lang_name":"Korean","lang_iso":"ko","day_text":"구름 낀","night_text":"구름 낀"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"多云","night_text":"多云"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"ढगाळ","night_text":"ढगाळ"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Zachmurzenie","night_text":"Zachmurzenie"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Nublado","night_text":"Nublado"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਬੱਦਲਵਾਈ","night_text":"ਬੱਦਲਵਾਈ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Noros","night_text":"Noros"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Облачно","night_text":"Облачно"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Oblačno","night_text":"Oblačno"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"වළාකුළු සහිත","night_text":"වළාකුළු සහිත"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Oblačno","night_text":"Oblačno"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Nublado","night_text":"Nublado"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Molnigt","night_text":"Molnigt"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"மேகமூட்டம்","night_text":"மேகமூட்டம்"},{"lang_name":"Telugu","lang_iso":"te","day_text":"మేఘావృతం","night_text":"మేఘావృతం"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Bulutlu","night_text":"Bulutlu"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Хмарно","night_text":"Хмарно"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"بادلوں والا","night_text":"بادلوں والا"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Nhiều mây","night_text":"Nhiều mây"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"兜云","night_text":"兜云"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"多云","night_text":"多云"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"多雲","night_text":"多雲"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Linamafu","night_text":"Linamafu"}]},{"code":1009,"day":"Overcast","night":"Overcast","icon":122,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"ملبَد بالغيوم","night_text":"ملبَد بالغيوم"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"মেঘাচ্ছন্ন","night_text":"মেঘাচ্ছন্ন"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Плътна облачност","night_text":"Плътна облачност"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"阴天","night_text":"阴天"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"陰天","night_text":"陰天"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Zataženo","night_text":"Zataženo"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Geheel bewolkt","night_text":"Geheel bewolkt"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Täysin pilvinen","night_text":"Täysin pilvinen"},{"lang_name":"French","lang_iso":"fr","day_text":"Couvert","night_text":"Couvert"},{"lang_name":"German","lang_iso":"de","day_text":"bedeckt","night_text":"bedeckt"},{"lang_name":"Greek","lang_iso":"el","day_text":"Νεφελώδης","night_text":"Νεφελώδης"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"बादलों से घिरा","night_text":"बादलों से घिरा"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Borús","night_text":"Borús"},{"lang_name":"Italian","lang_iso":"it","day_text":"Coperto","night_text":"Coperto"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"本曇り","night_text":"本曇り"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Mendhung peteng","night_text":"Mendhung peteng"},{"lang_name":"Korean","lang_iso":"ko","day_text":"흐린","night_text":"흐린"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"阴天","night_text":"阴天"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"मेघाच्छादित","night_text":"मेघाच्छादित"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Pochmurno","night_text":"Pochmurno"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Encoberto","night_text":"Encoberto"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਘਿਰਿਆ ਹੋਇਆ","night_text":"ਘਿਰਿਆ ਹੋਇਆ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Cer acoperit","night_text":"Cer acoperit"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Пасмурно","night_text":"Пасмурно"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Naoblačenje","night_text":"Naoblačenje"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"වළාකුලින් අඳුරු වූ","night_text":"වළාකුලින් අඳුරු වූ"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Zamračené","night_text":"Zamračené"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Cielo cubierto","night_text":"Cielo cubierto"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Mulet","night_text":"Mulet"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"மேகம்சூழ்ந்தது","night_text":"மேகம்சூழ்ந்தது"},{"lang_name":"Telugu","lang_iso":"te","day_text":"మబ్బుకమ్ము","night_text":"మబ్బుకమ్ము"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Çok bulutlu","night_text":"Çok bulutlu"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Суцільна хмарність","night_text":"Суцільна хмарність"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"بدلی چھا جانا","night_text":"بدلی چھا جانا"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"U ám","night_text":"U ám"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"兜云","night_text":"兜云"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"阴天","night_text":"阴天"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"陰天","night_text":"陰天"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Liguqubele","night_text":"Liguqubele"}]},{"code":1030,"day":"Mist","night":"Mist","icon":143,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"سديم","night_text":"سديم"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"হাল্কা কুয়াশা","night_text":"হাল্কা কুয়াশা"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Лека мъгла","night_text":"Лека мъгла"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"薄雾","night_text":"薄雾"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"薄霧","night_text":"薄霧"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Opar","night_text":"Opar"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Mist","night_text":"Mist"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Sumuinen","night_text":"Sumuinen"},{"lang_name":"French","lang_iso":"fr","day_text":"Brume","night_text":"Brume"},{"lang_name":"German","lang_iso":"de","day_text":"leichter Nebel","night_text":"leichter Nebel"},{"lang_name":"Greek","lang_iso":"el","day_text":"Ομίχλη","night_text":"Ομίχλη"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"कोहरा","night_text":"कोहरा"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Gyenge köd","night_text":"Gyenge köd"},{"lang_name":"Italian","lang_iso":"it","day_text":"Foschia","night_text":"Foschia"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"もや","night_text":"もや"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Pedhut","night_text":"Pedhut"},{"lang_name":"Korean","lang_iso":"ko","day_text":"안개","night_text":"안개"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"薄雾","night_text":"薄雾"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"धुके","night_text":"धुके"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Zamglenie","night_text":"Zamglenie"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Neblina","night_text":"Neblina"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਕੋਹਰਾ","night_text":"ਕੋਹਰਾ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ceață","night_text":"Ceață"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Дымка","night_text":"Дымка"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Sumaglica","night_text":"Sumaglica"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"මීදුම","night_text":"මීදුම"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Opar","night_text":"Opar"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Neblina","night_text":"Neblina"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Fuktdis","night_text":"Fuktdis"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"பனிமூட்டம்","night_text":"பனிமூட்டம்"},{"lang_name":"Telugu","lang_iso":"te","day_text":"పొగమంచు","night_text":"పొగమంచు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Sisli","night_text":"Sisli"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Туман","night_text":"Туман"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"کہر","night_text":"کہر"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Sương mù","night_text":"Sương mù"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"悠波吴","night_text":"悠波吴"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"有薄雾","night_text":"有薄雾"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"薄霧","night_text":"薄霧"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Kunenkungu","night_text":"Kunenkungu"}]},{"code":1063,"day":"Patchy rain nearby","night":"Patchy rain nearby","icon":176,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"أمطار متفاوتة قريبة","night_text":"أمطار متفاوتة قريبة"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"পার্শ্ববর্তী এলাকায় অনিয়মিত বৃষ্টিপাত","night_text":"পার্শ্ববর্তী এলাকায় অনিয়মিত বৃষ্টিপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Дъждове на отделни места в околността","night_text":"Дъждове на отделни места в околността"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"周边有零星小雨","night_text":"周边有零星小雨"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"週边有零星小雨","night_text":"週边有零星小雨"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Místy blízký déšť","night_text":"Místy blízký déšť"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Plaatselijke regen in de omgeving","night_text":"Plaatselijke regen in de omgeving"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Hajanaista sadetta lähellä","night_text":"Hajanaista sadetta lähellä"},{"lang_name":"French","lang_iso":"fr","day_text":"Pluie éparse à proximité","night_text":"Pluie éparse à proximité"},{"lang_name":"German","lang_iso":"de","day_text":"stellenweise Regenfall","night_text":"stellenweise Regenfall"},{"lang_name":"Greek","lang_iso":"el","day_text":"Κατά τόπους βροχή σε κοντινή απόσταση","night_text":"Κατά τόπους βροχή σε κοντινή απόσταση"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"आसपास अलग-अलग इलाकों में वारिश","night_text":"आसपास अलग-अलग इलाकों में वारिश"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"A közelben eső","night_text":"A közelben eső"},{"lang_name":"Italian","lang_iso":"it","day_text":"Pioggia a tratti nelle vicinanze","night_text":"Pioggia a tratti nelle vicinanze"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"近くで所により雨","night_text":"近くで所により雨"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan ora rata ing sacedhake","night_text":"Udan ora rata ing sacedhake"},{"lang_name":"Korean","lang_iso":"ko","day_text":"근처 곳곳에 비","night_text":"근처 곳곳에 비"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"周边有零星小雨","night_text":"周边有零星小雨"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"आजूबाजूला अनियमित पाऊस","night_text":"आजूबाजूला अनियमित पाऊस"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Miejscowe opady deszczu w pobliżu","night_text":"Miejscowe opady deszczu w pobliżu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Possibilidade de chuva irregular","night_text":"Possibilidade de chuva irregular"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਨੇੜੇ ਕਿਤੇ-ਕਿਤੇ ਮੀਂਹ","night_text":"ਨੇੜੇ ਕਿਤੇ-ਕਿਤੇ ਮੀਂਹ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ploi pe porţiuni în apropiere","night_text":"Ploi pe porţiuni în apropiere"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Местами дождь","night_text":"Местами дождь"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Mestimična kiša","night_text":"Mestimična kiša"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"ආසන්නයේ තැනින් තැන වැසි","night_text":"ආසන්නයේ තැනින් තැන වැසි"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Miestami blízky dážď","night_text":"Miestami blízky dážď"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Lluvia  moderada a intervalos","night_text":"Lluvia  moderada a intervalos"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Områden med regn i närheten","night_text":"Områden med regn i närheten"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"அருகில் சீரில்லாத மழை","night_text":"அருகில் சீரில்லாத மழை"},{"lang_name":"Telugu","lang_iso":"te","day_text":"చెదురుమదురుగా దగ్గరల్లో వర్షం","night_text":"చెదురుమదురుగా దగ్గరల్లో వర్షం"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Bölgesel düzensiz yağmur yağışlı","night_text":"Bölgesel düzensiz yağmur yağışlı"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Місцями дощ","night_text":"Місцями дощ"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"قریب میں جہاں تہاں بارش","night_text":"قریب میں جہاں تہاں بارش"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa lả tả gần đó","night_text":"Mưa lả tả gần đó"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"无尽撅部落鱼","night_text":"无尽撅部落鱼"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"附近有零星雨","night_text":"附近有零星雨"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"週边有零星小雨","night_text":"週边有零星小雨"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Kunezihlamvana zemvula lapha nalapha eduze","night_text":"Kunezihlamvana zemvula lapha nalapha eduze"}]},{"code":1066,"day":"Patchy snow nearby","night":"Patchy snow nearby","icon":179,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"ثلوج متفاوتة قريبة","night_text":"ثلوج متفاوتة قريبة"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"পার্শ্ববর্তী এলাকায় অনিয়মিত তুষারপাত","night_text":"পার্শ্ববর্তী এলাকায় অনিয়মিত তুষারপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Снеговалежи на отделни места в околността","night_text":"Снеговалежи на отделни места в околността"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"周边有零星小雪","night_text":"周边有零星小雪"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"週边有零星小雪","night_text":"週边有零星小雪"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Místy blízké sněžení","night_text":"Místy blízké sněžení"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Plaatselijke sneeuw in de omgeving","night_text":"Plaatselijke sneeuw in de omgeving"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Hajanaista lumisadetta lähellä","night_text":"Hajanaista lumisadetta lähellä"},{"lang_name":"French","lang_iso":"fr","day_text":"Neige éparse à proximité","night_text":"Neige éparse à proximité"},{"lang_name":"German","lang_iso":"de","day_text":"stellenweise Schneefall","night_text":"stellenweise Schneefall"},{"lang_name":"Greek","lang_iso":"el","day_text":"Κατά τόπους χιονόπτωση σε κοντινή απόσταση","night_text":"Κατά τόπους χιονόπτωση σε κοντινή απόσταση"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"आसपास अलग-अलग इलाकों में हिमपात","night_text":"आसपास अलग-अलग इलाकों में हिमपात"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"A közelben foltokban havazás","night_text":"A közelben foltokban havazás"},{"lang_name":"Italian","lang_iso":"it","day_text":"Neve a tratti nelle vicinanze","night_text":"Neve a tratti nelle vicinanze"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"近くで所により雪","night_text":"近くで所により雪"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan salju ora rata ing sacedhake","night_text":"Udan salju ora rata ing sacedhake"},{"lang_name":"Korean","lang_iso":"ko","day_text":"근처 곳곳에 눈","night_text":"근처 곳곳에 눈"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"周边有零星小雪","night_text":"周边有零星小雪"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"आजूबाजूला अनियमित बर्फ","night_text":"आजूबाजूला अनियमित बर्फ"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Miejscowe opady śniegu w pobliżu","night_text":"Miejscowe opady śniegu w pobliżu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Possibilidade de neve irregular","night_text":"Possibilidade de neve irregular"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਨੇੜੇ ਕਿਤੇ-ਕਿਤੇ ਬਰਫ","night_text":"ਨੇੜੇ ਕਿਤੇ-ਕਿਤੇ ਬਰਫ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ninsori pe porţiuni în apropiere","night_text":"Ninsori pe porţiuni în apropiere"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Местами снег","night_text":"Местами снег"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Mestimične snežne padavine","night_text":"Mestimične snežne padavine"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"ආසන්නයේ තැනින් තැන හිම","night_text":"ආසන්නයේ තැනින් තැන හිම"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Miestami blízke sneženie","night_text":"Miestami blízke sneženie"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Nieve moderada a intervalos en las aproximaciones","night_text":"Nieve moderada a intervalos en las aproximaciones"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Områden med snö i närheten","night_text":"Områden med snö i närheten"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"அருகில் சீரில்லாத பனிமழை","night_text":"அருகில் சீரில்லாத பனிமழை"},{"lang_name":"Telugu","lang_iso":"te","day_text":"చెదురుమదురుగా దగ్గరల్లో మంచు","night_text":"చెదురుమదురుగా దగ్గరల్లో మంచు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Bölgesel düzensiz kar yağışlı","night_text":"Bölgesel düzensiz kar yağışlı"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Місцями сніг","night_text":"Місцями сніг"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"قریب میں جہاں تہاں برفباری","night_text":"قریب میں جہاں تہاں برفباری"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Tuyết rơi lả tả gần đó","night_text":"Tuyết rơi lả tả gần đó"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"无尽撅部落削","night_text":"无尽撅部落削"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"附近有零星雪","night_text":"附近有零星雪"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"週边有零星小雪","night_text":"週边有零星小雪"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Liyakhithika lapha nalapha eduze","night_text":"Liyakhithika lapha nalapha eduze"}]},{"code":1069,"day":"Patchy sleet nearby","night":"Patchy sleet nearby","icon":182,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"صقيع متفاوت قريب","night_text":"صقيع متفاوت قريب"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"পার্শ্ববর্তী এলাকায় অনিয়মিত বৃষ্টি সহ তুষারপাত","night_text":"পার্শ্ববর্তী এলাকায় অনিয়মিত বৃষ্টি সহ তুষারপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Суграшици на отделни места в околността","night_text":"Суграшици на отделни места в околността"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"周边有零星小雨夹雪","night_text":"周边有零星小雨夹雪"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"週边有零星小雨夾雪","night_text":"週边有零星小雨夾雪"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Místy blízký déšť se sněhem","night_text":"Místy blízký déšť se sněhem"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Plaatselijke natte sneeuw in de omgeving","night_text":"Plaatselijke natte sneeuw in de omgeving"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Hajanaista räntäsadetta lähellä","night_text":"Hajanaista räntäsadetta lähellä"},{"lang_name":"French","lang_iso":"fr","day_text":"Grésil épars à proximité","night_text":"Grésil épars à proximité"},{"lang_name":"German","lang_iso":"de","day_text":"stellenweise Eisregen","night_text":"stellenweise Eisregen"},{"lang_name":"Greek","lang_iso":"el","day_text":"Κατά τόπους χιονόνερο σε κοντινή απόσταση","night_text":"Κατά τόπους χιονόνερο σε κοντινή απόσταση"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"आसपास ओलों के साथ मामूली बारिश","night_text":"आसपास ओलों के साथ मामूली बारिश"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"A közelben foltokban dara","night_text":"A közelben foltokban dara"},{"lang_name":"Italian","lang_iso":"it","day_text":"Nevischio a tratti nelle vicinanze","night_text":"Nevischio a tratti nelle vicinanze"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"近くで所によりみぞれ","night_text":"近くで所によりみぞれ"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan es lan salju ing sacedhake","night_text":"Udan es lan salju ing sacedhake"},{"lang_name":"Korean","lang_iso":"ko","day_text":"근처 곳곳에 진눈깨비","night_text":"근처 곳곳에 진눈깨비"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"周边有零星小雨夹雪","night_text":"周边有零星小雨夹雪"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"आजूबाजूला अनियमित गारांचा पाऊस","night_text":"आजूबाजूला अनियमित गारांचा पाऊस"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Miejscowe opady śniegu z deszczem w pobliżu","night_text":"Miejscowe opady śniegu z deszczem w pobliżu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Possibilidade de neve molhada irregular","night_text":"Possibilidade de neve molhada irregular"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਨੇੜੇ ਕਿਤੇ-ਕਿਤੇ ਬਰਫ ਵਾਲਾ ਮੀਂਹ","night_text":"ਨੇੜੇ ਕਿਤੇ-ਕਿਤੇ ਬਰਫ ਵਾਲਾ ਮੀਂਹ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Lapoviță pe porţiuni în apropiere","night_text":"Lapoviță pe porţiuni în apropiere"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Местами дождь со снегом","night_text":"Местами дождь со снегом"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Mestimična susnežica","night_text":"Mestimična susnežica"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"ආසන්නයේ තැනින් තැන හිම වැස්ස","night_text":"ආසන්නයේ තැනින් තැන හිම වැස්ස"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Miestami blízky dážď so snehom","night_text":"Miestami blízky dážď so snehom"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Aguanieve moderada a intervalos en las aproximaciones","night_text":"Aguanieve moderada a intervalos en las aproximaciones"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Områden med snöblandat regn i närheten","night_text":"Områden med snöblandat regn i närheten"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"அருகில் சீரில்லாத ஆலங்கட்டி மழை","night_text":"அருகில் சீரில்லாத ஆலங்கட்டி மழை"},{"lang_name":"Telugu","lang_iso":"te","day_text":"చెదురుమదురుగా దగ్గరల్లో వడగండ్ల వాన","night_text":"చెదురుమదురుగా దగ్గరల్లో వడగండ్ల వాన"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Bölgesel düzensiz karla karışık yağmurlu","night_text":"Bölgesel düzensiz karla karışık yağmurlu"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Місцями мокрий сніг","night_text":"Місцями мокрий сніг"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"قریب میں جہاں تہاں ژالہ باری","night_text":"قریب میں جہاں تہاں ژالہ باری"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa tuyết lả tả gần đó","night_text":"Mưa tuyết lả tả gần đó"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"无尽撅部鱼假削","night_text":"无尽撅部鱼假削"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"附近有零星雨夹雪","night_text":"附近有零星雨夹雪"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"週边有零星小雨夾雪","night_text":"週边有零星小雨夾雪"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Kunesichotho esihambisana nomoya lapha nalapha","night_text":"Kunesichotho esihambisana nomoya lapha nalapha"}]},{"code":1072,"day":"Patchy freezing drizzle nearby","night":"Patchy freezing drizzle nearby","icon":185,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"رذاذ متجمِد متفاوت قريب","night_text":"رذاذ متجمِد متفاوت قريب"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"পার্শ্ববর্তী এলাকায় অনিয়মিত গুড়ি গুড়ি হিম শীতল বৃষ্টিপাত","night_text":"পার্শ্ববর্তী এলাকায় অনিয়মিত গুড়ি গুড়ি হিম শীতল বৃষ্টিপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Преохладени ръмежи на отделни места в околността","night_text":"Преохладени ръмежи на отделни места в околността"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"周边有有零星小冻雾雨","night_text":"周边有有零星小冻雾雨"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"週边有零星小凍霧雨","night_text":"週边有零星小凍霧雨"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Místy blízké mrznoucí mrholení","night_text":"Místy blízké mrznoucí mrholení"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Plaatselijke onderkoelde motregen in de omgeving","night_text":"Plaatselijke onderkoelde motregen in de omgeving"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Hajanaista jäätävää sadetta lähellä","night_text":"Hajanaista jäätävää sadetta lähellä"},{"lang_name":"French","lang_iso":"fr","day_text":"Bruine verglaçante éparse à proximité","night_text":"Bruine verglaçante éparse à proximité"},{"lang_name":"German","lang_iso":"de","day_text":"stellenweise gefrierender Nieselregen","night_text":"stellenweise gefrierender Nieselregen"},{"lang_name":"Greek","lang_iso":"el","day_text":"Κατά τόπους παγωμένο ψιλόβροχο σε κοντινή απόσταση","night_text":"Κατά τόπους παγωμένο ψιλόβροχο σε κοντινή απόσταση"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"आसपास अलग-अलग इलाकों में जमा देने वाली बौछार","night_text":"आसपास अलग-अलग इलाकों में जमा देने वाली बौछार"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"A közelben foltokban szemerkélő fagyos eső","night_text":"A közelben foltokban szemerkélő fagyos eső"},{"lang_name":"Italian","lang_iso":"it","day_text":"Pioviggine congelantesi a tratti nelle vicinanze","night_text":"Pioviggine congelantesi a tratti nelle vicinanze"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"近くで所により着氷性の霧雨","night_text":"近くで所により着氷性の霧雨"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Grimis atis ora rata ing sacedhake","night_text":"Grimis atis ora rata ing sacedhake"},{"lang_name":"Korean","lang_iso":"ko","day_text":"근처 곳곳에 동결 이슬비","night_text":"근처 곳곳에 동결 이슬비"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"周边有有零星小冻雾雨","night_text":"周边有有零星小冻雾雨"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"आजूबाजूला अनियमित गारठवणारी रिपरिप","night_text":"आजूबाजूला अनियमित गारठवणारी रिपरिप"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Miejscowe wystąpienie mroźnej mżawki w pobliżu","night_text":"Miejscowe wystąpienie mroźnej mżawki w pobliżu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Possibilidade de chuvisco gelado irregular","night_text":"Possibilidade de chuvisco gelado irregular"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਨੇੜੇ ਕਿਤੇ-ਕਿਤੇ ਬਰਫ ਵਾਲੀ ਥੋੜ੍ਹੀ ਕਿਣ-ਮਿਣ","night_text":"ਨੇੜੇ ਕਿਤੇ-ਕਿਤੇ ਬਰਫ ਵਾਲੀ ਥੋੜ੍ਹੀ ਕਿਣ-ਮਿਣ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Burniță şi polei pe porţiuni în apropiere","night_text":"Burniță şi polei pe porţiuni în apropiere"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Местами замерзающая морось","night_text":"Местами замерзающая морось"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Mestimično kiša koja se ledi pri zemlji","night_text":"Mestimično kiša koja se ledi pri zemlji"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"ආසන්නයේ තැනින් තැන ඉතා ශීතල මිදෙන තරමේ සිහින් පොද","night_text":"ආසන්නයේ තැනින් තැන ඉතා ශීතල මිදෙන තරමේ සිහින් පොද"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Miestami blízke mrznúce mrholenie","night_text":"Miestami blízke mrznúce mrholenie"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Llovizna helada a intervalos en las aproximaciones","night_text":"Llovizna helada a intervalos en las aproximaciones"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Områden med underkylt duggregn i närheten","night_text":"Områden med underkylt duggregn i närheten"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"அருகில் சீரில்லாத உறையவைக்கும் மழைத்தூறல்","night_text":"அருகில் சீரில்லாத உறையவைக்கும் மழைத்தூறல்"},{"lang_name":"Telugu","lang_iso":"te","day_text":"చెదురుమదురుగా దగ్గరల్లో ఘనీభవన చినుకులు","night_text":"చెదురుమదురుగా దగ్గరల్లో ఘనీభవన చినుకులు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Bölgesel düzensiz donmuş çisenti","night_text":"Bölgesel düzensiz donmuş çisenti"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Місцями паморозь","night_text":"Місцями паморозь"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"قریب میں جہاں تہاں یخ بستہ پھوہار","night_text":"قریب میں جہاں تہاں یخ بستہ پھوہار"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa phùn băng giá lả tả gần đó","night_text":"Mưa phùn băng giá lả tả gần đó"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"无尽撅部董鱼","night_text":"无尽撅部董鱼"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"附近有冰冻零星小雨","night_text":"附近有冰冻零星小雨"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"週边有零星小凍霧雨","night_text":"週边有零星小凍霧雨"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Kunokukhiza okubandayo eduze lapha nalapha","night_text":"Kunokukhiza okubandayo eduze lapha nalapha"}]},{"code":1087,"day":"Thundery outbreaks in nearby","night":"Thundery outbreaks in nearby","icon":200,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"عواصف رعديَة في المناطق المجاورة","night_text":"عواصف رعديَة في المناطق المجاورة"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"পার্শ্ববর্তী এলাকায় বজ্রবিদ্যুতপূর্ণ ঝড়বৃষ্টি","night_text":"পার্শ্ববর্তী এলাকায় বজ্রবিদ্যুতপূর্ণ ঝড়বৃষ্টি"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Прояви на гръмотевици в околността","night_text":"Прояви на гръмотевици в околността"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"周边有雷雨","night_text":"周边有雷雨"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"週边有雷雨","night_text":"週边有雷雨"},{"lang_name":"Czech","lang_iso":"cs","day_text":"V okolí možnosti vzniku bouřek","night_text":"V okolí možnosti vzniku bouřek"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Onweersbuien in de omgeving","night_text":"Onweersbuien in de omgeving"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Ukkospuuskia lähellä","night_text":"Ukkospuuskia lähellä"},{"lang_name":"French","lang_iso":"fr","day_text":"Foyers orageux à proximité","night_text":"Foyers orageux à proximité"},{"lang_name":"German","lang_iso":"de","day_text":"gewittrige Niederschläge","night_text":"gewittrige Niederschläge"},{"lang_name":"Greek","lang_iso":"el","day_text":"Ξέσπασματα καταιγίδας σε κοντινή","night_text":"Ξέσπασματα καταιγίδας σε κοντινή"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"आसपास गरज के साथ बारिश","night_text":"आसपास गरज के साथ बारिश"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"A közelben hirtelen vihar","night_text":"A közelben hirtelen vihar"},{"lang_name":"Italian","lang_iso":"it","day_text":"Precipitazioni temporalesche nelle vicinanze","night_text":"Precipitazioni temporalesche nelle vicinanze"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"近くで雷の発生","night_text":"近くで雷の発生"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan angin nganggo thathit ing sacedhake","night_text":"Udan angin nganggo thathit ing sacedhake"},{"lang_name":"Korean","lang_iso":"ko","day_text":"근처에 천둥 발생","night_text":"근처에 천둥 발생"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"周边有雷雨","night_text":"周边有雷雨"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"आजूबाजूला मेघगर्जनेसह उद्रेक","night_text":"आजूबाजूला मेघगर्जनेसह उद्रेक"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Gwałtowne grzmienia w pobliżu","night_text":"Gwałtowne grzmienia w pobliżu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Possibilidade de trovoada","night_text":"Possibilidade de trovoada"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਨੇੜੇ ਗਰਜ ਵਾਲੇ ਭਾਂਬੜ","night_text":"ਨੇੜੇ ਗਰਜ ਵਾਲੇ ਭਾਂਬੜ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Tunete în apropiere","night_text":"Tunete în apropiere"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Местами грозы","night_text":"Местами грозы"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Mestimično lokalno nevreme s grmljavinom","night_text":"Mestimično lokalno nevreme s grmljavinom"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"ආසන්නයේ ගිගුරුම් සහිත වැසි","night_text":"ආසන්නයේ ගිගුරුම් සහිත වැසි"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"V okolí možnosti vzniku búrok","night_text":"V okolí možnosti vzniku búrok"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Cielos tormentosos en las aproximaciones","night_text":"Cielos tormentosos en las aproximaciones"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Åska i närheten","night_text":"Åska i närheten"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"அருகில் இடி மின்னல்கள்","night_text":"அருகில் இடி மின்னல்கள்"},{"lang_name":"Telugu","lang_iso":"te","day_text":"దగ్గరల్లో పిడుగు పడటం","night_text":"దగ్గరల్లో పిడుగు పడటం"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Bölgesel düzensiz gök gürültülü yağmurlu","night_text":"Bölgesel düzensiz gök gürültülü yağmurlu"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Місцями грози","night_text":"Місцями грози"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"قریب میں طوفان برق و باراں","night_text":"قریب میں طوفان برق و باراں"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Các cơn giông tố nổi lên gần đó","night_text":"Các cơn giông tố nổi lên gần đó"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"礼八四无尽贴气无好","night_text":"礼八四无尽贴气无好"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"附近有雷暴","night_text":"附近有雷暴"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"週边有雷雨","night_text":"週边有雷雨"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Kunokuduma kwezulu eduze","night_text":"Kunokuduma kwezulu eduze"}]},{"code":1114,"day":"Blowing snow","night":"Blowing snow","icon":227,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"هبَات من الثلوج","night_text":"هبَات من الثلوج"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"তুষারঝড়","night_text":"তুষারঝড়"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Навяващ сняг","night_text":"Навяващ сняг"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"飞雪","night_text":"飞雪"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"飛雪","night_text":"飛雪"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Vítr se sněžením","night_text":"Vítr se sněžením"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Driftsneeuw","night_text":"Driftsneeuw"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Lumipuuska","night_text":"Lumipuuska"},{"lang_name":"French","lang_iso":"fr","day_text":"Rafales de neige","night_text":"Rafales de neige"},{"lang_name":"German","lang_iso":"de","day_text":"Schneeverwehungen","night_text":"Schneeverwehungen"},{"lang_name":"Greek","lang_iso":"el","day_text":"Φυσάει χιόνι","night_text":"Φυσάει χιόνι"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"ब्लोइंग स्नो","night_text":"ब्लोइंग स्नो"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Hófúvás","night_text":"Hófúvás"},{"lang_name":"Italian","lang_iso":"it","day_text":"Turbinio di neve","night_text":"Turbinio di neve"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"吹雪","night_text":"吹雪"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Angin salju","night_text":"Angin salju"},{"lang_name":"Korean","lang_iso":"ko","day_text":"날리는 눈","night_text":"날리는 눈"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"飞雪","night_text":"飞雪"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"उधळणारा \\tबर्फ","night_text":"उधळणारा \\tबर्फ"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Wiatr ze śniegiem","night_text":"Wiatr ze śniegiem"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Rajadas de vento com neve","night_text":"Rajadas de vento com neve"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਉੱਡ ਰਹੀ ਬਰਫ","night_text":"ਉੱਡ ਰਹੀ ਬਰਫ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ninsoare viscolită","night_text":"Ninsoare viscolită"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Поземок","night_text":"Поземок"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Sneg nošen vetrom","night_text":"Sneg nošen vetrom"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"සුළඟට ගසා ගෙන යන හිම","night_text":"සුළඟට ගසා ගෙන යන හිම"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Vietor so snežením","night_text":"Vietor so snežením"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Chubascos de nieve","night_text":"Chubascos de nieve"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Högt snödrev","night_text":"Högt snödrev"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"பலத்த பனிமழை","night_text":"பலத்த பனிமழை"},{"lang_name":"Telugu","lang_iso":"te","day_text":"మంచు వెదజల్లడం","night_text":"మంచు వెదజల్లడం"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Tipi","night_text":"Tipi"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Низова хуртовина","night_text":"Низова хуртовина"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"جھکڑ کے ساتھ برف باری","night_text":"جھکڑ کے ساتھ برف باری"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Tuyết thổi mạnh","night_text":"Tuyết thổi mạnh"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"次削","night_text":"次削"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"飞雪","night_text":"飞雪"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"飛雪","night_text":"飛雪"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Ukukhithika okunomoya","night_text":"Ukukhithika okunomoya"}]},{"code":1117,"day":"Blizzard","night":"Blizzard","icon":230,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"عاصفة ثلجيَة","night_text":"عاصفة ثلجيَة"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"ভয়ঙ্কর ও প্রবল তুষারঝড়","night_text":"ভয়ঙ্কর ও প্রবল তুষারঝড়"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Снежна буря","night_text":"Снежна буря"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"暴风雪","night_text":"暴风雪"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"暴風雪","night_text":"暴風雪"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Sněhová bouře","night_text":"Sněhová bouře"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Sneeuwstorm","night_text":"Sneeuwstorm"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Lumimyrsky","night_text":"Lumimyrsky"},{"lang_name":"French","lang_iso":"fr","day_text":"Blizzard","night_text":"Blizzard"},{"lang_name":"German","lang_iso":"de","day_text":"Schneesturm","night_text":"Schneesturm"},{"lang_name":"Greek","lang_iso":"el","day_text":"Χιονοθύελλα","night_text":"Χιονοθύελλα"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"बर्फानी तूफान","night_text":"बर्फानी तूफान"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Hóvihar","night_text":"Hóvihar"},{"lang_name":"Italian","lang_iso":"it","day_text":"Blizzard","night_text":"Blizzard"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"猛吹雪","night_text":"猛吹雪"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan angin salju","night_text":"Udan angin salju"},{"lang_name":"Korean","lang_iso":"ko","day_text":"눈보라","night_text":"눈보라"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"暴风雪","night_text":"暴风雪"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"हिमवादळ","night_text":"हिमवादळ"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Śnieżyca","night_text":"Śnieżyca"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Nevasca","night_text":"Nevasca"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਬਰਫੀਲਾ ਤੂਫਾਨ","night_text":"ਬਰਫੀਲਾ ਤੂਫਾਨ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Viscol","night_text":"Viscol"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Метель","night_text":"Метель"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Snežna mećava","night_text":"Snežna mećava"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"හිම කුණාටුව","night_text":"හිම කුණාටුව"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Snehová búrka","night_text":"Snehová búrka"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Ventisca","night_text":"Ventisca"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Häftig snöstorm","night_text":"Häftig snöstorm"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"பனிச் சூறாவளி","night_text":"பனிச் சூறாவளி"},{"lang_name":"Telugu","lang_iso":"te","day_text":"మంచు తుఫాను","night_text":"మంచు తుఫాను"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Kar fırtınası","night_text":"Kar fırtınası"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Заметіль","night_text":"Заметіль"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"برف باری کا طوفان","night_text":"برف باری کا طوفان"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Trận bão tuyết","night_text":"Trận bão tuyết"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"保风削","night_text":"保风削"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"暴风雪","night_text":"暴风雪"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"暴風雪","night_text":"暴風雪"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Isichotho esinamandla","night_text":"Isichotho esinamandla"}]},{"code":1135,"day":"Fog","night":"Fog","icon":248,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"ضباب","night_text":"ضباب"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"কুয়াশা","night_text":"কুয়াশা"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Тежка мъгла","night_text":"Тежка мъгла"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"雾","night_text":"雾"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"霧","night_text":"霧"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Mlha","night_text":"Mlha"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Mist","night_text":"Mist"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Sumu","night_text":"Sumu"},{"lang_name":"French","lang_iso":"fr","day_text":"Brouillard","night_text":"Brouillard"},{"lang_name":"German","lang_iso":"de","day_text":"Nebel","night_text":"Nebel"},{"lang_name":"Greek","lang_iso":"el","day_text":"Ομίχλη","night_text":"Ομίχλη"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"धुंध","night_text":"धुंध"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Köd","night_text":"Köd"},{"lang_name":"Italian","lang_iso":"it","day_text":"Nebbia","night_text":"Nebbia"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"霧","night_text":"霧"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Pedhut Lelimengan","night_text":"Pedhut Lelimengan"},{"lang_name":"Korean","lang_iso":"ko","day_text":"안개","night_text":"안개"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"雾","night_text":"雾"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"धुके","night_text":"धुके"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Mgła","night_text":"Mgła"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Nevoeiro","night_text":"Nevoeiro"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਧੁੰਦ","night_text":"ਧੁੰਦ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ceață densă","night_text":"Ceață densă"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Туман","night_text":"Туман"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Magla","night_text":"Magla"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"ඝන මීදුම","night_text":"ඝන මීදුම"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Hmla","night_text":"Hmla"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Niebla moderada","night_text":"Niebla moderada"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Dimma","night_text":"Dimma"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"மூடுபனி","night_text":"மூடுபனி"},{"lang_name":"Telugu","lang_iso":"te","day_text":"పొగమంచు","night_text":"పొగమంచు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Puslu","night_text":"Puslu"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Туман","night_text":"Туман"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"دھند","night_text":"دھند"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Sương mù","night_text":"Sương mù"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"悠吴","night_text":"悠吴"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"有雾","night_text":"有雾"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"霧","night_text":"霧"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Inkungu","night_text":"Inkungu"}]},{"code":1147,"day":"Freezing fog","night":"Freezing fog","icon":260,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"ضباب متجمِد","night_text":"ضباب متجمِد"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"হিম শীতল কুয়াশা","night_text":"হিম শীতল কুয়াশা"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Преохладена мъгла","night_text":"Преохладена мъгла"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"冻雾","night_text":"冻雾"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"凍霧","night_text":"凍霧"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Mrznoucí mlha","night_text":"Mrznoucí mlha"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Aanvriezende mist","night_text":"Aanvriezende mist"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Jäätävä sumu","night_text":"Jäätävä sumu"},{"lang_name":"French","lang_iso":"fr","day_text":"Brouillard givrant","night_text":"Brouillard givrant"},{"lang_name":"German","lang_iso":"de","day_text":"Eisnebel","night_text":"Eisnebel"},{"lang_name":"Greek","lang_iso":"el","day_text":"Παγωμένη ομίχλη","night_text":"Παγωμένη ομίχλη"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"जमा देने वाली धुंध","night_text":"जमा देने वाली धुंध"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Jeges köd","night_text":"Jeges köd"},{"lang_name":"Italian","lang_iso":"it","day_text":"Nebbia congelantesi","night_text":"Nebbia congelantesi"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"着氷性の霧","night_text":"着氷性の霧"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Pedhut Atis Lelimengan","night_text":"Pedhut Atis Lelimengan"},{"lang_name":"Korean","lang_iso":"ko","day_text":"동결 안개","night_text":"동결 안개"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"冻雾","night_text":"冻雾"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"गारठवणारे धुके","night_text":"गारठवणारे धुके"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Mroźna mgła","night_text":"Mroźna mgła"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Nevoeiro gelado","night_text":"Nevoeiro gelado"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਬਰਫ ਵਾਲੀ ਧੁੰਦ","night_text":"ਬਰਫ ਵਾਲੀ ਧੁੰਦ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Chiciură","night_text":"Chiciură"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Переохлажденный туман","night_text":"Переохлажденный туман"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Magla koja se ledi","night_text":"Magla koja se ledi"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"අධික ශීතල මිදෙන තරමේ ඝන මීදුම","night_text":"අධික ශීතල මිදෙන තරමේ ඝන මීදුම"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Mrznúca hmla","night_text":"Mrznúca hmla"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Niebla helada","night_text":"Niebla helada"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Dimfrost","night_text":"Dimfrost"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"உறையவைக்கும் மூடுபனி","night_text":"உறையவைக்கும் மூடுபனி"},{"lang_name":"Telugu","lang_iso":"te","day_text":"ఘనీభవన పొగమంచు","night_text":"ఘనీభవన పొగమంచు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Dondurucu sis","night_text":"Dondurucu sis"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Туман з памороззю","night_text":"Туман з памороззю"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"جمادینے والی دھند","night_text":"جمادینے والی دھند"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Sương mù băng giá","night_text":"Sương mù băng giá"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"悠东吴","night_text":"悠东吴"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"冰冻雾","night_text":"冰冻雾"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"凍霧","night_text":"凍霧"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Inkungu enamakhaza","night_text":"Inkungu enamakhaza"}]},{"code":1150,"day":"Patchy light drizzle","night":"Patchy light drizzle","icon":263,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"رذاذ خفيف متفاوت","night_text":"رذاذ خفيف متفاوت"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"এক পশলা হাল্কা গুড়ি গুড়ি বৃষ্টিপাত","night_text":"এক পশলা হাল্কা গুড়ি গুড়ি বৃষ্টিপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Леки превалявания на отделни места","night_text":"Леки превалявания на отделни места"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"零星细雨","night_text":"零星细雨"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"片狀細雨","night_text":"片狀細雨"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Místy slabé mrholení","night_text":"Místy slabé mrholení"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Plaatselijke lichte motregen","night_text":"Plaatselijke lichte motregen"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Hajanainen kevyt tihkusade","night_text":"Hajanainen kevyt tihkusade"},{"lang_name":"French","lang_iso":"fr","day_text":"Bruine légère éparse","night_text":"Bruine légère éparse"},{"lang_name":"German","lang_iso":"de","day_text":"stellenweise Nieselregen","night_text":"stellenweise Nieselregen"},{"lang_name":"Greek","lang_iso":"el","day_text":"Κατά τόπους ελαφρό ψιλόβροχο","night_text":"Κατά τόπους ελαφρό ψιλόβροχο"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"अलग-अलग इलाकों में मामूली सी बौछार","night_text":"अलग-अलग इलाकों में मामूली सी बौछार"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Foltokban enyhe szemerkélő eső","night_text":"Foltokban enyhe szemerkélő eső"},{"lang_name":"Italian","lang_iso":"it","day_text":"Pioviggine debole a tratti","night_text":"Pioviggine debole a tratti"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"所により霧雨","night_text":"所により霧雨"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Grimis ora rata","night_text":"Grimis ora rata"},{"lang_name":"Korean","lang_iso":"ko","day_text":"곳곳에 가벼운 이슬비","night_text":"곳곳에 가벼운 이슬비"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"零星细雨","night_text":"零星细雨"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"अनियमित हलकीशी रिपरिप","night_text":"अनियमित हलकीशी रिपरिप"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Miejscowe wystąpienie lekkiej mżawki","night_text":"Miejscowe wystąpienie lekkiej mżawki"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Chuvisco irregular","night_text":"Chuvisco irregular"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਕਿਤੇ-ਕਿਤੇ ਹਲਕੀ ਕਿਣ-ਮਿਣ","night_text":"ਕਿਤੇ-ਕਿਤੇ ਹਲਕੀ ਕਿਣ-ਮਿਣ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Burniță uşoară pe porțiuni","night_text":"Burniță uşoară pe porțiuni"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Местами слабая морось","night_text":"Местами слабая морось"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Mestimično slaba sitna kiša","night_text":"Mestimično slaba sitna kiša"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"තැනින් තැන සැහැල්ලු ‍සිරි පොද","night_text":"තැනින් තැන සැහැල්ලු ‍සිරි පොද"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Miestami slabé mrholenie","night_text":"Miestami slabé mrholenie"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Llovizna a intervalos","night_text":"Llovizna a intervalos"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Områden med lätt duggregn","night_text":"Områden med lätt duggregn"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"சீரில்லாத இலேசான மழைத்தூறல்","night_text":"சீரில்லாத இலேசான மழைத்தூறல்"},{"lang_name":"Telugu","lang_iso":"te","day_text":"చెదురుమదురుగా తేలికపాటి జల్లు","night_text":"చెదురుమదురుగా తేలికపాటి జల్లు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Bölgesel düzensiz hafif çisenti","night_text":"Bölgesel düzensiz hafif çisenti"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Місцями невеликий дощ","night_text":"Місцями невеликий дощ"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"جہاں تہاں ہلکی بوندا باندی","night_text":"جہاں تہاں ہلکی بوندا باندی"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa phùn nhẹ lả tả","night_text":"Mưa phùn nhẹ lả tả"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"撅部悠肖鱼","night_text":"撅部悠肖鱼"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"零星小雨","night_text":"零星小雨"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"零星細雨","night_text":"零星細雨"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Ukukhiza okuncane lapha nalapha","night_text":"Ukukhiza okuncane lapha nalapha"}]},{"code":1153,"day":"Light drizzle","night":"Light drizzle","icon":266,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"رذاذ خفيف متفاوت","night_text":"رذاذ خفيف متفاوت"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"হাল্কা গুড়ি গুড়ি বৃষ্টিপাত","night_text":"হাল্কা গুড়ি গুড়ি বৃষ্টিপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Леки превалявания","night_text":"Леки превалявания"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"细雨","night_text":"细雨"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"細雨","night_text":"細雨"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Slabé mrholení","night_text":"Slabé mrholení"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Lichte motregen","night_text":"Lichte motregen"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Kevyt tihkusade","night_text":"Kevyt tihkusade"},{"lang_name":"French","lang_iso":"fr","day_text":"Bruine légère","night_text":"Bruine légère"},{"lang_name":"German","lang_iso":"de","day_text":"Nieselregen","night_text":"Nieselregen"},{"lang_name":"Greek","lang_iso":"el","day_text":"Ελαφρό ψιλόβροχο","night_text":"Ελαφρό ψιλόβροχο"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"हल्की बौछार","night_text":"हल्की बौछार"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Enyhe szemerkélő eső","night_text":"Enyhe szemerkélő eső"},{"lang_name":"Italian","lang_iso":"it","day_text":"Pioviggine debole","night_text":"Pioviggine debole"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"霧雨","night_text":"霧雨"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Grimis ora deres","night_text":"Grimis ora deres"},{"lang_name":"Korean","lang_iso":"ko","day_text":"가벼운 이슬비","night_text":"가벼운 이슬비"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"细雨","night_text":"细雨"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"हलकीशी रिपरिप","night_text":"हलकीशी रिपरिप"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Lekka mżawka","night_text":"Lekka mżawka"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Chuvisco","night_text":"Chuvisco"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਹਲਕੀ ਕਿਣ-ਮਿਣ","night_text":"ਹਲਕੀ ਕਿਣ-ਮਿਣ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Burniță uşoară","night_text":"Burniță uşoară"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Слабая морось","night_text":"Слабая морось"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Sitna kiša","night_text":"Sitna kiša"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"සැහැල්ලු සිරි පොද","night_text":"සැහැල්ලු සිරි පොද"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Slabé mrholenie","night_text":"Slabé mrholenie"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Llovizna","night_text":"Llovizna"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Lätt duggregn","night_text":"Lätt duggregn"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"இலேசான மழைத்தூறல்","night_text":"இலேசான மழைத்தூறல்"},{"lang_name":"Telugu","lang_iso":"te","day_text":"తేలికపాటి జల్లు","night_text":"తేలికపాటి జల్లు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Hafif çisenti","night_text":"Hafif çisenti"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Невеликий дощ","night_text":"Невеликий дощ"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"ہلکی بوندا باندی","night_text":"ہلکی بوندا باندی"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa phùn nhẹ","night_text":"Mưa phùn nhẹ"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"卯猫鱼","night_text":"卯猫鱼"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"小雨","night_text":"小雨"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"細雨","night_text":"細雨"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Ukukhiza okuncane","night_text":"Ukukhiza okuncane"}]},{"code":1168,"day":"Freezing drizzle","night":"Freezing drizzle","icon":281,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"رذاذ متجمِد","night_text":"رذاذ متجمِد"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"হাল্কা গুড়ি গুড়ি হিম শীতল বৃষ্টিপাত","night_text":"হাল্কা গুড়ি গুড়ি হিম শীতল বৃষ্টিপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Преохладени ръмежи","night_text":"Преохладени ръмежи"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"冻雾雨","night_text":"冻雾雨"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"凍霧雨","night_text":"凍霧雨"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Mrznoucí mrholení","night_text":"Mrznoucí mrholení"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Onderkoelde motregen","night_text":"Onderkoelde motregen"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Jäätävä tihkusade","night_text":"Jäätävä tihkusade"},{"lang_name":"French","lang_iso":"fr","day_text":"Bruine verglaçante","night_text":"Bruine verglaçante"},{"lang_name":"German","lang_iso":"de","day_text":"gefrierender Nieselregen","night_text":"gefrierender Nieselregen"},{"lang_name":"Greek","lang_iso":"el","day_text":"Παγωμένο ψιλόβροχο","night_text":"Παγωμένο ψιλόβροχο"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"जमा देने वाली बौछार","night_text":"जमा देने वाली बौछार"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Fagyos szemerkélő eső","night_text":"Fagyos szemerkélő eső"},{"lang_name":"Italian","lang_iso":"it","day_text":"Pioviggine congelantesi","night_text":"Pioviggine congelantesi"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"着氷性の霧雨","night_text":"着氷性の霧雨"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Grimis atis","night_text":"Grimis atis"},{"lang_name":"Korean","lang_iso":"ko","day_text":"동결 이슬비","night_text":"동결 이슬비"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"冻雾雨","night_text":"冻雾雨"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"गारठवणारी रिपरिप","night_text":"गारठवणारी रिपरिप"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Mroźna mżawka","night_text":"Mroźna mżawka"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Chuvisco gelado","night_text":"Chuvisco gelado"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਬਰਫ ਵਾਲੀ ਕਿਣ-ਮਿਣ","night_text":"ਬਰਫ ਵਾਲੀ ਕਿਣ-ਮਿਣ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Burniță înghețată","night_text":"Burniță înghețată"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Замерзающая морось","night_text":"Замерзающая морось"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Sitna kiša koja se ledi","night_text":"Sitna kiša koja se ledi"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"මිදෙන තරමට ශීතල සිරි පොද","night_text":"මිදෙන තරමට ශීතල සිරි පොද"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Mrznúce mrholenie","night_text":"Mrznúce mrholenie"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Llovizna helada","night_text":"Llovizna helada"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Underkylt duggregn","night_text":"Underkylt duggregn"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"உறையவைக்கும் மழைத்தூறல்","night_text":"உறையவைக்கும் மழைத்தூறல்"},{"lang_name":"Telugu","lang_iso":"te","day_text":"ఘనీభవన జల్లు","night_text":"ఘనీభవన జల్లు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Dondurucu çisenti","night_text":"Dondurucu çisenti"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Ожеледиця","night_text":"Ожеледиця"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"جمادینے والی پھوار","night_text":"جمادینے والی پھوار"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa phùn băng giá","night_text":"Mưa phùn băng giá"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"董鱼","night_text":"董鱼"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"冰冻小雨","night_text":"冰冻小雨"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"凍霧雨","night_text":"凍霧雨"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Ukukhiza okunamakhaza","night_text":"Ukukhiza okunamakhaza"}]},{"code":1171,"day":"Heavy freezing drizzle","night":"Heavy freezing drizzle","icon":284,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"رذاذ متجمِد شديد","night_text":"رذاذ متجمِد شديد"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"ভারী গুড়ি গুড়ি হিম শীতল বৃষ্টিপাত","night_text":"ভারী গুড়ি গুড়ি হিম শীতল বৃষ্টিপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Силни преохладени ръмежи","night_text":"Силни преохладени ръмежи"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"大冻雾雨","night_text":"大冻雾雨"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"大凍霧雨","night_text":"大凍霧雨"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Silné mrznoucí mrholení","night_text":"Silné mrznoucí mrholení"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Zware onderkoelde motregen","night_text":"Zware onderkoelde motregen"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Rankka jäätävä tihkusade","night_text":"Rankka jäätävä tihkusade"},{"lang_name":"French","lang_iso":"fr","day_text":"Forte bruine verglaçante","night_text":"Forte bruine verglaçante"},{"lang_name":"German","lang_iso":"de","day_text":"starker Nieselregen","night_text":"starker Nieselregen"},{"lang_name":"Greek","lang_iso":"el","day_text":"Ισχυρό παγωμένο ψιλόβροχο","night_text":"Ισχυρό παγωμένο ψιλόβροχο"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"बेहद जमा देने वाली बौछार","night_text":"बेहद जमा देने वाली बौछार"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Heves szemerkélő fagyos eső","night_text":"Heves szemerkélő fagyos eső"},{"lang_name":"Italian","lang_iso":"it","day_text":"Pioviggine congelantesi forte","night_text":"Pioviggine congelantesi forte"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"強い着氷性の霧雨","night_text":"強い着氷性の霧雨"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Grimis deres atis","night_text":"Grimis deres atis"},{"lang_name":"Korean","lang_iso":"ko","day_text":"심한 동결 이슬비","night_text":"심한 동결 이슬비"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"大冻雾雨","night_text":"大冻雾雨"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"जोरदार गारठवणारी रिपरिप","night_text":"जोरदार गारठवणारी रिपरिप"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Ciężka, mroźna mżawka","night_text":"Ciężka, mroźna mżawka"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Chuvisco forte gelado","night_text":"Chuvisco forte gelado"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਬਰਫ ਵਾਲੀ ਤੇਜ਼ ਕਿਣ-ਮਿਣ","night_text":"ਬਰਫ ਵਾਲੀ ਤੇਜ਼ ਕਿਣ-ਮਿਣ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Burniță înghețată în cantităţi însemnate","night_text":"Burniță înghețată în cantităţi însemnate"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Сильная замерзающая морось","night_text":"Сильная замерзающая морось"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Jaka sitna kiša koja se ledi","night_text":"Jaka sitna kiša koja se ledi"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"දැඩි මිදෙන තරමට ශීතල සිරි පොද","night_text":"දැඩි මිදෙන තරමට ශීතල සිරි පොද"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Silné mrznúce mrholenie","night_text":"Silné mrznúce mrholenie"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Fuerte llovizna helada","night_text":"Fuerte llovizna helada"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Tungt underkylt duggregn","night_text":"Tungt underkylt duggregn"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"கனமான உறையவைக்கும் மழைத்தூறல்","night_text":"கனமான உறையவைக்கும் மழைத்தூறல்"},{"lang_name":"Telugu","lang_iso":"te","day_text":"భారీ ఘనీభవన జల్లు","night_text":"భారీ ఘనీభవన జల్లు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Yoğun dondurucu çisenti","night_text":"Yoğun dondurucu çisenti"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Сильна ожеледиця","night_text":"Сильна ожеледиця"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"جمادینے والی شدید بونداباندی","night_text":"جمادینے والی شدید بونداباندی"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa phùn nặng băng giá","night_text":"Mưa phùn nặng băng giá"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"较拐董鱼","night_text":"较拐董鱼"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"大冰冻小雨","night_text":"大冰冻小雨"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"大凍霧雨","night_text":"大凍霧雨"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Ukukhiza okunamandla okunamakhaza","night_text":"Ukukhiza okunamandla okunamakhaza"}]},{"code":1180,"day":"Patchy light rain","night":"Patchy light rain","icon":293,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"أمطار خفيفة متفاوتة","night_text":"أمطار خفيفة متفاوتة"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"এক পশলা হাল্কা বৃষ্টিপাত","night_text":"এক পশলা হাল্কা বৃষ্টিপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Слаби дъждове на отделни места","night_text":"Слаби дъждове на отделни места"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"片状小雨","night_text":"片状小雨"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"片狀小雨","night_text":"片狀小雨"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Místy slabý déšť","night_text":"Místy slabý déšť"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Plaatselijke lichte regen","night_text":"Plaatselijke lichte regen"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Hajanainen kevyt sade","night_text":"Hajanainen kevyt sade"},{"lang_name":"French","lang_iso":"fr","day_text":"Pluie légère éparse","night_text":"Pluie légère éparse"},{"lang_name":"German","lang_iso":"de","day_text":"stellenweise leichter Regenfall","night_text":"stellenweise leichter Regenfall"},{"lang_name":"Greek","lang_iso":"el","day_text":"Κατά τόπους ασθενής βροχή","night_text":"Κατά τόπους ασθενής βροχή"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"अलग-अलग इलाकों में हल्की बौछार","night_text":"अलग-अलग इलाकों में हल्की बौछार"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Foltokban enyhe eső","night_text":"Foltokban enyhe eső"},{"lang_name":"Italian","lang_iso":"it","day_text":"Pioggia debole a tratti","night_text":"Pioggia debole a tratti"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"所により弱い雨","night_text":"所により弱い雨"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan ora deres ora rata","night_text":"Udan ora deres ora rata"},{"lang_name":"Korean","lang_iso":"ko","day_text":"곳곳에 가벼운 비","night_text":"곳곳에 가벼운 비"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"片状小雨","night_text":"片状小雨"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"अनियमित हलकासा पाऊस","night_text":"अनियमित हलकासा पाऊस"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Miejscowe opady lekkiego deszczu","night_text":"Miejscowe opady lekkiego deszczu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Chuva fraca irregular","night_text":"Chuva fraca irregular"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਕਿਤੇ-ਕਿਤੇ ਹਲਕਾ ਮੀਂਹ","night_text":"ਕਿਤੇ-ਕਿਤੇ ਹਲਕਾ ਮੀਂਹ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ploi uşoare pe alocuri","night_text":"Ploi uşoare pe alocuri"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Местами небольшой дождь","night_text":"Местами небольшой дождь"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Mestimično slaba kiša","night_text":"Mestimično slaba kiša"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"තැනින් තැන සැහැල්ලු වැසි","night_text":"තැනින් තැන සැහැල්ලු වැසි"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Miestami slabý dážď","night_text":"Miestami slabý dážď"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Lluvias ligeras a intervalos","night_text":"Lluvias ligeras a intervalos"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Områden med lätt regn","night_text":"Områden med lätt regn"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"சீரில்லாத இலேசான மழை","night_text":"சீரில்லாத இலேசான மழை"},{"lang_name":"Telugu","lang_iso":"te","day_text":"చెదురుమదురుగా తేలికపాటి వర్షం","night_text":"చెదురుమదురుగా తేలికపాటి వర్షం"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Düzensiz hafif yağmurlu","night_text":"Düzensiz hafif yağmurlu"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Місцями мряка","night_text":"Місцями мряка"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"جہاں تہاں ہلکی بارش","night_text":"جہاں تہاں ہلکی بارش"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa nhẹ lả tả","night_text":"Mưa nhẹ lả tả"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"撅部肖鱼","night_text":"撅部肖鱼"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"零星小雨","night_text":"零星小雨"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"片狀小雨","night_text":"片狀小雨"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Izihlamvana zemvula lapha nalapha","night_text":"Izihlamvana zemvula lapha nalapha"}]},{"code":1183,"day":"Light rain","night":"Light rain","icon":296,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"أمطار خفيفة","night_text":"أمطار خفيفة"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"হাল্কা বৃষ্টিপাত","night_text":"হাল্কা বৃষ্টিপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Слаби дъждове","night_text":"Слаби дъждове"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"小雨","night_text":"小雨"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"小雨","night_text":"小雨"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Slabý déšť","night_text":"Slabý déšť"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Lichte regen","night_text":"Lichte regen"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Kevyt sade","night_text":"Kevyt sade"},{"lang_name":"French","lang_iso":"fr","day_text":"Pluie légère","night_text":"Pluie légère"},{"lang_name":"German","lang_iso":"de","day_text":"leichter Regenfall","night_text":"leichter Regenfall"},{"lang_name":"Greek","lang_iso":"el","day_text":"Ασθενής βροχή","night_text":"Ασθενής βροχή"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"हल्की बारिश","night_text":"हल्की बारिश"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Enyhe eső","night_text":"Enyhe eső"},{"lang_name":"Italian","lang_iso":"it","day_text":"Pioggia debole","night_text":"Pioggia debole"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"弱い雨","night_text":"弱い雨"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan ora deres","night_text":"Udan ora deres"},{"lang_name":"Korean","lang_iso":"ko","day_text":"가벼운 비","night_text":"가벼운 비"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"小雨","night_text":"小雨"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"हलकासा पाऊस","night_text":"हलकासा पाऊस"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Lekki deszcz","night_text":"Lekki deszcz"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Chuva fraca","night_text":"Chuva fraca"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਹਲਕਾ ਮੀਂਹ","night_text":"ਹਲਕਾ ਮੀਂਹ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ploi uşoare","night_text":"Ploi uşoare"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Небольшой дождь","night_text":"Небольшой дождь"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Slaba kiša","night_text":"Slaba kiša"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"සැහැල්ලු වැසි","night_text":"සැහැල්ලු වැසි"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Slabý dážď","night_text":"Slabý dážď"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Ligeras lluvias","night_text":"Ligeras lluvias"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Lätt regn","night_text":"Lätt regn"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"இலேசான மழை","night_text":"இலேசான மழை"},{"lang_name":"Telugu","lang_iso":"te","day_text":"తేలికపాటి వర్షం","night_text":"తేలికపాటి వర్షం"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Hafif yağmurlu","night_text":"Hafif yağmurlu"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Мряка","night_text":"Мряка"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"ہلکی بارش","night_text":"ہلکی بارش"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa nhẹ","night_text":"Mưa nhẹ"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"肖鱼","night_text":"肖鱼"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"小雨","night_text":"小雨"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"零星小雨","night_text":"零星小雨"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Imvula engamathe ezimpukane","night_text":"Imvula engamathe ezimpukane"}]},{"code":1186,"day":"Moderate rain at times","night":"Moderate rain at times","icon":299,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"أمطار معتدلة أحياناً","night_text":"أمطار معتدلة أحياناً"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"মাঝে মাঝে মাঝারি বৃষ্টিপাত","night_text":"মাঝে মাঝে মাঝারি বৃষ্টিপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Умерени прекъснати дъждове","night_text":"Умерени прекъснати дъждове"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"偶尔有中雨","night_text":"偶尔有中雨"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"偶爾有中雨","night_text":"偶爾有中雨"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Občasný mírný déšť","night_text":"Občasný mírný déšť"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Nu en dan normale regen","night_text":"Nu en dan normale regen"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Ajoittainen keskivoimakas sade","night_text":"Ajoittainen keskivoimakas sade"},{"lang_name":"French","lang_iso":"fr","day_text":"Pluie modérée par moments","night_text":"Pluie modérée par moments"},{"lang_name":"German","lang_iso":"de","day_text":"zuweilen mäßiger Regenfall","night_text":"zuweilen mäßiger Regenfall"},{"lang_name":"Greek","lang_iso":"el","day_text":"Μέτρια βροχή κατά περιόδους","night_text":"Μέτρια βροχή κατά περιόδους"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"अक्सर सामान्य बारिश","night_text":"अक्सर सामान्य बारिश"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Időnként mérsékelt eső","night_text":"Időnként mérsékelt eső"},{"lang_name":"Italian","lang_iso":"it","day_text":"Pioggia moderata a tratti","night_text":"Pioggia moderata a tratti"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"時々穏やかな雨","night_text":"時々穏やかな雨"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Kadhang udan rada deres","night_text":"Kadhang udan rada deres"},{"lang_name":"Korean","lang_iso":"ko","day_text":"때때로 보통 비","night_text":"때때로 보통 비"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"偶尔有中雨","night_text":"偶尔有中雨"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"कधीतरी मध्यम पाऊस","night_text":"कधीतरी मध्यम पाऊस"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Przejściowe, średnie opady deszczu","night_text":"Przejściowe, średnie opady deszczu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Períodos de chuva moderada","night_text":"Períodos de chuva moderada"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਵਾਰ-ਵਾਰ ਦਰਮਿਆਨਾ ਮੀਂਹ","night_text":"ਵਾਰ-ਵਾਰ ਦਰਮਿਆਨਾ ਮੀਂਹ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ploi moderate uneori","night_text":"Ploi moderate uneori"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Временами умеренный дождь","night_text":"Временами умеренный дождь"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Povremeno umerena kiša","night_text":"Povremeno umerena kiša"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"යම් අවස්ථාවලදී මධ්‍යස්ථ වැසි","night_text":"යම් අවස්ථාවලදී මධ්‍යස්ථ වැසි"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Občasný mierny dážď","night_text":"Občasný mierny dážď"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Periodos de lluvia moderada","night_text":"Periodos de lluvia moderada"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Måttligt regn då och då","night_text":"Måttligt regn då och då"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"விட்டுவிட்டு மிதமான மழை","night_text":"விட்டுவிட்டு மிதமான மழை"},{"lang_name":"Telugu","lang_iso":"te","day_text":"పలుసమయాల్లో ఒక మాదిరి వర్షం","night_text":"పలుసమయాల్లో ఒక మాదిరి వర్షం"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Ara ara orta kuvvetli yağmurlu","night_text":"Ara ara orta kuvvetli yağmurlu"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Час від часу помірний дощ","night_text":"Час від часу помірний дощ"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"کبھی کبھار معتدل بارش","night_text":"کبھی کبھار معتدل بارش"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Thỉnh thoảng mưa vừa","night_text":"Thỉnh thoảng mưa vừa"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"有咯晨光中鱼","night_text":"有咯晨光中鱼"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"有时有中雨","night_text":"有时有中雨"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"偶爾有中雨","night_text":"偶爾有中雨"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Imvula nje engatheni ngezikhathi ezithile","night_text":"Imvula nje engatheni ngezikhathi ezithile"}]},{"code":1189,"day":"Moderate rain","night":"Moderate rain","icon":302,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"أمطار معتدلة","night_text":"أمطار معتدلة"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"মাঝারি বৃষ্টিপাত","night_text":"মাঝারি বৃষ্টিপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Умерени дъждове","night_text":"Умерени дъждове"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"中雨","night_text":"中雨"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"中雨","night_text":"中雨"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Mírný déšť","night_text":"Mírný déšť"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Normale regen","night_text":"Normale regen"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Keskivoimakas sade","night_text":"Keskivoimakas sade"},{"lang_name":"French","lang_iso":"fr","day_text":"Pluie modérée","night_text":"Pluie modérée"},{"lang_name":"German","lang_iso":"de","day_text":"mäßiger Regenfall","night_text":"mäßiger Regenfall"},{"lang_name":"Greek","lang_iso":"el","day_text":"Μέτρια βροχή","night_text":"Μέτρια βροχή"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"सामान्य बारिश","night_text":"सामान्य बारिश"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Mérsékelt eső","night_text":"Mérsékelt eső"},{"lang_name":"Italian","lang_iso":"it","day_text":"Pioggia moderata","night_text":"Pioggia moderata"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"穏やかな雨","night_text":"穏やかな雨"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan rada deres","night_text":"Udan rada deres"},{"lang_name":"Korean","lang_iso":"ko","day_text":"보통 비","night_text":"보통 비"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"中雨","night_text":"中雨"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"मध्यम पाऊस","night_text":"मध्यम पाऊस"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Średnie opady deszczu","night_text":"Średnie opady deszczu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Chuva moderada","night_text":"Chuva moderada"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਦਰਮਿਆਨਾ ਮੀਂਹ","night_text":"ਦਰਮਿਆਨਾ ਮੀਂਹ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ploi moderate","night_text":"Ploi moderate"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Умеренный дождь","night_text":"Умеренный дождь"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Umerena kiša","night_text":"Umerena kiša"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"මධ්‍යස්ථ වැසි","night_text":"මධ්‍යස්ථ වැසි"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Mierny dážď","night_text":"Mierny dážď"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Lluvia moderada","night_text":"Lluvia moderada"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Måttligt regn","night_text":"Måttligt regn"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"மிதமான மழை","night_text":"மிதமான மழை"},{"lang_name":"Telugu","lang_iso":"te","day_text":"ఒక మాదిరి వర్షం","night_text":"ఒక మాదిరి వర్షం"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Orta kuvvetli yağmurlu","night_text":"Orta kuvvetli yağmurlu"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Помірний дощ","night_text":"Помірний дощ"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"معتدل بارش","night_text":"معتدل بارش"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa vừa","night_text":"Mưa vừa"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"中鱼","night_text":"中鱼"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"中雨","night_text":"中雨"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"中雨","night_text":"中雨"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Imvula engatheni","night_text":"Imvula engatheni"}]},{"code":1192,"day":"Heavy rain at times","night":"Heavy rain at times","icon":305,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"أمطار شديدة أحياناً","night_text":"أمطار شديدة أحياناً"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"মাঝে মাঝে ভারী বৃষ্টিপাত","night_text":"মাঝে মাঝে ভারী বৃষ্টিপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Силни прекъснати дъждове","night_text":"Силни прекъснати дъждове"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"偶尔有大雨","night_text":"偶尔有大雨"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"偶爾有大雨","night_text":"偶爾有大雨"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Občasný silný déšť","night_text":"Občasný silný déšť"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Nu en dan zware regen","night_text":"Nu en dan zware regen"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Ajoittainen rankka sade","night_text":"Ajoittainen rankka sade"},{"lang_name":"French","lang_iso":"fr","day_text":"Pluie forte par moments","night_text":"Pluie forte par moments"},{"lang_name":"German","lang_iso":"de","day_text":"zeitweise starker Regenfall","night_text":"zeitweise starker Regenfall"},{"lang_name":"Greek","lang_iso":"el","day_text":"Ισχυρή βροχή κατά περιόδους","night_text":"Ισχυρή βροχή κατά περιόδους"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"अक्सर जोरदार बारिश","night_text":"अक्सर जोरदार बारिश"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Időnként heves eső","night_text":"Időnként heves eső"},{"lang_name":"Italian","lang_iso":"it","day_text":"Pioggia forte a tratti","night_text":"Pioggia forte a tratti"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"時々大雨","night_text":"時々大雨"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Kadhang udan deres","night_text":"Kadhang udan deres"},{"lang_name":"Korean","lang_iso":"ko","day_text":"때때로 폭우","night_text":"때때로 폭우"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"偶尔有大雨","night_text":"偶尔有大雨"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"कधीतरी जोरदार पाऊस","night_text":"कधीतरी जोरदार पाऊस"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Przejściowe, ciężkie opady deszczu","night_text":"Przejściowe, ciężkie opady deszczu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Períodos de chuva forte","night_text":"Períodos de chuva forte"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਸਮੇ-ਸਮੇਂ ਤੇ ਤੇਜ਼ ਮੀਂਹ","night_text":"ਸਮੇ-ਸਮੇਂ ਤੇ ਤੇਜ਼ ਮੀਂਹ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ploaie torențială uneori","night_text":"Ploaie torențială uneori"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Временами сильный дождь","night_text":"Временами сильный дождь"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Povremeno jaka kiša","night_text":"Povremeno jaka kiša"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"යම් අවස්ථාවලදී තද වැසි","night_text":"යම් අවස්ථාවලදී තද වැසි"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Občasný silný dážď","night_text":"Občasný silný dážď"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Periodos de fuertes lluvias","night_text":"Periodos de fuertes lluvias"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Tungt regn då och då","night_text":"Tungt regn då och då"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"விட்டுவிட்டு கனமான மழை","night_text":"விட்டுவிட்டு கனமான மழை"},{"lang_name":"Telugu","lang_iso":"te","day_text":"పలుసమయాల్లో భారీ వర్షం","night_text":"పలుసమయాల్లో భారీ వర్షం"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Ara ara şiddetli yağmurlu","night_text":"Ara ara şiddetli yağmurlu"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Час від часу сильний дощ","night_text":"Час від часу сильний дощ"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"کبھی کبھار تیز بارش","night_text":"کبھی کبھار تیز بارش"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Thỉnh thoảng mưa nặng hạt","night_text":"Thỉnh thoảng mưa nặng hạt"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"有咯晨光达鱼","night_text":"有咯晨光达鱼"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"有时有大雨","night_text":"有时有大雨"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"偶爾有大雨","night_text":"偶爾有大雨"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Imvula enamandla ngezikhathi ezithile","night_text":"Imvula enamandla ngezikhathi ezithile"}]},{"code":1195,"day":"Heavy rain","night":"Heavy rain","icon":308,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"أمطار شديدة","night_text":"أمطار شديدة"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"ভারী বৃষ্টিপাত","night_text":"ভারী বৃষ্টিপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Силни дъждове","night_text":"Силни дъждове"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"大雨","night_text":"大雨"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"大雨","night_text":"大雨"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Silný déšť","night_text":"Silný déšť"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Zware regen","night_text":"Zware regen"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Rankka sade","night_text":"Rankka sade"},{"lang_name":"French","lang_iso":"fr","day_text":"Pluie forte","night_text":"Pluie forte"},{"lang_name":"German","lang_iso":"de","day_text":"starker Regenfall","night_text":"starker Regenfall"},{"lang_name":"Greek","lang_iso":"el","day_text":"Ισχυρή βροχή","night_text":"Ισχυρή βροχή"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"जोरदार बारिश","night_text":"जोरदार बारिश"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Heves eső","night_text":"Heves eső"},{"lang_name":"Italian","lang_iso":"it","day_text":"Pioggia forte","night_text":"Pioggia forte"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"大雨","night_text":"大雨"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan deres","night_text":"Udan deres"},{"lang_name":"Korean","lang_iso":"ko","day_text":"폭우","night_text":"폭우"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"大雨","night_text":"大雨"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"जोरदार पाऊस","night_text":"जोरदार पाऊस"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Ciężkie opady deszczu","night_text":"Ciężkie opady deszczu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Chuva forte","night_text":"Chuva forte"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਤੇਜ਼ ਮੀਂਹ","night_text":"ਤੇਜ਼ ਮੀਂਹ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ploaie torențială","night_text":"Ploaie torențială"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Сильный дождь","night_text":"Сильный дождь"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Jaka kiša","night_text":"Jaka kiša"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"තද වැසි","night_text":"තද වැසි"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Silný dážď","night_text":"Silný dážď"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Fuertes lluvias","night_text":"Fuertes lluvias"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Tungt regn","night_text":"Tungt regn"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"கனமான மழை","night_text":"கனமான மழை"},{"lang_name":"Telugu","lang_iso":"te","day_text":"భారీ వర్షం","night_text":"భారీ వర్షం"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Şiddetli yağmurlu","night_text":"Şiddetli yağmurlu"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Сильний дощ","night_text":"Сильний дощ"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"تیز بارش","night_text":"تیز بارش"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa rơi nặng hạt","night_text":"Mưa rơi nặng hạt"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"达鱼","night_text":"达鱼"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"大雨","night_text":"大雨"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"大雨","night_text":"大雨"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Imvula enamandla","night_text":"Imvula enamandla"}]},{"code":1198,"day":"Light freezing rain","night":"Light freezing rain","icon":311,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"أمطار متجمِدة خفيفة","night_text":"أمطار متجمِدة خفيفة"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"হাল্কা হিম শীতল বৃষ্টিপাত","night_text":"হাল্কা হিম শীতল বৃষ্টিপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Слаби преохладени дъждове","night_text":"Слаби преохладени дъждове"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"微冻雨","night_text":"微冻雨"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"微凍雨","night_text":"微凍雨"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Slabý mrznoucí déšť","night_text":"Slabý mrznoucí déšť"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Lichte onderkoelde regen","night_text":"Lichte onderkoelde regen"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Kevyt jäätävä sade","night_text":"Kevyt jäätävä sade"},{"lang_name":"French","lang_iso":"fr","day_text":"Pluie verglaçante légère","night_text":"Pluie verglaçante légère"},{"lang_name":"German","lang_iso":"de","day_text":"leichter Eisregen","night_text":"leichter Eisregen"},{"lang_name":"Greek","lang_iso":"el","day_text":"Ασθενής παγωμένη βροχή","night_text":"Ασθενής παγωμένη βροχή"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"हल्की जमा देने वाली बारिश","night_text":"हल्की जमा देने वाली बारिश"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Enyhe fagyos eső","night_text":"Enyhe fagyos eső"},{"lang_name":"Italian","lang_iso":"it","day_text":"Pioggia congelantesi debole","night_text":"Pioggia congelantesi debole"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"着氷性の弱い雨","night_text":"着氷性の弱い雨"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan atis rada deres","night_text":"Udan atis rada deres"},{"lang_name":"Korean","lang_iso":"ko","day_text":"약간의 동결 비","night_text":"약간의 동결 비"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"微冻雨","night_text":"微冻雨"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"हलकासा गारठवणारा पाऊस","night_text":"हलकासा गारठवणारा पाऊस"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Lekkie opady mroźnego deszczu","night_text":"Lekkie opady mroźnego deszczu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Chuva fraca e gelada","night_text":"Chuva fraca e gelada"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਹਲਕਾ ਬਰਫ ਵਾਲਾ ਮੀਂਹ","night_text":"ਹਲਕਾ ਬਰਫ ਵਾਲਾ ਮੀਂਹ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ploaie înghețată în cantităţi mici","night_text":"Ploaie înghețată în cantităţi mici"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Слабый переохлажденный дождь","night_text":"Слабый переохлажденный дождь"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Slaba ledena kiša","night_text":"Slaba ledena kiša"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"සැහැල්ලු මිදෙන තරමට ශීතල වැසි","night_text":"සැහැල්ලු මිදෙන තරමට ශීතල වැසි"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Slabý mrznúci dážď","night_text":"Slabý mrznúci dážď"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Ligeras lluvias heladas","night_text":"Ligeras lluvias heladas"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Lätt underkylt regn","night_text":"Lätt underkylt regn"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"இலேசான உறையவைக்கும் மழை","night_text":"இலேசான உறையவைக்கும் மழை"},{"lang_name":"Telugu","lang_iso":"te","day_text":"తేలికపాటి ఘనీభవన వర్షం","night_text":"తేలికపాటి ఘనీభవన వర్షం"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Hafif dondurucu yağmurlu","night_text":"Hafif dondurucu yağmurlu"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Невеликий дощ та ожеледиця","night_text":"Невеликий дощ та ожеледиця"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"ہلکی جمادینے والی بارش","night_text":"ہلکی جمادینے والی بارش"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa giá rét nhẹ","night_text":"Mưa giá rét nhẹ"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"轻董鱼","night_text":"轻董鱼"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"冰冻小雨","night_text":"冰冻小雨"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"微凍雨","night_text":"微凍雨"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Imvula engenamandla kodwa ebandayo","night_text":"Imvula engenamandla kodwa ebandayo"}]},{"code":1201,"day":"Moderate or heavy freezing rain","night":"Moderate or heavy freezing rain","icon":314,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"أمطار متجمِدة معتدلة أو شديدة","night_text":"أمطار متجمِدة معتدلة أو شديدة"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"মাঝারি বা ভারী হিম শীতল বৃষ্টিপাত","night_text":"মাঝারি বা ভারী হিম শীতল বৃষ্টিপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Умерени или силни преохладени дъждове","night_text":"Умерени или силни преохладени дъждове"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"中度或大冻雨","night_text":"中度或大冻雨"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"中度或大凍雨","night_text":"中度或大凍雨"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Mírný nebo silný mrznoucí déšť","night_text":"Mírný nebo silný mrznoucí déšť"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Normale of zware onderkoelde regen","night_text":"Normale of zware onderkoelde regen"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Keskivoimakas tai rankka jäätävä sade","night_text":"Keskivoimakas tai rankka jäätävä sade"},{"lang_name":"French","lang_iso":"fr","day_text":"Pluie verglaçante modérée à forte","night_text":"Pluie verglaçante modérée à forte"},{"lang_name":"German","lang_iso":"de","day_text":"mäßiger bis starker Eisregen","night_text":"mäßiger bis starker Eisregen"},{"lang_name":"Greek","lang_iso":"el","day_text":"Μέτρια ή ισχυρή παγωμένη βροχή","night_text":"Μέτρια ή ισχυρή παγωμένη βροχή"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"जमा देने वाली सामान्य या जोरदार बारिश","night_text":"जमा देने वाली सामान्य या जोरदार बारिश"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Mérsékelt, vagy heves fagyos eső","night_text":"Mérsékelt, vagy heves fagyos eső"},{"lang_name":"Italian","lang_iso":"it","day_text":"Pioggia congelantesi moderata o forte","night_text":"Pioggia congelantesi moderata o forte"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"着氷性の穏やかな雨または大雨","night_text":"着氷性の穏やかな雨または大雨"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan Rada Deres utawa Udan Deres Atis","night_text":"Udan Rada Deres utawa Udan Deres Atis"},{"lang_name":"Korean","lang_iso":"ko","day_text":"보통 또는 심한 동결 비","night_text":"보통 또는 심한 동결 비"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"中度或大冻雨","night_text":"中度或大冻雨"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"मध्यम किंवा जोरदार गारठवणारा पाऊस","night_text":"मध्यम किंवा जोरदार गारठवणारा पाऊस"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Średnie lub ciężkie opady mroźnego deszczu","night_text":"Średnie lub ciężkie opady mroźnego deszczu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Chuva gelada moderada ou forte","night_text":"Chuva gelada moderada ou forte"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਬਰਫ ਵਾਲਾ ਦਰਮਿਆਨਾ ਜਾਂ ਤੇਜ਼ ਮੀਂਹ","night_text":"ਬਰਫ ਵਾਲਾ ਦਰਮਿਆਨਾ ਜਾਂ ਤੇਜ਼ ਮੀਂਹ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ploaie înghețată în cantităţi mari şi moderate","night_text":"Ploaie înghețată în cantităţi mari şi moderate"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Умеренный или сильный переохлажденный дождь","night_text":"Умеренный или сильный переохлажденный дождь"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Umerena ili jaka ledena kiša","night_text":"Umerena ili jaka ledena kiša"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"මධ්‍යස්ථ හෝ තද මිදෙන තරමට ශීතල වැසි","night_text":"මධ්‍යස්ථ හෝ තද මිදෙන තරමට ශීතල වැසි"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Mierny alebo silný mrznúci dážď","night_text":"Mierny alebo silný mrznúci dážď"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Lluvias heladas fuertes o moderadas","night_text":"Lluvias heladas fuertes o moderadas"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Måttligt eller tungt underkylt regn","night_text":"Måttligt eller tungt underkylt regn"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"மிதமான அல்லது கனமான உறையவைக்கும் மழை","night_text":"மிதமான அல்லது கனமான உறையவைக்கும் மழை"},{"lang_name":"Telugu","lang_iso":"te","day_text":"మధ్యస్థం లేదా భారీ ఘనీభవన వర్షం","night_text":"మధ్యస్థం లేదా భారీ ఘనీభవన వర్షం"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Orta kuvvetli veya Şiddetli dondurucu yağmurlu","night_text":"Orta kuvvetli veya Şiddetli dondurucu yağmurlu"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Помірний або сильний дощ та ожеледиця","night_text":"Помірний або сильний дощ та ожеледиця"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"معتدل یا تیز جمادینے والی بارش","night_text":"معتدل یا تیز جمادینے والی بارش"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa giá rét Vừa hoặc Nặng Hạt","night_text":"Mưa giá rét Vừa hoặc Nặng Hạt"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"中到大董鱼","night_text":"中到大董鱼"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"中到大冰冻雨","night_text":"中到大冰冻雨"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"中度或大凍雨","night_text":"中度或大凍雨"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Imvula ebandayo enamandla noma engatheni","night_text":"Imvula ebandayo enamandla noma engatheni"}]},{"code":1204,"day":"Light sleet","night":"Light sleet","icon":317,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"صقيع خفيف","night_text":"صقيع خفيف"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"হাল্কা বৃষ্টি সহ তুষারপাত","night_text":"হাল্কা বৃষ্টি সহ তুষারপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Слаба суграшица","night_text":"Слаба суграшица"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"微雨夹雪","night_text":"微雨夹雪"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"微雨夾雪","night_text":"微雨夾雪"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Slabý déšť se sněhem","night_text":"Slabý déšť se sněhem"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Lichte natte sneeuw","night_text":"Lichte natte sneeuw"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Kevyt räntäsade","night_text":"Kevyt räntäsade"},{"lang_name":"French","lang_iso":"fr","day_text":"Léger grésil","night_text":"Léger grésil"},{"lang_name":"German","lang_iso":"de","day_text":"leichte Graupelschauer","night_text":"leichte Graupelschauer"},{"lang_name":"Greek","lang_iso":"el","day_text":"Ασθενές χιονόνερο","night_text":"Ασθενές χιονόνερο"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"हल्की ओलावृष्टि","night_text":"हल्की ओलावृष्टि"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Enyhe ólmos eső","night_text":"Enyhe ólmos eső"},{"lang_name":"Italian","lang_iso":"it","day_text":"Nevischio debole","night_text":"Nevischio debole"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"軽いみぞれ","night_text":"軽いみぞれ"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan es lan salju ora deres","night_text":"Udan es lan salju ora deres"},{"lang_name":"Korean","lang_iso":"ko","day_text":"가벼운 진눈깨비","night_text":"가벼운 진눈깨비"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"微雨夹雪","night_text":"微雨夹雪"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"हलकासा गारांचा पाऊस","night_text":"हलकासा गारांचा पाऊस"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Lekkie opady śniegu z deszczem","night_text":"Lekkie opady śniegu z deszczem"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Chuva fraca com neve","night_text":"Chuva fraca com neve"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਬਰਫ ਵਾਲਾ ਹਲਕਾ ਮੀਂਹ","night_text":"ਬਰਫ ਵਾਲਾ ਹਲਕਾ ਮੀਂਹ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Lapoviță în cantităţi mici","night_text":"Lapoviță în cantităţi mici"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Небольшой дождь со снегом","night_text":"Небольшой дождь со снегом"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Slaba susnežica","night_text":"Slaba susnežica"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"සැහැල්ලු හිමවැස්ස","night_text":"සැහැල්ලු හිමවැස්ස"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Slabý dážď so snehom","night_text":"Slabý dážď so snehom"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Ligeras precipitaciones de aguanieve","night_text":"Ligeras precipitaciones de aguanieve"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Lätt snöblandat regn","night_text":"Lätt snöblandat regn"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"இலேசான ஆலங்கட்டி மழை","night_text":"இலேசான ஆலங்கட்டி மழை"},{"lang_name":"Telugu","lang_iso":"te","day_text":"తేలికపాటి వడగండ్లు","night_text":"తేలికపాటి వడగండ్లు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Hafif karla karışık yağmur","night_text":"Hafif karla karışık yağmur"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Невеликий дощ зі снігом","night_text":"Невеликий дощ зі снігом"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"ہلکی ژالہ باری","night_text":"ہلکی ژالہ باری"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa tuyết nhẹ","night_text":"Mưa tuyết nhẹ"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"小咯鱼假削","night_text":"小咯鱼假削"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"小雨夹雪","night_text":"小雨夹雪"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"微雨夾雪","night_text":"微雨夾雪"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Isichotho esingenamandla esihambisana nomoya","night_text":"Isichotho esingenamandla esihambisana nomoya"}]},{"code":1207,"day":"Moderate or heavy sleet","night":"Moderate or heavy sleet","icon":320,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"صقيع معتدل أو شديد","night_text":"صقيع معتدل أو شديد"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"মাঝারি বা ভারী বৃষ্টি সহ তুষারপাত","night_text":"মাঝারি বা ভারী বৃষ্টি সহ তুষারপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Умерена или силна суграшица","night_text":"Умерена или силна суграшица"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"中度或大雨夹雪","night_text":"中度或大雨夹雪"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"中度或大雨夾雪","night_text":"中度或大雨夾雪"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Mírný nebo silný déšť se sněhem","night_text":"Mírný nebo silný déšť se sněhem"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Normale of zware natte sneeuw","night_text":"Normale of zware natte sneeuw"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Keskivoimakas tai rankka räntäsade","night_text":"Keskivoimakas tai rankka räntäsade"},{"lang_name":"French","lang_iso":"fr","day_text":"Grésil modéré à fort","night_text":"Grésil modéré à fort"},{"lang_name":"German","lang_iso":"de","day_text":"mäßige bis starke Graupelschauer","night_text":"mäßige bis starke Graupelschauer"},{"lang_name":"Greek","lang_iso":"el","day_text":"Μέτριο ή ισχυρό χιονόνερο","night_text":"Μέτριο ή ισχυρό χιονόνερο"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"सामान्य या जोरदार ओलावृष्टि","night_text":"सामान्य या जोरदार ओलावृष्टि"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Mérsékelt, vagy heves ólmos eső","night_text":"Mérsékelt, vagy heves ólmos eső"},{"lang_name":"Italian","lang_iso":"it","day_text":"Nevischio moderato o forte","night_text":"Nevischio moderato o forte"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"穏やかなまたは強いみぞれ","night_text":"穏やかなまたは強いみぞれ"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan es lan salju rada deres utawa deres","night_text":"Udan es lan salju rada deres utawa deres"},{"lang_name":"Korean","lang_iso":"ko","day_text":"중간 또는 무거운 진눈깨비","night_text":"중간 또는 무거운 진눈깨비"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"中度或大雨夹雪","night_text":"中度或大雨夹雪"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"मध्यम किंवा जोरदार गारांचा पाऊस","night_text":"मध्यम किंवा जोरदार गारांचा पाऊस"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Średnie lub ciężkie opady śniegu z deszczem","night_text":"Średnie lub ciężkie opady śniegu z deszczem"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Chuva forte ou moderada com neve","night_text":"Chuva forte ou moderada com neve"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਬਰਫ ਵਾਲਾ ਦਰਮਿਆਨਾ ਜਾਂ ਤੇਜ਼ ਮੀਂਹ","night_text":"ਬਰਫ ਵਾਲਾ ਦਰਮਿਆਨਾ ਜਾਂ ਤੇਜ਼ ਮੀਂਹ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Lapoviță în cantităţi mari şi moderate","night_text":"Lapoviță în cantităţi mari şi moderate"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Умеренный или сильный дождь со снегом","night_text":"Умеренный или сильный дождь со снегом"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Umerena ili jaka susnežica","night_text":"Umerena ili jaka susnežica"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"මධ්‍යස්ථ හෝ තද හිම වැස්ස","night_text":"මධ්‍යස්ථ හෝ තද හිම වැස්ස"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Mierny alebo silný dážď so snehom","night_text":"Mierny alebo silný dážď so snehom"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Aguanieve fuerte o moderada","night_text":"Aguanieve fuerte o moderada"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Måttligt eller tungt snöblandat regn","night_text":"Måttligt eller tungt snöblandat regn"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"மிதமான அல்லது கனமான ஆலங்கட்டி மழை","night_text":"மிதமான அல்லது கனமான ஆலங்கட்டி மழை"},{"lang_name":"Telugu","lang_iso":"te","day_text":"మధ్యస్థం నుంచి భారీ వడగండ్లు","night_text":"మధ్యస్థం నుంచి భారీ వడగండ్లు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Orta kuvvetli veya şiddetli karla karışık yağmur","night_text":"Orta kuvvetli veya şiddetli karla karışık yağmur"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Помірний або сильний дощ зі снігом","night_text":"Помірний або сильний дощ зі снігом"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"معتدل یا شدید ژالہ باری","night_text":"معتدل یا شدید ژالہ باری"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa tuyết vừa hoặc nặng hạt","night_text":"Mưa tuyết vừa hoặc nặng hạt"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"中到大鱼假削","night_text":"中到大鱼假削"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"中到大雨夹雪","night_text":"中到大雨夹雪"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"中度或大雨夾雪","night_text":"中度或大雨夾雪"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Isichotho esingatheni esihambisana nomoya noma esinamandla","night_text":"Isichotho esingatheni esihambisana nomoya noma esinamandla"}]},{"code":1210,"day":"Patchy light snow","night":"Patchy light snow","icon":323,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"ثلوج خفيفة متفاوتة","night_text":"ثلوج خفيفة متفاوتة"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"অনিয়মিত হাল্কা তুষারপাত","night_text":"অনিয়মিত হাল্কা তুষারপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Слаби снеговалежи на отделни места","night_text":"Слаби снеговалежи на отделни места"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"零星小雪","night_text":"零星小雪"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"片狀小雪","night_text":"片狀小雪"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Místy slabé sněžení","night_text":"Místy slabé sněžení"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Plaatselijke lichte sneeuw","night_text":"Plaatselijke lichte sneeuw"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Hajanainen kevyt lumisade","night_text":"Hajanainen kevyt lumisade"},{"lang_name":"French","lang_iso":"fr","day_text":"Neige légère éparse","night_text":"Neige légère éparse"},{"lang_name":"German","lang_iso":"de","day_text":"stellenweise leichter Schneefall","night_text":"stellenweise leichter Schneefall"},{"lang_name":"Greek","lang_iso":"el","day_text":"Κατά τόπους ασθενής χιονόπτωση","night_text":"Κατά τόπους ασθενής χιονόπτωση"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"अलग-अलग इलाकों में हल्की बर्फबारी","night_text":"अलग-अलग इलाकों में हल्की बर्फबारी"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Foltokban enyhe havazás","night_text":"Foltokban enyhe havazás"},{"lang_name":"Italian","lang_iso":"it","day_text":"Neve debole a tratti","night_text":"Neve debole a tratti"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"所により小雪","night_text":"所により小雪"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan salju ora deres ora rata","night_text":"Udan salju ora deres ora rata"},{"lang_name":"Korean","lang_iso":"ko","day_text":"곳곳에 가벼운 눈","night_text":"곳곳에 가벼운 눈"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"零星小雪","night_text":"零星小雪"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"अनियमित हलकेसे बर्फ","night_text":"अनियमित हलकेसे बर्फ"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Miejscowe, lekkie opady śniegu","night_text":"Miejscowe, lekkie opady śniegu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Queda de neve irregular e fraca","night_text":"Queda de neve irregular e fraca"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਕਿਤੇ-ਕਿਤੇ ਹਲਕੀ ਬਰਫ","night_text":"ਕਿਤੇ-ਕਿਤੇ ਹਲਕੀ ਬਰਫ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ninsori în cantităţi mici pe alocuri","night_text":"Ninsori în cantităţi mici pe alocuri"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Местами небольшой снег","night_text":"Местами небольшой снег"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Mestimično slab sneg","night_text":"Mestimično slab sneg"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"තැනින් තැන සැහැල්ලු හිම","night_text":"තැනින් තැන සැහැල්ලු හිම"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Miestami slabé sneženie","night_text":"Miestami slabé sneženie"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Nevadas ligeras a intervalos","night_text":"Nevadas ligeras a intervalos"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Områden med lätt snöfall","night_text":"Områden med lätt snöfall"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"சீரில்லாத இலேசான பனிமழை","night_text":"சீரில்லாத இலேசான பனிமழை"},{"lang_name":"Telugu","lang_iso":"te","day_text":"చెదురుమదురుగా తేలికపాటి మంచు","night_text":"చెదురుమదురుగా తేలికపాటి మంచు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Düzensiz hafif karlı","night_text":"Düzensiz hafif karlı"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Місцями невеликий сніг","night_text":"Місцями невеликий сніг"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"جہاں تہاں ہلکی برفباری","night_text":"جہاں تہاں ہلکی برفباری"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Tuyết nhẹ lả tả","night_text":"Tuyết nhẹ lả tả"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"撅部肖削","night_text":"撅部肖削"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"零星小雪","night_text":"零星小雪"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"片狀小雪","night_text":"片狀小雪"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Ukukhithika kancane lapha nalapha","night_text":"Ukukhithika kancane lapha nalapha"}]},{"code":1213,"day":"Light snow","night":"Light snow","icon":326,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"ثلوج خفيفة","night_text":"ثلوج خفيفة"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"হাল্কা তুষারপাত","night_text":"হাল্কা তুষারপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Слаби снеговалежи","night_text":"Слаби снеговалежи"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"小雪","night_text":"小雪"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"小雪","night_text":"小雪"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Slabé sněžení","night_text":"Slabé sněžení"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Lichte sneeuw","night_text":"Lichte sneeuw"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Kevyt lumisade","night_text":"Kevyt lumisade"},{"lang_name":"French","lang_iso":"fr","day_text":"Neige légère","night_text":"Neige légère"},{"lang_name":"German","lang_iso":"de","day_text":"leichter Schneefall","night_text":"leichter Schneefall"},{"lang_name":"Greek","lang_iso":"el","day_text":"Ασθενής χιονόπτωση","night_text":"Ασθενής χιονόπτωση"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"हल्की बर्फबारी","night_text":"हल्की बर्फबारी"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Enyhe havazás","night_text":"Enyhe havazás"},{"lang_name":"Italian","lang_iso":"it","day_text":"Neve debole","night_text":"Neve debole"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"小雪","night_text":"小雪"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan salju ora deres","night_text":"Udan salju ora deres"},{"lang_name":"Korean","lang_iso":"ko","day_text":"가벼운 눈","night_text":"가벼운 눈"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"小雪","night_text":"小雪"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"हलकेसे बर्फ","night_text":"हलकेसे बर्फ"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Lekkie opady śniegu","night_text":"Lekkie opady śniegu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Queda de neve fraca","night_text":"Queda de neve fraca"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਹਲਕੀ ਬਰਫ","night_text":"ਹਲਕੀ ਬਰਫ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ninsori în cantităţi mici","night_text":"Ninsori în cantităţi mici"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Небольшой снег","night_text":"Небольшой снег"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Slabe snežne padavine","night_text":"Slabe snežne padavine"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"සැහැල්ලු හිම","night_text":"සැහැල්ලු හිම"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Slabé sneženie","night_text":"Slabé sneženie"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Nevadas ligeras","night_text":"Nevadas ligeras"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Lätt snöfall","night_text":"Lätt snöfall"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"இலேசான பனிமழை","night_text":"இலேசான பனிமழை"},{"lang_name":"Telugu","lang_iso":"te","day_text":"తేలికపాటి మంచు","night_text":"తేలికపాటి మంచు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Hafif karlı","night_text":"Hafif karlı"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Невеликий сніг","night_text":"Невеликий сніг"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"ہلکی برفباری","night_text":"ہلکی برفباری"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Tuyết nhẹ","night_text":"Tuyết nhẹ"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"肖削","night_text":"肖削"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"小雪","night_text":"小雪"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"小雪","night_text":"小雪"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Ukukhithika kancane","night_text":"Ukukhithika kancane"}]},{"code":1216,"day":"Patchy moderate snow","night":"Patchy moderate snow","icon":329,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"ثلوج معتدلة متفاوتة","night_text":"ثلوج معتدلة متفاوتة"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"অনিয়মিত মাঝারি তুষারপাত","night_text":"অনিয়মিত মাঝারি তুষারপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Умерени снеговалежи на отделни места","night_text":"Умерени снеговалежи на отделни места"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"零星中雪","night_text":"零星中雪"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"片狀中雪","night_text":"片狀中雪"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Místy mírné sněžení","night_text":"Místy mírné sněžení"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Plaatselijke normale sneeuw","night_text":"Plaatselijke normale sneeuw"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Hajanainen keskivoimakas lumisade","night_text":"Hajanainen keskivoimakas lumisade"},{"lang_name":"French","lang_iso":"fr","day_text":"Neige modérée éparse","night_text":"Neige modérée éparse"},{"lang_name":"German","lang_iso":"de","day_text":"stellenweise mäßiger Schneefall","night_text":"stellenweise mäßiger Schneefall"},{"lang_name":"Greek","lang_iso":"el","day_text":"Κατά τόπους μέτρια χιονόπτωση","night_text":"Κατά τόπους μέτρια χιονόπτωση"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"अलग-अलग इलाकों में सामान्य बर्फबारी","night_text":"अलग-अलग इलाकों में सामान्य बर्फबारी"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Foltokban mérsékelt havazás","night_text":"Foltokban mérsékelt havazás"},{"lang_name":"Italian","lang_iso":"it","day_text":"Neve moderata a tratti","night_text":"Neve moderata a tratti"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"所により穏やかな雪","night_text":"所により穏やかな雪"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan salju rada deres ora rata","night_text":"Udan salju rada deres ora rata"},{"lang_name":"Korean","lang_iso":"ko","day_text":"곳곳에 적당한 눈","night_text":"곳곳에 적당한 눈"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"零星中雪","night_text":"零星中雪"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"अनियमित मध्यम बर्फ","night_text":"अनियमित मध्यम बर्फ"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Miejscowe, średnie opady śniegu","night_text":"Miejscowe, średnie opady śniegu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Queda de neve moderada e irregular","night_text":"Queda de neve moderada e irregular"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਕਿਤੇ-ਕਿਤੇ ਦਰਮਿਆਨੀ ਬਰਫ","night_text":"ਕਿਤੇ-ਕਿਤੇ ਦਰਮਿਆਨੀ ਬਰਫ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ninsori moderate pe alocuri","night_text":"Ninsori moderate pe alocuri"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Местами умеренный снег","night_text":"Местами умеренный снег"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Mestimično umeren sneg","night_text":"Mestimično umeren sneg"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"තැනින් තැන මධ්‍යස්ථ හිම","night_text":"තැනින් තැන මධ්‍යස්ථ හිම"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Miestami mierne sneženie","night_text":"Miestami mierne sneženie"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Nieve moderada a intervalos","night_text":"Nieve moderada a intervalos"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Områden med måttligt snöfall","night_text":"Områden med måttligt snöfall"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"சீரில்லாத மிதமான பனிமழை","night_text":"சீரில்லாத மிதமான பனிமழை"},{"lang_name":"Telugu","lang_iso":"te","day_text":"చెదురుమదురుగా ఒక మాదిరి మంచు","night_text":"చెదురుమదురుగా ఒక మాదిరి మంచు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Düzensiz orta kuvvetli karlı","night_text":"Düzensiz orta kuvvetli karlı"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Місцями помірний сніг","night_text":"Місцями помірний сніг"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"جہاں تہاں معتدل برفباری","night_text":"جہاں تہاں معتدل برفباری"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Tuyết vừa lả tả","night_text":"Tuyết vừa lả tả"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"撅部中削","night_text":"撅部中削"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"零星中雪","night_text":"零星中雪"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"片狀中雪","night_text":"片狀中雪"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Ukukhithika okungatheni lapha nalapha","night_text":"Ukukhithika okungatheni lapha nalapha"}]},{"code":1219,"day":"Moderate snow","night":"Moderate snow","icon":332,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"ثلوج معتدلة","night_text":"ثلوج معتدلة"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"মাঝারি তুষারপাত","night_text":"মাঝারি তুষারপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Умерени снеговалежи","night_text":"Умерени снеговалежи"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"中雪","night_text":"中雪"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"中雪","night_text":"中雪"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Mírné sněžení","night_text":"Mírné sněžení"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Normale sneeuw","night_text":"Normale sneeuw"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Keskivoimakas lumisade","night_text":"Keskivoimakas lumisade"},{"lang_name":"French","lang_iso":"fr","day_text":"Neige modérée","night_text":"Neige modérée"},{"lang_name":"German","lang_iso":"de","day_text":"mäßiger Schneefall","night_text":"mäßiger Schneefall"},{"lang_name":"Greek","lang_iso":"el","day_text":"Μέτρια χιονόπτωση","night_text":"Μέτρια χιονόπτωση"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"सामान्य बर्फबारी","night_text":"सामान्य बर्फबारी"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Mérsékelt havazás","night_text":"Mérsékelt havazás"},{"lang_name":"Italian","lang_iso":"it","day_text":"Neve moderata","night_text":"Neve moderata"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"穏やかな雪","night_text":"穏やかな雪"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan salju rada deres","night_text":"Udan salju rada deres"},{"lang_name":"Korean","lang_iso":"ko","day_text":"보통 눈","night_text":"보통 눈"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"中雪","night_text":"中雪"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"मध्यम बर्फ","night_text":"मध्यम बर्फ"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Średnie opady śniegu","night_text":"Średnie opady śniegu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Queda de neve moderada","night_text":"Queda de neve moderada"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਦਰਮਿਆਨੀ ਬਰਫ","night_text":"ਦਰਮਿਆਨੀ ਬਰਫ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ninsori moderate","night_text":"Ninsori moderate"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Умеренный снег","night_text":"Умеренный снег"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Umerene snežne padavine","night_text":"Umerene snežne padavine"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"මධ්‍යස්ථ හිම","night_text":"මධ්‍යස්ථ හිම"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Mierne sneženie","night_text":"Mierne sneženie"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Nieve moderada","night_text":"Nieve moderada"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Måttligt snöfall","night_text":"Måttligt snöfall"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"மிதமான பனிமழை","night_text":"மிதமான பனிமழை"},{"lang_name":"Telugu","lang_iso":"te","day_text":"ఒక మాదిరి మంచు","night_text":"ఒక మాదిరి మంచు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Orta kuvvetli karlı","night_text":"Orta kuvvetli karlı"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Помірний сніг","night_text":"Помірний сніг"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"معتدل برفباری","night_text":"معتدل برفباری"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Tuyết vừa","night_text":"Tuyết vừa"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"中削","night_text":"中削"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"中雪","night_text":"中雪"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"中雪","night_text":"中雪"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Ukukhithika okungatheni","night_text":"Ukukhithika okungatheni"}]},{"code":1222,"day":"Patchy heavy snow","night":"Patchy heavy snow","icon":335,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"ثلوج شديدة متفاوتة","night_text":"ثلوج شديدة متفاوتة"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"অনিয়মিত ভারী তুষারপাত","night_text":"অনিয়মিত ভারী তুষারপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Силни снеговалежи на отделни места","night_text":"Силни снеговалежи на отделни места"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"零星大雪","night_text":"零星大雪"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"片狀大雪","night_text":"片狀大雪"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Místy silné sněžení","night_text":"Místy silné sněžení"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Plaatselijke zware sneeuw","night_text":"Plaatselijke zware sneeuw"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Ajoittainen rankka lumisade","night_text":"Ajoittainen rankka lumisade"},{"lang_name":"French","lang_iso":"fr","day_text":"Neige forte éparse","night_text":"Neige forte éparse"},{"lang_name":"German","lang_iso":"de","day_text":"stellenweise starker Schneefall","night_text":"stellenweise starker Schneefall"},{"lang_name":"Greek","lang_iso":"el","day_text":"Κατά τόπους ισχυρή χιονόπτωση","night_text":"Κατά τόπους ισχυρή χιονόπτωση"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"अलग-अलग इलाकों में जोरदार बर्फबारी","night_text":"अलग-अलग इलाकों में जोरदार बर्फबारी"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Foltokban heves havazás","night_text":"Foltokban heves havazás"},{"lang_name":"Italian","lang_iso":"it","day_text":"Neve forte a tratti","night_text":"Neve forte a tratti"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"所により大雪","night_text":"所により大雪"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan salju deres ora rata","night_text":"Udan salju deres ora rata"},{"lang_name":"Korean","lang_iso":"ko","day_text":"곳곳에 폭설","night_text":"곳곳에 폭설"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"零星大雪","night_text":"零星大雪"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"अनियमित जोरदार बर्फ","night_text":"अनियमित जोरदार बर्फ"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Miejscowe, ciężkie opady śniegu","night_text":"Miejscowe, ciężkie opady śniegu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Queda de neve forte e irregular","night_text":"Queda de neve forte e irregular"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਕਿਤੇ-ਕਿਤੇ ਤੇਜ਼ ਬਰਫ","night_text":"ਕਿਤੇ-ਕਿਤੇ ਤੇਜ਼ ਬਰਫ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ninsori în cantităţi mari pe alocuri","night_text":"Ninsori în cantităţi mari pe alocuri"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Местами сильный снег","night_text":"Местами сильный снег"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Mestimično jake snežne padavine","night_text":"Mestimično jake snežne padavine"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"තැනින් තැන දැඩි හිම","night_text":"තැනින් තැන දැඩි හිම"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Miestami silné sneženie","night_text":"Miestami silné sneženie"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Nevadas intensas","night_text":"Nevadas intensas"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Områden med tungt snöfall","night_text":"Områden med tungt snöfall"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"சீரில்லாத கனமான பனிமழை","night_text":"சீரில்லாத கனமான பனிமழை"},{"lang_name":"Telugu","lang_iso":"te","day_text":"చెదురుమదురుగా భారీ మంచు","night_text":"చెదురుమదురుగా భారీ మంచు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Düzensiz yoğun kar yağışlı","night_text":"Düzensiz yoğun kar yağışlı"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Місцями сильний сніг","night_text":"Місцями сильний сніг"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"جہاں تہاں شدید برفباری","night_text":"جہاں تہاں شدید برفباری"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Tuyết rơi nặng hạt lả tả","night_text":"Tuyết rơi nặng hạt lả tả"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"撅部打削","night_text":"撅部打削"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"零星大雪","night_text":"零星大雪"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"片狀大雪","night_text":"片狀大雪"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Ukukhithika okukhulu lapha nalapha","night_text":"Ukukhithika okukhulu lapha nalapha"}]},{"code":1225,"day":"Heavy snow","night":"Heavy snow","icon":338,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"ثلوج شديدة","night_text":"ثلوج شديدة"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"ভারী তুষারপাত","night_text":"ভারী তুষারপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Силни снеговалежи","night_text":"Силни снеговалежи"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"大雪","night_text":"大雪"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"大雪","night_text":"大雪"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Silné sněžení","night_text":"Silné sněžení"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Zware sneeuw","night_text":"Zware sneeuw"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Rankka lumisade","night_text":"Rankka lumisade"},{"lang_name":"French","lang_iso":"fr","day_text":"Neige forte","night_text":"Neige forte"},{"lang_name":"German","lang_iso":"de","day_text":"starker Schneefall","night_text":"starker Schneefall"},{"lang_name":"Greek","lang_iso":"el","day_text":"Ισχυρή χιονόπτωση","night_text":"Ισχυρή χιονόπτωση"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"जोरदार बर्फबारी","night_text":"जोरदार बर्फबारी"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Heves havazás","night_text":"Heves havazás"},{"lang_name":"Italian","lang_iso":"it","day_text":"Neve forte","night_text":"Neve forte"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"大雪","night_text":"大雪"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan salju deres","night_text":"Udan salju deres"},{"lang_name":"Korean","lang_iso":"ko","day_text":"폭설","night_text":"폭설"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"大雪","night_text":"大雪"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"जोरदार बर्फ","night_text":"जोरदार बर्फ"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Ciężkie opady śniegu","night_text":"Ciężkie opady śniegu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Neve intensa","night_text":"Neve intensa"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਤੇਜ਼ ਬਰਫ","night_text":"ਤੇਜ਼ ਬਰਫ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ninsori în cantităţi însemnate","night_text":"Ninsori în cantităţi însemnate"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Сильный снег","night_text":"Сильный снег"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Jak sneg","night_text":"Jak sneg"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"දැඩි හිම","night_text":"දැඩි හිම"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Silné sneženie","night_text":"Silné sneženie"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Fuertes nevadas","night_text":"Fuertes nevadas"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Tungt snöfall","night_text":"Tungt snöfall"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"கனமான பனிமழை","night_text":"கனமான பனிமழை"},{"lang_name":"Telugu","lang_iso":"te","day_text":"భారీ మంచు","night_text":"భారీ మంచు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Yoğun kar yağışlı","night_text":"Yoğun kar yağışlı"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Сильний сніг","night_text":"Сильний сніг"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"شدید برفباری","night_text":"شدید برفباری"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Tuyết rơi nặng hạt","night_text":"Tuyết rơi nặng hạt"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"打削","night_text":"打削"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"大雪","night_text":"大雪"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"大雪","night_text":"大雪"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Ukukhithika okunamandla","night_text":"Ukukhithika okunamandla"}]},{"code":1237,"day":"Ice pellets","night":"Ice pellets","icon":350,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"حبيبات جليدية","night_text":"حبيبات جليدية"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"শিলাপাত","night_text":"শিলাপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Градушки","night_text":"Градушки"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"冰丸","night_text":"冰丸"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"冰丸","night_text":"冰丸"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Kroupy","night_text":"Kroupy"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Korrelhagel","night_text":"Korrelhagel"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Rakeet","night_text":"Rakeet"},{"lang_name":"French","lang_iso":"fr","day_text":"Crystaux de glace","night_text":"Crystaux de glace"},{"lang_name":"German","lang_iso":"de","day_text":"Hagel","night_text":"Hagel"},{"lang_name":"Greek","lang_iso":"el","day_text":"Σβόλοι πάγου","night_text":"Σβόλοι πάγου"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"बर्फ के गोले","night_text":"बर्फ के गोले"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Apró szemű jégeső","night_text":"Apró szemű jégeső"},{"lang_name":"Italian","lang_iso":"it","day_text":"Pioggia gelata","night_text":"Pioggia gelata"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"凍雨","night_text":"凍雨"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Krikil es","night_text":"Krikil es"},{"lang_name":"Korean","lang_iso":"ko","day_text":"아이스 펠렛","night_text":"아이스 펠렛"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"冰丸","night_text":"冰丸"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"बर्फाचे गोळे","night_text":"बर्फाचे गोळे"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Mokry śnieg","night_text":"Mokry śnieg"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Granizo","night_text":"Granizo"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਬਰਫ ਦੇ ਛੋਟੇ ਗੋਲੇ","night_text":"ਬਰਫ ਦੇ ਛੋਟੇ ਗੋਲੇ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Grindină","night_text":"Grindină"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Ледяной дождь","night_text":"Ледяной дождь"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Led pomešan s kišom","night_text":"Led pomešan s kišom"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"අයිස් ගුලි","night_text":"අයිස් ගුලි"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Krúpy","night_text":"Krúpy"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Granizo","night_text":"Granizo"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Iskorn","night_text":"Iskorn"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"பனித் துகள்கள்","night_text":"பனித் துகள்கள்"},{"lang_name":"Telugu","lang_iso":"te","day_text":"వడగండ్లు","night_text":"వడగండ్లు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Buz taneleri","night_text":"Buz taneleri"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Крижаний дощ","night_text":"Крижаний дощ"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"برف کے ٹکڑے","night_text":"برف کے ٹکڑے"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa đá","night_text":"Mưa đá"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"削猪","night_text":"削猪"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"冰雹","night_text":"冰雹"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"冰丸","night_text":"冰丸"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Ukukhithika","night_text":"Ukukhithika"}]},{"code":1240,"day":"Light rain shower","night":"Light rain shower","icon":353,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"زخَات خفيفة من الأمطار","night_text":"زخَات خفيفة من الأمطار"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"হাল্কা স্বল্পস্থায়ী বৃষ্টিপাত","night_text":"হাল্কা স্বল্পস্থায়ী বৃষ্টিপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Краткотрайни слаби дъждове","night_text":"Краткотрайни слаби дъждове"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"小阵雨","night_text":"小阵雨"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"小陣雨","night_text":"小陣雨"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Slabé dešťové přeháňky","night_text":"Slabé dešťové přeháňky"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Lichte regenbui","night_text":"Lichte regenbui"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Kevyt sadekuuro","night_text":"Kevyt sadekuuro"},{"lang_name":"French","lang_iso":"fr","day_text":"Averse de pluie légère","night_text":"Averse de pluie légère"},{"lang_name":"German","lang_iso":"de","day_text":"leichte Regenschauer","night_text":"leichte Regenschauer"},{"lang_name":"Greek","lang_iso":"el","day_text":"Ασθενής βροχόπτωση","night_text":"Ασθενής βροχόπτωση"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"बारिश की हल्की बौछारें","night_text":"बारिश की हल्की बौछारें"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Enyhe eső, zápor","night_text":"Enyhe eső, zápor"},{"lang_name":"Italian","lang_iso":"it","day_text":"Precipitazioni piovose deboli","night_text":"Precipitazioni piovose deboli"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"軽いにわか雨","night_text":"軽いにわか雨"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan ora deres sedhela","night_text":"Udan ora deres sedhela"},{"lang_name":"Korean","lang_iso":"ko","day_text":"가벼운 소나기","night_text":"가벼운 소나기"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"小阵雨","night_text":"小阵雨"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"हलक्या पावसाच्या सरी","night_text":"हलक्या पावसाच्या सरी"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Lekkie, przelotne opady deszczu","night_text":"Lekkie, przelotne opady deszczu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Aguaceiros fracos","night_text":"Aguaceiros fracos"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਮੀਂਹ ਦੀ ਹਲਕੀ ਫੁਹਾਰ","night_text":"ਮੀਂਹ ਦੀ ਹਲਕੀ ਫੁਹਾਰ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ploi uşoare şi de scurtă durată","night_text":"Ploi uşoare şi de scurtă durată"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Небольшой ливневый дождь","night_text":"Небольшой ливневый дождь"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Slab kratkotrajni pljusak","night_text":"Slab kratkotrajni pljusak"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"සැහැල්ලු වර්ෂාව","night_text":"සැහැල්ලු වර්ෂාව"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Slabé dažďové prehánky","night_text":"Slabé dažďové prehánky"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Ligeras precipitaciones","night_text":"Ligeras precipitaciones"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Lätt regnskur","night_text":"Lätt regnskur"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"இலேசான மழைப் பொழிவு","night_text":"இலேசான மழைப் பொழிவு"},{"lang_name":"Telugu","lang_iso":"te","day_text":"తేలికపాటి వర్షపు జల్లు","night_text":"తేలికపాటి వర్షపు జల్లు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Hafif sağnak yağışlı","night_text":"Hafif sağnak yağışlı"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Невелика злива","night_text":"Невелика злива"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"ہلکی بارش","night_text":"ہلکی بارش"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa rào nhẹ","night_text":"Mưa rào nhẹ"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"肖咯枕雨","night_text":"肖咯枕雨"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"小阵雨","night_text":"小阵雨"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"小陣雨","night_text":"小陣雨"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Imvula engenamandla","night_text":"Imvula engenamandla"}]},{"code":1243,"day":"Moderate or heavy rain shower","night":"Moderate or heavy rain shower","icon":356,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"زخَات معتدلة أو شديدة من الأمطار","night_text":"زخَات معتدلة أو شديدة من الأمطار"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"মাঝারি ও ভারী স্বল্পস্থায়ী বৃষ্টিপাত","night_text":"মাঝারি ও ভারী স্বল্পস্থায়ী বৃষ্টিপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Краткотрайни умерени или силни дъждове","night_text":"Краткотрайни умерени или силни дъждове"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"中雨或大阵雨","night_text":"中雨或大阵雨"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"中雨或大陣雨","night_text":"中雨或大陣雨"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Mírné nebo silné dešťové přeháňky","night_text":"Mírné nebo silné dešťové přeháňky"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Normale of zware regenbui","night_text":"Normale of zware regenbui"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Keskivoimakas tai rankka sadekuuro","night_text":"Keskivoimakas tai rankka sadekuuro"},{"lang_name":"French","lang_iso":"fr","day_text":"Averse de pluie modérée","night_text":"Averse de pluie modérée"},{"lang_name":"German","lang_iso":"de","day_text":"mäßige bis starke Regenschauer","night_text":"mäßige bis starke Regenschauer"},{"lang_name":"Greek","lang_iso":"el","day_text":"Μέτρια ή ισχυρή βροχόπτωση","night_text":"Μέτρια ή ισχυρή βροχόπτωση"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"सामान्य या जोरदार बारिश की बौछारें","night_text":"सामान्य या जोरदार बारिश की बौछारें"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Mérsékelt, vagy heves felhőszakadás","night_text":"Mérsékelt, vagy heves felhőszakadás"},{"lang_name":"Italian","lang_iso":"it","day_text":"Precipitazioni piovose moderate o forti","night_text":"Precipitazioni piovose moderate o forti"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"穏やかなまたは強いにわか雨","night_text":"穏やかなまたは強いにわか雨"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan rada deres utawa deres sedhela","night_text":"Udan rada deres utawa deres sedhela"},{"lang_name":"Korean","lang_iso":"ko","day_text":"보통 또는 심한 소나기","night_text":"보통 또는 심한 소나기"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"中雨或大阵雨","night_text":"中雨或大阵雨"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"मध्यम किंवा जोरदार पावसाच्या सरी","night_text":"मध्यम किंवा जोरदार पावसाच्या सरी"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Średnie lub ciężkie, przelotne opady deszczu","night_text":"Średnie lub ciężkie, przelotne opady deszczu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Aguaceiros moderados ou fortes","night_text":"Aguaceiros moderados ou fortes"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਮੀਂਹ ਦੀ ਦਰਮਿਆਨੀ ਜਾਂ ਤੇਜ਼ ਫੁਹਾਰ","night_text":"ਮੀਂਹ ਦੀ ਦਰਮਿਆਨੀ ਜਾਂ ਤੇਜ਼ ਫੁਹਾਰ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ploi de scurtă durată moderate sau  în cantităţi însemnate","night_text":"Ploi de scurtă durată moderate sau  în cantităţi însemnate"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Умеренный или сильный ливневый дождь","night_text":"Умеренный или сильный ливневый дождь"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Umeren ili jak kratkotrajni pljusak","night_text":"Umeren ili jak kratkotrajni pljusak"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"මධ්‍යස්ථ හෝ තද වර්ෂාව","night_text":"මධ්‍යස්ථ හෝ තද වර්ෂාව"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Mierne alebo silné dažďové prehánky","night_text":"Mierne alebo silné dažďové prehánky"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Lluvias fuertes o moderadas","night_text":"Lluvias fuertes o moderadas"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Måttlig eller tung regnskur","night_text":"Måttlig eller tung regnskur"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"மிதமான அல்லது கனமான மழைப் பொழிவு","night_text":"மிதமான அல்லது கனமான மழைப் பொழிவு"},{"lang_name":"Telugu","lang_iso":"te","day_text":"మధ్యస్థం నుంచి భారీ వర్షపు జల్లు","night_text":"మధ్యస్థం నుంచి భారీ వర్షపు జల్లు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Orta kuvvetli veya yoğun sağnak yağışlı","night_text":"Orta kuvvetli veya yoğun sağnak yağışlı"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Помірна або сильна злива","night_text":"Помірна або сильна злива"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"معتدل یا شدید بارش","night_text":"معتدل یا شدید بارش"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa rào vừa hoặc nặng hạt","night_text":"Mưa rào vừa hoặc nặng hạt"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"中到斗枕雨","night_text":"中到斗枕雨"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"中到大阵雨","night_text":"中到大阵雨"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"中雨或大陣雨","night_text":"中雨或大陣雨"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Imvula engatheni noma enamandla","night_text":"Imvula engatheni noma enamandla"}]},{"code":1246,"day":"Torrential rain shower","night":"Torrential rain shower","icon":359,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"زخَات غزيرة من الأمطار","night_text":"زخَات غزيرة من الأمطار"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"মুষলধারায় স্বল্পস্থায়ী বৃষ্টিপাত","night_text":"মুষলধারায় স্বল্পস্থায়ী বৃষ্টিপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Обилни краткотрайни дъждове","night_text":"Обилни краткотрайни дъждове"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"暴雨","night_text":"暴雨"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"暴雨","night_text":"暴雨"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Přívalové dešťové přeháňky","night_text":"Přívalové dešťové přeháňky"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Stortregen","night_text":"Stortregen"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Rankka sadekuuro","night_text":"Rankka sadekuuro"},{"lang_name":"French","lang_iso":"fr","day_text":"Averses de pluie torrentielle","night_text":"Averses de pluie torrentielle"},{"lang_name":"German","lang_iso":"de","day_text":"sintflutartige Regenschauer","night_text":"sintflutartige Regenschauer"},{"lang_name":"Greek","lang_iso":"el","day_text":"Καταρρακτώδης βροχόπτωση","night_text":"Καταρρακτώδης βροχόπτωση"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"मूसलाधार बारिश की बौछारें","night_text":"मूसलाधार बारिश की बौछारें"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Viharos felhőszakadás","night_text":"Viharos felhőszakadás"},{"lang_name":"Italian","lang_iso":"it","day_text":"Precipitazioni piovose torrenziali","night_text":"Precipitazioni piovose torrenziali"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"急な豪雨","night_text":"急な豪雨"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan deres pathes sedhela","night_text":"Udan deres pathes sedhela"},{"lang_name":"Korean","lang_iso":"ko","day_text":"호우","night_text":"호우"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"暴雨","night_text":"暴雨"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"मुसळधार पावसाच्या सरी","night_text":"मुसळधार पावसाच्या सरी"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Przelotne deszcze nawalne","night_text":"Przelotne deszcze nawalne"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Chuva torrencial","night_text":"Chuva torrencial"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਮੀਂਹ ਦੀ ਜ਼ੋਰਦਾਰ ਫੁਹਾਰ","night_text":"ਮੀਂਹ ਦੀ ਜ਼ੋਰਦਾਰ ਫੁਹਾਰ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ploaie torențială de scurtă durată","night_text":"Ploaie torențială de scurtă durată"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Сильные ливни","night_text":"Сильные ливни"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Kratkotrajni pljusak koji može izazvati bujice","night_text":"Kratkotrajni pljusak koji može izazvati bujice"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"වේගයෙන් වැටෙන තද වර්ෂාව","night_text":"වේගයෙන් වැටෙන තද වර්ෂාව"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Prívalové dažďové prehánky","night_text":"Prívalové dažďové prehánky"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Lluvias torrenciales","night_text":"Lluvias torrenciales"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Störtregn","night_text":"Störtregn"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"பேய் மழை","night_text":"பேய் மழை"},{"lang_name":"Telugu","lang_iso":"te","day_text":"కుండపోత వర్షం","night_text":"కుండపోత వర్షం"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Şiddetli sağnak yağmur","night_text":"Şiddetli sağnak yağmur"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Дуже сильна злива","night_text":"Дуже сильна злива"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"طوفانی بارش","night_text":"طوفانی بارش"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa rào xối xả","night_text":"Mưa rào xối xả"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"较拐急枕雨","night_text":"较拐急枕雨"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"阵暴雨","night_text":"阵暴雨"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"暴雨","night_text":"暴雨"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Imvula ewumvimbi","night_text":"Imvula ewumvimbi"}]},{"code":1249,"day":"Light sleet showers","night":"Light sleet showers","icon":362,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"زخَات خفيفة من الصقيع","night_text":"زخَات خفيفة من الصقيع"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"স্বল্পস্থায়ী হাল্কা বৃষ্টি সহ তুষারপাত","night_text":"স্বল্পস্থায়ী হাল্কা বৃষ্টি সহ তুষারপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Краткотрайни слаби суграшици","night_text":"Краткотрайни слаби суграшици"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"小冰雹雨","night_text":"小冰雹雨"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"小冰雹雨","night_text":"小冰雹雨"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Slabé přeháňky deště se sněhem","night_text":"Slabé přeháňky deště se sněhem"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Lichte natte sneeuwbuien","night_text":"Lichte natte sneeuwbuien"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Kevyitä räntäsadekuuroja","night_text":"Kevyitä räntäsadekuuroja"},{"lang_name":"French","lang_iso":"fr","day_text":"Légères averses de grésil","night_text":"Légères averses de grésil"},{"lang_name":"German","lang_iso":"de","day_text":"leichte Graupelschauer","night_text":"leichte Graupelschauer"},{"lang_name":"Greek","lang_iso":"el","day_text":"Ασθενές χιονόνερο","night_text":"Ασθενές χιονόνερο"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"हल्की ओलावृष्टि बौछारें","night_text":"हल्की ओलावृष्टि बौछारें"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Enyhe ólmos záporeső","night_text":"Enyhe ólmos záporeső"},{"lang_name":"Italian","lang_iso":"it","day_text":"Precipitazioni deboli di nevischio","night_text":"Precipitazioni deboli di nevischio"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"急な軽いみぞれ","night_text":"急な軽いみぞれ"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan es lan salju ora deres sedhela","night_text":"Udan es lan salju ora deres sedhela"},{"lang_name":"Korean","lang_iso":"ko","day_text":"가벼운 진눈깨비 소나기","night_text":"가벼운 진눈깨비 소나기"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"小冰雹雨","night_text":"小冰雹雨"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"हलक्या गारांच्या सरी","night_text":"हलक्या गारांच्या सरी"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Przejściowe, lekkie opady śniegu z deszczem","night_text":"Przejściowe, lekkie opady śniegu z deszczem"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Aguaceiros fracos com neve","night_text":"Aguaceiros fracos com neve"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਬਰਫ ਵਾਲਾ ਮੀਂਹ ਦੀ ਹਲਕੀ ਫੁਹਾਰ","night_text":"ਬਰਫ ਵਾਲਾ ਮੀਂਹ ਦੀ ਹਲਕੀ ਫੁਹਾਰ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Lapoviță de scurtă durată în cantităţi mici","night_text":"Lapoviță de scurtă durată în cantităţi mici"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Небольшой ливневый дождь со снегом","night_text":"Небольшой ливневый дождь со снегом"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Slab kratkotrajni pljusak pomešan s ledom","night_text":"Slab kratkotrajni pljusak pomešan s ledom"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"සැහැල්ලු හිමවර්ෂා වැසි","night_text":"සැහැල්ලු හිමවර්ෂා වැසි"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Slabé prehánky dažďa so snehom","night_text":"Slabé prehánky dažďa so snehom"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Ligeros chubascos de aguanieve","night_text":"Ligeros chubascos de aguanieve"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Lätt snöblandad regnskur","night_text":"Lätt snöblandad regnskur"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"இலேசான ஆலங்கட்டி பொழிவுகள்","night_text":"இலேசான ஆலங்கட்டி பொழிவுகள்"},{"lang_name":"Telugu","lang_iso":"te","day_text":"తేలికపాటి వడగండ్ల వాన","night_text":"తేలికపాటి వడగండ్ల వాన"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Hafif karla karışık sağnak yağış","night_text":"Hafif karla karışık sağnak yağış"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Невеликі дощі зі снігом","night_text":"Невеликі дощі зі снігом"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"ہلکی ژالہ باری","night_text":"ہلکی ژالہ باری"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa tuyết rào nhẹ","night_text":"Mưa tuyết rào nhẹ"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"轻度鱼假削","night_text":"轻度鱼假削"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"小阵雨夹雪","night_text":"小阵雨夹雪"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"小冰雹雨","night_text":"小冰雹雨"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Imvula enesichotho engatheni","night_text":"Imvula enesichotho engatheni"}]},{"code":1252,"day":"Moderate or heavy sleet showers","night":"Moderate or heavy sleet showers","icon":365,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"زخَات معتدلة أو شديدة من الصقيع","night_text":"زخَات معتدلة أو شديدة من الصقيع"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"স্বল্পস্থায়ী মাঝারি ও ভারী বৃষ্টি সহ তুষারপাত","night_text":"স্বল্পস্থায়ী মাঝারি ও ভারী বৃষ্টি সহ তুষারপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Краткотрайни умерени или силни суграшици","night_text":"Краткотрайни умерени или силни суграшици"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"中度或大冰雹雨","night_text":"中度或大冰雹雨"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"中度或大冰雹雨","night_text":"中度或大冰雹雨"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Mírné nebo silné přeháňky deště se sněhem","night_text":"Mírné nebo silné přeháňky deště se sněhem"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Normale of zware natte sneeuwbuien","night_text":"Normale of zware natte sneeuwbuien"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Keskivoimakkaita tai rankkoja räntäsadekuuroja","night_text":"Keskivoimakkaita tai rankkoja räntäsadekuuroja"},{"lang_name":"French","lang_iso":"fr","day_text":"Averses de grésil modérées à fortes","night_text":"Averses de grésil modérées à fortes"},{"lang_name":"German","lang_iso":"de","day_text":"mäßige bis starke Graupelschauer","night_text":"mäßige bis starke Graupelschauer"},{"lang_name":"Greek","lang_iso":"el","day_text":"Μέτριο ή ισχυρό χιονόνερο","night_text":"Μέτριο ή ισχυρό χιονόνερο"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"सामान्य या जोरदार ओलावृष्टि बौछारें","night_text":"सामान्य या जोरदार ओलावृष्टि बौछारें"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Mérsékelt, vagy heves ólmos záporeső","night_text":"Mérsékelt, vagy heves ólmos záporeső"},{"lang_name":"Italian","lang_iso":"it","day_text":"Precipitazioni di nevischio moderate o forti","night_text":"Precipitazioni di nevischio moderate o forti"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"穏やかなまたは強い急なみぞれ","night_text":"穏やかなまたは強い急なみぞれ"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan es lan salju rada deres utawa deres sedhela","night_text":"Udan es lan salju rada deres utawa deres sedhela"},{"lang_name":"Korean","lang_iso":"ko","day_text":"보통 또는 심한 진눈깨비 소나기","night_text":"보통 또는 심한 진눈깨비 소나기"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"中度或大冰雹雨","night_text":"中度或大冰雹雨"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"मध्यम किंवा जोरदार गारांच्या सरी","night_text":"मध्यम किंवा जोरदार गारांच्या सरी"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Przejściowe, średnie lub ciężkie opady śniegu z deszczem","night_text":"Przejściowe, średnie lub ciężkie opady śniegu z deszczem"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Aguaceiros moderados ou fortes com neve","night_text":"Aguaceiros moderados ou fortes com neve"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਬਰਫ ਵਾਲਾ ਮੀਂਹ ਦੀ ਦਰਮਿਆਨੀ ਜਾਂ ਤੇਜ਼ ਫੁਹਾਰ","night_text":"ਬਰਫ ਵਾਲਾ ਮੀਂਹ ਦੀ ਦਰਮਿਆਨੀ ਜਾਂ ਤੇਜ਼ ਫੁਹਾਰ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Lapoviță de scurtă durată în cantităţi mari şi moderate","night_text":"Lapoviță de scurtă durată în cantităţi mari şi moderate"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Умеренные или сильные ливневые дожди со снегом","night_text":"Умеренные или сильные ливневые дожди со снегом"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Umeren ili jak kratkotrajni pljusak pomešan s ledom","night_text":"Umeren ili jak kratkotrajni pljusak pomešan s ledom"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"මධ්‍යස්ථ හෝ දැඩි හිමවර්ෂා වැසි","night_text":"මධ්‍යස්ථ හෝ දැඩි හිමවර්ෂා වැසි"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Mierne alebo silné prehánky dažďa so snehom","night_text":"Mierne alebo silné prehánky dažďa so snehom"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Chubascos de aguanieve fuertes o moderados","night_text":"Chubascos de aguanieve fuertes o moderados"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Måttlig eller tung snöblandad regnskur","night_text":"Måttlig eller tung snöblandad regnskur"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"மிதமான அல்லது கனமான ஆலங்கட்டி பொழிவுகள்","night_text":"மிதமான அல்லது கனமான ஆலங்கட்டி பொழிவுகள்"},{"lang_name":"Telugu","lang_iso":"te","day_text":"మధ్యస్థం నుంచి భారీ వడగండ్ల వాన","night_text":"మధ్యస్థం నుంచి భారీ వడగండ్ల వాన"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Orta kuvvetli veya yoğun karla karışık sağnak yağış","night_text":"Orta kuvvetli veya yoğun karla karışık sağnak yağış"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Помірні або сильні дощі зі снігом","night_text":"Помірні або сильні дощі зі снігом"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"معتدل یا شدید ژالہ باری","night_text":"معتدل یا شدید ژالہ باری"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa tuyết rào vừa hoặc nặng hạt","night_text":"Mưa tuyết rào vừa hoặc nặng hạt"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"中到斗鱼假削","night_text":"中到斗鱼假削"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"中到大阵雨夹雪","night_text":"中到大阵雨夹雪"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"中度或大冰雹雨","night_text":"中度或大冰雹雨"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Imvula enesichotho engatheni noma enamandla","night_text":"Imvula enesichotho engatheni noma enamandla"}]},{"code":1255,"day":"Light snow showers","night":"Light snow showers","icon":368,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"زخَات خفيفة من الثلوج","night_text":"زخَات خفيفة من الثلوج"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"স্বল্পস্থায়ী হাল্কা তুষারপাত","night_text":"স্বল্পস্থায়ী হাল্কা তুষারপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Краткотрайни слаби снеговалежи","night_text":"Краткотрайни слаби снеговалежи"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"小阵雪","night_text":"小阵雪"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"小陣雪","night_text":"小陣雪"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Slabé sněhové přeháňky","night_text":"Slabé sněhové přeháňky"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Lichte sneeuwbuien","night_text":"Lichte sneeuwbuien"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Kevyitä lumisadekuuroja","night_text":"Kevyitä lumisadekuuroja"},{"lang_name":"French","lang_iso":"fr","day_text":"Légères averses de neige","night_text":"Légères averses de neige"},{"lang_name":"German","lang_iso":"de","day_text":"leichte Schneegestöber","night_text":"leichte Schneegestöber"},{"lang_name":"Greek","lang_iso":"el","day_text":"Ασθενής χιονόπτωση","night_text":"Ασθενής χιονόπτωση"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"हल्की बर्फबारी बौछारें","night_text":"हल्की बर्फबारी बौछारें"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Enyhe hózápor","night_text":"Enyhe hózápor"},{"lang_name":"Italian","lang_iso":"it","day_text":"Precipitazioni nevose leggere","night_text":"Precipitazioni nevose leggere"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"急な軽い雪","night_text":"急な軽い雪"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan salju ora deres sedhela","night_text":"Udan salju ora deres sedhela"},{"lang_name":"Korean","lang_iso":"ko","day_text":"가벼운 폭설","night_text":"가벼운 폭설"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"小阵雪","night_text":"小阵雪"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"हलक्याशा हिमसरी","night_text":"हलक्याशा हिमसरी"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Przejściowe, lekkie opady śniegu","night_text":"Przejściowe, lekkie opady śniegu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Chuva fraca com neve","night_text":"Chuva fraca com neve"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਬਰਫ ਦੀ ਹਲਕੀ ਫੁਹਾਰ","night_text":"ਬਰਫ ਦੀ ਹਲਕੀ ਫੁਹਾਰ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ninsori de scurtă durată în cantităţi mici","night_text":"Ninsori de scurtă durată în cantităţi mici"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Небольшой снег","night_text":"Небольшой снег"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Slabe kratkotrajne snežne padavine","night_text":"Slabe kratkotrajne snežne padavine"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"සැහැල්ලු හිම වර්ෂා","night_text":"සැහැල්ලු හිම වර්ෂා"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Slabé snehové prehánky","night_text":"Slabé snehové prehánky"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Ligeras precipitaciones de nieve","night_text":"Ligeras precipitaciones de nieve"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Lätta snöbyar","night_text":"Lätta snöbyar"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"இலேசான பனிப் பொழிவுகள்","night_text":"இலேசான பனிப் பொழிவுகள்"},{"lang_name":"Telugu","lang_iso":"te","day_text":"తేలికపాటి మంచు జల్లులు","night_text":"తేలికపాటి మంచు జల్లులు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Hafif sağnak şeklinde kar","night_text":"Hafif sağnak şeklinde kar"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Невеликий снігопад","night_text":"Невеликий снігопад"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"ہلکی برفباری","night_text":"ہلکی برفباری"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa rào lẫn tuyết nhẹ","night_text":"Mưa rào lẫn tuyết nhẹ"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"肖咯阵削","night_text":"肖咯阵削"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"小阵雪","night_text":"小阵雪"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"小陣雪","night_text":"小陣雪"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Imvula enesichotho kodwa engenamandla","night_text":"Imvula enesichotho kodwa engenamandla"}]},{"code":1258,"day":"Moderate or heavy snow showers","night":"Moderate or heavy snow showers","icon":371,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"زخَات معتدلة أو شديدة من الثلوج","night_text":"زخَات معتدلة أو شديدة من الثلوج"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"স্বল্পস্থায়ী মাঝারি ও ভারী তুষারপাত","night_text":"স্বল্পস্থায়ী মাঝারি ও ভারী তুষারপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Краткотрайни умерени или силни снеговалежи","night_text":"Краткотрайни умерени или силни снеговалежи"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"中度或大阵雪","night_text":"中度或大阵雪"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"中度或大陣雪","night_text":"中度或大陣雪"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Mírné nebo silné sněhové přeháňky","night_text":"Mírné nebo silné sněhové přeháňky"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Normale of zware sneeuwbuien","night_text":"Normale of zware sneeuwbuien"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Keskivoimakkaita tai rankkoja lumisadekuuroja","night_text":"Keskivoimakkaita tai rankkoja lumisadekuuroja"},{"lang_name":"French","lang_iso":"fr","day_text":"Averses de neige modérées à fortes","night_text":"Averses de neige modérées à fortes"},{"lang_name":"German","lang_iso":"de","day_text":"mäßige bis starke Schneegestöber","night_text":"mäßige bis starke Schneegestöber"},{"lang_name":"Greek","lang_iso":"el","day_text":"Μέτρια ή ισχυρή χιονόπτωση","night_text":"Μέτρια ή ισχυρή χιονόπτωση"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"सामान्य या जोरदार बर्फबारी बौछारें","night_text":"सामान्य या जोरदार बर्फबारी बौछारें"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Mérsékelt, vagy heves hózápor","night_text":"Mérsékelt, vagy heves hózápor"},{"lang_name":"Italian","lang_iso":"it","day_text":"Precipitazioni nevose moderate o leggere","night_text":"Precipitazioni nevose moderate o leggere"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"穏やかなまたは強い急な雪","night_text":"穏やかなまたは強い急な雪"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan salju rada deres utawa deres sedhela","night_text":"Udan salju rada deres utawa deres sedhela"},{"lang_name":"Korean","lang_iso":"ko","day_text":"보통 또는 심한 폭설","night_text":"보통 또는 심한 폭설"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"中度或大阵雪","night_text":"中度或大阵雪"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"मध्यम किंवा जोरदार हिमसरी","night_text":"मध्यम किंवा जोरदार हिमसरी"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Przejściowe, średnie lub ciężkie opady śniegu","night_text":"Przejściowe, średnie lub ciężkie opady śniegu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Chuva moderada ou forte com neve","night_text":"Chuva moderada ou forte com neve"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਬਰਫ ਦੀ ਦਰਮਿਆਨੀ ਜਾਂ ਤੇਜ਼ ਫੁਹਾਰ","night_text":"ਬਰਫ ਦੀ ਦਰਮਿਆਨੀ ਜਾਂ ਤੇਜ਼ ਫੁਹਾਰ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ninsori de scurtă durată în cantităţi mari şi moderate","night_text":"Ninsori de scurtă durată în cantităţi mari şi moderate"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Умеренный или сильный снег","night_text":"Умеренный или сильный снег"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Umerene ili jake kratkotrajne snežne padavine","night_text":"Umerene ili jake kratkotrajne snežne padavine"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"මධ්‍යස්ථා හෝ දැඩි හිම වැසි","night_text":"මධ්‍යස්ථා හෝ දැඩි හිම වැසි"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Mierne alebo silné snehové prehánky","night_text":"Mierne alebo silné snehové prehánky"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Chubascos de nieve fuertes o moderados","night_text":"Chubascos de nieve fuertes o moderados"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Måttliga eller kraftiga snöbyar","night_text":"Måttliga eller kraftiga snöbyar"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"மிதமான அல்லது கனமான பனிப் பொழிவுகள்","night_text":"மிதமான அல்லது கனமான பனிப் பொழிவுகள்"},{"lang_name":"Telugu","lang_iso":"te","day_text":"మధ్యస్థం నుంచి భారీ మంచు జల్లులు","night_text":"మధ్యస్థం నుంచి భారీ మంచు జల్లులు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Orta kuvvetli veya yoğun ve sağnak şeklinde kar","night_text":"Orta kuvvetli veya yoğun ve sağnak şeklinde kar"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Помірний або сильний снігопад","night_text":"Помірний або сильний снігопад"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"معتدل یا شدید برفباری","night_text":"معتدل یا شدید برفباری"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa rào lẫn tuyết vừa hoặc nặng hạt","night_text":"Mưa rào lẫn tuyết vừa hoặc nặng hạt"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"中到斗阵削","night_text":"中到斗阵削"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"中到大阵雪","night_text":"中到大阵雪"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"中度或大陣雪","night_text":"中度或大陣雪"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Isichotho esihambisana nemvula engatheni noma enamandla","night_text":"Isichotho esihambisana nemvula engatheni noma enamandla"}]},{"code":1261,"day":"Light showers of ice pellets","night":"Light showers of ice pellets","icon":374,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"زخَات خفيفة من الحبيبات الجليديَة","night_text":"زخَات خفيفة من الحبيبات الجليديَة"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"স্বল্পস্থায়ী হাল্কা শিলাপাত","night_text":"স্বল্পস্থায়ী হাল্কা শিলাপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Краткотрайни слаби градушки","night_text":"Краткотрайни слаби градушки"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"冰丸小雨","night_text":"冰丸小雨"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"冰丸小雨","night_text":"冰丸小雨"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Slabé kroupové přeháňky","night_text":"Slabé kroupové přeháňky"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Lichte korrelhagelbuien","night_text":"Lichte korrelhagelbuien"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Kevyitä raekuuroja","night_text":"Kevyitä raekuuroja"},{"lang_name":"French","lang_iso":"fr","day_text":"Légères averses de crystaux de glace","night_text":"Légères averses de crystaux de glace"},{"lang_name":"German","lang_iso":"de","day_text":"leichte Hagelschauer","night_text":"leichte Hagelschauer"},{"lang_name":"Greek","lang_iso":"el","day_text":"Ασθενής πτώση σβόλων πάγου","night_text":"Ασθενής πτώση σβόλων πάγου"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"बर्फ के गोलों की हल्की बौछारें","night_text":"बर्फ के गोलों की हल्की बौछारें"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Enyhe apró szemű jégeső","night_text":"Enyhe apró szemű jégeső"},{"lang_name":"Italian","lang_iso":"it","day_text":"Precipitazioni deboli di pioggia gelata","night_text":"Precipitazioni deboli di pioggia gelata"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"軽い急な凍雨","night_text":"軽い急な凍雨"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan krikil es ora deres sedhela","night_text":"Udan krikil es ora deres sedhela"},{"lang_name":"Korean","lang_iso":"ko","day_text":"가벼운 얼음 알갱이 샤워","night_text":"가벼운 얼음 알갱이 샤워"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"冰丸小雨","night_text":"冰丸小雨"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"बर्फाच्या गोळ्यांच्या हलक्याशा सरी","night_text":"बर्फाच्या गोळ्यांच्या हलक्याशा सरी"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Przejściowe, lekkie opady mokrego śniegu","night_text":"Przejściowe, lekkie opady mokrego śniegu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Aguaceiros fracos com granizo","night_text":"Aguaceiros fracos com granizo"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਬਰਫ ਦੇ ਛੋਟੇ ਗੋਲਿਆਂ ਦੀ ਹਲਕੀ ਫੁਹਾਰ","night_text":"ਬਰਫ ਦੇ ਛੋਟੇ ਗੋਲਿਆਂ ਦੀ ਹਲਕੀ ਫੁਹਾਰ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ploi în cantităţi mici însoţite de grindină","night_text":"Ploi în cantităţi mici însoţite de grindină"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Небольшой ледяной дождь","night_text":"Небольшой ледяной дождь"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Slabi kratkotrajni pljuskovi pomešani s ledom","night_text":"Slabi kratkotrajni pljuskovi pomešani s ledom"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"අයිස් ගුලි සහිත සැහැල්ලු වැසි","night_text":"අයිස් ගුලි සහිත සැහැල්ලු වැසි"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Slabé krúpové prehánky","night_text":"Slabé krúpové prehánky"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Ligeros chubascos acompañados de granizo","night_text":"Ligeros chubascos acompañados de granizo"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Lätta skurar med iskorn","night_text":"Lätta skurar med iskorn"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"பனித் துகள்களின் இலேசான பொழிவு","night_text":"பனித் துகள்களின் இலேசான பொழிவு"},{"lang_name":"Telugu","lang_iso":"te","day_text":"వడగళ్ళతో తేలికపాటి వర్షం","night_text":"వడగళ్ళతో తేలికపాటి వర్షం"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Hafif buz taneleri şeklinde sağnak yağış","night_text":"Hafif buz taneleri şeklinde sağnak yağış"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Невеликі крижані зливи","night_text":"Невеликі крижані зливи"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"برف کے ٹکڑے کی معتدل بارش","night_text":"برف کے ٹکڑے کی معتدل بارش"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa đá rào nhẹ","night_text":"Mưa đá rào nhẹ"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"有跌削猪","night_text":"有跌削猪"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"小阵冰雹","night_text":"小阵冰雹"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"冰丸小雨","night_text":"冰丸小雨"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Imvula engenamandla ehamba nokukhithika","night_text":"Imvula engenamandla ehamba nokukhithika"}]},{"code":1264,"day":"Moderate or heavy showers of ice pellets","night":"Moderate or heavy showers of ice pellets","icon":377,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"زخَات معتلة أو شديدة من الحبيبات الجليديَة","night_text":"زخَات معتلة أو شديدة من الحبيبات الجليديَة"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"স্বল্পস্থায়ী মাঝারি ও ভারী শিলাপাত","night_text":"স্বল্পস্থায়ী মাঝারি ও ভারী শিলাপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Краткотрайни умерени или силни градушки","night_text":"Краткотрайни умерени или силни градушки"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"中度或大冰丸","night_text":"中度或大冰丸"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"中度或大冰丸","night_text":"中度或大冰丸"},{"lang_name":"Czech","lang_iso":"cs","day_text":"Mírné nebo silné kroupové přeháňky","night_text":"Mírné nebo silné kroupové přeháňky"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Normale of zware korrelhagelbuien","night_text":"Normale of zware korrelhagelbuien"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Keskivoimakkaita tai rankkoja raekuuroja","night_text":"Keskivoimakkaita tai rankkoja raekuuroja"},{"lang_name":"French","lang_iso":"fr","day_text":"Averses de crystaux de glace modérées à fortes","night_text":"Averses de crystaux de glace modérées à fortes"},{"lang_name":"German","lang_iso":"de","day_text":"mäßige bis starke Hagelschauer","night_text":"mäßige bis starke Hagelschauer"},{"lang_name":"Greek","lang_iso":"el","day_text":"Μέτρια ή ισχυρή πτώση σβόλων πάγου","night_text":"Μέτρια ή ισχυρή πτώση σβόλων πάγου"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"बर्फ के गोलों की सामान्य या भारी बौछारें","night_text":"बर्फ के गोलों की सामान्य या भारी बौछारें"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Mérsékelt, vagy heves apró szemű jégeső","night_text":"Mérsékelt, vagy heves apró szemű jégeső"},{"lang_name":"Italian","lang_iso":"it","day_text":"Precipitazioni moderate o forti di pioggia gelata","night_text":"Precipitazioni moderate o forti di pioggia gelata"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"穏やかなまたは強い急な凍雨","night_text":"穏やかなまたは強い急な凍雨"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan krikil es rada deres utawa deres sedhela","night_text":"Udan krikil es rada deres utawa deres sedhela"},{"lang_name":"Korean","lang_iso":"ko","day_text":"보통 또는 심한 얼음 알갱이 샤워","night_text":"보통 또는 심한 얼음 알갱이 샤워"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"中度或大冰丸","night_text":"中度或大冰丸"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"बर्फाच्या गोळ्यांच्या मध्यम किंवा जोरदार सरी","night_text":"बर्फाच्या गोळ्यांच्या मध्यम किंवा जोरदार सरी"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Przejściowe, średnie lub ciężkie opady mokrego śniegu","night_text":"Przejściowe, średnie lub ciężkie opady mokrego śniegu"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Aguaceiros moderados ou fortes com granizo","night_text":"Aguaceiros moderados ou fortes com granizo"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਬਰਫ ਦੇ ਛੋਟੇ ਗੋਲਿਆਂ ਦੀ ਦਰਮਿਆਨੀ ਜਾਂ ਤੇਜ਼ ਫੁਹਾਰ","night_text":"ਬਰਫ ਦੇ ਛੋਟੇ ਗੋਲਿਆਂ ਦੀ ਦਰਮਿਆਨੀ ਜਾਂ ਤੇਜ਼ ਫੁਹਾਰ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ploi în cantităţi mari şi moderate însoțite de grindină","night_text":"Ploi în cantităţi mari şi moderate însoțite de grindină"},{"lang_name":"Russian","lang_iso":"ru","day_text":"Умеренный или сильный ледяной дождь","night_text":"Умеренный или сильный ледяной дождь"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Umereni ili jaki kratkotrajni pljuskovi pomešani s ledom","night_text":"Umereni ili jaki kratkotrajni pljuskovi pomešani s ledom"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"මධ්‍යස්ථ හෝ තද අයිස් ගුලි සහිත වැසි","night_text":"මධ්‍යස්ථ හෝ තද අයිස් ගුලි සහිත වැසි"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"Mierne alebo silné krúpové prehánky","night_text":"Mierne alebo silné krúpové prehánky"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Chubascos fuertes o moderados acompañados de granizo","night_text":"Chubascos fuertes o moderados acompañados de granizo"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Måttliga eller tunga skurar med iskorn","night_text":"Måttliga eller tunga skurar med iskorn"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"பனித் துகள்களின் மிதமான அல்லது கனமான பொழிவு","night_text":"பனித் துகள்களின் மிதமான அல்லது கனமான பொழிவு"},{"lang_name":"Telugu","lang_iso":"te","day_text":"మధ్యస్థం నుంచి భారీ వడగళ్ళలో కూడిన భారీ జల్లు","night_text":"మధ్యస్థం నుంచి భారీ వడగళ్ళలో కూడిన భారీ జల్లు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Orta kuvvetli veya yoğun buz taneleri sağnak yağışlı","night_text":"Orta kuvvetli veya yoğun buz taneleri sağnak yağışlı"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Помірні або сильні крижані зливи","night_text":"Помірні або сильні крижані зливи"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"برف کے ٹکڑے کی معتدل یا شدید بارش","night_text":"برف کے ٹکڑے کی معتدل یا شدید بارش"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa đá rào vừa hoặc nặng hạt","night_text":"Mưa đá rào vừa hoặc nặng hạt"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"中到斗削猪","night_text":"中到斗削猪"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"中到大阵冰雹","night_text":"中到大阵冰雹"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"中度或大冰丸","night_text":"中度或大冰丸"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Imvula engatheni noma enamandla ehamba nesichotho","night_text":"Imvula engatheni noma enamandla ehamba nesichotho"}]},{"code":1273,"day":"Patchy light rain in area with thunder","night":"Patchy light rain in area with thunder","icon":386,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"أمطار خفيفة متفاوتة في المنطقة مع رعد","night_text":"أمطار خفيفة متفاوتة في المنطقة مع رعد"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"এলাকায় বজ্রবিদ্যুত সহ অনিয়মিত হাল্কা বৃষ্টিপাত","night_text":"এলাকায় বজ্রবিদ্যুত সহ অনিয়মিত হাল্কা বৃষ্টিপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Слаби дъждове на отделни места в области с гръмотевици","night_text":"Слаби дъждове на отделни места в области с гръмотевици"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"雷区有零星小雨","night_text":"雷区有零星小雨"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"雷區有零星小雨","night_text":"雷區有零星小雨"},{"lang_name":"Czech","lang_iso":"cs","day_text":"V oblasti bouřky místy slabý déšť","night_text":"V oblasti bouřky místy slabý déšť"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Plaatselijke lichte regen in gebied met onweer","night_text":"Plaatselijke lichte regen in gebied met onweer"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Paikoittainen kevyt sade ukkosalueella","night_text":"Paikoittainen kevyt sade ukkosalueella"},{"lang_name":"French","lang_iso":"fr","day_text":"Légère pluie éparse avec tonnerre par endroit","night_text":"Légère pluie éparse avec tonnerre par endroit"},{"lang_name":"German","lang_iso":"de","day_text":"stellenweise leichter Regenfall mit Gewitter","night_text":"stellenweise leichter Regenfall mit Gewitter"},{"lang_name":"Greek","lang_iso":"el","day_text":"Κατά τόπους ασθενής βροχή στην περιοχή με βροντές","night_text":"Κατά τόπους ασθενής βροχή στην περιοχή με βροντές"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"अलग-अलग इलाकों में गरज के साथ हल्की बारिश","night_text":"अलग-अलग इलाकों में गरज के साथ हल्की बारिश"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Foltokban enyhe eső mennydörgéssel, villámlással","night_text":"Foltokban enyhe eső mennydörgéssel, villámlással"},{"lang_name":"Italian","lang_iso":"it","day_text":"Pioggia debole a tratti in zona e tuoni","night_text":"Pioggia debole a tratti in zona e tuoni"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"所により雷を伴う弱い雨","night_text":"所により雷を伴う弱い雨"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan gludhuk ora deres ora rata ing area","night_text":"Udan gludhuk ora deres ora rata ing area"},{"lang_name":"Korean","lang_iso":"ko","day_text":"천둥을 동반한 지역 곳곳의 가벼운 비","night_text":"천둥을 동반한 지역 곳곳의 가벼운 비"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"雷区有零星小雨","night_text":"雷区有零星小雨"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"क्षेत्रात मेघगर्जनेसहित अनियमित हलकासा पाऊस","night_text":"क्षेत्रात मेघगर्जनेसहित अनियमित हलकासा पाऊस"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Miejscowe, lekkie opady deszczu z grzmieniem w okolicy","night_text":"Miejscowe, lekkie opady deszczu z grzmieniem w okolicy"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Chuva fraca irregular com trovoada","night_text":"Chuva fraca irregular com trovoada"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਗਰਜ ਵਾਲੇ ਇਲਾਕੇ ਵਿੱਚ ਕਿਤੇ-ਕਿਤੇ ਹਲਕਾ ਮੀਂਹ","night_text":"ਗਰਜ ਵਾਲੇ ਇਲਾਕੇ ਵਿੱਚ ਕਿਤੇ-ਕਿਤੇ ਹਲਕਾ ਮੀਂਹ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ploi în cantităţi mici pe porțiuni însoțite de tunete","night_text":"Ploi în cantităţi mici pe porțiuni însoțite de tunete"},{"lang_name":"Russian","lang_iso":"ru","day_text":"В отдельных районах местами небольшой дождь с грозой","night_text":"В отдельных районах местами небольшой дождь с грозой"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Povremena slaba lokalna kiša uz grmljavinu","night_text":"Povremena slaba lokalna kiša uz grmljavinu"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"ප්‍රදේශයේ ගිගුරුම් සහිත තැනින් තැන සැහැල්ලු වර්ෂාව","night_text":"ප්‍රදේශයේ ගිගුරුම් සහිත තැනින් තැන සැහැල්ලු වර්ෂාව"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"V oblasti búrky miestami slabý dážď","night_text":"V oblasti búrky miestami slabý dážď"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Intervalos de lluvias ligeras con tomenta en la región","night_text":"Intervalos de lluvias ligeras con tomenta en la región"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Områden med lätt regn i område med åska","night_text":"Områden med lätt regn i område med åska"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"பகுதியில் இடியுடன் சீரில்லாத இலேசான மழை","night_text":"பகுதியில் இடியுடன் சீரில்லாத இலேசான மழை"},{"lang_name":"Telugu","lang_iso":"te","day_text":"చెదురుమదురుగా ఉరుములతో తేలికపాటి వర్షం","night_text":"చెదురుమదురుగా ఉరుములతో తేలికపాటి వర్షం"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Bölgesel gök gürültülü düzensiz hafif yağmur","night_text":"Bölgesel gök gürültülü düzensiz hafif yağmur"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Місцями невеликий дощ інколи з грозою","night_text":"Місцями невеликий дощ інколи з грозою"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"علاقے میں گھن گرج کے ساتھ ہلکی بارش","night_text":"علاقے میں گھن گرج کے ساتھ ہلکی بارش"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa nhẹ lả tả trong khu vực có sấm sét","night_text":"Mưa nhẹ lả tả trong khu vực có sấm sét"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"悠雷咯地方撅部肖鱼","night_text":"悠雷咯地方撅部肖鱼"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"有雷的地方有零星小雨","night_text":"有雷的地方有零星小雨"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"雷區有零星小雨","night_text":"雷區有零星小雨"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Imvula engatheni lapha nalapha endaweni enokuduma kwezulu","night_text":"Imvula engatheni lapha nalapha endaweni enokuduma kwezulu"}]},{"code":1276,"day":"Moderate or heavy rain in area with thunder","night":"Moderate or heavy rain in area with thunder","icon":389,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"أمطار معتدلة أو شديدة في المنطقة مع رعد","night_text":"أمطار معتدلة أو شديدة في المنطقة مع رعد"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"এলাকায় বজ্রবিদ্যুত সহ অনিয়মিত মাঝারি ও ভারী বৃষ্টিপাত","night_text":"এলাকায় বজ্রবিদ্যুত সহ অনিয়মিত মাঝারি ও ভারী বৃষ্টিপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Умерени или силни дъждове на отделни места в области с гръмотевици","night_text":"Умерени или силни дъждове на отделни места в области с гръмотевици"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"雷区有中或大雨","night_text":"雷区有中或大雨"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"雷區有中或大雨","night_text":"雷區有中或大雨"},{"lang_name":"Czech","lang_iso":"cs","day_text":"V oblasti bouřky mírný nebo silný déšť","night_text":"V oblasti bouřky mírný nebo silný déšť"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Normale of zware regen in gebied met onweer","night_text":"Normale of zware regen in gebied met onweer"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Keskivoimakas tai rankka sade ukkosalueella","night_text":"Keskivoimakas tai rankka sade ukkosalueella"},{"lang_name":"French","lang_iso":"fr","day_text":"Pluie forte à modérée avec tonerre par endroit","night_text":"Pluie forte à modérée avec tonerre par endroit"},{"lang_name":"German","lang_iso":"de","day_text":"mäßiger bis starker Regenfall mit Gewitter","night_text":"mäßiger bis starker Regenfall mit Gewitter"},{"lang_name":"Greek","lang_iso":"el","day_text":"Μέτρια ή ισχυρή βροχή στην περιοχή με βροντές","night_text":"Μέτρια ή ισχυρή βροχή στην περιοχή με βροντές"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"अलग-अलग इलाकों में गरज के साथ सामान्य या जोरदार बारिश","night_text":"अलग-अलग इलाकों में गरज के साथ सामान्य या जोरदार बारिश"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"A területen foltokban enyhe eső mennydörgéssel, villámlással","night_text":"A területen foltokban enyhe eső mennydörgéssel, villámlással"},{"lang_name":"Italian","lang_iso":"it","day_text":"Pioggia moderata o forte in zona e tuoni","night_text":"Pioggia moderata o forte in zona e tuoni"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"雷を伴う穏やかなまたは強い雨","night_text":"雷を伴う穏やかなまたは強い雨"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan gludhuk rada deres utawa deres ing area","night_text":"Udan gludhuk rada deres utawa deres ing area"},{"lang_name":"Korean","lang_iso":"ko","day_text":"천둥을 동반한 보통 또는 심한 비","night_text":"천둥을 동반한 보통 또는 심한 비"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"雷区有中或大雨","night_text":"雷区有中或大雨"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"क्षेत्रात मेघगर्जनेसहित मध्यम किंवा जोरदार पाऊस","night_text":"क्षेत्रात मेघगर्जनेसहित मध्यम किंवा जोरदार पाऊस"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Miejscowe, średnie lub ciężkie opady deszczu z grzmieniem w okolicy","night_text":"Miejscowe, średnie lub ciężkie opady deszczu z grzmieniem w okolicy"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Chuva moderada ou forte com trovoada","night_text":"Chuva moderada ou forte com trovoada"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਗਰਜ ਵਾਲੇ ਇਲਾਕੇ ਵਿੱਚ ਦਰਮਿਆਨਾ ਜਾਂ ਤੇਜ਼ ਮੀਂਹ","night_text":"ਗਰਜ ਵਾਲੇ ਇਲਾਕੇ ਵਿੱਚ ਦਰਮਿਆਨਾ ਜਾਂ ਤੇਜ਼ ਮੀਂਹ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ploi în cantităţi mari şi moderate pe porțiuni însoțite de tunete","night_text":"Ploi în cantităţi mari şi moderate pe porțiuni însoțite de tunete"},{"lang_name":"Russian","lang_iso":"ru","day_text":"В отдельных районах умеренный или сильный дождь с грозой","night_text":"В отдельных районах умеренный или сильный дождь с грозой"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Umerena ili jaka kiša uz grmljavinu","night_text":"Umerena ili jaka kiša uz grmljavinu"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"ප්‍රදේශයේ ගිගුරුම් සහිත මධ්‍යස්ථ හෝ තද වැසි","night_text":"ප්‍රදේශයේ ගිගුරුම් සහිත මධ්‍යස්ථ හෝ තද වැසි"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"V oblasti búrky mierny alebo silný dážď","night_text":"V oblasti búrky mierny alebo silný dážď"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Lluvias con tormenta fuertes o moderadas en la región","night_text":"Lluvias con tormenta fuertes o moderadas en la región"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Måttligt eller tungt regn i område med åska","night_text":"Måttligt eller tungt regn i område med åska"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"பகுதியில் இடியுடன் மிதமான அல்லது கனமான மழை","night_text":"பகுதியில் இடியுடன் மிதமான அல்லது கனமான மழை"},{"lang_name":"Telugu","lang_iso":"te","day_text":"ఉరుములతో కూడిన మధ్యస్థం నుంచి తీవ్రంగా వర్షం","night_text":"ఉరుములతో కూడిన మధ్యస్థం నుంచి తీవ్రంగా వర్షం"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Bölgesel gök gürültülü orta kuvvetli veya şiddetli yağış","night_text":"Bölgesel gök gürültülü orta kuvvetli veya şiddetli yağış"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Помірний або сильний дощ місцями з грозою","night_text":"Помірний або сильний дощ місцями з грозою"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"علاقے میں گھن گرج کے ساتھ معتدل یا شدید بارش","night_text":"علاقے میں گھن گرج کے ساتھ معتدل یا شدید بارش"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Mưa vừa hoặc nặng hạt trong khu vực có sấm sét","night_text":"Mưa vừa hoặc nặng hạt trong khu vực có sấm sét"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"悠雷咯地方中到斗落鱼","night_text":"悠雷咯地方中到斗落鱼"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"有雷的地方有中到大雨","night_text":"有雷的地方有中到大雨"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"雷區有中或大雨","night_text":"雷區有中或大雨"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Imvula engatheni noma enamandla endaweni enokuduma kwezulu","night_text":"Imvula engatheni noma enamandla endaweni enokuduma kwezulu"}]},{"code":1279,"day":"Patchy light snow in area with thunder","night":"Patchy light snow in area with thunder","icon":392,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"ثلوج خفيفة متفاوتة في المنطقة مع رعد","night_text":"ثلوج خفيفة متفاوتة في المنطقة مع رعد"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"এলাকায় বজ্রবিদ্যুত সহ অনিয়মিত হাল্কা তুষারপাত","night_text":"এলাকায় বজ্রবিদ্যুত সহ অনিয়মিত হাল্কা তুষারপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Слаби снеговалежи на отделни места в области с гръмотевици","night_text":"Слаби снеговалежи на отделни места в области с гръмотевици"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"雷区有零星小雪","night_text":"雷区有零星小雪"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"雷區有片狀小雪","night_text":"雷區有片狀小雪"},{"lang_name":"Czech","lang_iso":"cs","day_text":"V oblasti bouřky místy slabé sněžení","night_text":"V oblasti bouřky místy slabé sněžení"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Plaatselijke lichte sneeuw in gebied met onweer","night_text":"Plaatselijke lichte sneeuw in gebied met onweer"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Paikoittainen kevyt lumisade ukkosalueella","night_text":"Paikoittainen kevyt lumisade ukkosalueella"},{"lang_name":"French","lang_iso":"fr","day_text":"Légère neige éparse avec tonnerre par endroit","night_text":"Légère neige éparse avec tonnerre par endroit"},{"lang_name":"German","lang_iso":"de","day_text":"stellenweise leichter Schneefall mit Gewitter","night_text":"stellenweise leichter Schneefall mit Gewitter"},{"lang_name":"Greek","lang_iso":"el","day_text":"Κατά τόπους ασθενής χιονόπτωση στην περιοχή με βροντές","night_text":"Κατά τόπους ασθενής χιονόπτωση στην περιοχή με βροντές"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"अलग-अलग इलाकों में गरज के साथ हल्की बर्फबारी","night_text":"अलग-अलग इलाकों में गरज के साथ हल्की बर्फबारी"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"A területen foltokban enyhe havazás mennydörgéssel, villámlással","night_text":"A területen foltokban enyhe havazás mennydörgéssel, villámlással"},{"lang_name":"Italian","lang_iso":"it","day_text":"Neve debole a tratti in zona e tuoni","night_text":"Neve debole a tratti in zona e tuoni"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"雷を伴う軽い雪","night_text":"雷を伴う軽い雪"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan salju ora deres ora rata nganggo gludhuk ing area","night_text":"Udan salju ora deres ora rata nganggo gludhuk ing area"},{"lang_name":"Korean","lang_iso":"ko","day_text":"천둥을 동반한 지역 곳곳의 가벼운 눈","night_text":"천둥을 동반한 지역 곳곳의 가벼운 눈"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"雷区有零星小雪","night_text":"雷区有零星小雪"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"क्षेत्रात मेघगर्जनेसहित अनियमित हलकासा बर्फ","night_text":"क्षेत्रात मेघगर्जनेसहित अनियमित हलकासा बर्फ"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Miejscowe, lekkie opady śniegu z grzmieniem w okolicy","night_text":"Miejscowe, lekkie opady śniegu z grzmieniem w okolicy"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Neve fraca irregular com trovoada","night_text":"Neve fraca irregular com trovoada"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਗਰਜ ਵਾਲੇ ਇਲਾਕੇ ਵਿੱਚ ਕਿਤੇ-ਕਿਤੇ ਹਲਕੀ ਬਰਫ","night_text":"ਗਰਜ ਵਾਲੇ ਇਲਾਕੇ ਵਿੱਚ ਕਿਤੇ-ਕਿਤੇ ਹਲਕੀ ਬਰਫ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ninsori în cantităţi mici pe porțiuni însoțite de tunete","night_text":"Ninsori în cantităţi mici pe porțiuni însoțite de tunete"},{"lang_name":"Russian","lang_iso":"ru","day_text":"В отдельных районах местами небольшой снег с грозой","night_text":"В отдельных районах местами небольшой снег с грозой"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Mestimično slab sneg uz grmljavinu","night_text":"Mestimično slab sneg uz grmljavinu"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"ප්‍රදේශයේ ගිගුරුම් සහිත තැනින් තැන සැහැල්ලු හිම","night_text":"ප්‍රදේශයේ ගිගුරුම් සහිත තැනින් තැන සැහැල්ලු හිම"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"V oblasti búrky miestami slabé sneženie","night_text":"V oblasti búrky miestami slabé sneženie"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Nieve moderada con tormenta en la región","night_text":"Nieve moderada con tormenta en la región"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Områden med lätt snöfall i område med åska","night_text":"Områden med lätt snöfall i område med åska"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"பகுதியில் இடியுடன் சீரில்லாத இலேசான பனி","night_text":"பகுதியில் இடியுடன் சீரில்லாத இலேசான பனி"},{"lang_name":"Telugu","lang_iso":"te","day_text":"ఉరుములతో కూడిన చెదురుమదురుగా తేలికపాటి మంచు","night_text":"ఉరుములతో కూడిన చెదురుమదురుగా తేలికపాటి మంచు"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Bölgesel gök gürültülü düzensiz hafif kar yağışlı","night_text":"Bölgesel gök gürültülü düzensiz hafif kar yağışlı"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Місцями невеликий сніг інколи з грозою","night_text":"Місцями невеликий сніг інколи з грозою"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"علاقے میں گھن گرج کے ساتھ ہلکی برفباری","night_text":"علاقے میں گھن گرج کے ساتھ ہلکی برفباری"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Tuyết nhẹ lả tả trong khu vực có sấm sét","night_text":"Tuyết nhẹ lả tả trong khu vực có sấm sét"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"悠雷咯地方撅部肖削","night_text":"悠雷咯地方撅部肖削"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"有雷的地方有零星小雪","night_text":"有雷的地方有零星小雪"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"雷區有零星小雪","night_text":"雷區有零星小雪"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Isichotho esingenamandla lapha nalapha endaweni enokuduma kwezulu","night_text":"Isichotho esingenamandla lapha nalapha endaweni enokuduma kwezulu"}]},{"code":1282,"day":"Moderate or heavy snow in area with thunder","night":"Moderate or heavy snow in area with thunder","icon":395,"languages":[{"lang_name":"Arabic","lang_iso":"ar","day_text":"ثلوج معتدلة أو شديدة في المنطقة مع رعد","night_text":"ثلوج معتدلة أو شديدة في المنطقة مع رعد"},{"lang_name":"Bengali","lang_iso":"bn","day_text":"এলাকায় বজ্রবিদ্যুত সহ মাঝারি ও ভারী তুষারপাত","night_text":"এলাকায় বজ্রবিদ্যুত সহ মাঝারি ও ভারী তুষারপাত"},{"lang_name":"Bulgarian","lang_iso":"bg","day_text":"Умерени или силни снеговалежи в области с гръмотевици","night_text":"Умерени или силни снеговалежи в области с гръмотевици"},{"lang_name":"Chinese Simplified","lang_iso":"zh","day_text":"雷区有中或大雪","night_text":"雷区有中或大雪"},{"lang_name":"Chinese Traditional","lang_iso":"zh_tw","day_text":"雷區有中或大雪","night_text":"雷區有中或大雪"},{"lang_name":"Czech","lang_iso":"cs","day_text":"V oblasti bouřky mírné nebo silné sněžení","night_text":"V oblasti bouřky mírné nebo silné sněžení"},{"lang_name":"Dutch","lang_iso":"nl","day_text":"Normale of zware sneeuw in gebied met onweer","night_text":"Normale of zware sneeuw in gebied met onweer"},{"lang_name":"Finnish","lang_iso":"fi","day_text":"Keskivoimakas tai rankka lumisade ukkosalueella","night_text":"Keskivoimakas tai rankka lumisade ukkosalueella"},{"lang_name":"French","lang_iso":"fr","day_text":"Neige éparse modérée à forte avec tonnerre par endroit","night_text":"Neige éparse modérée à forte avec tonnerre par endroit"},{"lang_name":"German","lang_iso":"de","day_text":"mäßiger bis starker Schneefall mit Gewitter","night_text":"mäßiger bis starker Schneefall mit Gewitter"},{"lang_name":"Greek","lang_iso":"el","day_text":"Μέτρια ή ισχυρή χιονόπτωση στην περιοχή με βροντές","night_text":"Μέτρια ή ισχυρή χιονόπτωση στην περιοχή με βροντές"},{"lang_name":"Hindi","lang_iso":"hi","day_text":"अलग-अलग इलाकों में गरज के साथ सामान्य या जोरदार बर्फबारी","night_text":"अलग-अलग इलाकों में गरज के साथ सामान्य या जोरदार बर्फबारी"},{"lang_name":"Hungarian","lang_iso":"hu","day_text":"Mérsékelt, vagy heves hózápor mennydörgéssel, villámlással","night_text":"Mérsékelt, vagy heves hózápor mennydörgéssel, villámlással"},{"lang_name":"Italian","lang_iso":"it","day_text":"Neve moderata o forte in zona e tuoni","night_text":"Neve moderata o forte in zona e tuoni"},{"lang_name":"Japanese","lang_iso":"ja","day_text":"雷を伴う穏やかなまたは強い雪","night_text":"雷を伴う穏やかなまたは強い雪"},{"lang_name":"Javanese","lang_iso":"jv","day_text":"Udan salju rada deres utawa deres ora rata nganggo gludhuk ing area","night_text":"Udan salju rada deres utawa deres ora rata nganggo gludhuk ing area"},{"lang_name":"Korean","lang_iso":"ko","day_text":"천둥을 동반한 보통 또는 눈","night_text":"천둥을 동반한 보통 또는 눈"},{"lang_name":"Mandarin","lang_iso":"zh_cmn","day_text":"雷区有中或大雪","night_text":"雷区有中或大雪"},{"lang_name":"Marathi","lang_iso":"mr","day_text":"क्षेत्रात मेघगर्जनेसहित मध्यम किंवा जोरदार बर्फ","night_text":"क्षेत्रात मेघगर्जनेसहित मध्यम किंवा जोरदार बर्फ"},{"lang_name":"Polish","lang_iso":"pl","day_text":"Średnie lub ciężkie opady śniegu z grzmieniem w okolicy","night_text":"Średnie lub ciężkie opady śniegu z grzmieniem w okolicy"},{"lang_name":"Portuguese","lang_iso":"pt","day_text":"Neve moderada ou forte com trovoada","night_text":"Neve moderada ou forte com trovoada"},{"lang_name":"Punjabi","lang_iso":"pa","day_text":"ਗਰਜ ਵਾਲੇ ਇਲਾਕੇ ਵਿੱਚ ਦਰਮਿਆਨੀ ਜਾਂ ਤੇਜ਼ ਬਰਫ","night_text":"ਗਰਜ ਵਾਲੇ ਇਲਾਕੇ ਵਿੱਚ ਦਰਮਿਆਨੀ ਜਾਂ ਤੇਜ਼ ਬਰਫ"},{"lang_name":"Romanian","lang_iso":"ro","day_text":"Ninsori în cantităţi mari şi moderate pe porțiuni însoțite de tunete","night_text":"Ninsori în cantităţi mari şi moderate pe porțiuni însoțite de tunete"},{"lang_name":"Russian","lang_iso":"ru","day_text":"В отдельных районах умеренный или сильный снег с грозой","night_text":"В отдельных районах умеренный или сильный снег с грозой"},{"lang_name":"Serbian","lang_iso":"sr","day_text":"Umerene ili jake snežne padavine uz grmljavinu","night_text":"Umerene ili jake snežne padavine uz grmljavinu"},{"lang_name":"Sinhalese","lang_iso":"si","day_text":"ප්‍රදේශයේ ගිගුරුම් සහිත මධ්‍යස්ථ හෝ දැඩි හිම","night_text":"ප්‍රදේශයේ ගිගුරුම් සහිත මධ්‍යස්ථ හෝ දැඩි හිම"},{"lang_name":"Slovak","lang_iso":"sk","day_text":"V oblasti búrky mierne alebo silné sneženie","night_text":"V oblasti búrky mierne alebo silné sneženie"},{"lang_name":"Spanish","lang_iso":"es","day_text":"Nieve moderada o fuertes nevadas con tormenta en la región","night_text":"Nieve moderada o fuertes nevadas con tormenta en la región"},{"lang_name":"Swedish","lang_iso":"sv","day_text":"Måttligt eller tungt snöfall i område med åska","night_text":"Måttligt eller tungt snöfall i område med åska"},{"lang_name":"Tamil","lang_iso":"ta","day_text":"பகுதியில் இடியுடன் மிதமான அல்லது கனமான பனி","night_text":"பகுதியில் இடியுடன் மிதமான அல்லது கனமான பனி"},{"lang_name":"Telugu","lang_iso":"te","day_text":"ఉరుములతో మధ్యస్థం నుంచి తీవ్రంగా హిమపాతం","night_text":"ఉరుములతో మధ్యస్థం నుంచి తీవ్రంగా హిమపాతం"},{"lang_name":"Turkish","lang_iso":"tr","day_text":"Bölgesel gök gürültülü orta kuvvetli veya yoğun kar yağışlı","night_text":"Bölgesel gök gürültülü orta kuvvetli veya yoğun kar yağışlı"},{"lang_name":"Ukrainian","lang_iso":"uk","day_text":"Помірний або сильний сніг місцями з грозою","night_text":"Помірний або сильний сніг місцями з грозою"},{"lang_name":"Urdu","lang_iso":"ur","day_text":"علاقے میں گھن گرج کے ساتھ معتدل یا شدید برفباری","night_text":"علاقے میں گھن گرج کے ساتھ معتدل یا شدید برفباری"},{"lang_name":"Vietnamese","lang_iso":"vi","day_text":"Tuyết vừa hoặc nặng hạt trong khu vực có sấm sét","night_text":"Tuyết vừa hoặc nặng hạt trong khu vực có sấm sét"},{"lang_name":"Wu (Shanghainese)","lang_iso":"zh_wuu","day_text":"悠雷咯地方中到斗落削","night_text":"悠雷咯地方中到斗落削"},{"lang_name":"Xiang","lang_iso":"zh_hsn","day_text":"有雷的地方有中到大雪","night_text":"有雷的地方有中到大雪"},{"lang_name":"Yue (Cantonese)","lang_iso":"zh_yue","day_text":"雷區有中或大雪","night_text":"雷區有中或大雪"},{"lang_name":"Zulu","lang_iso":"zu","day_text":"Isichotho esingatheni noma esinamandla endaweni enokuduma kwezulu","night_text":"Isichotho esingatheni noma esinamandla endaweni enokuduma kwezulu"}]}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(19513)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.b010a48b3da41cd1018d.js.map