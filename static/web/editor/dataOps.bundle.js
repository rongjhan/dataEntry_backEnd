"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["dataOps"],{

/***/ "./src/mod_dataOps/javascript.mjs":
/*!****************************************!*\
  !*** ./src/mod_dataOps/javascript.mjs ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"descriptor\": () => (/* binding */ descriptor),\n/* harmony export */   \"produce\": () => (/* binding */ runCode)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"../node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ \"../node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ \"../node_modules/core-js/modules/es.string.trim.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"../node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"../node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ \"../node_modules/core-js/modules/es.array.splice.js\");\n/* harmony import */ var _worker_allocator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./worker/allocator.mjs */ \"./src/mod_dataOps/worker/allocator.mjs\");\n\n\n\n\n\n\n\nvar defaultCode = \"\\nfunction operation(el){  //\\u4EE5\\u514D\\u591A\\u9918\\u8D05\\u5B57\\u9020\\u6210\\u6BD4\\u8F03\\u6642\\u7684\\u4E0D\\u540C\\n    var newElement = el.trim() //\\u522A\\u9664\\u5B57\\u4E32\\u524D\\u5F8C\\u7A7A\\u767D(\\u5305\\u542B\\t\\u55CE?)\\n    newElement = parseInt(newElement).toString() //\\u522A\\u9664leading zero\\n    return newElement \\n}\\n\\nvar data1 = toFrame(datas[0])\\nvar data2 = toFrame(datas[1])\\n\\nvar operatedOne=data1.loc({columns:[\\\"\\u7D71\\u4E00\\u7DE8\\u865F\\\"]}).apply({callable:operation}).values.flat()\\nvar operatedTwo=data2.loc({columns:[\\\"\\u7D71\\u4E00\\u7DE8\\u865F\\\"]}).apply({callable:operation}).values.flat()\\n\\ndata1.drop({ columns: [\\\"\\u7D71\\u4E00\\u7DE8\\u865F\\\"],inplace:true})\\ndata2.drop({ columns: [\\\"\\u7D71\\u4E00\\u7DE8\\u865F\\\"],inplace:true})\\n\\nconsole.log(operatedOne)\\n\\ndata1.addColumn({column:\\\"\\u7D71\\u4E00\\u7DE8\\u865F\\\",value:operatedOne})\\ndata2.addColumn({column:\\\"\\u7D71\\u4E00\\u7DE8\\u865F\\\",value:operatedTwo})\\nvar result = dfd.merge({left:data1,right:data2,on:[\\\"\\u7D71\\u4E00\\u7DE8\\u865F\\\"]})\\n\\nreturn result.values\\n\".replace(/\\s{2,}/g, \" \"); //將多餘空白轉為一個,在regex中\\s表示空白\n//result.tensor.array()\n\nvar descriptor = {\n  data: {\n    required: true,\n    multi: true\n  },\n  config: {\n    code: {\n      type: \"textarea\",\n      defaultValue: defaultCode,\n      height: \"300px\"\n    }\n  }\n};\nfunction runCode(_ref) {\n  var datas = _ref.datas,\n    config = _ref.config;\n  //data is array of promise\n  var code = config.code.trim();\n  if (!code) {\n    console.log(\"empty code\");\n    return Promise.resolve([]);\n  }\n\n  // var datas = await Promise.all(data)\n\n  return new Promise(function (resolve) {\n    var processID = _worker_allocator_mjs__WEBPACK_IMPORTED_MODULE_6__.getProcessID();\n    var resultQue = _worker_allocator_mjs__WEBPACK_IMPORTED_MODULE_6__.resultQue,\n      timeoutQue = _worker_allocator_mjs__WEBPACK_IMPORTED_MODULE_6__.timeoutQue,\n      worker = _worker_allocator_mjs__WEBPACK_IMPORTED_MODULE_6__.worker;\n    function checkFinish() {\n      // console.log(`wait process ${processID}`)\n\n      if (resultQue[processID] !== undefined) {\n        resolve(resultQue.splice(processID, 1, undefined)[0]);\n        clearInterval(timeoutQue.splice(processID, 1, undefined)[0]);\n      }\n    }\n    timeoutQue[processID] = setInterval(checkFinish, 100);\n    worker.postMessage({\n      processID: processID,\n      code: code,\n      datas: datas\n    });\n  });\n}\n\n// exports.produce = runCode\n// exports.defaultConfig = defaultConfig\n\n// Array.from(datas[0][0][0]).forEach((e)=>{console.log(e.charCodeAt())})\n// Array.from(datas[1][0][2]).forEach((e)=>{console.log(e.charCodeAt())})\n\n//# sourceURL=webpack:///./src/mod_dataOps/javascript.mjs?");

/***/ }),

/***/ "./src/mod_dataOps/merge.mjs":
/*!***********************************!*\
  !*** ./src/mod_dataOps/merge.mjs ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"descriptor\": () => (/* binding */ descriptor),\n/* harmony export */   \"produce\": () => (/* binding */ runCode)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"../node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"../node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"../node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ \"../node_modules/core-js/modules/es.array.splice.js\");\n/* harmony import */ var _worker_allocator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./worker/allocator.mjs */ \"./src/mod_dataOps/worker/allocator.mjs\");\n\n\n\n\n\nfunction genCode(config) {\n  var key = config.key,\n    how = config.how;\n  return \"\\n    function operation(el){ \\n        var newElement = el.trim() \\n        newElement = parseInt(newElement).toString() //\\u522A\\u9664leading zero\\n        return newElement \\n    }\\n    \\n    var data1 = toFrame(datas[0])\\n    var data2 = toFrame(datas[1])\\n    \\n    var operatedOne=data1.loc({columns:[\\\"\".concat(key, \"\\\"]}).apply({callable:operation}).values.flat()\\n    var operatedTwo=data2.loc({columns:[\\\"\").concat(key, \"\\\"]}).apply({callable:operation}).values.flat()\\n    \\n    data1.drop({ columns: [\\\"\").concat(key, \"\\\"],inplace:true})\\n    data2.drop({ columns: [\\\"\").concat(key, \"\\\"],inplace:true})\\n    \\n    \\n    data1.addColumn({column:\\\"\").concat(key, \"\\\",value:operatedOne})\\n    data2.addColumn({column:\\\"\").concat(key, \"\\\",value:operatedTwo})\\n    var result = dfd.merge({left:data1,right:data2,on:[\\\"\").concat(key, \"\\\"],how:\\\"\").concat(how, \"\\\"})\\n    // console.log(result.columns)\\n    return result.values\\n    \"); //將多餘空白轉為一個,在regex中\\s表示空白\n  //result.tensor.array()\n}\n\nvar descriptor = {\n  data: {\n    required: true,\n    multi: true\n  },\n  config: {\n    key: {\n      type: \"text\",\n      defaultValue: \"\",\n      required: true\n    },\n    how: {\n      type: \"selection\",\n      options: [\"inner\", \"outer\", 'left', \"right\"],\n      defaultValue: \"inner\"\n    }\n  }\n};\nfunction runCode(_ref) {\n  var datas = _ref.datas,\n    config = _ref.config;\n  var code = genCode(config);\n  console.log(code);\n  return new Promise(function (resolve) {\n    var processID = _worker_allocator_mjs__WEBPACK_IMPORTED_MODULE_4__.getProcessID();\n    var resultQue = _worker_allocator_mjs__WEBPACK_IMPORTED_MODULE_4__.resultQue,\n      timeoutQue = _worker_allocator_mjs__WEBPACK_IMPORTED_MODULE_4__.timeoutQue,\n      worker = _worker_allocator_mjs__WEBPACK_IMPORTED_MODULE_4__.worker;\n    function checkFinish() {\n      // console.log(`wait process ${processID}`)\n\n      if (resultQue[processID] !== undefined) {\n        resolve(resultQue.splice(processID, 1, undefined)[0]);\n        clearInterval(timeoutQue.splice(processID, 1, undefined)[0]);\n      }\n    }\n    timeoutQue[processID] = setInterval(checkFinish, 100);\n    worker.postMessage({\n      processID: processID,\n      code: code,\n      datas: datas\n    });\n  });\n}\n\n// exports.produce = runCode\n// exports.defaultConfig = defaultConfig\n\n// Array.from(datas[0][0][0]).forEach((e)=>{console.log(e.charCodeAt())})\n// Array.from(datas[1][0][2]).forEach((e)=>{console.log(e.charCodeAt())})\n\n//# sourceURL=webpack:///./src/mod_dataOps/merge.mjs?");

/***/ }),

/***/ "./src/mod_dataOps/python.mjs":
/*!************************************!*\
  !*** ./src/mod_dataOps/python.mjs ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"descriptor\": () => (/* binding */ descriptor),\n/* harmony export */   \"produce\": () => (/* binding */ runCode)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"../node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ \"../node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ \"../node_modules/core-js/modules/es.string.trim.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"../node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"../node_modules/core-js/modules/es.promise.js\");\n\n\n\n\n\nvar defaultCode = \"\\n# variable result will return unexplicitly,and it must be an dataframe or series\\n\\ndata1 = pd.DataFrame(datas[0],columns=datas[0].pop(0))\\n#print(data1[\\\"\\u7D71\\u4E00\\u7DE8\\u865F\\\"].to_string())\\ndata1[\\\"\\u7D71\\u4E00\\u7DE8\\u865F\\\"] = data1[\\\"\\u7D71\\u4E00\\u7DE8\\u865F\\\"].astype(str).apply(lambda num: num.strip()) #\\u79FB\\u9664\\u982D\\u5C3EwhiteSpace\\ndata1[\\\"\\u7D71\\u4E00\\u7DE8\\u865F\\\"] = data1[\\\"\\u7D71\\u4E00\\u7DE8\\u865F\\\"].apply(lambda num: num.lstrip('0'))  #\\u79FB\\u9664leading zero\\n\\ndata2 = pd.DataFrame(datas[1],columns=datas[1].pop(0))\\ndata2[\\\"\\u7D71\\u4E00\\u7DE8\\u865F\\\"] = data2[\\\"\\u7D71\\u4E00\\u7DE8\\u865F\\\"].astype(str).apply(lambda num: num.strip())\\ndata2[\\\"\\u7D71\\u4E00\\u7DE8\\u865F\\\"] = data2[\\\"\\u7D71\\u4E00\\u7DE8\\u865F\\\"].apply(lambda num: num.lstrip('0'))\\n\\nreserveColumn = ['\\u7D71\\u4E00\\u7DE8\\u865F',\\\"\\u5EE0\\u5546\\u4E2D\\u6587\\u540D\\u7A31\\\",\\\"\\u4E2D\\u6587\\u71DF\\u696D\\u5730\\u5740\\\",\\\"\\u4EE3\\u8868\\u4EBA\\\",\\\"\\u96FB\\u8A71\\u865F\\u78BC\\\",\\\"\\u50B3\\u771F\\u865F\\u78BC\\\",\\\"\\u88DC\\u52A9\\u91D1\\u984D(\\u5143)\\\",\\\"\\u539F\\u59CB\\u767B\\u8A18\\u65E5\\u671F\\\"]\\nresult= pd.merge(data1,data2,on=\\\"\\u7D71\\u4E00\\u7DE8\\u865F\\\",how=\\\"inner\\\").loc[:,reserveColumn]\\n\".replace(/\\s{2,}/g, \" \"); //將多餘空白轉為一個,在regex中\\s表示空白\n//result.tensor.array()\n\nvar descriptor = {\n  data: {\n    required: true,\n    multi: true\n  },\n  config: {\n    code: {\n      type: \"textarea\",\n      defaultValue: defaultCode,\n      height: \"300px\"\n    }\n  }\n};\nfunction runCode(_ref) {\n  var datas = _ref.datas,\n    config = _ref.config;\n  //data is array of promise\n  var code = config.code.trim();\n  if (!code) {\n    console.log(\"empty code\");\n    return Promise.resolve([]);\n  }\n\n  //https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch\n  return fetch(\"./operate\", {\n    method: \"POST\",\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      datas: datas,\n      code: code\n    })\n  }).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    return data;\n  }); //data已經是parse過的json(即已轉成js物件)\n}\n\n\n\n//# sourceURL=webpack:///./src/mod_dataOps/python.mjs?");

/***/ }),

/***/ "./src/mod_dataOps/worker/allocator.mjs":
/*!**********************************************!*\
  !*** ./src/mod_dataOps/worker/allocator.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProcessID\": () => (/* binding */ getProcessID),\n/* harmony export */   \"resultQue\": () => (/* binding */ resultQue),\n/* harmony export */   \"timeoutQue\": () => (/* binding */ timeoutQue),\n/* harmony export */   \"worker\": () => (/* binding */ worker)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"../node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"../node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"../node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"../node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url.js */ \"../node_modules/core-js/modules/web.url.js\");\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ \"../node_modules/core-js/modules/web.url-search-params.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"../node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"../node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"../node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"../node_modules/core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ \"../node_modules/core-js/modules/es.symbol.async-iterator.js\");\n/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ \"../node_modules/core-js/modules/es.symbol.to-string-tag.js\");\n/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ \"../node_modules/core-js/modules/es.json.to-string-tag.js\");\n/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ \"../node_modules/core-js/modules/es.math.to-string-tag.js\");\n/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ \"../node_modules/core-js/modules/es.object.get-prototype-of.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"../node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"../node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ \"../node_modules/core-js/modules/es.array.slice.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator.return && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\nfunction _readOnlyError(name) { throw new TypeError(\"\\\"\" + name + \"\\\" is read-only\"); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar worker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(\"src_mod_dataOps_worker_worker_mjs\"), __webpack_require__.b));\nvar process = 0;\nvar resultQue = [];\nvar timeoutQue = [];\nfunction getProcessID() {\n  return +process, _readOnlyError(\"process\");\n}\nworker.onmessage = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          //e.data 不能是Promise因為 postMessage不能傳送Promise\n          console.log(\"new\", e.data);\n          resultQue[e.data.processID] = e.data.result;\n        case 2:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n\n//# sourceURL=webpack:///./src/mod_dataOps/worker/allocator.mjs?");

/***/ }),

/***/ "./src/mod_dataOps/worker/worker.mjs":
/*!*******************************************!*\
  !*** ./src/mod_dataOps/worker/worker.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ \"../node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"../node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"../node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"../node_modules/core-js/modules/es.regexp.to-string.js\");\n\n\n\n\ntry {\n  // importScripts(\"https://127.0.0.1:3000/static/assets/tf.js\")\n  self.importScripts(\"https://127.0.0.1:3000/static/assets/danfo.min.js\");\n  self.importScripts(\"https://127.0.0.1:3000/static/assets/textEncoder.js\");\n  console.log(\"backend\");\n  dfd.tf.setBackend(\"cpu\");\n} catch (error) {\n  self.importScripts(\"https://cdn.jsdelivr.net/npm/danfojs@0.2.7/lib/bundle.min.js\");\n  dfd.tf.setBackend(\"webgl\");\n}\nfunction toFrame(array) {\n  var header = array.slice(0, 1)[0];\n  var body = array.slice(1);\n  return new dfd.DataFrame(body, {\n    columns: header\n  });\n}\nvar datas;\nself.onmessage = function (msg) {\n  datas = msg.data.datas;\n  var code = new Function(msg.data.code);\n  var processID = msg.data.processID;\n  try {\n    var result = code();\n    if (result instanceof Promise) {\n      result.then(function (final) {\n        postMessage({\n          result: final,\n          processID: processID\n        });\n      });\n      //postMessage can't send promise\n    } else {\n      self.postMessage({\n        result: result,\n        processID: processID\n      });\n    }\n  } catch (error) {\n    console.log(\"catchError: \", error);\n    self.postMessage({\n      result: error.toString(),\n      processID: processID\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/mod_dataOps/worker/worker.mjs?");

/***/ })

}]);