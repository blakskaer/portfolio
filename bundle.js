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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var firstText = '<p>Hello, my name is Andreas.</p>';
var secondText = '<p>I am a web developer.</p>';

var salutation = firstText;
document.getElementById('salute').innerHTML = salutation;

function changeValue() {
    if (salutation == firstText) {
        salutation = secondText;
        document.getElementById('salute').innerHTML = salutation;
    } else {
        salutation = firstText;
        document.getElementById('salute').innerHTML = salutation;
    }
}

setInterval(changeValue, 1700);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// var projects = [
//     {
//         id: 'project3',
//         title: 'cargo',
//         alt: '',
//         icon: '<i class="fa fa-5x fa-gamepad"></i>',
//         description: 'game written in python',
//         language: 'python',
//         link: ''
//     },
//     {
//         id: 'project2',
//         title: 'cargo',
//         alt: '',
//         icon: '<i class="fa fa-5x fa-gamepad"></i>',
//         description: 'game written in python',
//         language: 'python',
//         link: ''
//     },
//     {
//         id: 'project1',
//         title: 'cargo',
//         alt: '',
//         icon: '<i class="fa fa-5x fa-gamepad"></i>',
//         description: 'game written in python',
//         language: 'python',
//         link: ''
//     },
// ];

// {
//     var i = projects.length;
//     while(i--) {
//         const workIcons = 
//         `<a href={} id="icon-${projects[i].id}" class="projectsClass">${projects[i].icon}</a>`;
//         document.getElementById('work-icons').innerHTML += workIcons;
//     };
// }

// {
//     var i = projects.length;
//     while(i--) {
//         const workText = 
//         `<div id="text-${projects[i].id}" >
//             <h2>${projects[i].title}</h2>
//             <h3>${projects[i].description}</h3>
//             <p>${projects[i].language}</p>
//         </div>`;
//         document.getElementById('work-text').innerHTML += workText;
//     };
// }


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aboutText = '<p>I\'m a web developer living in Berlin.<br>\nI enjoy creating simple and aesthetic solutions through clean code,<br> making use of my background in cultural studies and psychology of language.<br>\nBesides coding I love learning new languages, running and creating music.</p>';

var descriptionText = aboutText;
document.getElementById('description').innerHTML = descriptionText;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var contactMe = [{
    p: 'I\'m looking forward to hearing from you.'
}];

{
    var i = contactMe.length;
    while (i--) {
        var contactMeText = '<p>' + contactMe[i].p + '</p>';
        document.getElementById('contact-me').innerHTML += contactMeText;
    };
}

/***/ })
/******/ ]);