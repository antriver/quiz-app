(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/js/views/PlayersView.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/js/views/PlayersView.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_PlayerListService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/PlayerListService */ "./src/services/PlayerListService.js");
/* harmony import */ var _services_PlayerListService__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_services_PlayerListService__WEBPACK_IMPORTED_MODULE_0__);
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
  name: 'PlayersView',
  data: function data() {
    return {
      PlayerListService: _services_PlayerListService__WEBPACK_IMPORTED_MODULE_0___default.a
    };
  },
  computed: {
    players: function players() {
      return Object.values(_services_PlayerListService__WEBPACK_IMPORTED_MODULE_0___default.a.players).sort(
      /**
       * @param {Player} a
       * @param {Player} b
       */
      function (a, b) {
        if (a.score === b.score) {
          return 0;
        }

        return a.score > b.score ? -1 : 1;
      });
    }
  },
  created: function created() {
    this.$root.$options.socket.emit('getPlayers', {}, function (result) {
      _services_PlayerListService__WEBPACK_IMPORTED_MODULE_0___default.a.setPlayers(result);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/js/views/PlayersView.vue?vue&type=template&id=5085e644&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/frontend/js/views/PlayersView.vue?vue&type=template&id=5085e644& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container", attrs: { id: "players" } }, [
    _c("table", { staticClass: "table table-striped" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.players, function(player) {
          return _c("tr", { key: player.id }, [
            _c("td", [_vm._v(_vm._s(player.name))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(player.score))])
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
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Score")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./src/frontend/js/views/PlayersView.vue":
/*!***********************************************!*\
  !*** ./src/frontend/js/views/PlayersView.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlayersView_vue_vue_type_template_id_5085e644___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayersView.vue?vue&type=template&id=5085e644& */ "./src/frontend/js/views/PlayersView.vue?vue&type=template&id=5085e644&");
/* harmony import */ var _PlayersView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayersView.vue?vue&type=script&lang=js& */ "./src/frontend/js/views/PlayersView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PlayersView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PlayersView_vue_vue_type_template_id_5085e644___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PlayersView_vue_vue_type_template_id_5085e644___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/frontend/js/views/PlayersView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/frontend/js/views/PlayersView.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/frontend/js/views/PlayersView.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayersView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--1!../../../../node_modules/vue-loader/lib??vue-loader-options!./PlayersView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/js/views/PlayersView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayersView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/frontend/js/views/PlayersView.vue?vue&type=template&id=5085e644&":
/*!******************************************************************************!*\
  !*** ./src/frontend/js/views/PlayersView.vue?vue&type=template&id=5085e644& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayersView_vue_vue_type_template_id_5085e644___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PlayersView.vue?vue&type=template&id=5085e644& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/frontend/js/views/PlayersView.vue?vue&type=template&id=5085e644&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayersView_vue_vue_type_template_id_5085e644___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayersView_vue_vue_type_template_id_5085e644___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=3.js.map