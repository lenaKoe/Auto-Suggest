(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var UIElements = {
    input: document.getElementById("input-field"),
    suggestfield: document.getElementsByClassName("suggest-field"),
    suggestcontainer: document.getElementById("suggest-container")
};

exports.default = UIElements;

},{}],2:[function(require,module,exports){
"use strict";

var _UIManager = require("./UIManager.js");

var _UIManager2 = _interopRequireDefault(_UIManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var input = _UIManager2.default.input,
    suggestfield = _UIManager2.default.suggestfield;

var languagelist = {
    "name": ["Mandarin", "Englisch", "Hindi", "Spanisch", "Arabisch", "Bengali", "Portugiesich", "Russisch", "Deutsch", "Japanisch", "Französisch", "Javanisch", "Vietnam-esisch", "Lahnda", "Koreanisch", "Telugu", "Italienisch", "Marathi", "Urdu"]
};

var name = languagelist.name;

input.oninput = function () {
    var count = 0;
    var suggest = new Array(count);
    for (var i = 0; i < name.length; i++) {
        if (name[i].includes(input.value) == true) {
            suggest[count] = name[i];
            count++;
        }
    }
    for (var i = 0; i < suggest.length; i++) {
        var field = document.createElement("div");
        field.className = "suggest-field";
        var container = _UIManager2.default.suggestcontainer;
        container.appendChild(field);
        suggestfield[i].innerHTML = suggest[i];
    }

    input.onkeydown = function () {
        console.log("change");
        var element = _UIManager2.default.suggestcontainer;
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    };
};

},{"./UIManager.js":1}]},{},[2]);
