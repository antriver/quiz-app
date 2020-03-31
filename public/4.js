(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/js/views/HomeView.vue?vue&type=style&index=0&lang=less&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/js/views/HomeView.vue?vue&type=style&index=0&lang=less& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (max-width: 767px) {\n}@media (min-width: 768px) {\n}@media (min-width: 768px) {\n}@media (max-width: 767px) {\n}@media (min-width: 768px) {\n}@media (min-width: 768px) {\n}@media (max-width: 767px) {\n}@media (max-width: 767px) {\n}#home {\n  background: #fff;\n  min-height: 100vh;\n}\n#home section p,\n#home section li {\n  line-height: 1.5;\n}\n#home section ul {\n  margin-top: 20px;\n}\n#home section li {\n  margin: 5px 0;\n}\n#home section .container {\n  padding: 50px 0;\n}\n#home section:nth-child(odd) {\n  background: #f6f7eb;\n}\n#home-hero {\n  display: flex;\n  align-items: stretch;\n  justify-content: stretch;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n}\n#home-hero:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ff6b21+32,f7b733+100 */\n  background: #ff6b21;\n  /* Old browsers */\n  background: -moz-linear-gradient(-45deg, #ff6b21 32%, #f7b733 100%);\n  /* FF3.6-15 */\n  background: -webkit-linear-gradient(-45deg, #ff6b21 32%, #f7b733 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(135deg, #ff6b21 32%, #f7b733 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff6b21', endColorstr='#f7b733', GradientType=1);\n  /* IE6-9 fallback on horizontal gradient */\n  z-index: 0;\n}\n#home-hero > .container {\n  z-index: 2;\n  margin: auto;\n  position: relative;\n  padding: 0;\n  display: flex;\n  align-items: stretch;\n  justify-content: stretch;\n  text-align: center;\n  min-height: 70vh;\n}\n#home-hero #title-col {\n  flex-basis: 40%;\n  margin-right: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 50px;\n}\n#home-hero #screenshot-col {\n  align-self: flex-end;\n}\n#home-hero #screenshot-col > img {\n  margin-top: 50px;\n}\n#home-hero #screenshot-col .btn {\n  margin-top: 10px;\n  padding: 15px 30px;\n  font-size: 20px;\n}\n#home-hero .col-md-7 {\n  height: 100%;\n}\n#home-hero .row > div {\n  text-align: center;\n}\n#home-hero #logo {\n  width: 400px;\n  max-width: 100%;\n}\n#home-hero #screenshots {\n  max-width: 500px;\n}\n#home-hero p {\n  margin: 15px 0;\n}\n#features {\n  display: grid;\n  text-align: center;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 30px;\n}\n/*@media (min-width: @screen-lg) {\n    #home-hero {\n        &:after {\n            width: 200%;\n            height: 200%;\n            bottom: 0;\n            left: 150px;\n            transform: rotate(-7deg);\n            border-radius: 100px;\n            transform-origin: bottom left;\n        }\n    }\n}*/\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/js/views/HomeView.vue?vue&type=template&id=77a87db2&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/js/views/HomeView.vue?vue&type=template&id=77a87db2& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "home" } }, [
    _c("div", { attrs: { id: "home-hero" } }, [
      _c("div", { staticClass: "container" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { attrs: { id: "screenshot-col" } }, [
          _c("div", [
            _c(
              "p",
              [
                _vm._v(
                  "\n                        Ready to play?..\n                        "
                ),
                _c("br"),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-primary btn-lg pulse",
                    attrs: { to: "/player" }
                  },
                  [
                    _vm._v(
                      "\n                            Join a Game\n                        "
                    )
                  ]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("img", {
            attrs: { id: "screenshots", src: "/assets/img/screenshots.png" }
          })
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _c("section", [
      _c("div", { staticClass: "container" }, [
        _c("h2", [_vm._v("How To Host")]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-8" }, [
            _c(
              "div",
              { staticClass: "text-center", staticStyle: { margin: "30px" } },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-primary btn-lg",
                    attrs: { to: "/host" }
                  },
                  [
                    _vm._v(
                      "\n                            Host A Game\n                        "
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(3)
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" })
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "title-col" } }, [
      _c("div", [
        _c("img", { attrs: { id: "logo", src: "/assets/img/questicals.svg" } }),
        _vm._v(" "),
        _c("h2", [_vm._v("Host a pub quiz remotely for free.")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", [
      _c("div", { staticClass: "container" }, [
        _c("h2", [_vm._v("How To Play")]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v(
              "Get together with your friends get together on Skype, Google Hangots, Zoom, or another video\n                    chat service.\n                "
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "Your quizmaster / host will start a game and tell you a password to join."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "Your hosts reads questions aloud and sends the question to your device."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v("Answer by pressing the first letter of the answer.")
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "There are bonus points for being the first person to get the answer correct!"
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", [
      _c("div", { staticClass: "container" }, [
        _c("div", { attrs: { id: "features" } }, [
          _c("div", [
            _c("i", { staticClass: "fas fa-text fa-4x" }),
            _vm._v(" "),
            _c("h3", [_vm._v("Letter Questions")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "Players answer with the first letter of the answer for 1 point."
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", [
            _c("i", { staticClass: "fas fa-sort-numeric-up fa-4x" }),
            _vm._v(" "),
            _c("h3", [_vm._v("Number Questions")]),
            _vm._v(" "),
            _c("p", [
              _vm._v("Players enter the answer on a number pad for 2 points.")
            ])
          ]),
          _vm._v(" "),
          _c("div", [
            _c("i", { staticClass: "fas fa-check-square fa-4x" }),
            _vm._v(" "),
            _c("h3", [_vm._v("Multiple Choice")]),
            _vm._v(" "),
            _c("p", [_vm._v("Answer from A, B, C, or D for 1 point.")])
          ]),
          _vm._v(" "),
          _c("div", [
            _c("i", { staticClass: "fas fa-tachometer-alt-fastest fa-4x" }),
            _vm._v(" "),
            _c("h3", [_vm._v("Fastest Answer Bonus")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "The first player to get the correct answer gets 1 bonus point."
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", [
            _c("i", { staticClass: "fas fa-people-arrows fa-4x" }),
            _vm._v(" "),
            _c("h3", [_vm._v("Closest Answer")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "If nobody correctly answers a number question the players that guessed closest get 1\n                        point."
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", [
            _c("i", { staticClass: "fas fa-user-cowboy fa-4x" }),
            _vm._v(" "),
            _c("h3", [_vm._v("Unlimited Players")]),
            _vm._v(" "),
            _c("p", [
              _vm._v("There's no limit to how many players can be in a game.")
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v("Start a game with the "),
        _c("strong", [_vm._v("Host A Game")]),
        _vm._v(" button above.")
      ]),
      _vm._v(" "),
      _c("li", [_vm._v("As quizmaster you are in control.")]),
      _vm._v(" "),
      _c("li", [_vm._v("You can see the current scores on the first page.")]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "Start a new question by selecting letters, numbers, or multiple choice."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "Enter the correct answer so users can earn points if they get it right."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("When you're ready for players to stat answering press "),
        _c("strong", [_vm._v("Start Answering")]),
        _vm._v(".")
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("When time is up press "),
        _c("strong", [_vm._v("Stop Answering")]),
        _vm._v(
          ". You'll see who answered and who was correct. Bonus points are awarded for the fastest player, and for the closest answer in a numbers question."
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/js/views/HomeView.vue?vue&type=style&index=0&lang=less&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/js/views/HomeView.vue?vue&type=style&index=0&lang=less& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./HomeView.vue?vue&type=style&index=0&lang=less& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/js/views/HomeView.vue?vue&type=style&index=0&lang=less&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("48fb7702", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/frontend/js/views/HomeView.vue":
/*!********************************************!*\
  !*** ./src/frontend/js/views/HomeView.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomeView_vue_vue_type_template_id_77a87db2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeView.vue?vue&type=template&id=77a87db2& */ "./src/frontend/js/views/HomeView.vue?vue&type=template&id=77a87db2&");
/* harmony import */ var _HomeView_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeView.vue?vue&type=style&index=0&lang=less& */ "./src/frontend/js/views/HomeView.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}



/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _HomeView_vue_vue_type_template_id_77a87db2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomeView_vue_vue_type_template_id_77a87db2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/frontend/js/views/HomeView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/frontend/js/views/HomeView.vue?vue&type=style&index=0&lang=less&":
/*!******************************************************************************!*\
  !*** ./src/frontend/js/views/HomeView.vue?vue&type=style&index=0&lang=less& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeView_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./HomeView.vue?vue&type=style&index=0&lang=less& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/js/views/HomeView.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeView_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeView_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeView_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeView_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeView_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/frontend/js/views/HomeView.vue?vue&type=template&id=77a87db2&":
/*!***************************************************************************!*\
  !*** ./src/frontend/js/views/HomeView.vue?vue&type=template&id=77a87db2& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeView_vue_vue_type_template_id_77a87db2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./HomeView.vue?vue&type=template&id=77a87db2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/js/views/HomeView.vue?vue&type=template&id=77a87db2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeView_vue_vue_type_template_id_77a87db2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeView_vue_vue_type_template_id_77a87db2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=4.js.map