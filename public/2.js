(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/js/views/HostView.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/js/views/HostView.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Question__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/classes/Question */ "./src/classes/Question.js");
/* harmony import */ var _classes_Question__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_classes_Question__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AnswerInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AnswerInput */ "./src/frontend/js/components/AnswerInput.vue");
/* harmony import */ var _funcs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/funcs */ "./src/funcs.js");
/* harmony import */ var _funcs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_funcs__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AnswerInput: _components_AnswerInput__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      /**
       * @type {?Question}
       */
      currentQuestion: null,
      broadcastQuestion: null,
      answers: []
    };
  },
  created: function created() {
    var _this = this;

    this.$root.$options.socket.on('questionUpdated', function (data) {
      if (data) {
        _this.broadcastQuestion = new _classes_Question__WEBPACK_IMPORTED_MODULE_0___default.a(data);
      } else {
        _this.broadcastQuestion = null;
      }
    });
    this.$root.$options.socket.on('playerAnswered', function (data) {
      console.log('playerAnswered', data);

      _this.answers.push(data.answer);
    });
  },
  methods: {
    newQuestion: function newQuestion(type) {
      this.currentQuestion = new _classes_Question__WEBPACK_IMPORTED_MODULE_0___default.a({
        id: Object(_funcs__WEBPACK_IMPORTED_MODULE_2__["generateId"])(),
        type: type
      });
    },
    setCorrectAnswer: function setCorrectAnswer(answer) {
      this.currentQuestion.answer = answer;
      this.$root.$options.socket.emit('newQuestion', this.currentQuestion);
    },
    startQuestion: function startQuestion() {
      this.$root.$options.socket.emit('startQuestion', this.currentQuestion.id);
      this.answers = [];
    },
    endQuestion: function endQuestion() {
      this.$root.$options.socket.emit('endQuestion', this.currentQuestion.id);
    },
    clearQuestion: function clearQuestion() {
      this.$root.$options.socket.emit('clearQuestion');
      this.currentQuestion = null;
    },
    resetScores: function resetScores() {
      this.$root.$options.socket.emit('resetScores');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/js/views/HostView.vue?vue&type=style&index=0&lang=less&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/js/views/HostView.vue?vue&type=style&index=0&lang=less& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#new-question-btns {\n  padding: 10px;\n  text-align: center;\n  margin: auto;\n}\n#new-question-btns .btn {\n  margin: 5px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/js/views/HostView.vue?vue&type=template&id=2de6e8f0&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/js/views/HostView.vue?vue&type=template&id=2de6e8f0& ***!
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
  return _c(
    "div",
    { attrs: { id: "host" } },
    [
      !_vm.broadcastQuestion
        ? [
            !_vm.currentQuestion
              ? _c("div", { attrs: { id: "new-question-btns" } }, [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-primary btn-lg",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.newQuestion("letters")
                        }
                      }
                    },
                    [_vm._v("New Letters Question")]
                  ),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-sm btn-danger",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.resetScores($event)
                        }
                      }
                    },
                    [_vm._v("Reset Scores")]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.currentQuestion && !_vm.currentQuestion.answer
              ? _c("AnswerInput", {
                  attrs: {
                    title: "Provide the correct answer.",
                    question: _vm.currentQuestion,
                    active: true
                  },
                  on: { choice: _vm.setCorrectAnswer }
                })
              : _vm._e()
          ]
        : _vm.currentQuestion
        ? _c("div", { staticClass: "text-center" }, [
            !_vm.broadcastQuestion.started
              ? _c("h3", [_vm._v("\n            Question Ready\n        ")])
              : !_vm.broadcastQuestion.ended
              ? _c("h3", [_vm._v("\n            Question Started\n        ")])
              : _c("h3", [_vm._v("\n            Question Ended\n        ")]),
            _vm._v(" "),
            _c("p", [
              _c("strong", [_vm._v("Correct Answer:")]),
              _vm._v(" " + _vm._s(_vm.currentQuestion.answer) + "\n        ")
            ]),
            _vm._v(" "),
            !_vm.broadcastQuestion.started
              ? _c("div", [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-success btn-lg",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.startQuestion($event)
                        }
                      }
                    },
                    [_vm._v("Start Question")]
                  )
                ])
              : !_vm.broadcastQuestion.ended
              ? _c("div", [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-danger btn-lg",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.endQuestion($event)
                        }
                      }
                    },
                    [_vm._v("End Question")]
                  )
                ])
              : _c("div", [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-warning btn-lg",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.clearQuestion($event)
                        }
                      }
                    },
                    [_vm._v("Next Question")]
                  )
                ]),
            _vm._v(" "),
            _vm.broadcastQuestion.started
              ? _c("div", [
                  _c("h3", [_vm._v("Answers")]),
                  _vm._v(" "),
                  _c(
                    "table",
                    { staticClass: "table table-striped" },
                    _vm._l(_vm.answers, function(answer) {
                      return _c("tr", { key: answer.player.id }, [
                        _c("td", { staticClass: "text-left" }, [
                          _vm._v(_vm._s(answer.player.name))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [
                          _vm._v(
                            "\n                        " +
                              _vm._s(answer.answer) +
                              "\n                        "
                          ),
                          answer.correct
                            ? _c(
                                "span",
                                { staticClass: "label label-success" },
                                [_vm._v("Correct")]
                              )
                            : _c(
                                "span",
                                { staticClass: "label label-danger" },
                                [_vm._v("Incorrect")]
                              )
                        ])
                      ])
                    }),
                    0
                  )
                ])
              : _vm._e()
          ])
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/js/views/HostView.vue?vue&type=style&index=0&lang=less&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/js/views/HostView.vue?vue&type=style&index=0&lang=less& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./HostView.vue?vue&type=style&index=0&lang=less& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/js/views/HostView.vue?vue&type=style&index=0&lang=less&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3a37b762", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/frontend/js/views/HostView.vue":
/*!********************************************!*\
  !*** ./src/frontend/js/views/HostView.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HostView_vue_vue_type_template_id_2de6e8f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HostView.vue?vue&type=template&id=2de6e8f0& */ "./src/frontend/js/views/HostView.vue?vue&type=template&id=2de6e8f0&");
/* harmony import */ var _HostView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HostView.vue?vue&type=script&lang=js& */ "./src/frontend/js/views/HostView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HostView_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HostView.vue?vue&type=style&index=0&lang=less& */ "./src/frontend/js/views/HostView.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HostView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HostView_vue_vue_type_template_id_2de6e8f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HostView_vue_vue_type_template_id_2de6e8f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/frontend/js/views/HostView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/frontend/js/views/HostView.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/frontend/js/views/HostView.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HostView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--1!../../../../node_modules/vue-loader/lib??vue-loader-options!./HostView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/js/views/HostView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HostView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/frontend/js/views/HostView.vue?vue&type=style&index=0&lang=less&":
/*!******************************************************************************!*\
  !*** ./src/frontend/js/views/HostView.vue?vue&type=style&index=0&lang=less& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HostView_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./HostView.vue?vue&type=style&index=0&lang=less& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/frontend/js/views/HostView.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HostView_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HostView_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HostView_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HostView_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HostView_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/frontend/js/views/HostView.vue?vue&type=template&id=2de6e8f0&":
/*!***************************************************************************!*\
  !*** ./src/frontend/js/views/HostView.vue?vue&type=template&id=2de6e8f0& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HostView_vue_vue_type_template_id_2de6e8f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./HostView.vue?vue&type=template&id=2de6e8f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/js/views/HostView.vue?vue&type=template&id=2de6e8f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HostView_vue_vue_type_template_id_2de6e8f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HostView_vue_vue_type_template_id_2de6e8f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=2.js.map