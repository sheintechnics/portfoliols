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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/index.js":
/*!*************************************!*\
  !*** ./src/assets/scripts/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/parallaxMouse.js */ \"./src/assets/scripts/modules/parallaxMouse.js\");\n\n__webpack_require__(/*! ./modules/preloader.js */ \"./src/assets/scripts/modules/preloader.js\");\n\n__webpack_require__(/*! ./modules/validation.js */ \"./src/assets/scripts/modules/validation.js\");\n\n__webpack_require__(/*! ./modules/flip.js */ \"./src/assets/scripts/modules/flip.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvaW5kZXguanM/OTQ5MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9tb2R1bGVzL3BhcmFsbGF4TW91c2UuanNcIjtcclxuaW1wb3J0IFwiLi9tb2R1bGVzL3ByZWxvYWRlci5qc1wiO1xyXG5pbXBvcnQgXCIuL21vZHVsZXMvdmFsaWRhdGlvbi5qc1wiO1xyXG5pbXBvcnQgXCIuL21vZHVsZXMvZmxpcC5qc1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/index.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/flip.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/modules/flip.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// document.querySelector(\"#myCard\").classList.toggle(\"flip\");\n\nvar btnFlip = document.getElementById('btnFlip');\nvar flipper = document.getElementById('flipper');\n\nbtnFlip.addEventListener('click', function () {\n    flipper.classList.toggle('flip');\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mbGlwLmpzPzdiMmQiXSwibmFtZXMiOlsiYnRuRmxpcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmbGlwcGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFJQSxVQUFVQyxTQUFTQyxjQUFULENBQXdCLFNBQXhCLENBQWQ7QUFDQSxJQUFJQyxVQUFVRixTQUFTQyxjQUFULENBQXdCLFNBQXhCLENBQWQ7O0FBRUFGLFFBQVFJLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQVc7QUFDekNELFlBQVFFLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLE1BQXpCO0FBQ0gsQ0FGRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2ZsaXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215Q2FyZFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiZmxpcFwiKTtcclxuXHJcbnZhciBidG5GbGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkZsaXAnKTtcclxudmFyIGZsaXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxpcHBlcicpO1xyXG5cclxuYnRuRmxpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgZmxpcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdmbGlwJyk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/flip.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/parallaxMouse.js":
/*!*****************************************************!*\
  !*** ./src/assets/scripts/modules/parallaxMouse.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar parallaxContainer = document.querySelector('.parallax');\nvar layers = Array.from(parallaxContainer.children);\n\nvar moveLayers = function moveLayers(e) {\n\tvar initialX = window.innerWidth / 2 - e.pageX;\n\tvar initialY = window.innerHeight / 2 - e.pageY;\n\n\tlayers.forEach(function (layer, i) {\n\t\tvar divider = i / 150;\n\t\tvar positionX = initialX * divider;\n\t\tvar positionY = initialY * divider;\n\t\tlayer.style.transform = 'translate(' + positionX + 'px, ' + positionY + 'px)';\n\t});\n};\n\nwindow.addEventListener('mousemove', moveLayers);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wYXJhbGxheE1vdXNlLmpzP2FkMjIiXSwibmFtZXMiOlsicGFyYWxsYXhDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsYXllcnMiLCJBcnJheSIsImZyb20iLCJjaGlsZHJlbiIsIm1vdmVMYXllcnMiLCJpbml0aWFsWCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJlIiwicGFnZVgiLCJpbml0aWFsWSIsImlubmVySGVpZ2h0IiwicGFnZVkiLCJmb3JFYWNoIiwibGF5ZXIiLCJpIiwiZGl2aWRlciIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsInN0eWxlIiwidHJhbnNmb3JtIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxvQkFBb0JDLFNBQVNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBMUI7QUFDQSxJQUFNQyxTQUFTQyxNQUFNQyxJQUFOLENBQVdMLGtCQUFrQk0sUUFBN0IsQ0FBZjs7QUFFQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWEsSUFBSztBQUN2QixLQUFNQyxXQUFZQyxPQUFPQyxVQUFQLEdBQWtCLENBQW5CLEdBQXdCQyxFQUFFQyxLQUEzQztBQUNBLEtBQU1DLFdBQVlKLE9BQU9LLFdBQVAsR0FBbUIsQ0FBcEIsR0FBeUJILEVBQUVJLEtBQTVDOztBQUVBWixRQUFPYSxPQUFQLENBQWUsVUFBQ0MsS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFDNUIsTUFBTUMsVUFBVUQsSUFBRSxHQUFsQjtBQUNBLE1BQU1FLFlBQVlaLFdBQVNXLE9BQTNCO0FBQ0EsTUFBTUUsWUFBWVIsV0FBU00sT0FBM0I7QUFDQUYsUUFBTUssS0FBTixDQUFZQyxTQUFaLGtCQUFxQ0gsU0FBckMsWUFBcURDLFNBQXJEO0FBQ0EsRUFMRDtBQU1BLENBVkQ7O0FBWUFaLE9BQU9lLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDakIsVUFBckMiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wYXJhbGxheE1vdXNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGFyYWxsYXhDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyYWxsYXgnKTtcclxuY29uc3QgbGF5ZXJzID0gQXJyYXkuZnJvbShwYXJhbGxheENvbnRhaW5lci5jaGlsZHJlbik7XHJcblxyXG5jb25zdCBtb3ZlTGF5ZXJzID0gZSA9PiB7XHJcblx0Y29uc3QgaW5pdGlhbFggPSAod2luZG93LmlubmVyV2lkdGgvMikgLSBlLnBhZ2VYO1xyXG5cdGNvbnN0IGluaXRpYWxZID0gKHdpbmRvdy5pbm5lckhlaWdodC8yKSAtIGUucGFnZVk7XHJcblxyXG5cdGxheWVycy5mb3JFYWNoKChsYXllciwgaSkgPT4ge1xyXG5cdFx0Y29uc3QgZGl2aWRlciA9IGkvMTUwO1xyXG5cdFx0Y29uc3QgcG9zaXRpb25YID0gaW5pdGlhbFgqZGl2aWRlcjtcclxuXHRcdGNvbnN0IHBvc2l0aW9uWSA9IGluaXRpYWxZKmRpdmlkZXI7XHJcblx0XHRsYXllci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7cG9zaXRpb25YfXB4LCAke3Bvc2l0aW9uWX1weClgO1xyXG5cdH0pO1xyXG59IFxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdmVMYXllcnMpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/parallaxMouse.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/preloader.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/modules/preloader.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar images = document.images,\n    imagesTotalCount = images.length,\n    imagesLoadedCount = 0,\n    preloader = document.getElementById('page-preloader'),\n    percDisplay = document.getElementById('load_perc');\n\nfor (var i = 0; i < imagesTotalCount; i++) {\n\tvar imageClone = new Image();\n\timageClone.onload = imageLoaded;\n\timageClone.onerror = imageLoaded;\n\timageClone.src = images[i].src;\n}\n\n// console.log(imagesTotalCount);\n// console.log(imagesLoadedCount);\n\n\nfunction imageLoaded() {\n\timagesLoadedCount++;\n\t// console.log(imagesLoadedCount);\n\tpercDisplay.innerHTML = (100 / imagesTotalCount * imagesLoadedCount << 0) + '%';\n\t// console.log((100/imagesTotalCount)*imagesLoadedCount);\n\tif (imagesLoadedCount >= imagesTotalCount) {\n\t\twindow.onload = function () {\n\t\t\tvar div = document.querySelector('.wrapper');\n\t\t\tsetTimeout(function () {\n\t\t\t\tif (!preloader.classList.contains('done')) {\n\t\t\t\t\tpreloader.classList.add('done');\n\t\t\t\t}\n\t\t\t}, 2000);\n\t\t\tdiv.classList.add('visible');\n\t\t};\n\t}\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wcmVsb2FkZXIuanM/MGEwOSJdLCJuYW1lcyI6WyJpbWFnZXMiLCJkb2N1bWVudCIsImltYWdlc1RvdGFsQ291bnQiLCJsZW5ndGgiLCJpbWFnZXNMb2FkZWRDb3VudCIsInByZWxvYWRlciIsImdldEVsZW1lbnRCeUlkIiwicGVyY0Rpc3BsYXkiLCJpIiwiaW1hZ2VDbG9uZSIsIkltYWdlIiwib25sb2FkIiwiaW1hZ2VMb2FkZWQiLCJvbmVycm9yIiwic3JjIiwiaW5uZXJIVE1MIiwid2luZG93IiwiZGl2IiwicXVlcnlTZWxlY3RvciIsInNldFRpbWVvdXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUNDQSxTQUFTQyxTQUFTRCxNQURuQjtBQUFBLElBRUNFLG1CQUFtQkYsT0FBT0csTUFGM0I7QUFBQSxJQUdDQyxvQkFBb0IsQ0FIckI7QUFBQSxJQUlDQyxZQUFZSixTQUFTSyxjQUFULENBQXdCLGdCQUF4QixDQUpiO0FBQUEsSUFLQ0MsY0FBY04sU0FBU0ssY0FBVCxDQUF3QixXQUF4QixDQUxmOztBQU9BLEtBQUksSUFBSUUsSUFBSSxDQUFaLEVBQWVBLElBQUlOLGdCQUFuQixFQUFxQ00sR0FBckMsRUFDQztBQUNDLEtBQUlDLGFBQWEsSUFBSUMsS0FBSixFQUFqQjtBQUNBRCxZQUFXRSxNQUFYLEdBQW9CQyxXQUFwQjtBQUNBSCxZQUFXSSxPQUFYLEdBQXFCRCxXQUFyQjtBQUNBSCxZQUFXSyxHQUFYLEdBQWlCZCxPQUFPUSxDQUFQLEVBQVVNLEdBQTNCO0FBQ0E7O0FBRUQ7QUFDQTs7O0FBR0QsU0FBU0YsV0FBVCxHQUF1QjtBQUN0QlI7QUFDQTtBQUNBRyxhQUFZUSxTQUFaLEdBQXdCLENBQUcsTUFBSWIsZ0JBQUwsR0FBdUJFLGlCQUF4QixJQUE0QyxDQUE3QyxJQUFrRCxHQUExRTtBQUNBO0FBQ0EsS0FBR0EscUJBQXFCRixnQkFBeEIsRUFBeUM7QUFDeENjLFNBQU9MLE1BQVAsR0FBZ0IsWUFBVztBQUMxQixPQUFJTSxNQUFNaEIsU0FBU2lCLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBVjtBQUNBQyxjQUFXLFlBQVc7QUFDckIsUUFBRyxDQUFDZCxVQUFVZSxTQUFWLENBQW9CQyxRQUFwQixDQUE2QixNQUE3QixDQUFKLEVBQXlDO0FBQ3hDaEIsZUFBVWUsU0FBVixDQUFvQkUsR0FBcEIsQ0FBd0IsTUFBeEI7QUFDQTtBQUNELElBSkQsRUFJRyxJQUpIO0FBS0FMLE9BQUlHLFNBQUosQ0FBY0UsR0FBZCxDQUFrQixTQUFsQjtBQUNBLEdBUkQ7QUFTQTtBQUNEIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvcHJlbG9hZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyXHJcblx0aW1hZ2VzID0gZG9jdW1lbnQuaW1hZ2VzLFxyXG5cdGltYWdlc1RvdGFsQ291bnQgPSBpbWFnZXMubGVuZ3RoLFxyXG5cdGltYWdlc0xvYWRlZENvdW50ID0gMCxcclxuXHRwcmVsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1wcmVsb2FkZXInKSxcclxuXHRwZXJjRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkX3BlcmMnKTtcclxuXHJcbmZvcih2YXIgaSA9IDA7IGkgPCBpbWFnZXNUb3RhbENvdW50OyBpKyspXHJcblx0e1xyXG5cdFx0dmFyIGltYWdlQ2xvbmUgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdGltYWdlQ2xvbmUub25sb2FkID0gaW1hZ2VMb2FkZWQ7XHJcblx0XHRpbWFnZUNsb25lLm9uZXJyb3IgPSBpbWFnZUxvYWRlZDtcclxuXHRcdGltYWdlQ2xvbmUuc3JjID0gaW1hZ2VzW2ldLnNyYztcclxuXHR9XHJcblxyXG5cdC8vIGNvbnNvbGUubG9nKGltYWdlc1RvdGFsQ291bnQpO1xyXG5cdC8vIGNvbnNvbGUubG9nKGltYWdlc0xvYWRlZENvdW50KTtcclxuXHRcclxuXHJcbmZ1bmN0aW9uIGltYWdlTG9hZGVkKCkge1xyXG5cdGltYWdlc0xvYWRlZENvdW50Kys7XHJcblx0Ly8gY29uc29sZS5sb2coaW1hZ2VzTG9hZGVkQ291bnQpO1xyXG5cdHBlcmNEaXNwbGF5LmlubmVySFRNTCA9ICgoKDEwMC9pbWFnZXNUb3RhbENvdW50KSppbWFnZXNMb2FkZWRDb3VudCk8PDApICsgJyUnO1xyXG5cdC8vIGNvbnNvbGUubG9nKCgxMDAvaW1hZ2VzVG90YWxDb3VudCkqaW1hZ2VzTG9hZGVkQ291bnQpO1xyXG5cdGlmKGltYWdlc0xvYWRlZENvdW50ID49IGltYWdlc1RvdGFsQ291bnQpe1xyXG5cdFx0d2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZighcHJlbG9hZGVyLmNsYXNzTGlzdC5jb250YWlucygnZG9uZScpKXtcclxuXHRcdFx0XHRcdHByZWxvYWRlci5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCAyMDAwKTtcclxuXHRcdFx0ZGl2LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/preloader.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/validation.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/modules/validation.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar form = document.querySelector('.login__form');\nvar formButton = document.querySelector('.btn__form');\nform.onsubmit = function (e) {\n  e.preventDefault();\n};\nformButton.addEventListener('click', function () {\n  validation().init(form);\n});\n\nfunction validation() {\n  function showError(container, errorMessage) {\n    container.classList.add('error');\n    var msgElem = document.createElement('span');\n    msgElem.className = \"error-message\";\n    msgElem.innerHTML = errorMessage;\n    container.appendChild(msgElem);\n  }\n\n  function resetError(container) {\n    container.classList.remove('error');\n    if (container.lastChild.className == \"error-message\") {\n      container.removeChild(container.lastChild);\n    }\n  }\n\n  function initValidation(form) {\n    var elems = form.elements;\n    if (elems.name) {\n      resetError(elems.name.parentNode);\n      if (!elems.name.value) {\n        showError(elems.name.parentNode, 'Введите ваше имя!');\n      }\n    }\n\n    if (elems.login) {\n      resetError(elems.login.parentNode);\n      if (!elems.login.value) {\n        showError(elems.login.parentNode, 'Введите ваш логин!');\n      }\n    }\n\n    if (elems.human) {\n      resetError(elems.human.parentNode);\n      if (!elems.human.checked) {\n        showError(elems.human.parentNode, 'А кто ты?');\n      }\n    }\n\n    if (elems.password) {\n      resetError(elems.password.parentNode);\n      if (!elems.password.value) {\n        showError(elems.password.parentNode, 'Вы забыли ввести пароль!');\n      }\n    }\n\n    if (elems.email) {\n      resetError(elems.email.parentNode);\n      if (!elems.email.value) {\n        showError(elems.email.parentNode, 'Вы не ввели ваш почтовый ящик!');\n      } else {\n        var reg = /^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$/;\n        if (reg.test(elems.email.value) == false) {\n          showError(elems.email.parentNode, 'Введите корректный e-mail!');\n        }\n      }\n    }\n\n    if (elems.message) {\n      resetError(elems.message.parentNode);\n      if (!elems.message.value) {\n        showError(elems.message.parentNode, 'Напишите сообщение!');\n      }\n    }\n  }\n\n  return {\n    init: initValidation\n  };\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy92YWxpZGF0aW9uLmpzP2FlZTQiXSwibmFtZXMiOlsiZm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvcm1CdXR0b24iLCJvbnN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWxpZGF0aW9uIiwiaW5pdCIsInNob3dFcnJvciIsImNvbnRhaW5lciIsImVycm9yTWVzc2FnZSIsImNsYXNzTGlzdCIsImFkZCIsIm1zZ0VsZW0iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJyZXNldEVycm9yIiwicmVtb3ZlIiwibGFzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJpbml0VmFsaWRhdGlvbiIsImVsZW1zIiwiZWxlbWVudHMiLCJuYW1lIiwicGFyZW50Tm9kZSIsInZhbHVlIiwibG9naW4iLCJodW1hbiIsImNoZWNrZWQiLCJwYXNzd29yZCIsImVtYWlsIiwicmVnIiwidGVzdCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsT0FBT0MsU0FBU0MsYUFBVCxDQUF1QixjQUF2QixDQUFiO0FBQ0EsSUFBTUMsYUFBYUYsU0FBU0MsYUFBVCxDQUF1QixZQUF2QixDQUFuQjtBQUNBRixLQUFLSSxRQUFMLEdBQWdCLFVBQVNDLENBQVQsRUFBVztBQUN6QkEsSUFBRUMsY0FBRjtBQUNELENBRkQ7QUFHQUgsV0FBV0ksZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBVTtBQUM3Q0MsZUFBYUMsSUFBYixDQUFrQlQsSUFBbEI7QUFDRCxDQUZEOztBQUlBLFNBQVNRLFVBQVQsR0FBcUI7QUFDbkIsV0FBU0UsU0FBVCxDQUFtQkMsU0FBbkIsRUFBOEJDLFlBQTlCLEVBQTRDO0FBQzFDRCxjQUFVRSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixPQUF4QjtBQUNBLFFBQUlDLFVBQVVkLFNBQVNlLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBZDtBQUNBRCxZQUFRRSxTQUFSLEdBQW9CLGVBQXBCO0FBQ0FGLFlBQVFHLFNBQVIsR0FBb0JOLFlBQXBCO0FBQ0FELGNBQVVRLFdBQVYsQ0FBc0JKLE9BQXRCO0FBQ0Q7O0FBRUQsV0FBU0ssVUFBVCxDQUFvQlQsU0FBcEIsRUFBK0I7QUFDN0JBLGNBQVVFLFNBQVYsQ0FBb0JRLE1BQXBCLENBQTJCLE9BQTNCO0FBQ0EsUUFBSVYsVUFBVVcsU0FBVixDQUFvQkwsU0FBcEIsSUFBaUMsZUFBckMsRUFBc0Q7QUFDcEROLGdCQUFVWSxXQUFWLENBQXNCWixVQUFVVyxTQUFoQztBQUNEO0FBQ0Y7O0FBRUQsV0FBU0UsY0FBVCxDQUF3QnhCLElBQXhCLEVBQTZCO0FBQzNCLFFBQUl5QixRQUFRekIsS0FBSzBCLFFBQWpCO0FBQ0EsUUFBR0QsTUFBTUUsSUFBVCxFQUFjO0FBQ1pQLGlCQUFXSyxNQUFNRSxJQUFOLENBQVdDLFVBQXRCO0FBQ0EsVUFBSSxDQUFDSCxNQUFNRSxJQUFOLENBQVdFLEtBQWhCLEVBQXVCO0FBQ3JCbkIsa0JBQVVlLE1BQU1FLElBQU4sQ0FBV0MsVUFBckIsRUFBaUMsbUJBQWpDO0FBQ0Q7QUFDRjs7QUFFRCxRQUFHSCxNQUFNSyxLQUFULEVBQWU7QUFDYlYsaUJBQVdLLE1BQU1LLEtBQU4sQ0FBWUYsVUFBdkI7QUFDQSxVQUFJLENBQUNILE1BQU1LLEtBQU4sQ0FBWUQsS0FBakIsRUFBd0I7QUFDdEJuQixrQkFBVWUsTUFBTUssS0FBTixDQUFZRixVQUF0QixFQUFrQyxvQkFBbEM7QUFDRDtBQUNGOztBQUVELFFBQUdILE1BQU1NLEtBQVQsRUFBZTtBQUNiWCxpQkFBV0ssTUFBTU0sS0FBTixDQUFZSCxVQUF2QjtBQUNBLFVBQUksQ0FBQ0gsTUFBTU0sS0FBTixDQUFZQyxPQUFqQixFQUEwQjtBQUN4QnRCLGtCQUFVZSxNQUFNTSxLQUFOLENBQVlILFVBQXRCLEVBQWtDLFdBQWxDO0FBQ0Q7QUFDRjs7QUFFRCxRQUFJSCxNQUFNUSxRQUFWLEVBQW1CO0FBQ2pCYixpQkFBV0ssTUFBTVEsUUFBTixDQUFlTCxVQUExQjtBQUNBLFVBQUksQ0FBQ0gsTUFBTVEsUUFBTixDQUFlSixLQUFwQixFQUEyQjtBQUN6Qm5CLGtCQUFVZSxNQUFNUSxRQUFOLENBQWVMLFVBQXpCLEVBQXFDLDBCQUFyQztBQUNEO0FBQ0Y7O0FBRUQsUUFBR0gsTUFBTVMsS0FBVCxFQUFlO0FBQ2JkLGlCQUFXSyxNQUFNUyxLQUFOLENBQVlOLFVBQXZCO0FBQ0EsVUFBSSxDQUFDSCxNQUFNUyxLQUFOLENBQVlMLEtBQWpCLEVBQXdCO0FBQ3RCbkIsa0JBQVVlLE1BQU1TLEtBQU4sQ0FBWU4sVUFBdEIsRUFBa0MsZ0NBQWxDO0FBQ0QsT0FGRCxNQUVLO0FBQ0gsWUFBSU8sTUFBTSw2REFBVjtBQUNBLFlBQUdBLElBQUlDLElBQUosQ0FBU1gsTUFBTVMsS0FBTixDQUFZTCxLQUFyQixLQUErQixLQUFsQyxFQUF5QztBQUN2Q25CLG9CQUFVZSxNQUFNUyxLQUFOLENBQVlOLFVBQXRCLEVBQWtDLDRCQUFsQztBQUNGO0FBQ0Q7QUFDRjs7QUFFRCxRQUFHSCxNQUFNWSxPQUFULEVBQWlCO0FBQ2ZqQixpQkFBV0ssTUFBTVksT0FBTixDQUFjVCxVQUF6QjtBQUNBLFVBQUksQ0FBQ0gsTUFBTVksT0FBTixDQUFjUixLQUFuQixFQUEwQjtBQUN4Qm5CLGtCQUFVZSxNQUFNWSxPQUFOLENBQWNULFVBQXhCLEVBQW9DLHFCQUFwQztBQUNEO0FBQ0Y7QUFFRjs7QUFFRCxTQUFPO0FBQ0xuQixVQUFNZTtBQURELEdBQVA7QUFHRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3ZhbGlkYXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luX19mb3JtJyk7XHJcbmNvbnN0IGZvcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuX19mb3JtJyk7XHJcbmZvcm0ub25zdWJtaXQgPSBmdW5jdGlvbihlKXtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuZm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgdmFsaWRhdGlvbigpLmluaXQoZm9ybSk7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0aW9uKCl7XHJcbiAgZnVuY3Rpb24gc2hvd0Vycm9yKGNvbnRhaW5lciwgZXJyb3JNZXNzYWdlKSB7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgIHZhciBtc2dFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgbXNnRWxlbS5jbGFzc05hbWUgPSBcImVycm9yLW1lc3NhZ2VcIjtcclxuICAgIG1zZ0VsZW0uaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1zZ0VsZW0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRFcnJvcihjb250YWluZXIpIHtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xyXG4gICAgaWYgKGNvbnRhaW5lci5sYXN0Q2hpbGQuY2xhc3NOYW1lID09IFwiZXJyb3ItbWVzc2FnZVwiKSB7XHJcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRWYWxpZGF0aW9uKGZvcm0pe1xyXG4gICAgdmFyIGVsZW1zID0gZm9ybS5lbGVtZW50cztcclxuICAgIGlmKGVsZW1zLm5hbWUpe1xyXG4gICAgICByZXNldEVycm9yKGVsZW1zLm5hbWUucGFyZW50Tm9kZSk7XHJcbiAgICAgIGlmICghZWxlbXMubmFtZS52YWx1ZSkge1xyXG4gICAgICAgIHNob3dFcnJvcihlbGVtcy5uYW1lLnBhcmVudE5vZGUsICfQktCy0LXQtNC40YLQtSDQstCw0YjQtSDQuNC80Y8hJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihlbGVtcy5sb2dpbil7XHJcbiAgICAgIHJlc2V0RXJyb3IoZWxlbXMubG9naW4ucGFyZW50Tm9kZSk7XHJcbiAgICAgIGlmICghZWxlbXMubG9naW4udmFsdWUpIHtcclxuICAgICAgICBzaG93RXJyb3IoZWxlbXMubG9naW4ucGFyZW50Tm9kZSwgJ9CS0LLQtdC00LjRgtC1INCy0LDRiCDQu9C+0LPQuNC9IScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoZWxlbXMuaHVtYW4pe1xyXG4gICAgICByZXNldEVycm9yKGVsZW1zLmh1bWFuLnBhcmVudE5vZGUpO1xyXG4gICAgICBpZiAoIWVsZW1zLmh1bWFuLmNoZWNrZWQpIHtcclxuICAgICAgICBzaG93RXJyb3IoZWxlbXMuaHVtYW4ucGFyZW50Tm9kZSwgJ9CQINC60YLQviDRgtGLPycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVsZW1zLnBhc3N3b3JkKXtcclxuICAgICAgcmVzZXRFcnJvcihlbGVtcy5wYXNzd29yZC5wYXJlbnROb2RlKTtcclxuICAgICAgaWYgKCFlbGVtcy5wYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgIHNob3dFcnJvcihlbGVtcy5wYXNzd29yZC5wYXJlbnROb2RlLCAn0JLRiyDQt9Cw0LHRi9C70Lgg0LLQstC10YHRgtC4INC/0LDRgNC+0LvRjCEnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGVsZW1zLmVtYWlsKXtcclxuICAgICAgcmVzZXRFcnJvcihlbGVtcy5lbWFpbC5wYXJlbnROb2RlKTtcclxuICAgICAgaWYgKCFlbGVtcy5lbWFpbC52YWx1ZSkge1xyXG4gICAgICAgIHNob3dFcnJvcihlbGVtcy5lbWFpbC5wYXJlbnROb2RlLCAn0JLRiyDQvdC1INCy0LLQtdC70Lgg0LLQsNGIINC/0L7Rh9GC0L7QstGL0Lkg0Y/RidC40LohJyk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHZhciByZWcgPSAvXihbQS1aYS16MC05X1xcLVxcLl0pK1xcQChbQS1aYS16MC05X1xcLVxcLl0pK1xcLihbQS1aYS16XXsyLDR9KSQvO1xyXG4gICAgICAgIGlmKHJlZy50ZXN0KGVsZW1zLmVtYWlsLnZhbHVlKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgc2hvd0Vycm9yKGVsZW1zLmVtYWlsLnBhcmVudE5vZGUsICfQktCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90YvQuSBlLW1haWwhJyk7XHJcbiAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihlbGVtcy5tZXNzYWdlKXtcclxuICAgICAgcmVzZXRFcnJvcihlbGVtcy5tZXNzYWdlLnBhcmVudE5vZGUpO1xyXG4gICAgICBpZiAoIWVsZW1zLm1lc3NhZ2UudmFsdWUpIHtcclxuICAgICAgICBzaG93RXJyb3IoZWxlbXMubWVzc2FnZS5wYXJlbnROb2RlLCAn0J3QsNC/0LjRiNC40YLQtSDRgdC+0L7QsdGJ0LXQvdC40LUhJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW5pdDogaW5pdFZhbGlkYXRpb25cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/validation.js\n");

/***/ })

/******/ });