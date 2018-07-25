(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/front/hoc/withEnterAnimation/index.js":
/*!***************************************************!*\
  !*** ./src/front/hoc/withEnterAnimation/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withEnterAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withEnterAnimation */ "./src/front/hoc/withEnterAnimation/withEnterAnimation.js");


/* harmony default export */ __webpack_exports__["default"] = (_withEnterAnimation__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/front/hoc/withEnterAnimation/styled/AnimatedDiv.js":
/*!****************************************************************!*\
  !*** ./src/front/hoc/withEnterAnimation/styled/AnimatedDiv.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");
var _templateObject = _taggedTemplateLiteral(['\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n'], ['\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n      opacity: 0;\n      animation-name: ', ';\n      animation-timing-function: ease-in;\n      animation-duration: 0.7s;\n      animation-delay: 0s;\n      animation-fill-mode: both;\n    '], ['\n      opacity: 0;\n      animation-name: ', ';\n      animation-timing-function: ease-in;\n      animation-duration: 0.7s;\n      animation-delay: 0s;\n      animation-fill-mode: both;\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// @region imports

// #endregion

var fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject);

var AnimatedDiv = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2, function (_ref) {
  var viewEnter = _ref.viewEnter;
  return viewEnter && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3, fadeIn);
});

/* harmony default export */ __webpack_exports__["default"] = (AnimatedDiv);

/***/ }),

/***/ "./src/front/hoc/withEnterAnimation/withEnterAnimation.js":
/*!****************************************************************!*\
  !*** ./src/front/hoc/withEnterAnimation/withEnterAnimation.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose/wrapDisplayName */ "./node_modules/recompose/wrapDisplayName.js");
/* harmony import */ var recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_AnimatedDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled/AnimatedDiv */ "./src/front/hoc/withEnterAnimation/styled/AnimatedDiv.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports



// #endregion

// #region flow types

// #endregion

function withEnterAnimation() {
  return function (BaseComponent) {
    var WithEnterAnimation = function (_Component) {
      _inherits(WithEnterAnimation, _Component);

      function WithEnterAnimation() {
        _classCallCheck(this, WithEnterAnimation);

        return _possibleConstructorReturn(this, (WithEnterAnimation.__proto__ || Object.getPrototypeOf(WithEnterAnimation)).apply(this, arguments));
      }

      _createClass(WithEnterAnimation, [{
        key: 'render',
        value: function render() {
          var passProps = _objectWithoutProperties(this.props, []);

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _styled_AnimatedDiv__WEBPACK_IMPORTED_MODULE_2__["default"],
            { viewEnter: true },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseComponent, passProps)
          );
        }
      }]);

      return WithEnterAnimation;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    /* eslint-disable no-process-env */


    if (true) {
      // HOC would obfuscate component name, this trick is helpful for dev (we don't care in production)
      WithEnterAnimation.displayName = recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1___default()(BaseComponent, 'withEnterAnimation');
    }
    /* eslint-enable no-process-env */

    return WithEnterAnimation;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (withEnterAnimation);

/***/ }),

/***/ "./src/front/pages/login/Login.js":
/*!****************************************!*\
  !*** ./src/front/pages/login/Login.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth */ "./src/front/services/auth/index.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports




// #endregion

// #region flow types

// #endregion

var Login = function (_PureComponent) {
  _inherits(Login, _PureComponent);

  function Login() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      email: '',
      password: ''
    }, _this.handlesOnEmailChange = function (event) {
      if (event) {
        event.preventDefault();
        // should add some validator before setState in real use cases
        _this.setState({ email: event.target.value.trim() });
      }
    }, _this.handlesOnPasswordChange = function (event) {
      if (event) {
        event.preventDefault();
        // should add some validator before setState in real use cases
        _this.setState({ password: event.target.value.trim() });
      }
    }, _this.handlesOnLogin = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        var _this$props, history, logUserIfNeeded, _this$state, email, password, userLogin, response, _response$payload$dat, token, user;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (event) {
                  event.preventDefault();
                }

                _this$props = _this.props, history = _this$props.history, logUserIfNeeded = _this$props.logUserIfNeeded;
                _this$state = _this.state, email = _this$state.email, password = _this$state.password;
                userLogin = {
                  login: email,
                  password: password
                };
                _context.prev = 4;
                _context.next = 7;
                return logUserIfNeeded(userLogin);

              case 7:
                response = _context.sent;
                _response$payload$dat = response.payload.data, token = _response$payload$dat.token, user = _response$payload$dat.user;


                _services_auth__WEBPACK_IMPORTED_MODULE_3__["default"].setToken(token);
                _services_auth__WEBPACK_IMPORTED_MODULE_3__["default"].setUserInfo(user);

                history.push({ pathname: '/' }); // back to Home
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](4);

                /* eslint-disable no-console */
                console.log('login went wrong..., error: ', _context.t0);
                /* eslint-enable no-console */

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 14]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.goHome = function (event) {
      if (event) {
        event.preventDefault();
      }

      var history = _this.props.history;


      history.push({ pathname: '/' });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'componentDidMount',


    // #region lifecycle methods
    value: function componentDidMount() {
      var disconnectUser = this.props.disconnectUser;


      disconnectUser(); // diconnect user: remove token and user info
    }
  }, {
    key: 'render',

    // #endregion
    value: function render() {
      var _state = this.state,
          email = _state.email,
          password = _state.password;
      var isLogging = this.props.isLogging;


      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'content' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"],
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
            { md: 4, mdOffset: 4, xs: 10, xsOffset: 1 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'form',
              { className: 'form-horizontal', noValidate: true },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'fieldset',
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'legend',
                  null,
                  'Login'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  { className: 'form-group' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'label',
                    {
                      htmlFor: 'inputEmail',
                      className: 'col-lg-2 control-label'
                    },
                    'Email'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'col-lg-10' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', {
                      type: 'text',
                      className: 'form-control',
                      id: 'inputEmail',
                      placeholder: 'Email',
                      value: email,
                      onChange: this.handlesOnEmailChange
                    })
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  { className: 'form-group' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'label',
                    {
                      htmlFor: 'inputPassword',
                      className: 'col-lg-2 control-label'
                    },
                    'Password'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'col-lg-10' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', {
                      type: 'password',
                      className: 'form-control',
                      id: 'inputPassword',
                      placeholder: 'Password',
                      value: password,
                      onChange: this.handlesOnPasswordChange
                    })
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  { className: 'form-group' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
                    { lg: 10, lgOffset: 2 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"],
                      {
                        className: 'login-button btn-block',
                        bsStyle: 'primary',
                        disabled: isLogging,
                        onClick: this.handlesOnLogin
                      },
                      isLogging ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'span',
                        null,
                        'login in... \xA0',
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-spinner fa-pulse fa-fw' })
                      ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'span',
                        null,
                        'Login'
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"],
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"],
            { md: 4, mdOffset: 4, xs: 10, xsOffset: 1 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"],
              { bsStyle: 'primary', onClick: this.goHome },
              'back to home'
            )
          )
        )
      );
    }
    // #endregion

    // #region form inputs change callbacks

    // #endregion

    // #region on login button click callback

    // #endregion

    // #region on go back home button click callback

  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

Login.defaultProps = {
  isFetching: false,
  isLogging: false
};


/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/front/pages/login/index.js":
/*!****************************************!*\
  !*** ./src/front/pages/login/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_modules_userAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/modules/userAuth */ "./src/front/redux/modules/userAuth/index.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Login */ "./src/front/pages/login/Login.js");
/* harmony import */ var _hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hoc/withEnterAnimation */ "./src/front/hoc/withEnterAnimation/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// #region imports






// #endregion

// #region redux map state and dispatch to props
var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.userAuth.isAuthenticated,
    isFetching: state.userAuth.isFetching,
    isLogging: state.userAuth.isLogging
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])(_extends({}, _redux_modules_userAuth__WEBPACK_IMPORTED_MODULE_3__), dispatch);
};
// #endregion

/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_2___default()(Object(_hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps))(_Login__WEBPACK_IMPORTED_MODULE_4__["default"]));

/***/ })

}]);
//# sourceMappingURL=2.js.map