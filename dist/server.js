/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../controllers/controller.js":
/*!************************************!*\
  !*** ../controllers/controller.js ***!
  \************************************/
/*! exports provided: addRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addRoutes\", function() { return addRoutes; });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logic_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/todo.js */ \"../logic/todo.js\");\n/* harmony import */ var _logic_user_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logic/user.js */ \"../logic/user.js\");\n\nconst {authenticate} = __webpack_require__(/*! ../server/middleware/authenticate */ \"./middleware/authenticate.js\");\n\n\n\nconst addRoutes = (app) => {\n\n    app.post('/todos', authenticate, _logic_todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createTodo);\n    app.get('/todos/', authenticate, _logic_todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTodos);\n    app.get('/todos/:id', authenticate, _logic_todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTodo);\n    app.delete('/todos/:id', authenticate, _logic_todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteTodo);\n    app.patch('/todos/:id', authenticate, _logic_todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateTodo);\n\n    app.post('/users', _logic_user_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createUser);\n    app.post('/users/login', _logic_user_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userLogin);\n\n    return app;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vY29udHJvbGxlcnMvY29udHJvbGxlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9jb250cm9sbGVycy9jb250cm9sbGVyLmpzP2VmZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5jb25zdCB7YXV0aGVudGljYXRlfSA9IHJlcXVpcmUoJy4uL3NlcnZlci9taWRkbGV3YXJlL2F1dGhlbnRpY2F0ZScpO1xuaW1wb3J0IHRvZG9Mb2dpYyBmcm9tICcuLi9sb2dpYy90b2RvLmpzJztcbmltcG9ydCB1c2VyTG9naWMgIGZyb20gJy4uL2xvZ2ljL3VzZXIuanMnO1xuXG5leHBvcnQgY29uc3QgYWRkUm91dGVzID0gKGFwcCkgPT4ge1xuXG4gICAgYXBwLnBvc3QoJy90b2RvcycsIGF1dGhlbnRpY2F0ZSwgdG9kb0xvZ2ljLmNyZWF0ZVRvZG8pO1xuICAgIGFwcC5nZXQoJy90b2Rvcy8nLCBhdXRoZW50aWNhdGUsIHRvZG9Mb2dpYy5nZXRUb2Rvcyk7XG4gICAgYXBwLmdldCgnL3RvZG9zLzppZCcsIGF1dGhlbnRpY2F0ZSwgdG9kb0xvZ2ljLmdldFRvZG8pO1xuICAgIGFwcC5kZWxldGUoJy90b2Rvcy86aWQnLCBhdXRoZW50aWNhdGUsIHRvZG9Mb2dpYy5kZWxldGVUb2RvKTtcbiAgICBhcHAucGF0Y2goJy90b2Rvcy86aWQnLCBhdXRoZW50aWNhdGUsIHRvZG9Mb2dpYy51cGRhdGVUb2RvKTtcblxuICAgIGFwcC5wb3N0KCcvdXNlcnMnLCB1c2VyTG9naWMuY3JlYXRlVXNlcik7XG4gICAgYXBwLnBvc3QoJy91c2Vycy9sb2dpbicsIHVzZXJMb2dpYy51c2VyTG9naW4pO1xuXG4gICAgcmV0dXJuIGFwcDtcbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../controllers/controller.js\n");

/***/ }),

/***/ "../logic/todo.js":
/*!************************!*\
  !*** ../logic/todo.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status-codes */ \"http-status-codes\");\n/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_0__);\nconst _ = __webpack_require__(/*! lodash */ \"lodash\");\nconst {Todo} = __webpack_require__(/*! ../server/models/todo */ \"./models/todo.js\");\nconst {User} = __webpack_require__(/*! ../server/models/user */ \"./models/user.js\");\nconst {ObjectID} = __webpack_require__(/*! mongodb */ \"mongodb\");\n\n\nclass TodoLogic {\n\n    createTodo (req, res) {\n        const todo = new Todo({\n          text: req.body.text,\n          _creator: req.user._id\n        });\n      \n        todo.save().then((doc) => {\n          res\n            .status(http_status_codes__WEBPACK_IMPORTED_MODULE_0___default.a.CREATED)\n            .send(doc);\n        }, (e) => {\n          let errorMessage = e;\n\n          if (e.message.match(/Todo validation failed/i)) {\n              errorMessage = 'Text field is mandatory. Minimum length of the text is 1 and should be a string.'\n              res\n              .status(http_status_codes__WEBPACK_IMPORTED_MODULE_0___default.a.BAD_REQUEST)\n              .send('Could not create Todo.');\n          }\n          res\n            .status(http_status_codes__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL_SERVER_ERROR)\n            .send('Could not create Todo.');\n        });\n    };\n\n    getTodos (req, res) {\n        Todo.find({\n          _creator: req.user._id\n        }).then((todos) => {\n          res.send({todos});\n        }, (e) => {\n          res\n            .status(http_status_codes__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL_SERVER_ERROR)\n            .send('Could not get Todos.');\n        })\n    };\n\n    getTodo (req, res) {\n        const id = req.params.id;\n      \n        if (!ObjectID.isValid(id)) {\n          return res\n                  .status(http_status_codes__WEBPACK_IMPORTED_MODULE_0___default.a.BAD_REQUEST)\n                  .send('Todo ID is not valid.');\n        }\n      \n        Todo.findOne({\n          _id: id,\n          _creator: req.user._id\n        }).then((todo) => {\n          if (!todo) {\n            return res\n                    .status(http_status_codes__WEBPACK_IMPORTED_MODULE_0___default.a.OK)\n                    .send('No Todo has been created by this User.');\n          }\n          res\n            .status(http_status_codes__WEBPACK_IMPORTED_MODULE_0___default.a.OK)\n            .send({todo});\n        }, (e) => {\n          res\n            .status(http_status_codes__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL_SERVER_ERROR)\n            .send('Could not get Todo.');\n        });\n    };\n\n    deleteTodo (req, res) {\n        const id = req.params.id;\n    \n        if (!ObjectID.isValid(id)) {\n          return res\n                  .status(http_status_codes__WEBPACK_IMPORTED_MODULE_0___default.a.BAD_REQUEST)\n                  .send('Todo ID is not valid.');\n        }\n    \n        Todo.findOneAndRemove({\n          _id: id,\n          _creator: req.user._id\n        }).then((todo) => {\n          if (!todo) {\n            return res\n                    .status(http_status_codes__WEBPACK_IMPORTED_MODULE_0___default.a.OK)\n                    .send('This user does not have a Todo with the given ID.');\n          }\n          res.send({todo});\n        }).catch((e) => {\n          res\n            .status(http_status_codes__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL_SERVER_ERROR)\n            .send('Could not delete Todo.');\n        });\n    };\n\n    updateTodo (req, res) {\n        const id = req.params.id;\n        const body = _.pick(req.body, ['text', 'completed'])\n      \n        if (!ObjectID.isValid(id)) {\n            return res\n              .status(http_status_codes__WEBPACK_IMPORTED_MODULE_0___default.a.BAD_REQUEST)\n              .send('Todo ID is not valid.');\n        }\n      \n        if (_.isBoolean(body.completed) && body.completed) {\n          body.completedAt = new Date().getTime();\n        } else {\n          body.completd = false;\n          body.completedAt = null;\n        }\n      \n        Todo.findOneAndUpdate({ _id: id, _creator: req.user._id}, {$set: body}, {new: true}).then((todo) => {\n          // $set -- Field update operator.\n          // new: true -> To return the modified document rather than the original.\n          if (!todo) {\n            return res\n                  .status(http_status_codes__WEBPACK_IMPORTED_MODULE_0___default.a.OK)\n                  .send('This user does not have a Todo with the given ID.');\n          }\n          res.send({todo});\n        }).catch((e) => {\n          res\n            .status(http_status_codes__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL_SERVER_ERROR)\n            .send('Could not update Todo.');\n        })\n    };\n}\n\n\nconst todoInstance = new TodoLogic();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (todoInstance);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbG9naWMvdG9kby5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9sb2dpYy90b2RvLmpzPzg4NGMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3Qge1RvZG99ID0gcmVxdWlyZSgnLi4vc2VydmVyL21vZGVscy90b2RvJyk7XG5jb25zdCB7VXNlcn0gPSByZXF1aXJlKCcuLi9zZXJ2ZXIvbW9kZWxzL3VzZXInKTtcbmNvbnN0IHtPYmplY3RJRH0gPSByZXF1aXJlKCdtb25nb2RiJyk7XG5pbXBvcnQgSHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cy1jb2Rlcyc7XG5cbmNsYXNzIFRvZG9Mb2dpYyB7XG5cbiAgICBjcmVhdGVUb2RvIChyZXEsIHJlcykge1xuICAgICAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8oe1xuICAgICAgICAgIHRleHQ6IHJlcS5ib2R5LnRleHQsXG4gICAgICAgICAgX2NyZWF0b3I6IHJlcS51c2VyLl9pZFxuICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgICB0b2RvLnNhdmUoKS50aGVuKChkb2MpID0+IHtcbiAgICAgICAgICByZXNcbiAgICAgICAgICAgIC5zdGF0dXMoSHR0cFN0YXR1cy5DUkVBVEVEKVxuICAgICAgICAgICAgLnNlbmQoZG9jKTtcbiAgICAgICAgfSwgKGUpID0+IHtcbiAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gZTtcblxuICAgICAgICAgIGlmIChlLm1lc3NhZ2UubWF0Y2goL1RvZG8gdmFsaWRhdGlvbiBmYWlsZWQvaSkpIHtcbiAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ1RleHQgZmllbGQgaXMgbWFuZGF0b3J5LiBNaW5pbXVtIGxlbmd0aCBvZiB0aGUgdGV4dCBpcyAxIGFuZCBzaG91bGQgYmUgYSBzdHJpbmcuJ1xuICAgICAgICAgICAgICByZXNcbiAgICAgICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKVxuICAgICAgICAgICAgICAuc2VuZCgnQ291bGQgbm90IGNyZWF0ZSBUb2RvLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXNcbiAgICAgICAgICAgIC5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpXG4gICAgICAgICAgICAuc2VuZCgnQ291bGQgbm90IGNyZWF0ZSBUb2RvLicpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZ2V0VG9kb3MgKHJlcSwgcmVzKSB7XG4gICAgICAgIFRvZG8uZmluZCh7XG4gICAgICAgICAgX2NyZWF0b3I6IHJlcS51c2VyLl9pZFxuICAgICAgICB9KS50aGVuKCh0b2RvcykgPT4ge1xuICAgICAgICAgIHJlcy5zZW5kKHt0b2Rvc30pO1xuICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgIHJlc1xuICAgICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUilcbiAgICAgICAgICAgIC5zZW5kKCdDb3VsZCBub3QgZ2V0IFRvZG9zLicpO1xuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBnZXRUb2RvIChyZXEsIHJlcykge1xuICAgICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWQ7XG4gICAgICBcbiAgICAgICAgaWYgKCFPYmplY3RJRC5pc1ZhbGlkKGlkKSkge1xuICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAgICAgICAgIC5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVClcbiAgICAgICAgICAgICAgICAgIC5zZW5kKCdUb2RvIElEIGlzIG5vdCB2YWxpZC4nKTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIFRvZG8uZmluZE9uZSh7XG4gICAgICAgICAgX2lkOiBpZCxcbiAgICAgICAgICBfY3JlYXRvcjogcmVxLnVzZXIuX2lkXG4gICAgICAgIH0pLnRoZW4oKHRvZG8pID0+IHtcbiAgICAgICAgICBpZiAoIXRvZG8pIHtcbiAgICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAgICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLk9LKVxuICAgICAgICAgICAgICAgICAgICAuc2VuZCgnTm8gVG9kbyBoYXMgYmVlbiBjcmVhdGVkIGJ5IHRoaXMgVXNlci4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzXG4gICAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuT0spXG4gICAgICAgICAgICAuc2VuZCh7dG9kb30pO1xuICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgIHJlc1xuICAgICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUilcbiAgICAgICAgICAgIC5zZW5kKCdDb3VsZCBub3QgZ2V0IFRvZG8uJyk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBkZWxldGVUb2RvIChyZXEsIHJlcykge1xuICAgICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWQ7XG4gICAgXG4gICAgICAgIGlmICghT2JqZWN0SUQuaXNWYWxpZChpZCkpIHtcbiAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpXG4gICAgICAgICAgICAgICAgICAuc2VuZCgnVG9kbyBJRCBpcyBub3QgdmFsaWQuJyk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgVG9kby5maW5kT25lQW5kUmVtb3ZlKHtcbiAgICAgICAgICBfaWQ6IGlkLFxuICAgICAgICAgIF9jcmVhdG9yOiByZXEudXNlci5faWRcbiAgICAgICAgfSkudGhlbigodG9kbykgPT4ge1xuICAgICAgICAgIGlmICghdG9kbykge1xuICAgICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgICAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuT0spXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKCdUaGlzIHVzZXIgZG9lcyBub3QgaGF2ZSBhIFRvZG8gd2l0aCB0aGUgZ2l2ZW4gSUQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlcy5zZW5kKHt0b2RvfSk7XG4gICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgcmVzXG4gICAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKVxuICAgICAgICAgICAgLnNlbmQoJ0NvdWxkIG5vdCBkZWxldGUgVG9kby4nKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHVwZGF0ZVRvZG8gKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZDtcbiAgICAgICAgY29uc3QgYm9keSA9IF8ucGljayhyZXEuYm9keSwgWyd0ZXh0JywgJ2NvbXBsZXRlZCddKVxuICAgICAgXG4gICAgICAgIGlmICghT2JqZWN0SUQuaXNWYWxpZChpZCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKVxuICAgICAgICAgICAgICAuc2VuZCgnVG9kbyBJRCBpcyBub3QgdmFsaWQuJyk7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICBpZiAoXy5pc0Jvb2xlYW4oYm9keS5jb21wbGV0ZWQpICYmIGJvZHkuY29tcGxldGVkKSB7XG4gICAgICAgICAgYm9keS5jb21wbGV0ZWRBdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJvZHkuY29tcGxldGQgPSBmYWxzZTtcbiAgICAgICAgICBib2R5LmNvbXBsZXRlZEF0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIFRvZG8uZmluZE9uZUFuZFVwZGF0ZSh7IF9pZDogaWQsIF9jcmVhdG9yOiByZXEudXNlci5faWR9LCB7JHNldDogYm9keX0sIHtuZXc6IHRydWV9KS50aGVuKCh0b2RvKSA9PiB7XG4gICAgICAgICAgLy8gJHNldCAtLSBGaWVsZCB1cGRhdGUgb3BlcmF0b3IuXG4gICAgICAgICAgLy8gbmV3OiB0cnVlIC0+IFRvIHJldHVybiB0aGUgbW9kaWZpZWQgZG9jdW1lbnQgcmF0aGVyIHRoYW4gdGhlIG9yaWdpbmFsLlxuICAgICAgICAgIGlmICghdG9kbykge1xuICAgICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLk9LKVxuICAgICAgICAgICAgICAgICAgLnNlbmQoJ1RoaXMgdXNlciBkb2VzIG5vdCBoYXZlIGEgVG9kbyB3aXRoIHRoZSBnaXZlbiBJRC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzLnNlbmQoe3RvZG99KTtcbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICByZXNcbiAgICAgICAgICAgIC5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpXG4gICAgICAgICAgICAuc2VuZCgnQ291bGQgbm90IHVwZGF0ZSBUb2RvLicpO1xuICAgICAgICB9KVxuICAgIH07XG59XG5cblxuY29uc3QgdG9kb0luc3RhbmNlID0gbmV3IFRvZG9Mb2dpYygpO1xuXG5leHBvcnQgZGVmYXVsdCB0b2RvSW5zdGFuY2U7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../logic/todo.js\n");

/***/ }),

/***/ "../logic/user.js":
/*!************************!*\
  !*** ../logic/user.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status-codes */ \"http-status-codes\");\n/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_0__);\nconst _ = __webpack_require__(/*! lodash */ \"lodash\");\nconst {User} = __webpack_require__(/*! ../server/models/user */ \"./models/user.js\");\n\n\nclass UserLogic {\n\n    createUser (req, res) {\n        const body = _.pick(req.body, ['email', 'password']);\n        const user = new User(body);\n    \n        user.save().then((user) => {\n          return user.generateAuthToken();\n        }).then((token) => {\n          res\n            .header('x-auth', token)\n            .status(http_status_codes__WEBPACK_IMPORTED_MODULE_0___default.a.OK)\n            .send(user);\n        }).catch((e) => {\n          if (e.message && e.message.match(/User validation failed/)) {\n              res\n              .status(http_status_codes__WEBPACK_IMPORTED_MODULE_0___default.a.BAD_REQUEST)\n              .send('Email ID and Password are mandatory. Enter valid email. Password minimum length is 6.');\n          }\n          else if (e.errmsg && e.errmsg.match(/duplicate key error/)) {\n              res\n              .status(http_status_codes__WEBPACK_IMPORTED_MODULE_0___default.a.BAD_REQUEST)\n              .send('A user with these credentials exists already.');\n          }\n          res\n            .status(http_status_codes__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL_SERVER_ERROR)\n            .send('Could not create user.');\n        });\n    };\n\n    userLogin (req, res) {\n        const body = _.pick(req.body, ['email', 'password']);\n    \n        User.findByCredentials(body.email, body.password).then((user) => {\n          user.generateAuthToken().then((token) => {\n            res\n              .header('x-auth', token)\n              .status(http_status_codes__WEBPACK_IMPORTED_MODULE_0___default.a.OK)\n              .send(user);\n          })\n        }).catch((e) => {\n          res\n            .status(http_status_codes__WEBPACK_IMPORTED_MODULE_0___default.a.UNAUTHORIZED)\n            .send('Either your email or password is wrong.');\n        });\n    };\n}\n\n\nconst userInstance = new UserLogic();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (userInstance);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbG9naWMvdXNlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9sb2dpYy91c2VyLmpzPzViZmMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3Qge1VzZXJ9ID0gcmVxdWlyZSgnLi4vc2VydmVyL21vZGVscy91c2VyJyk7XG5pbXBvcnQgSHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cy1jb2Rlcyc7XG5cbmNsYXNzIFVzZXJMb2dpYyB7XG5cbiAgICBjcmVhdGVVc2VyIChyZXEsIHJlcykge1xuICAgICAgICBjb25zdCBib2R5ID0gXy5waWNrKHJlcS5ib2R5LCBbJ2VtYWlsJywgJ3Bhc3N3b3JkJ10pO1xuICAgICAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIoYm9keSk7XG4gICAgXG4gICAgICAgIHVzZXIuc2F2ZSgpLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gdXNlci5nZW5lcmF0ZUF1dGhUb2tlbigpO1xuICAgICAgICB9KS50aGVuKCh0b2tlbikgPT4ge1xuICAgICAgICAgIHJlc1xuICAgICAgICAgICAgLmhlYWRlcigneC1hdXRoJywgdG9rZW4pXG4gICAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuT0spXG4gICAgICAgICAgICAuc2VuZCh1c2VyKTtcbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5tZXNzYWdlICYmIGUubWVzc2FnZS5tYXRjaCgvVXNlciB2YWxpZGF0aW9uIGZhaWxlZC8pKSB7XG4gICAgICAgICAgICAgIHJlc1xuICAgICAgICAgICAgICAuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpXG4gICAgICAgICAgICAgIC5zZW5kKCdFbWFpbCBJRCBhbmQgUGFzc3dvcmQgYXJlIG1hbmRhdG9yeS4gRW50ZXIgdmFsaWQgZW1haWwuIFBhc3N3b3JkIG1pbmltdW0gbGVuZ3RoIGlzIDYuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGUuZXJybXNnICYmIGUuZXJybXNnLm1hdGNoKC9kdXBsaWNhdGUga2V5IGVycm9yLykpIHtcbiAgICAgICAgICAgICAgcmVzXG4gICAgICAgICAgICAgIC5zdGF0dXMoSHR0cFN0YXR1cy5CQURfUkVRVUVTVClcbiAgICAgICAgICAgICAgLnNlbmQoJ0EgdXNlciB3aXRoIHRoZXNlIGNyZWRlbnRpYWxzIGV4aXN0cyBhbHJlYWR5LicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXNcbiAgICAgICAgICAgIC5zdGF0dXMoSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpXG4gICAgICAgICAgICAuc2VuZCgnQ291bGQgbm90IGNyZWF0ZSB1c2VyLicpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgdXNlckxvZ2luIChyZXEsIHJlcykge1xuICAgICAgICBjb25zdCBib2R5ID0gXy5waWNrKHJlcS5ib2R5LCBbJ2VtYWlsJywgJ3Bhc3N3b3JkJ10pO1xuICAgIFxuICAgICAgICBVc2VyLmZpbmRCeUNyZWRlbnRpYWxzKGJvZHkuZW1haWwsIGJvZHkucGFzc3dvcmQpLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgICB1c2VyLmdlbmVyYXRlQXV0aFRva2VuKCkudGhlbigodG9rZW4pID0+IHtcbiAgICAgICAgICAgIHJlc1xuICAgICAgICAgICAgICAuaGVhZGVyKCd4LWF1dGgnLCB0b2tlbilcbiAgICAgICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLk9LKVxuICAgICAgICAgICAgICAuc2VuZCh1c2VyKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgIHJlc1xuICAgICAgICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLlVOQVVUSE9SSVpFRClcbiAgICAgICAgICAgIC5zZW5kKCdFaXRoZXIgeW91ciBlbWFpbCBvciBwYXNzd29yZCBpcyB3cm9uZy4nKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuXG5jb25zdCB1c2VySW5zdGFuY2UgPSBuZXcgVXNlckxvZ2ljKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJJbnN0YW5jZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../logic/user.js\n");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var env = \"development\" || 'development'; //This variable is only set on Heroku\r\n\r\nif (env === 'development') {\r\n    process.env.PORT = 3000;\r\n    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppProd';\r\n} else if (env === 'test') {\r\n    process.env.PORT = 3000;\r\n    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp'\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvY29uZmlnLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy5qcz8zOWM2Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnOyAvL1RoaXMgdmFyaWFibGUgaXMgb25seSBzZXQgb24gSGVyb2t1XHJcblxyXG5pZiAoZW52ID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICBwcm9jZXNzLmVudi5QT1JUID0gMzAwMDtcclxuICAgIHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJID0gJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvVG9kb0FwcFByb2QnO1xyXG59IGVsc2UgaWYgKGVudiA9PT0gJ3Rlc3QnKSB7XHJcbiAgICBwcm9jZXNzLmVudi5QT1JUID0gMzAwMDtcclxuICAgIHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJID0gJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvVG9kb0FwcCdcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/config.js\n");

/***/ }),

/***/ "./db/mongoose.js":
/*!************************!*\
  !*** ./db/mongoose.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\n\r\nmongoose.Promise = global.Promise;\r\n// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoAppProd');\r\nmongoose.connect(process.env.MONGODB_URI);\r\n\r\nmodule.exports = {\r\n  mongoose: mongoose\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYi9tb25nb29zZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RiL21vbmdvb3NlLmpzP2ZlYTAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuXHJcbm1vbmdvb3NlLlByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcclxuLy8gbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSB8fCAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9Ub2RvQXBwUHJvZCcpO1xyXG5tb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIG1vbmdvb3NlOiBtb25nb29zZVxyXG59O1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./db/mongoose.js\n");

/***/ }),

/***/ "./middleware/authenticate.js":
/*!************************************!*\
  !*** ./middleware/authenticate.js ***!
  \************************************/
/*! exports provided: authenticate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authenticate\", function() { return authenticate; });\n/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status-codes */ \"http-status-codes\");\n/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_0__);\nvar {User} = __webpack_require__(/*! ./../models/user */ \"./models/user.js\");\r\n\r\n\r\nconst authenticate = (req, res, next) => {\r\n  const token = req.header('x-auth');\r\n\r\n  User.findByToken(token).then((user) => {\r\n    if (!user) {\r\n      return Promise.reject();\r\n    }\r\n    req.user = user;\r\n    req.token = token;\r\n    next();\r\n  }).catch((e) => {\r\n    res\r\n      .status(http_status_codes__WEBPACK_IMPORTED_MODULE_0___default.a.UNAUTHORIZED)\r\n      .send();\r\n  })\r\n};\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9taWRkbGV3YXJlL2F1dGhlbnRpY2F0ZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21pZGRsZXdhcmUvYXV0aGVudGljYXRlLmpzPzhkYzYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHtVc2VyfSA9IHJlcXVpcmUoJy4vLi4vbW9kZWxzL3VzZXInKTtcclxuaW1wb3J0IEh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMtY29kZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0ZSA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcigneC1hdXRoJyk7XHJcblxyXG4gIFVzZXIuZmluZEJ5VG9rZW4odG9rZW4pLnRoZW4oKHVzZXIpID0+IHtcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcclxuICAgIH1cclxuICAgIHJlcS51c2VyID0gdXNlcjtcclxuICAgIHJlcS50b2tlbiA9IHRva2VuO1xyXG4gICAgbmV4dCgpO1xyXG4gIH0pLmNhdGNoKChlKSA9PiB7XHJcbiAgICByZXNcclxuICAgICAgLnN0YXR1cyhIdHRwU3RhdHVzLlVOQVVUSE9SSVpFRClcclxuICAgICAgLnNlbmQoKTtcclxuICB9KVxyXG59O1xyXG5cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./middleware/authenticate.js\n");

/***/ }),

/***/ "./models/todo.js":
/*!************************!*\
  !*** ./models/todo.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\n\r\nconst Todo = mongoose.model('Todo', {\r\n  text: {\r\n      type: String,\r\n      required: true,\r\n      minlength: 1,\r\n      trim: true\r\n  },\r\n  completed: {\r\n      type: Boolean,\r\n      default: false\r\n  },\r\n  completedAt: {\r\n      type: Number,\r\n      default: null\r\n  },\r\n  _creator: {\r\n    type: mongoose.Schema.Types.ObjectId,\r\n    required: true\r\n  }\r\n});\r\n\r\nmodule.exports = {Todo};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvdG9kby5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21vZGVscy90b2RvLmpzPzQyZjQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xyXG5cclxuY29uc3QgVG9kbyA9IG1vbmdvb3NlLm1vZGVsKCdUb2RvJywge1xyXG4gIHRleHQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbWlubGVuZ3RoOiAxLFxyXG4gICAgICB0cmltOiB0cnVlXHJcbiAgfSxcclxuICBjb21wbGV0ZWQ6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdDogZmFsc2VcclxuICB9LFxyXG4gIGNvbXBsZXRlZEF0OiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgZGVmYXVsdDogbnVsbFxyXG4gIH0sXHJcbiAgX2NyZWF0b3I6IHtcclxuICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1RvZG99O1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/todo.js\n");

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst validator = __webpack_require__(/*! validator */ \"validator\");\r\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\r\nconst _ = __webpack_require__(/*! lodash */ \"lodash\");\r\nconst bcrypt = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\r\n\r\nconst UserSchema = new mongoose.Schema({\r\n  email: {\r\n    type: String,\r\n    required: true,\r\n    trim: true,\r\n    minlength: 1,\r\n    unique: true,\r\n    validate: {\r\n      validator: validator.isEmail,\r\n      message: '{VALUE} is not a valid email'\r\n    }\r\n  },\r\n  password: {\r\n    type: String,\r\n    required: true,\r\n    minlength: 6\r\n  },\r\n  tokens: [{\r\n    access: {\r\n      type: String,\r\n      required: true\r\n    },\r\n    token: {\r\n      type: String,\r\n      required: true\r\n    }\r\n  }]\r\n});\r\n\r\n\r\nUserSchema.methods.toJSON = function () {\r\n  let user = this;\r\n  const userObject = user.toObject();\r\n\r\n  return _.pick(userObject, ['_id', 'email']);\r\n};\r\n\r\n// Instance function.\r\n// Not using arrow function here because they do not bind \"this\" keyword.\r\nUserSchema.methods.generateAuthToken = function () {\r\n  let user = this;\r\n  const access = 'auth';\r\n  const token = jwt.sign({ _id: user._id.toHexString(), access}, 'abc123').toString();\r\n  user.tokens = user.tokens.concat([{access, token}]);\r\n\r\n  return user.save().then(() => {\r\n    return token;\r\n  });\r\n};\r\n\r\n// Model method\r\nUserSchema.statics.findByToken = function (token) {\r\n  const User = this;\r\n  let decoded;\r\n\r\n  try {\r\n    // jwt.verify will throw an error if anything goes wrong.\r\n    decoded = jwt.verify(token, 'abc123');\r\n  } catch (e) {\r\n    return Promise.reject();\r\n  }\r\n  // Quotes are required if you have a .value\r\n  return User.findOne({\r\n    _id: decoded._id,\r\n    'tokens.token': token,\r\n    'tokens.access': 'auth'\r\n  });\r\n};\r\n\r\nUserSchema.statics.findByCredentials = function (email, password) {\r\n  const User = this;\r\n\r\n\r\n  return User.findOne({email}).then((user) => {\r\n    if(!user) {\r\n      return Promise.reject();\r\n    }\r\n\r\n    return new Promise((resolve, reject) => {\r\n      bcrypt.compare(password, user.password, (err, res) => {\r\n        if (res) {\r\n          resolve(user);\r\n        } else {\r\n          reject();\r\n        }\r\n      })\r\n    })\r\n  });\r\n};\r\n\r\nUserSchema.methods.removeToken = function (token) {\r\n  let user = this;\r\n\r\n  user.update({\r\n    $pull: {\r\n      tokens: {\r\n        token: token\r\n      }\r\n    }\r\n  })\r\n};\r\n\r\nUserSchema.pre('save', function (next) {\r\n  const user = this;\r\n\r\n  if(user.isModified('password')) {\r\n    bcrypt.genSalt(10, (err, salt) => {\r\n      bcrypt.hash(user.password, salt, (err, hash) => {\r\n        user.password = hash;\r\n        next();\r\n      })\r\n    })\r\n  } else {\r\n    next();\r\n  }\r\n\r\n})\r\nvar User = mongoose.model('User', UserSchema);\r\n\r\nmodule.exports = {User};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvdXNlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21vZGVscy91c2VyLmpzPzFmNjkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xyXG5jb25zdCB2YWxpZGF0b3IgPSByZXF1aXJlKCd2YWxpZGF0b3InKTtcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XHJcbmNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcclxuY29uc3QgYmNyeXB0ID0gcmVxdWlyZSgnYmNyeXB0anMnKTtcclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBlbWFpbDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB0cmltOiB0cnVlLFxyXG4gICAgbWlubGVuZ3RoOiAxLFxyXG4gICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgdmFsaWRhdGU6IHtcclxuICAgICAgdmFsaWRhdG9yOiB2YWxpZGF0b3IuaXNFbWFpbCxcclxuICAgICAgbWVzc2FnZTogJ3tWQUxVRX0gaXMgbm90IGEgdmFsaWQgZW1haWwnXHJcbiAgICB9XHJcbiAgfSxcclxuICBwYXNzd29yZDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICBtaW5sZW5ndGg6IDZcclxuICB9LFxyXG4gIHRva2VuczogW3tcclxuICAgIGFjY2Vzczoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgdG9rZW46IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfVxyXG4gIH1dXHJcbn0pO1xyXG5cclxuXHJcblVzZXJTY2hlbWEubWV0aG9kcy50b0pTT04gPSBmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IHVzZXIgPSB0aGlzO1xyXG4gIGNvbnN0IHVzZXJPYmplY3QgPSB1c2VyLnRvT2JqZWN0KCk7XHJcblxyXG4gIHJldHVybiBfLnBpY2sodXNlck9iamVjdCwgWydfaWQnLCAnZW1haWwnXSk7XHJcbn07XHJcblxyXG4vLyBJbnN0YW5jZSBmdW5jdGlvbi5cclxuLy8gTm90IHVzaW5nIGFycm93IGZ1bmN0aW9uIGhlcmUgYmVjYXVzZSB0aGV5IGRvIG5vdCBiaW5kIFwidGhpc1wiIGtleXdvcmQuXHJcblVzZXJTY2hlbWEubWV0aG9kcy5nZW5lcmF0ZUF1dGhUb2tlbiA9IGZ1bmN0aW9uICgpIHtcclxuICBsZXQgdXNlciA9IHRoaXM7XHJcbiAgY29uc3QgYWNjZXNzID0gJ2F1dGgnO1xyXG4gIGNvbnN0IHRva2VuID0gand0LnNpZ24oeyBfaWQ6IHVzZXIuX2lkLnRvSGV4U3RyaW5nKCksIGFjY2Vzc30sICdhYmMxMjMnKS50b1N0cmluZygpO1xyXG4gIHVzZXIudG9rZW5zID0gdXNlci50b2tlbnMuY29uY2F0KFt7YWNjZXNzLCB0b2tlbn1dKTtcclxuXHJcbiAgcmV0dXJuIHVzZXIuc2F2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRva2VuO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8gTW9kZWwgbWV0aG9kXHJcblVzZXJTY2hlbWEuc3RhdGljcy5maW5kQnlUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gIGNvbnN0IFVzZXIgPSB0aGlzO1xyXG4gIGxldCBkZWNvZGVkO1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8gand0LnZlcmlmeSB3aWxsIHRocm93IGFuIGVycm9yIGlmIGFueXRoaW5nIGdvZXMgd3JvbmcuXHJcbiAgICBkZWNvZGVkID0gand0LnZlcmlmeSh0b2tlbiwgJ2FiYzEyMycpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xyXG4gIH1cclxuICAvLyBRdW90ZXMgYXJlIHJlcXVpcmVkIGlmIHlvdSBoYXZlIGEgLnZhbHVlXHJcbiAgcmV0dXJuIFVzZXIuZmluZE9uZSh7XHJcbiAgICBfaWQ6IGRlY29kZWQuX2lkLFxyXG4gICAgJ3Rva2Vucy50b2tlbic6IHRva2VuLFxyXG4gICAgJ3Rva2Vucy5hY2Nlc3MnOiAnYXV0aCdcclxuICB9KTtcclxufTtcclxuXHJcblVzZXJTY2hlbWEuc3RhdGljcy5maW5kQnlDcmVkZW50aWFscyA9IGZ1bmN0aW9uIChlbWFpbCwgcGFzc3dvcmQpIHtcclxuICBjb25zdCBVc2VyID0gdGhpcztcclxuXHJcblxyXG4gIHJldHVybiBVc2VyLmZpbmRPbmUoe2VtYWlsfSkudGhlbigodXNlcikgPT4ge1xyXG4gICAgaWYoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQsIChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgIHJlc29sdmUodXNlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSk7XHJcbn07XHJcblxyXG5Vc2VyU2NoZW1hLm1ldGhvZHMucmVtb3ZlVG9rZW4gPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICBsZXQgdXNlciA9IHRoaXM7XHJcblxyXG4gIHVzZXIudXBkYXRlKHtcclxuICAgICRwdWxsOiB7XHJcbiAgICAgIHRva2Vuczoge1xyXG4gICAgICAgIHRva2VuOiB0b2tlblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxufTtcclxuXHJcblVzZXJTY2hlbWEucHJlKCdzYXZlJywgZnVuY3Rpb24gKG5leHQpIHtcclxuICBjb25zdCB1c2VyID0gdGhpcztcclxuXHJcbiAgaWYodXNlci5pc01vZGlmaWVkKCdwYXNzd29yZCcpKSB7XHJcbiAgICBiY3J5cHQuZ2VuU2FsdCgxMCwgKGVyciwgc2FsdCkgPT4ge1xyXG4gICAgICBiY3J5cHQuaGFzaCh1c2VyLnBhc3N3b3JkLCBzYWx0LCAoZXJyLCBoYXNoKSA9PiB7XHJcbiAgICAgICAgdXNlci5wYXNzd29yZCA9IGhhc2g7XHJcbiAgICAgICAgbmV4dCgpO1xyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9IGVsc2Uge1xyXG4gICAgbmV4dCgpO1xyXG4gIH1cclxuXHJcbn0pXHJcbnZhciBVc2VyID0gbW9uZ29vc2UubW9kZWwoJ1VzZXInLCBVc2VyU2NoZW1hKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1VzZXJ9O1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/user.js\n");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./config/config.js */ \"./config/config.js\");\r\nconst {mongoose} = __webpack_require__(/*! ./db/mongoose */ \"./db/mongoose.js\");\r\n\r\nconst express = __webpack_require__(/*! express */ \"express\");\r\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\r\n\r\nconst { addRoutes } = __webpack_require__(/*! ../controllers/controller.js */ \"../controllers/controller.js\");\r\n\r\nconst app = express();\r\nconst port = process.env.PORT || 3000; //To deploy to heroku\r\n\r\napp.use(bodyParser.json());\r\n\r\naddRoutes(app);\r\n\r\napp.listen(port, () => {\r\n  console.log(`Started on port ${port}.`);\r\n})\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIuanM/MWQ2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuL2NvbmZpZy9jb25maWcuanMnKTtcclxuY29uc3Qge21vbmdvb3NlfSA9IHJlcXVpcmUoJy4vZGIvbW9uZ29vc2UnKTtcclxuXHJcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xyXG5cclxuY29uc3QgeyBhZGRSb3V0ZXMgfSA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXIuanMnKTtcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDsgLy9UbyBkZXBsb3kgdG8gaGVyb2t1XHJcblxyXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcclxuXHJcbmFkZFJvdXRlcyhhcHApO1xyXG5cclxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYFN0YXJ0ZWQgb24gcG9ydCAke3BvcnR9LmApO1xyXG59KVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./server.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi babel-polyfill ./server.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"babel-polyfill");
module.exports = __webpack_require__(/*! ./server.js */"./server.js");


/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFiZWwtcG9seWZpbGwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiPzYzNjIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcG9seWZpbGxcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///babel-polyfill\n");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNyeXB0anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRqc1wiP2NlNTUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0anNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///bcryptjs\n");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1wYXJzZXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzgxODgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///body-parser\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "http-status-codes":
/*!************************************!*\
  !*** external "http-status-codes" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-status-codes\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1zdGF0dXMtY29kZXMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwLXN0YXR1cy1jb2Rlc1wiPzgyMjkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cC1zdGF0dXMtY29kZXNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///http-status-codes\n");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbndlYnRva2VuLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCI/NjQ5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jsonwebtoken\n");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kYXNoLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCI/OTdkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///lodash\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29kYi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIj9kZWZmIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidmFsaWRhdG9yXCI/YjBjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2YWxpZGF0b3JcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///validator\n");

/***/ })

/******/ });