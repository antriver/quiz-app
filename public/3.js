(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/js/components/Answers.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/js/components/Answers.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _classes_Answer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/classes/Answer */ "./src/classes/Answer.js");
/* harmony import */ var _classes_Answer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_classes_Answer__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: 'Answers',
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['room']), {
    answers: function answers() {
      var _this = this;

      if (!this.room || !this.room.currentQuestion) {
        return [];
      }

      var answers = Object.values(this.room.players).map(function (player) {
        if (_this.room.currentQuestion.answers.hasOwnProperty(player.id)) {
          return _this.room.currentQuestion.answers[player.id];
        }

        return new _classes_Answer__WEBPACK_IMPORTED_MODULE_1___default.a({
          player: player
        });
      });
      answers.sort(function (a, b) {
        if (a.answeredAt && b.answeredAt) {
          return a.answeredAt > b.answeredAt ? 1 : -1;
        } else if (a.answeredAt) {
          return -1;
        } else if (b.answeredAt) {
          return 1;
        }

        return a.player.name < b.player.name;
      });
      return answers;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/js/views/HostView.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/js/views/HostView.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Answers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Answers */ "./src/frontend/js/components/Answers.vue");
/* harmony import */ var _components_AnswerInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AnswerInput */ "./src/frontend/js/components/AnswerInput.vue");
/* harmony import */ var _classes_Question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/classes/Question */ "./src/classes/Question.js");
/* harmony import */ var _classes_Question__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_classes_Question__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _funcs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/funcs */ "./src/funcs.js");
/* harmony import */ var _funcs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_funcs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _frontend_components_Scores__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @frontend/components/Scores */ "./src/frontend/js/components/Scores.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    Scores: _frontend_components_Scores__WEBPACK_IMPORTED_MODULE_5__["default"],
    AnswerInput: _components_AnswerInput__WEBPACK_IMPORTED_MODULE_1__["default"],
    Answers: _components_Answers__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      /**
       * @type {?Question}
       */
      nextQuestion: null,
      isHost: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])(['room']), {
    roomQuestion: function roomQuestion() {
      return this.room ? this.room.currentQuestion : null;
    },
    players: function players() {
      var _this = this;

      // Return only currently connected users, or those that have answered.
      return Object.values(this.room.players).filter(function (p) {
        return p.active || _this.room.currentQuestion.answers.hasOwnProperty(p.id);
      });
    }
  }),
  created: function created() {
    var _this2 = this;

    // Tell the server this socket will be a host and should receive more info.
    // Hide the UI until we know this is done.
    this.$root.$options.socket.emit('becomeHost', {}, function () {
      _this2.isHost = true;
    });
  },
  methods: {
    newQuestion: function newQuestion(type) {
      this.nextQuestion = new _classes_Question__WEBPACK_IMPORTED_MODULE_2___default.a({
        id: Object(_funcs__WEBPACK_IMPORTED_MODULE_3__["generateId"])(),
        type: type
      });
    },
    setCorrectAnswer: function setCorrectAnswer(answer) {
      this.nextQuestion.answer = answer;
      this.$root.$options.socket.emit('newQuestion', this.nextQuestion);
    },
    startQuestion: function startQuestion() {
      this.$root.$options.socket.emit('startQuestion', this.roomQuestion.id);
    },
    endQuestion: function endQuestion() {
      this.$root.$options.socket.emit('endQuestion', this.roomQuestion.id);
    },
    clearQuestion: function clearQuestion() {
      this.$root.$options.socket.emit('clearQuestion');
      this.nextQuestion = null;
    },
    resetScores: function resetScores() {
      this.$root.$options.socket.emit('resetScores');
    },
    resetPlayers: function resetPlayers() {
      this.$root.$options.socket.emit('resetUsers');
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/js/components/Answers.vue?vue&type=template&id=6663e03e&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/js/components/Answers.vue?vue&type=template&id=6663e03e& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "answers" }, [
    _c("table", { staticClass: "table table-striped text-center" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.answers, function(answer) {
          return _c("tr", { key: answer.player.id }, [
            _c("td", [
              _vm._v(
                "\n                    " +
                  _vm._s(answer.player.name) +
                  "\n                    "
              ),
              !answer.player.active
                ? _c("span", { staticClass: "label label-default" }, [
                    _vm._v("Disconnected")
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                    " +
                  _vm._s(answer.answer) +
                  "\n                    "
              ),
              answer.correct
                ? _c("span", { staticClass: "label label-success" }, [
                    _vm._v("Correct")
                  ])
                : answer.answer
                ? _c("span", { staticClass: "label label-danger" }, [
                    _vm._v("Incorrect")
                  ])
                : _c("span", { staticClass: "label label-default" }, [
                    _vm._v("Unanswered")
                  ]),
              _vm._v(" "),
              answer.wasFirst
                ? _c("span", { staticClass: "label label-info" }, [
                    _vm._v("First")
                  ])
                : _vm._e()
            ])
          ])
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Player")]),
        _vm._v(" "),
        _c("th", [_vm._v("Answer")])
      ])
    ])
  }
]
render._withStripped = true



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
  return _vm.isHost
    ? _c(
        "div",
        { attrs: { id: "host" } },
        [
          _vm.roomQuestion
            ? _c("div", { staticClass: "text-center" }, [
                !_vm.roomQuestion.started
                  ? _c("h3", [_vm._v("\n            Question Ready\n        ")])
                  : !_vm.roomQuestion.ended
                  ? _c("h3", [
                      _vm._v("\n            Question Started\n        ")
                    ])
                  : _c("h3", [
                      _vm._v("\n            Question Ended\n        ")
                    ]),
                _vm._v(" "),
                _c("p", [
                  _c("strong", [_vm._v("Correct Answer:")]),
                  _vm._v(" " + _vm._s(_vm.roomQuestion.answer) + "\n        ")
                ]),
                _vm._v(" "),
                !_vm.roomQuestion.started
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
                        [_vm._v("Start Answering")]
                      )
                    ])
                  : !_vm.roomQuestion.ended
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
                        [_vm._v("Stop Answering")]
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
                _vm.roomQuestion.started
                  ? _c(
                      "div",
                      [
                        _c("h3", [_vm._v("Answers")]),
                        _vm._v(" "),
                        _c("Answers")
                      ],
                      1
                    )
                  : _vm._e()
              ])
            : _vm.nextQuestion
            ? [
                _c("AnswerInput", {
                  attrs: {
                    title: "Provide the correct answer.",
                    "question-type": _vm.nextQuestion.type,
                    question: _vm.nextQuestion,
                    active: true
                  },
                  on: { choice: _vm.setCorrectAnswer }
                })
              ]
            : _c(
                "div",
                { attrs: { id: "new-question-btns" } },
                [
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
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-primary btn-lg",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.newQuestion("multiple")
                        }
                      }
                    },
                    [_vm._v("New Multiple Choice Question")]
                  ),
                  _vm._v(" "),
                  _c("Scores"),
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
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-sm btn-danger",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.resetPlayers($event)
                        }
                      }
                    },
                    [_vm._v("Reset Players")]
                  )
                ],
                1
              )
        ],
        2
      )
    : _vm._e()
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

/***/ "./src/classes/Answer.js":
/*!*******************************!*\
  !*** ./src/classes/Answer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(/*! ../funcs */ "./src/funcs.js"),
    hydrate = _require.hydrate;

var Answer = function Answer(data) {
  _classCallCheck(this, Answer);

  /**
   * @type {Player}
   */
  this.player = null;
  /**
   * @type {Number}
   */

  this.questionId = null;
  /**
   * @type {string}
   */

  this.answer = '';
  /**
   * @type {boolean}
   */

  this.correct = false;
  /**
   * @type {boolean}
   */

  this.wasFirst = false;
  /**
   * @type {Date}
   */

  this.answeredAt = null;
  hydrate(this, data);

  if (this.answeredAt && !(this.answeredAt instanceof Date)) {
    this.answeredAt = new Date(this.answeredAt);
  }
};

module.exports = Answer;

/***/ }),

/***/ "./src/classes/Question.js":
/*!*********************************!*\
  !*** ./src/classes/Question.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(/*! ../funcs */ "./src/funcs.js"),
    hydrate = _require.hydrate;

var Question = /*#__PURE__*/function () {
  function Question() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Question);

    /**
     * @type {Number}
     */
    this.id = null;
    /**
     * @type {string}
     */

    this.type = '';
    /**
     * @type {string}
     */

    this.answer = '';
    /**
     * @type {boolean}
     */

    this.started = false;
    /**
     * @type {boolean}
     */

    this.ended = false;
    /**
     * @type {number}
     */

    this.points = 1;
    /**
     * @type {boolean}
     */

    this.evil = false;
    /**
     * @type {Object<Answer>}
     */

    this.answers = {};
    hydrate(this, data);
  }
  /**
   * @param {Answer} answer
   */


  _createClass(Question, [{
    key: "addAnswer",
    value: function addAnswer(answer) {
      this.answers[answer.player.id] = answer;
    }
  }]);

  return Question;
}();

module.exports = Question;

/***/ }),

/***/ "./src/frontend/js/components/Answers.vue":
/*!************************************************!*\
  !*** ./src/frontend/js/components/Answers.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Answers_vue_vue_type_template_id_6663e03e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Answers.vue?vue&type=template&id=6663e03e& */ "./src/frontend/js/components/Answers.vue?vue&type=template&id=6663e03e&");
/* harmony import */ var _Answers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Answers.vue?vue&type=script&lang=js& */ "./src/frontend/js/components/Answers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Answers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Answers_vue_vue_type_template_id_6663e03e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Answers_vue_vue_type_template_id_6663e03e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/frontend/js/components/Answers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/frontend/js/components/Answers.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/frontend/js/components/Answers.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Answers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--1!../../../../node_modules/vue-loader/lib??vue-loader-options!./Answers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/js/components/Answers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Answers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/frontend/js/components/Answers.vue?vue&type=template&id=6663e03e&":
/*!*******************************************************************************!*\
  !*** ./src/frontend/js/components/Answers.vue?vue&type=template&id=6663e03e& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Answers_vue_vue_type_template_id_6663e03e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Answers.vue?vue&type=template&id=6663e03e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/js/components/Answers.vue?vue&type=template&id=6663e03e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Answers_vue_vue_type_template_id_6663e03e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Answers_vue_vue_type_template_id_6663e03e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=3.js.map