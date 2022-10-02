(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("DPlayer", [], factory);
	else if(typeof exports === 'object')
		exports["DPlayer"] = factory();
	else
		root["DPlayer"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/template/player.art":
/*!*********************************!*\
  !*** ./src/template/player.art ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $imports = __webpack_require__(/*! ../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $$blocks = arguments[1] || {}, include = function (content) {
            $$out += content;
            return $$out;
        }, video = $data.video, options = $data.options, $escape = $imports.$escape, tran = $data.tran, icons = $data.icons, index = $data.index, $each = $imports.$each, $value = $data.$value, $index = $data.$index;
    $$out += '<div class="dplayer-mask"></div>\n<div class="dplayer-video-wrap">\n    ';
    include(__webpack_require__(/*! ./video.art */ "./src/template/video.art")(video));
    $$out += '\n    ';
    if (options.logo) {
        $$out += '\n    <div class="dplayer-logo">\n        <img src="';
        $$out += $escape(options.logo);
        $$out += '">\n    </div>\n    ';
    }
    $$out += '\n    <div class="dplayer-danmaku"';
    if (options.danmaku && options.danmaku.bottm) {
        $$out += ' style="margin-bottom:';
        $$out += $escape(options.danmaku.bottm);
        $$out += '"';
    }
    $$out += '>\n        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>\n    </div>\n    <div class="dplayer-subtitle"></div>\n    <div class="dplayer-bezel">\n        <span class="dplayer-bezel-icon"></span>\n        ';
    if (options.danmaku) {
        $$out += '\n        <span class="dplayer-danloading">';
        $$out += $escape(tran('danmaku-loading'));
        $$out += '</span>\n        ';
    }
    $$out += '\n        <span class="diplayer-loading-icon">';
    $$out += icons.loading;
    $$out += '</span>\n    </div>\n</div>\n<div class="dplayer-controller-mask"></div>\n<div class="dplayer-controller">\n    <div class="dplayer-icons dplayer-comment-box">\n        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="';
    $$out += $escape(tran('setting'));
    $$out += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">';
    $$out += icons.pallette;
    $$out += '</span>\n        </button>\n        <div class="dplayer-comment-setting-box">\n            <div class="dplayer-comment-setting-color">\n                <div class="dplayer-comment-setting-title">';
    $$out += $escape(tran('set-danmaku-color'));
    $$out += '</div>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-';
    $$out += $escape(index);
    $$out += '" value="#fff" checked>\n                    <span style="background: #fff;"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-';
    $$out += $escape(index);
    $$out += '" value="#e54256">\n                    <span style="background: #e54256"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-';
    $$out += $escape(index);
    $$out += '" value="#ffe133">\n                    <span style="background: #ffe133"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-';
    $$out += $escape(index);
    $$out += '" value="#64DD17">\n                    <span style="background: #64DD17"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-';
    $$out += $escape(index);
    $$out += '" value="#39ccff">\n                    <span style="background: #39ccff"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-';
    $$out += $escape(index);
    $$out += '" value="#D500F9">\n                    <span style="background: #D500F9"></span>\n                </label>\n            </div>\n            <div class="dplayer-comment-setting-type">\n                <div class="dplayer-comment-setting-title">';
    $$out += $escape(tran('set-danmaku-type'));
    $$out += '</div>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-';
    $$out += $escape(index);
    $$out += '" value="1">\n                    <span>';
    $$out += $escape(tran('top'));
    $$out += '</span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-';
    $$out += $escape(index);
    $$out += '" value="0" checked>\n                    <span>';
    $$out += $escape(tran('rolling'));
    $$out += '</span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-';
    $$out += $escape(index);
    $$out += '" value="2">\n                    <span>';
    $$out += $escape(tran('bottom'));
    $$out += '</span>\n                </label>\n            </div>\n        </div>\n        <input class="dplayer-comment-input" type="text" placeholder="';
    $$out += $escape(tran('input-danmaku-enter'));
    $$out += '" maxlength="30">\n        <button class="dplayer-icon dplayer-send-icon" data-balloon="';
    $$out += $escape(tran('send'));
    $$out += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">';
    $$out += icons.send;
    $$out += '</span>\n        </button>\n    </div>\n    <div class="dplayer-icons dplayer-icons-left">\n        <button class="dplayer-icon dplayer-play-icon">\n            <span class="dplayer-icon-content">';
    $$out += icons.play;
    $$out += '</span>\n        </button>\n        <div class="dplayer-volume">\n            <button class="dplayer-icon dplayer-volume-icon">\n                <span class="dplayer-icon-content">';
    $$out += icons.volumeDown;
    $$out += '</span>\n            </button>\n            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">\n                <div class="dplayer-volume-bar">\n                    <div class="dplayer-volume-bar-inner" style="background: ';
    $$out += $escape(options.theme);
    $$out += ';">\n                        <span class="dplayer-thumb" style="background: ';
    $$out += $escape(options.theme);
    $$out += '"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <span class="dplayer-time">\n            <span class="dplayer-ptime">0:00</span> /\n            <span class="dplayer-dtime">0:00</span>\n        </span>\n        ';
    if (options.live) {
        $$out += '\n        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: ';
        $$out += $escape(options.theme);
        $$out += ';"></span>';
        $$out += $escape(tran('live'));
        $$out += '</span>\n        ';
    }
    $$out += '\n    </div>\n    <div class="dplayer-icons dplayer-icons-right">\n        ';
    if (options.video.quality) {
        $$out += '\n        <div class="dplayer-quality">\n            <button class="dplayer-icon dplayer-quality-icon">';
        $$out += $escape(options.video.quality[options.video.defaultQuality].name);
        $$out += '</button>\n            <div class="dplayer-quality-mask">\n                <div class="dplayer-quality-list">\n                ';
        $each(options.video.quality, function ($value, $index) {
            $$out += '\n                    <div class="dplayer-quality-item" data-index="';
            $$out += $escape($index);
            $$out += '">';
            $$out += $escape($value.name);
            $$out += '</div>\n                ';
        });
        $$out += '\n                </div>\n            </div>\n        </div>\n        ';
    }
    $$out += '\n        ';
    if (options.screenshot) {
        $$out += '\n        <div class="dplayer-icon dplayer-camera-icon" data-balloon="';
        $$out += $escape(tran('screenshot'));
        $$out += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">';
        $$out += icons.camera;
        $$out += '</span>\n        </div>\n        ';
    }
    $$out += '\n        ';
    if (options.airplay) {
        $$out += '\n        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="';
        $$out += $escape(tran('airplay'));
        $$out += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">';
        $$out += icons.airplay;
        $$out += '</span>\n        </div>\n        ';
    }
    $$out += '\n        ';
    if (options.chromecast) {
        $$out += '\n        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="';
        $$out += $escape(tran('chromecast'));
        $$out += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">';
        $$out += icons.chromecast;
        $$out += '</span>\n        </div>\n        ';
    }
    $$out += '\n        <div class="dplayer-comment">\n            <button class="dplayer-icon dplayer-comment-icon" data-balloon="';
    $$out += $escape(tran('send-danmaku'));
    $$out += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">';
    $$out += icons.comment;
    $$out += '</span>\n            </button>\n        </div>\n        ';
    if (options.subtitle) {
        $$out += '\n        ';
        if (typeof options.subtitle.url === 'string') {
            $$out += '\n        <div class="dplayer-subtitle-btn">\n            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="';
            $$out += $escape(tran('hide-subs'));
            $$out += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">';
            $$out += icons.subtitle;
            $$out += '</span>\n            </button>\n        </div>\n        ';
        } else {
            $$out += '\n        <div class="dplayer-subtitles">\n            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="';
            $$out += $escape(tran('subtitle'));
            $$out += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">';
            $$out += icons.subtitle;
            $$out += '</span>\n            </button>\n            <div class="dplayer-subtitles-box">\n                <div class="dplayer-subtitles-panel">\n                    ';
            $each(options.subtitle.url, function ($value, $index) {
                $$out += '\n                        <div class="dplayer-subtitles-item" data-subtitle="';
                $$out += $escape($value.url);
                $$out += '">\n                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->\n                            <span class="dplayer-label">';
                $$out += $escape($value.lang ? $value.name ? $value.name + ' (' + tran($value.lang) + ')' : tran($value.lang) : $value.name);
                $$out += '</span>\n                        </div>\n                    ';
            });
            $$out += '\n                </div>\n            </div>\n        </div>\n        ';
        }
        $$out += '\n        ';
    }
    $$out += '\n        <div class="dplayer-setting">\n            <button class="dplayer-icon dplayer-setting-icon" data-balloon="';
    $$out += $escape(tran('setting'));
    $$out += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">';
    $$out += icons.setting;
    $$out += '</span>\n            </button>\n            <div class="dplayer-setting-box">\n                <div class="dplayer-setting-origin-panel">\n                    <div class="dplayer-setting-item dplayer-setting-speed">\n                        <span class="dplayer-label">';
    $$out += $escape(tran('speed'));
    $$out += '</span>\n                        <div class="dplayer-toggle">';
    $$out += icons.right;
    $$out += '</div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-loop">\n                        <span class="dplayer-label">';
    $$out += $escape(tran('loop'));
    $$out += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">\n                            <label for="dplayer-toggle"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-showdan">\n                        <span class="dplayer-label">';
    $$out += $escape(tran('show-danmaku'));
    $$out += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">\n                            <label for="dplayer-toggle-dan"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danunlimit">\n                        <span class="dplayer-label">';
    $$out += $escape(tran('unlimited-danmaku'));
    $$out += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">\n                            <label for="dplayer-toggle-danunlimit"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danmaku">\n                        <span class="dplayer-label">';
    $$out += $escape(tran('opacity-danmaku'));
    $$out += '</span>\n                        <div class="dplayer-danmaku-bar-wrap">\n                            <div class="dplayer-danmaku-bar">\n                                <div class="dplayer-danmaku-bar-inner">\n                                    <span class="dplayer-thumb"></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="dplayer-setting-speed-panel">\n                    ';
    $each(options.playbackSpeed, function ($value, $index) {
        $$out += '\n                        <div class="dplayer-setting-speed-item" data-speed="';
        $$out += $escape($value);
        $$out += '">\n                            <span class="dplayer-label">';
        $$out += $escape($value === 1 ? tran('normal') : $value);
        $$out += '</span>\n                        </div>\n                    ';
    });
    $$out += '\n                </div>\n            </div>\n        </div>\n        <div class="dplayer-full">\n            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="';
    $$out += $escape(tran('web-fullscreen'));
    $$out += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">';
    $$out += icons.fullWeb;
    $$out += '</span>\n            </button>\n            <button class="dplayer-icon dplayer-full-icon" data-balloon="';
    $$out += $escape(tran('fullscreen'));
    $$out += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">';
    $$out += icons.full;
    $$out += '</span>\n            </button>\n        </div>\n    </div>\n    <div class="dplayer-bar-wrap">\n        <div class="dplayer-bar-time hidden">00:00</div>\n        <div class="dplayer-bar-preview"></div>\n        <div class="dplayer-bar">\n            <div class="dplayer-loaded" style="width: 0;"></div>\n            <div class="dplayer-played" style="width: 0; background: ';
    $$out += $escape(options.theme);
    $$out += '">\n                <span class="dplayer-thumb" style="background: ';
    $$out += $escape(options.theme);
    $$out += '"></span>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="dplayer-info-panel dplayer-info-panel-hide">\n    <div class="dplayer-info-panel-close">[x]</div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">\n        <span class="dplayer-info-panel-item-title">Player version</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">\n        <span class="dplayer-info-panel-item-title">Player FPS</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">\n        <span class="dplayer-info-panel-item-title">Video type</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">\n        <span class="dplayer-info-panel-item-title">Video url</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">\n        <span class="dplayer-info-panel-item-title">Video resolution</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">\n        <span class="dplayer-info-panel-item-title">Video duration</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    ';
    if (options.danmaku) {
        $$out += '\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">\n        <span class="dplayer-info-panel-item-title">Danmaku id</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">\n        <span class="dplayer-info-panel-item-title">Danmaku api</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">\n        <span class="dplayer-info-panel-item-title">Danmaku amount</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    ';
    }
    $$out += '\n</div>\n<div class="dplayer-menu">\n    ';
    $each(options.contextmenu, function ($value, $index) {
        $$out += '\n        <div class="dplayer-menu-item">\n            <a';
        if ($value.link) {
            $$out += ' target="_blank"';
        }
        $$out += ' href="';
        $$out += $escape($value.link || 'javascript:void(0);');
        $$out += '">';
        if ($value.key) {
            $$out += ' ';
            $$out += $escape(tran($value.key));
        }
        if ($value.text) {
            $$out += ' ';
            $$out += $escape($value.text);
        }
        $$out += '</a>\n        </div>\n    ';
    });
    $$out += '\n</div>\n<div class="dplayer-notice-list"></div>\n<button class="dplayer-mobile-play">\n    ';
    $$out += icons.play;
    $$out += '\n</button>';
    return $$out;
};

/***/ }),

/***/ "./src/template/video.art":
/*!********************************!*\
  !*** ./src/template/video.art ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $imports = __webpack_require__(/*! ../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', enableSubtitle = $data.enableSubtitle, subtitle = $data.subtitle, current = $data.current, airplay = $data.airplay, pic = $data.pic, $escape = $imports.$escape, screenshot = $data.screenshot, preload = $data.preload, url = $data.url;
    var enableSubtitle = subtitle && subtitle.type === 'webvtt';
    $$out += '\n<video\n    class="dplayer-video ';
    if (current) {
        $$out += 'dplayer-video-current';
    }
    $$out += '"\n    webkit-playsinline\n    ';
    if (airplay) {
        $$out += ' x-webkit-airplay="allow" ';
    }
    $$out += '\n    playsinline\n    ';
    if (pic) {
        $$out += 'poster="';
        $$out += $escape(pic);
        $$out += '"';
    }
    $$out += '\n    ';
    if (screenshot || enableSubtitle) {
        $$out += 'crossorigin="anonymous"';
    }
    $$out += '\n    ';
    if (preload) {
        $$out += 'preload="';
        $$out += $escape(preload);
        $$out += '"';
    }
    $$out += '\n    ';
    if (airplay) {
        $$out += '\n    nosrc\n    ';
    } else if (url) {
        $$out += '\n    src="';
        $$out += $escape(url);
        $$out += '"\n    ';
    }
    $$out += '\n    >\n    ';
    if (airplay) {
        $$out += '\n    <source src="';
        $$out += $escape(url);
        $$out += '">\n    ';
    }
    $$out += '\n    ';
    if (enableSubtitle) {
        $$out += '\n    <track class="dplayer-subtrack" kind="metadata" default src="';
        $$out += $escape(typeof subtitle.url === 'string' ? subtitle.url : subtitle.url[subtitle.index].url);
        $$out += '"></track>\n    ';
    }
    $$out += '\n</video>';
    return $$out;
};

/***/ }),

/***/ "./node_modules/art-template/lib/compile/runtime.js":
/*!**********************************************************!*\
  !*** ./node_modules/art-template/lib/compile/runtime.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/*! art-template@runtime | https://github.com/aui/art-template */

var globalThis = typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {};
var runtime = Object.create(globalThis);
var ESCAPE_REG = /["&'<>]/;
/**
 * 编码模板输出的内容
 * @param  {any}        content
 * @return {string}
 */

runtime.$escape = function (content) {
  return xmlEscape(toString(content));
};
/**
 * 迭代器，支持数组与对象
 * @param {array|Object} data
 * @param {function}     callback
 */


runtime.$each = function (data, callback) {
  if (Array.isArray(data)) {
    for (var i = 0, len = data.length; i < len; i++) {
      callback(data[i], i);
    }
  } else {
    for (var _i in data) {
      callback(data[_i], _i);
    }
  }
}; // 将目标转成字符


function toString(value) {
  if (typeof value !== 'string') {
    if (value === undefined || value === null) {
      value = '';
    } else if (typeof value === 'function') {
      value = toString(value.call(value));
    } else {
      value = JSON.stringify(value);
    }
  }

  return value;
} // 编码 HTML 内容


function xmlEscape(content) {
  var html = '' + content;
  var regexResult = ESCAPE_REG.exec(html);

  if (!regexResult) {
    return content;
  }

  var result = '';

  var i = void 0,
      lastIndex = void 0,
      _char = void 0;

  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34:
        _char = '&#34;';
        break;

      case 38:
        _char = '&#38;';
        break;

      case 39:
        _char = '&#39;';
        break;

      case 60:
        _char = '&#60;';
        break;

      case 62:
        _char = '&#62;';
        break;

      default:
        continue;
    }

    if (lastIndex !== i) {
      result += html.substring(lastIndex, i);
    }

    lastIndex = i + 1;
    result += _char;
  }

  if (lastIndex !== i) {
    return result + html.substring(lastIndex, i);
  } else {
    return result;
  }
}

module.exports = runtime;

/***/ }),

/***/ "./node_modules/art-template/lib/runtime.js":
/*!**************************************************!*\
  !*** ./node_modules/art-template/lib/runtime.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./compile/runtime */ "./node_modules/art-template/lib/compile/runtime.js");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");

var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");

var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");

var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");

var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");

var transitionalDefaults = __webpack_require__(/*! ../defaults/transitional */ "./node_modules/axios/lib/defaults/transitional.js");

var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./node_modules/axios/lib/core/AxiosError.js");

var CanceledError = __webpack_require__(/*! ../cancel/CanceledError */ "./node_modules/axios/lib/cancel/CanceledError.js");

var parseProtocol = __webpack_require__(/*! ../helpers/parseProtocol */ "./node_modules/axios/lib/helpers/parseProtocol.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;

    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest(); // HTTP basic authentication

    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true); // Set the request timeout in MS

    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      } // Prepare the response


      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response); // Clean up request

      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        } // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request


        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        } // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'


        setTimeout(onloadend);
      };
    } // Handle browser request cancellation (as opposed to a manual cancellation)


    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request)); // Clean up request

      request = null;
    }; // Handle low level network errors


    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request, request)); // Clean up request

      request = null;
    }; // Handle timeout


    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || transitionalDefaults;

      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }

      reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request)); // Clean up request

      request = null;
    }; // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.


    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    } // Add headers to the request


    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    } // Add withCredentials to request if needed


    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    } // Add responseType to request if needed


    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    } // Handle progress if needed


    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    } // Not all browsers support upload events


    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function onCanceled(cancel) {
        if (!request) {
          return;
        }

        reject(!cancel || cancel && cancel.type ? new CanceledError() : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);

      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    var protocol = parseProtocol(fullPath);

    if (protocol && ['http', 'https', 'file'].indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    } // Send the request


    request.send(requestData);
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");

var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");

var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults/index.js");
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */


function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context); // Copy axios.prototype to instance

  utils.extend(instance, Axios.prototype, context); // Copy context to instance

  utils.extend(instance, context); // Factory for creating new instances

  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
} // Create the default instance to be exported


var axios = createInstance(defaults); // Expose Axios class to allow class inheritance

axios.Axios = Axios; // Expose Cancel & CancelToken

axios.CanceledError = __webpack_require__(/*! ./cancel/CanceledError */ "./node_modules/axios/lib/cancel/CanceledError.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
axios.VERSION = (__webpack_require__(/*! ./env/data */ "./node_modules/axios/lib/env/data.js").version);
axios.toFormData = __webpack_require__(/*! ./helpers/toFormData */ "./node_modules/axios/lib/helpers/toFormData.js"); // Expose AxiosError class

axios.AxiosError = __webpack_require__(/*! ../lib/core/AxiosError */ "./node_modules/axios/lib/core/AxiosError.js"); // alias for CanceledError for backward compatibility

axios.Cancel = axios.CanceledError; // Expose all/spread

axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js"); // Expose isAxiosError

axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");
module.exports = axios; // Allow use of default import syntax in TypeScript

module.exports["default"] = axios;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var CanceledError = __webpack_require__(/*! ./CanceledError */ "./node_modules/axios/lib/cancel/CanceledError.js");
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */


function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this; // eslint-disable-next-line func-names

  this.promise.then(function (cancel) {
    if (!token._listeners) return;
    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }

    token._listeners = null;
  }); // eslint-disable-next-line func-names

  this.promise.then = function (onfulfilled) {
    var _resolve; // eslint-disable-next-line func-names


    var promise = new Promise(function (resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new CanceledError(message);
    resolvePromise(token.reason);
  });
}
/**
 * Throws a `CanceledError` if cancellation has been requested.
 */


CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
/**
 * Subscribe to the cancel signal
 */


CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};
/**
 * Unsubscribe from the cancel signal
 */


CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }

  var index = this._listeners.indexOf(listener);

  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */


CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CanceledError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CanceledError.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./node_modules/axios/lib/core/AxiosError.js");

var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */


function CanceledError(message) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});
module.exports = CanceledError;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");

var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");

var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

var buildFullPath = __webpack_require__(/*! ./buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");

var validator = __webpack_require__(/*! ../helpers/validator */ "./node_modules/axios/lib/helpers/validator.js");

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */

function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */


Axios.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }

  config = mergeConfig(this.defaults, config); // Set config.method

  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators["boolean"]),
      forcedJSONParsing: validators.transitional(validators["boolean"]),
      clarifyTimeoutError: validators.transitional(validators["boolean"])
    }, false);
  } // filter out skipped interceptors


  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });
  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];
    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    promise = Promise.resolve(config);

    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }

  var newConfig = config;

  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();

    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  var fullPath = buildFullPath(config.baseURL, config.url);
  return buildURL(fullPath, config.params, config.paramsSerializer);
}; // Provide aliases for supported request methods


utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method: method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url: url,
        data: data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
module.exports = Axios;

/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosError.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosError.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */


function AxiosError(message, code, config, request, response) {
  Error.call(this);
  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var prototype = AxiosError.prototype;
var descriptors = {};
['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED' // eslint-disable-next-line func-names
].forEach(function (code) {
  descriptors[code] = {
    value: code
  };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {
  value: true
}); // eslint-disable-next-line func-names

AxiosError.from = function (error, code, config, request, response, customProps) {
  var axiosError = Object.create(prototype);
  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};

module.exports = AxiosError;

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */


InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */


InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */


InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");

var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */


module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }

  return requestedURL;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");

var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults/index.js");

var CanceledError = __webpack_require__(/*! ../cancel/CanceledError */ "./node_modules/axios/lib/cancel/CanceledError.js");
/**
 * Throws a `CanceledError` if cancellation has been requested.
 */


function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError();
  }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */


module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config); // Ensure headers exist

  config.headers = config.headers || {}; // Transform request data

  config.data = transformData.call(config, config.data, config.headers, config.transformRequest); // Flatten headers

  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config); // Transform response data

    response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config); // Transform response data

      if (reason && reason.response) {
        reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */


module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }

    return source;
  } // eslint-disable-next-line consistent-return


  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  } // eslint-disable-next-line consistent-return


  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  } // eslint-disable-next-line consistent-return


  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  } // eslint-disable-next-line consistent-return


  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'beforeRedirect': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };
  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var AxiosError = __webpack_require__(/*! ./AxiosError */ "./node_modules/axios/lib/core/AxiosError.js");
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */


module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;

  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError('Request failed with status code ' + response.status, [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
  }
};

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults/index.js");
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */


module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/

  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });
  return data;
};

/***/ }),

/***/ "./node_modules/axios/lib/defaults/index.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/defaults/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

var normalizeHeaderName = __webpack_require__(/*! ../helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./node_modules/axios/lib/core/AxiosError.js");

var transitionalDefaults = __webpack_require__(/*! ./transitional */ "./node_modules/axios/lib/defaults/transitional.js");

var toFormData = __webpack_require__(/*! ../helpers/toFormData */ "./node_modules/axios/lib/helpers/toFormData.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;

  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ../adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ../adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }

  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {
  transitional: transitionalDefaults,
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }

    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }

    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    var isObjectPayload = utils.isObject(data);
    var contentType = headers && headers['Content-Type'];
    var isFileList;

    if ((isFileList = utils.isFileList(data)) || isObjectPayload && contentType === 'multipart/form-data') {
      var _FormData = this.env && this.env.FormData;

      return toFormData(isFileList ? {
        'files[]': data
      } : data, _FormData && new _FormData());
    } else if (isObjectPayload || contentType === 'application/json') {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }

    return data;
  }],
  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }

          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: __webpack_require__(/*! ./env/FormData */ "./node_modules/axios/lib/helpers/null.js")
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;

/***/ }),

/***/ "./node_modules/axios/lib/defaults/transitional.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/defaults/transitional.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

/***/ }),

/***/ "./node_modules/axios/lib/env/data.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = {
  "version": "0.27.2"
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    return fn.apply(thisArg, args);
  };
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */


module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;

  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }

        parts.push(encode(key) + '=' + encode(v));
      });
    });
    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */


module.exports = function isAxiosError(payload) {
  return utils.isObject(payload) && payload.isAxiosError === true;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;
  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */

  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);
  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */

  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/null.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/null.js ***!
  \************************************************/
/***/ ((module) => {

// eslint-disable-next-line strict
module.exports = null;

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js"); // Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers


var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */

module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }

      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });
  return parsed;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseProtocol.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseProtocol.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function parseProtocol(url) {
  var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/toFormData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toFormData.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");
/**
 * Convert a data object to FormData
 * @param {Object} obj
 * @param {?Object} [formData]
 * @returns {Object}
 **/


function toFormData(obj, formData) {
  // eslint-disable-next-line no-param-reassign
  formData = formData || new FormData();
  var stack = [];

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  function build(data, parentKey) {
    if (utils.isPlainObject(data) || utils.isArray(data)) {
      if (stack.indexOf(data) !== -1) {
        throw Error('Circular reference detected in ' + parentKey);
      }

      stack.push(data);
      utils.forEach(data, function each(value, key) {
        if (utils.isUndefined(value)) return;
        var fullKey = parentKey ? parentKey + '.' + key : key;
        var arr;

        if (value && !parentKey && _typeof(value) === 'object') {
          if (utils.endsWith(key, '{}')) {
            // eslint-disable-next-line no-param-reassign
            value = JSON.stringify(value);
          } else if (utils.endsWith(key, '[]') && (arr = utils.toArray(value))) {
            // eslint-disable-next-line func-names
            arr.forEach(function (el) {
              !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));
            });
            return;
          }
        }

        build(value, fullKey);
      });
      stack.pop();
    } else {
      formData.append(parentKey, convertValue(data));
    }
  }

  build(obj);
  return formData;
}

module.exports = toFormData;

/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var VERSION = (__webpack_require__(/*! ../env/data */ "./node_modules/axios/lib/env/data.js").version);

var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./node_modules/axios/lib/core/AxiosError.js");

var validators = {}; // eslint-disable-next-line func-names

['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (type, i) {
  validators[type] = function validator(thing) {
    return _typeof(thing) === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});
var deprecatedWarnings = {};
/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */

validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  } // eslint-disable-next-line func-names


  return function (value, opt, opts) {
    if (validator === false) {
      throw new AxiosError(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), AxiosError.ERR_DEPRECATED);
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true; // eslint-disable-next-line no-console

      console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
    }

    return validator ? validator(value, opt, opts) : true;
  };
};
/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */


function assertOptions(options, schema, allowUnknown) {
  if (_typeof(options) !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }

  var keys = Object.keys(options);
  var i = keys.length;

  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];

    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);

      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }

      continue;
    }

    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js"); // utils is a library of generic helper functions non-specific to axios


var toString = Object.prototype.toString; // eslint-disable-next-line func-names

var kindOf = function (cache) {
  // eslint-disable-next-line func-names
  return function (thing) {
    var str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  };
}(Object.create(null));

function kindOfTest(type) {
  type = type.toLowerCase();
  return function isKindOf(thing) {
    return kindOf(thing) === type;
  };
}
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */


function isArray(val) {
  return Array.isArray(val);
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */


function isUndefined(val) {
  return typeof val === 'undefined';
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */


function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */


var isArrayBuffer = kindOfTest('ArrayBuffer');
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */

function isArrayBufferView(val) {
  var result;

  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }

  return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */


function isString(val) {
  return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */


function isNumber(val) {
  return typeof val === 'number';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */


function isObject(val) {
  return val !== null && _typeof(val) === 'object';
}
/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */


function isPlainObject(val) {
  if (kindOf(val) !== 'object') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}
/**
 * Determine if a value is a Date
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */


var isDate = kindOfTest('Date');
/**
 * Determine if a value is a File
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */

var isFile = kindOfTest('File');
/**
 * Determine if a value is a Blob
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */

var isBlob = kindOfTest('Blob');
/**
 * Determine if a value is a FileList
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */

var isFileList = kindOfTest('FileList');
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */

function isFunction(val) {
  return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */


function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} thing The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */


function isFormData(thing) {
  var pattern = '[object FormData]';
  return thing && (typeof FormData === 'function' && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
}
/**
 * Determine if a value is a URLSearchParams object
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */


var isURLSearchParams = kindOfTest('URLSearchParams');
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */

function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */


function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */


function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  } // Force an array if not already something iterable


  if (_typeof(obj) !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function
  /* obj1, obj2, obj3, ... */
merge() {
  var result = {};

  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */


function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */


function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }

  return content;
}
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 */


function inherits(constructor, superConstructor, props, descriptors) {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  props && Object.assign(constructor.prototype, props);
}
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function} [filter]
 * @returns {Object}
 */


function toFlatObject(sourceObj, destObj, filter) {
  var props;
  var i;
  var prop;
  var merged = {};
  destObj = destObj || {};

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;

    while (i-- > 0) {
      prop = props[i];

      if (!merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }

    sourceObj = Object.getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}
/*
 * determines whether a string ends with the characters of a specified string
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 * @returns {boolean}
 */


function endsWith(str, searchString, position) {
  str = String(str);

  if (position === undefined || position > str.length) {
    position = str.length;
  }

  position -= searchString.length;
  var lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}
/**
 * Returns new array from array like object
 * @param {*} [thing]
 * @returns {Array}
 */


function toArray(thing) {
  if (!thing) return null;
  var i = thing.length;
  if (isUndefined(i)) return null;
  var arr = new Array(i);

  while (i-- > 0) {
    arr[i] = thing[i];
  }

  return arr;
} // eslint-disable-next-line func-names


var isTypedArray = function (TypedArray) {
  // eslint-disable-next-line func-names
  return function (thing) {
    return TypedArray && thing instanceof TypedArray;
  };
}(typeof Uint8Array !== 'undefined' && Object.getPrototypeOf(Uint8Array));

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM,
  inherits: inherits,
  toFlatObject: toFlatObject,
  kindOf: kindOf,
  kindOfTest: kindOfTest,
  endsWith: endsWith,
  toArray: toArray,
  isTypedArray: isTypedArray,
  isFileList: isFileList
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url["default"] : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/promise-polyfill/src/allSettled.js":
/*!*********************************************************!*\
  !*** ./node_modules/promise-polyfill/src/allSettled.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function allSettled(arr) {
  var P = this;
  return new P(function (resolve, reject) {
    if (!(arr && typeof arr.length !== 'undefined')) {
      return reject(new TypeError(_typeof(arr) + ' ' + arr + ' is not iterable(cannot read property Symbol(Symbol.iterator))'));
    }

    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      if (val && (_typeof(val) === 'object' || typeof val === 'function')) {
        var then = val.then;

        if (typeof then === 'function') {
          then.call(val, function (val) {
            res(i, val);
          }, function (e) {
            args[i] = {
              status: 'rejected',
              reason: e
            };

            if (--remaining === 0) {
              resolve(args);
            }
          });
          return;
        }
      }

      args[i] = {
        status: 'fulfilled',
        value: val
      };

      if (--remaining === 0) {
        resolve(args);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allSettled);

/***/ }),

/***/ "./node_modules/promise-polyfill/src/finally.js":
/*!******************************************************!*\
  !*** ./node_modules/promise-polyfill/src/finally.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(function (value) {
    // @ts-ignore
    return constructor.resolve(callback()).then(function () {
      return value;
    });
  }, function (reason) {
    // @ts-ignore
    return constructor.resolve(callback()).then(function () {
      // @ts-ignore
      return constructor.reject(reason);
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (finallyConstructor);

/***/ }),

/***/ "./node_modules/promise-polyfill/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/promise-polyfill/src/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _finally__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finally */ "./node_modules/promise-polyfill/src/finally.js");
/* harmony import */ var _allSettled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allSettled */ "./node_modules/promise-polyfill/src/allSettled.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


 // Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())

var setTimeoutFunc = setTimeout;

function isArray(x) {
  return Boolean(x && typeof x.length !== 'undefined');
}

function noop() {} // Polyfill for Function.prototype.bind


function bind(fn, thisArg) {
  return function () {
    fn.apply(thisArg, arguments);
  };
}
/**
 * @constructor
 * @param {Function} fn
 */


function Promise(fn) {
  if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  /** @type {!number} */

  this._state = 0;
  /** @type {!boolean} */

  this._handled = false;
  /** @type {Promise|undefined} */

  this._value = undefined;
  /** @type {!Array<!Function>} */

  this._deferreds = [];
  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }

  if (self._state === 0) {
    self._deferreds.push(deferred);

    return;
  }

  self._handled = true;

  Promise._immediateFn(function () {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;

    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }

    var ret;

    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }

    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');

    if (newValue && (_typeof(newValue) === 'object' || typeof newValue === 'function')) {
      var then = newValue.then;

      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }

    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function () {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }

  self._deferreds = null;
}
/**
 * @constructor
 */


function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}
/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */


function doResolve(fn, self) {
  var done = false;

  try {
    fn(function (value) {
      if (done) return;
      done = true;
      resolve(self, value);
    }, function (reason) {
      if (done) return;
      done = true;
      reject(self, reason);
    });
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function (onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);
  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = _finally__WEBPACK_IMPORTED_MODULE_0__["default"];

Promise.all = function (arr) {
  return new Promise(function (resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.all accepts an array'));
    }

    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (_typeof(val) === 'object' || typeof val === 'function')) {
          var then = val.then;

          if (typeof then === 'function') {
            then.call(val, function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }

        args[i] = val;

        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.allSettled = _allSettled__WEBPACK_IMPORTED_MODULE_1__["default"];

Promise.resolve = function (value) {
  if (value && _typeof(value) === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function (resolve) {
    resolve(value);
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (arr) {
  return new Promise(function (resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.race accepts an array'));
    }

    for (var i = 0, len = arr.length; i < len; i++) {
      Promise.resolve(arr[i]).then(resolve, reject);
    }
  });
}; // Use polyfill for setImmediate for performance gains


Promise._immediateFn = // @ts-ignore
typeof setImmediate === 'function' && function (fn) {
  // @ts-ignore
  setImmediate(fn);
} || function (fn) {
  setTimeoutFunc(fn, 0);
};

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Promise);

/***/ }),

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  send: function send(options) {
    axios__WEBPACK_IMPORTED_MODULE_0___default().post(options.url, options.data).then(function (response) {
      var data = response.data;

      if (!data || data.code !== 0) {
        options.error && options.error(data && data.msg);
        return;
      }

      options.success && options.success(data);
    })["catch"](function (e) {
      console.error(e);
      options.error && options.error();
    });
  },
  read: function read(options) {
    axios__WEBPACK_IMPORTED_MODULE_0___default().get(options.url).then(function (response) {
      var data = response.data;

      if (!data || data.code !== 0) {
        options.error && options.error(data && data.msg);
        return;
      }

      options.success && options.success(data.data.map(function (item) {
        return {
          time: item[0],
          type: item[1],
          color: item[2],
          author: item[3],
          text: item[4]
        };
      }));
    })["catch"](function (e) {
      console.error(e);
      options.error && options.error();
    });
  }
});

/***/ }),

/***/ "./src/js/bar.js":
/*!***********************!*\
  !*** ./src/js/bar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Bar = /*#__PURE__*/function () {
  function Bar(template) {
    _classCallCheck(this, Bar);

    this.elements = {};
    this.elements.volume = template.volumeBar;
    this.elements.played = template.playedBar;
    this.elements.loaded = template.loadedBar;
    this.elements.danmaku = template.danmakuOpacityBar;
  }
  /**
   * Update progress
   *
   * @param {String} type - Point out which bar it is
   * @param {Number} percentage
   * @param {String} direction - Point out the direction of this bar, Should be height or width
   */


  _createClass(Bar, [{
    key: "set",
    value: function set(type, percentage, direction) {
      percentage = Math.max(percentage, 0);
      percentage = Math.min(percentage, 1);
      this.elements[type].style[direction] = percentage * 100 + '%';
    }
  }, {
    key: "get",
    value: function get(type) {
      return parseFloat(this.elements[type].style.width) / 100;
    }
  }]);

  return Bar;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bar);

/***/ }),

/***/ "./src/js/bezel.js":
/*!*************************!*\
  !*** ./src/js/bezel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Bezel = /*#__PURE__*/function () {
  function Bezel(container) {
    var _this = this;

    _classCallCheck(this, Bezel);

    this.container = container;
    this.container.addEventListener('animationend', function () {
      _this.container.classList.remove('dplayer-bezel-transition');
    });
  }

  _createClass(Bezel, [{
    key: "switch",
    value: function _switch(icon) {
      this.container.innerHTML = icon;
      this.container.classList.add('dplayer-bezel-transition');
    }
  }]);

  return Bezel;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bezel);

/***/ }),

/***/ "./src/js/comment.js":
/*!***************************!*\
  !*** ./src/js/comment.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Comment = /*#__PURE__*/function () {
  function Comment(player) {
    var _this = this;

    _classCallCheck(this, Comment);

    this.player = player;
    this.player.template.mask.addEventListener('click', function () {
      _this.hide();
    });
    this.player.template.commentButton.addEventListener('click', function () {
      _this.show();
    });
    this.player.template.commentSettingButton.addEventListener('click', function () {
      _this.toggleSetting();
    });
    this.player.template.commentColorSettingBox.addEventListener('click', function () {
      var sele = _this.player.template.commentColorSettingBox.querySelector('input:checked+span');

      if (sele) {
        var color = _this.player.template.commentColorSettingBox.querySelector('input:checked').value;

        _this.player.template.commentSettingFill.style.fill = color;
        _this.player.template.commentInput.style.color = color;
        _this.player.template.commentSendFill.style.fill = color;
      }
    });
    this.player.template.commentInput.addEventListener('click', function () {
      _this.hideSetting();
    });
    this.player.template.commentInput.addEventListener('keydown', function (e) {
      var event = e || window.event;

      if (event.keyCode === 13) {
        _this.send();
      }
    });
    this.player.template.commentSendButton.addEventListener('click', function () {
      _this.send();
    });
  }

  _createClass(Comment, [{
    key: "show",
    value: function show() {
      this.player.controller.disableAutoHide = true;
      this.player.template.controller.classList.add('dplayer-controller-comment');
      this.player.template.mask.classList.add('dplayer-mask-show');
      this.player.container.classList.add('dplayer-show-controller');
      this.player.template.commentInput.focus();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.player.template.controller.classList.remove('dplayer-controller-comment');
      this.player.template.mask.classList.remove('dplayer-mask-show');
      this.player.container.classList.remove('dplayer-show-controller');
      this.player.controller.disableAutoHide = false;
      this.hideSetting();
    }
  }, {
    key: "showSetting",
    value: function showSetting() {
      this.player.template.commentSettingBox.classList.add('dplayer-comment-setting-open');
    }
  }, {
    key: "hideSetting",
    value: function hideSetting() {
      this.player.template.commentSettingBox.classList.remove('dplayer-comment-setting-open');
    }
  }, {
    key: "toggleSetting",
    value: function toggleSetting() {
      if (this.player.template.commentSettingBox.classList.contains('dplayer-comment-setting-open')) {
        this.hideSetting();
      } else {
        this.showSetting();
      }
    }
  }, {
    key: "send",
    value: function send() {
      var _this2 = this;

      this.player.template.commentInput.blur(); // text can't be empty

      if (!this.player.template.commentInput.value.replace(/^\s+|\s+$/g, '')) {
        this.player.notice(this.player.tran('please-input-danmaku'));
        return;
      }

      this.player.danmaku.send({
        text: this.player.template.commentInput.value,
        color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].color2Number(this.player.container.querySelector('.dplayer-comment-setting-color input:checked').value),
        type: parseInt(this.player.container.querySelector('.dplayer-comment-setting-type input:checked').value)
      }, function () {
        _this2.player.template.commentInput.value = '';

        _this2.hide();
      });
    }
  }]);

  return Comment;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);

/***/ }),

/***/ "./src/js/contextmenu.js":
/*!*******************************!*\
  !*** ./src/js/contextmenu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ContextMenu = /*#__PURE__*/function () {
  function ContextMenu(player) {
    var _this = this;

    _classCallCheck(this, ContextMenu);

    this.player = player;
    this.shown = false;
    Array.prototype.slice.call(this.player.template.menuItem).forEach(function (item, index) {
      if (_this.player.options.contextmenu[index].click) {
        item.addEventListener('click', function () {
          _this.player.options.contextmenu[index].click(_this.player);

          _this.hide();
        });
      }
    });

    this.contextmenuHandler = function (e) {
      if (_this.shown) {
        _this.hide();

        return;
      }

      var event = e || window.event;
      event.preventDefault();

      var clientRect = _this.player.container.getBoundingClientRect();

      _this.show(event.clientX - clientRect.left, event.clientY - clientRect.top);

      _this.player.template.mask.addEventListener('click', function () {
        _this.hide();
      });
    };

    this.player.container.addEventListener('contextmenu', this.contextmenuHandler);
  }

  _createClass(ContextMenu, [{
    key: "show",
    value: function show(x, y) {
      this.player.template.menu.classList.add('dplayer-menu-show');
      var clientRect = this.player.container.getBoundingClientRect();

      if (x + this.player.template.menu.offsetWidth >= clientRect.width) {
        this.player.template.menu.style.right = clientRect.width - x + 'px';
        this.player.template.menu.style.left = 'initial';
      } else {
        this.player.template.menu.style.left = x + 'px';
        this.player.template.menu.style.right = 'initial';
      }

      if (y + this.player.template.menu.offsetHeight >= clientRect.height) {
        this.player.template.menu.style.bottom = clientRect.height - y + 'px';
        this.player.template.menu.style.top = 'initial';
      } else {
        this.player.template.menu.style.top = y + 'px';
        this.player.template.menu.style.bottom = 'initial';
      }

      this.player.template.mask.classList.add('dplayer-mask-show');
      this.shown = true;
      this.player.events.trigger('contextmenu_show');
    }
  }, {
    key: "hide",
    value: function hide() {
      this.player.template.mask.classList.remove('dplayer-mask-show');
      this.player.template.menu.classList.remove('dplayer-menu-show');
      this.shown = false;
      this.player.events.trigger('contextmenu_hide');
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.player.container.removeEventListener('contextmenu', this.contextmenuHandler);
    }
  }]);

  return ContextMenu;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextMenu);

/***/ }),

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _thumbnails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thumbnails */ "./src/js/thumbnails.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ "./src/js/icons.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var cast;
var runOnce = true;
var isCasting = false;

var Controller = /*#__PURE__*/function () {
  function Controller(player) {
    _classCallCheck(this, Controller);

    this.player = player;
    this.autoHideTimer = 0;

    if (!_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isMobile) {
      this.setAutoHideHandler = this.setAutoHide.bind(this);
      this.player.container.addEventListener('mousemove', this.setAutoHideHandler);
      this.player.container.addEventListener('click', this.setAutoHideHandler);
      this.player.on('play', this.setAutoHideHandler);
      this.player.on('pause', this.setAutoHideHandler);
    }

    this.initPlayButton();
    this.initThumbnails();
    this.initPlayedBar();
    this.initFullButton();
    this.initQualityButton();
    this.initScreenshotButton(); // if subtitle url not array, not init old single subtitle button

    if (this.player.options.subtitle) {
      if (typeof this.player.options.subtitle.url === 'string') {
        this.initSubtitleButton();
      }
    }

    this.initHighlights();
    this.initAirplayButton();
    this.initChromecastButton();

    if (!_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isMobile) {
      this.initVolumeButton();
    }
  }

  _createClass(Controller, [{
    key: "initPlayButton",
    value: function initPlayButton() {
      var _this = this;

      this.player.template.playButton.addEventListener('click', function () {
        _this.player.toggle();
      });
      this.player.template.mobilePlayButton.addEventListener('click', function () {
        _this.player.toggle();
      });

      if (!_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isMobile) {
        if (!this.player.options.preventClickToggle) {
          this.player.template.videoWrap.addEventListener('click', function () {
            _this.player.toggle();
          });
          this.player.template.controllerMask.addEventListener('click', function () {
            _this.player.toggle();
          });
        }
      } else {
        this.player.template.videoWrap.addEventListener('click', function () {
          _this.toggle();
        });
        this.player.template.controllerMask.addEventListener('click', function () {
          _this.toggle();
        });
      }
    }
  }, {
    key: "initHighlights",
    value: function initHighlights() {
      var _this2 = this;

      this.player.on('durationchange', function () {
        if (_this2.player.video.duration !== 1 && _this2.player.video.duration !== Infinity) {
          if (_this2.player.options.highlight) {
            var highlights = _this2.player.template.playedBarWrap.querySelectorAll('.dplayer-highlight');

            [].slice.call(highlights, 0).forEach(function (item) {
              _this2.player.template.playedBarWrap.removeChild(item);
            });

            for (var i = 0; i < _this2.player.options.highlight.length; i++) {
              if (!_this2.player.options.highlight[i].text || !_this2.player.options.highlight[i].time) {
                continue;
              }

              var p = document.createElement('div');
              p.classList.add('dplayer-highlight');
              p.style.left = _this2.player.options.highlight[i].time / _this2.player.video.duration * 100 + '%';
              p.innerHTML = '<span class="dplayer-highlight-text">' + _this2.player.options.highlight[i].text + '</span>';

              _this2.player.template.playedBarWrap.insertBefore(p, _this2.player.template.playedBarTime);
            }
          }
        }
      });
    }
  }, {
    key: "initThumbnails",
    value: function initThumbnails() {
      var _this3 = this;

      if (this.player.options.video.thumbnails) {
        this.thumbnails = new _thumbnails__WEBPACK_IMPORTED_MODULE_1__["default"]({
          container: this.player.template.barPreview,
          barWidth: this.player.template.barWrap.offsetWidth,
          url: this.player.options.video.thumbnails,
          events: this.player.events
        });
        this.player.on('loadedmetadata', function () {
          _this3.thumbnails.resize(160, _this3.player.video.videoHeight / _this3.player.video.videoWidth * 160, _this3.player.template.barWrap.offsetWidth);
        });
      }
    }
  }, {
    key: "initPlayedBar",
    value: function initPlayedBar() {
      var _this4 = this;

      var thumbMove = function thumbMove(e) {
        var percentage = ((e.clientX || e.changedTouches[0].clientX) - _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getBoundingClientRectViewLeft(_this4.player.template.playedBarWrap)) / _this4.player.template.playedBarWrap.clientWidth;

        percentage = Math.max(percentage, 0);
        percentage = Math.min(percentage, 1);

        _this4.player.bar.set('played', percentage, 'width');

        _this4.player.template.ptime.innerHTML = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].secondToTime(percentage * _this4.player.video.duration);
      };

      var thumbUp = function thumbUp(e) {
        document.removeEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragEnd, thumbUp);
        document.removeEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragMove, thumbMove);

        var percentage = ((e.clientX || e.changedTouches[0].clientX) - _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getBoundingClientRectViewLeft(_this4.player.template.playedBarWrap)) / _this4.player.template.playedBarWrap.clientWidth;

        percentage = Math.max(percentage, 0);
        percentage = Math.min(percentage, 1);

        _this4.player.bar.set('played', percentage, 'width');

        _this4.player.seek(_this4.player.bar.get('played') * _this4.player.video.duration);

        _this4.player.timer.enable('progress');
      };

      this.player.template.playedBarWrap.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragStart, function () {
        _this4.player.timer.disable('progress');

        document.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragMove, thumbMove);
        document.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragEnd, thumbUp);
      });
      this.player.template.playedBarWrap.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragMove, function (e) {
        if (_this4.player.video.duration) {
          var px = _this4.player.template.playedBarWrap.getBoundingClientRect().left;

          var tx = (e.clientX || e.changedTouches[0].clientX) - px;

          if (tx < 0 || tx > _this4.player.template.playedBarWrap.offsetWidth) {
            return;
          }

          var time = _this4.player.video.duration * (tx / _this4.player.template.playedBarWrap.offsetWidth);

          if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isMobile) {
            _this4.thumbnails && _this4.thumbnails.show();
          }

          _this4.thumbnails && _this4.thumbnails.move(tx);
          _this4.player.template.playedBarTime.style.left = "".concat(tx - (time >= 3600 ? 25 : 20), "px");
          _this4.player.template.playedBarTime.innerText = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].secondToTime(time);

          _this4.player.template.playedBarTime.classList.remove('hidden');
        }
      });
      this.player.template.playedBarWrap.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragEnd, function () {
        if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isMobile) {
          _this4.thumbnails && _this4.thumbnails.hide();
        }
      });

      if (!_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isMobile) {
        this.player.template.playedBarWrap.addEventListener('mouseenter', function () {
          if (_this4.player.video.duration) {
            _this4.thumbnails && _this4.thumbnails.show();

            _this4.player.template.playedBarTime.classList.remove('hidden');
          }
        });
        this.player.template.playedBarWrap.addEventListener('mouseleave', function () {
          if (_this4.player.video.duration) {
            _this4.thumbnails && _this4.thumbnails.hide();

            _this4.player.template.playedBarTime.classList.add('hidden');
          }
        });
      }
    }
  }, {
    key: "initFullButton",
    value: function initFullButton() {
      var _this5 = this;

      this.player.template.browserFullButton.addEventListener('click', function () {
        _this5.player.fullScreen.toggle('browser');
      });
      this.player.template.webFullButton.addEventListener('click', function () {
        _this5.player.fullScreen.toggle('web');
      });
    }
  }, {
    key: "initVolumeButton",
    value: function initVolumeButton() {
      var _this6 = this;

      var vWidth = 35;

      var volumeMove = function volumeMove(event) {
        var e = event || window.event;
        var percentage = ((e.clientX || e.changedTouches[0].clientX) - _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getBoundingClientRectViewLeft(_this6.player.template.volumeBarWrap) - 5.5) / vWidth;

        _this6.player.volume(percentage);
      };

      var volumeUp = function volumeUp() {
        document.removeEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragEnd, volumeUp);
        document.removeEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragMove, volumeMove);

        _this6.player.template.volumeButton.classList.remove('dplayer-volume-active');
      };

      this.player.template.volumeBarWrapWrap.addEventListener('click', function (event) {
        var e = event || window.event;
        var percentage = ((e.clientX || e.changedTouches[0].clientX) - _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getBoundingClientRectViewLeft(_this6.player.template.volumeBarWrap) - 5.5) / vWidth;

        _this6.player.volume(percentage);
      });
      this.player.template.volumeBarWrapWrap.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragStart, function () {
        document.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragMove, volumeMove);
        document.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragEnd, volumeUp);

        _this6.player.template.volumeButton.classList.add('dplayer-volume-active');
      });
      this.player.template.volumeButtonIcon.addEventListener('click', function () {
        if (_this6.player.video.muted) {
          _this6.player.video.muted = false;

          _this6.player.switchVolumeIcon();

          _this6.player.bar.set('volume', _this6.player.volume(), 'width');
        } else {
          _this6.player.video.muted = true;
          _this6.player.template.volumeIcon.innerHTML = _icons__WEBPACK_IMPORTED_MODULE_2__["default"].volumeOff;

          _this6.player.bar.set('volume', 0, 'width');
        }
      });
    }
  }, {
    key: "initQualityButton",
    value: function initQualityButton() {
      var _this7 = this;

      if (this.player.options.video.quality) {
        this.player.template.qualityList.addEventListener('click', function (e) {
          if (e.target.classList.contains('dplayer-quality-item')) {
            _this7.player.switchQuality(e.target.dataset.index);
          }
        });
      }
    }
  }, {
    key: "initScreenshotButton",
    value: function initScreenshotButton() {
      var _this8 = this;

      if (this.player.options.screenshot) {
        this.player.template.camareButton.addEventListener('click', function () {
          var canvas = document.createElement('canvas');
          canvas.width = _this8.player.video.videoWidth;
          canvas.height = _this8.player.video.videoHeight;
          canvas.getContext('2d').drawImage(_this8.player.video, 0, 0, canvas.width, canvas.height);
          var dataURL;
          canvas.toBlob(function (blob) {
            dataURL = URL.createObjectURL(blob);
            var link = document.createElement('a');
            link.href = dataURL;
            link.download = 'DPlayer.png';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(dataURL);

            _this8.player.events.trigger('screenshot', dataURL);
          });
        });
      }
    }
  }, {
    key: "initAirplayButton",
    value: function initAirplayButton() {
      if (this.player.options.airplay) {
        if (window.WebKitPlaybackTargetAvailabilityEvent) {
          this.player.video.addEventListener('webkitplaybacktargetavailabilitychanged', function (event) {
            switch (event.availability) {
              case 'available':
                this.template.airplayButton.disable = false;
                break;

              default:
                this.template.airplayButton.disable = true;
            }

            this.template.airplayButton.addEventListener('click', function () {
              this.video.webkitShowPlaybackTargetPicker();
            }.bind(this));
          }.bind(this.player));
        } else {
          this.player.template.airplayButton.style.display = 'none';
        }
      }
    }
  }, {
    key: "initChromecast",
    value: function initChromecast() {
      var script = window.document.createElement('script');
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('src', 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1');
      window.document.body.appendChild(script);

      window.__onGCastApiAvailable = function (isAvailable) {
        if (isAvailable) {
          cast = window.chrome.cast;
          var sessionRequest = new cast.SessionRequest(cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID);
          var apiConfig = new cast.ApiConfig(sessionRequest, function () {}, function (status) {
            if (status === cast.ReceiverAvailability.AVAILABLE) {
              console.log('chromecast: ', status);
            }
          });
          cast.initialize(apiConfig, function () {});
        }
      };
    }
  }, {
    key: "initChromecastButton",
    value: function initChromecastButton() {
      var _this9 = this;

      if (this.player.options.chromecast) {
        if (runOnce) {
          runOnce = false;
          this.initChromecast();
        }

        var discoverDevices = function discoverDevices() {
          cast.requestSession(function (s) {
            _this9.session = s;
            launchMedia(_this9.player.options.video.url);
          }, function (err) {
            if (err.code === 'cancel') {
              _this9.session = undefined;
            } else {
              console.error('Error selecting a cast device', err);
            }
          });
        };

        var launchMedia = function launchMedia(media) {
          var mediaInfo = new cast.media.MediaInfo(media);
          var request = new cast.media.LoadRequest(mediaInfo);

          if (!_this9.session) {
            window.open(media);
            return false;
          }

          _this9.session.loadMedia(request, onMediaDiscovered.bind(_this9, 'loadMedia'), onMediaError).play();

          return true;
        };

        var onMediaDiscovered = function onMediaDiscovered(how, media) {
          _this9.currentMedia = media;
        };

        var onMediaError = function onMediaError(err) {
          console.error('Error launching media', err);
        };

        this.player.template.chromecastButton.addEventListener('click', function () {
          if (isCasting) {
            isCasting = false;

            _this9.currentMedia.stop();

            _this9.session.stop();

            _this9.initChromecast();
          } else {
            isCasting = true;
            discoverDevices();
          }
        });
      }
    }
  }, {
    key: "initSubtitleButton",
    value: function initSubtitleButton() {
      var _this10 = this;

      this.player.events.on('subtitle_show', function () {
        _this10.player.template.subtitleButton.dataset.balloon = _this10.player.tran('hide-subs');
        _this10.player.template.subtitleButtonInner.style.opacity = '';

        _this10.player.user.set('subtitle', 1);
      });
      this.player.events.on('subtitle_hide', function () {
        _this10.player.template.subtitleButton.dataset.balloon = _this10.player.tran('show-subs');
        _this10.player.template.subtitleButtonInner.style.opacity = '0.4';

        _this10.player.user.set('subtitle', 0);
      });
      this.player.template.subtitleButton.addEventListener('click', function () {
        _this10.player.subtitle.toggle();
      });
    }
  }, {
    key: "setAutoHide",
    value: function setAutoHide() {
      var _this11 = this;

      this.show();
      clearTimeout(this.autoHideTimer);
      this.autoHideTimer = setTimeout(function () {
        if (_this11.player.video.played.length && !_this11.player.paused && !_this11.disableAutoHide) {
          _this11.hide();
        }
      }, 3000);
    }
  }, {
    key: "show",
    value: function show() {
      this.player.container.classList.remove('dplayer-hide-controller');
    }
  }, {
    key: "hide",
    value: function hide() {
      this.player.container.classList.add('dplayer-hide-controller');
      this.player.setting.hide();
      this.player.comment && this.player.comment.hide();
    }
  }, {
    key: "isShow",
    value: function isShow() {
      return !this.player.container.classList.contains('dplayer-hide-controller');
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isShow()) {
        this.hide();
      } else {
        this.show();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (!_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isMobile) {
        this.player.container.removeEventListener('mousemove', this.setAutoHideHandler);
        this.player.container.removeEventListener('click', this.setAutoHideHandler);
      }

      clearTimeout(this.autoHideTimer);
    }
  }]);

  return Controller;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);

/***/ }),

/***/ "./src/js/danmaku.js":
/*!***************************!*\
  !*** ./src/js/danmaku.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Danmaku = /*#__PURE__*/function () {
  function Danmaku(options) {
    _classCallCheck(this, Danmaku);

    this.options = options;
    this.player = this.options.player;
    this.container = this.options.container;
    this.danTunnel = {
      right: {},
      top: {},
      bottom: {}
    };
    this.danIndex = 0;
    this.dan = [];
    this.showing = true;
    this._opacity = this.options.opacity;
    this.events = this.options.events;
    this.unlimited = this.options.unlimited;

    this._measure('');

    this.load();
  }

  _createClass(Danmaku, [{
    key: "load",
    value: function load() {
      var _this = this;

      var apiurl;

      if (this.options.api.maximum) {
        apiurl = "".concat(this.options.api.address, "v3/?id=").concat(this.options.api.id, "&max=").concat(this.options.api.maximum);
      } else {
        apiurl = "".concat(this.options.api.address, "v3/?id=").concat(this.options.api.id);
      }

      var endpoints = (this.options.api.addition || []).slice(0);
      endpoints.push(apiurl);
      this.events && this.events.trigger('danmaku_load_start', endpoints);

      this._readAllEndpoints(endpoints, function (results) {
        _this.dan = [].concat.apply([], results).sort(function (a, b) {
          return a.time - b.time;
        });
        window.requestAnimationFrame(function () {
          _this.frame();
        });

        _this.options.callback();

        _this.events && _this.events.trigger('danmaku_load_end');
      });
    }
  }, {
    key: "reload",
    value: function reload(newAPI) {
      this.options.api = newAPI;
      this.dan = [];
      this.clear();
      this.load();
    }
    /**
     * Asynchronously read danmaku from all API endpoints
     */

  }, {
    key: "_readAllEndpoints",
    value: function _readAllEndpoints(endpoints, callback) {
      var _this2 = this;

      var results = [];
      var readCount = 0;

      var _loop = function _loop(i) {
        _this2.options.apiBackend.read({
          url: endpoints[i],
          success: function success(data) {
            results[i] = data;
            ++readCount;

            if (readCount === endpoints.length) {
              callback(results);
            }
          },
          error: function error(msg) {
            _this2.options.error(msg || _this2.options.tran('danmaku-failed'));

            results[i] = [];
            ++readCount;

            if (readCount === endpoints.length) {
              callback(results);
            }
          }
        });
      };

      for (var i = 0; i < endpoints.length; ++i) {
        _loop(i);
      }
    }
  }, {
    key: "send",
    value: function send(dan, callback) {
      var _this3 = this;

      var danmakuData = {
        token: this.options.api.token,
        id: this.options.api.id,
        author: this.options.api.user,
        time: this.options.time(),
        text: dan.text,
        color: dan.color,
        type: dan.type
      };
      this.options.apiBackend.send({
        url: this.options.api.address + 'v3/',
        data: danmakuData,
        success: callback,
        error: function error(msg) {
          _this3.options.error(msg || _this3.options.tran('danmaku-failed'));
        }
      });
      this.dan.splice(this.danIndex, 0, danmakuData);
      this.danIndex++;
      var danmaku = {
        text: this.htmlEncode(danmakuData.text),
        color: danmakuData.color,
        type: danmakuData.type,
        border: "2px solid ".concat(this.options.borderColor)
      };
      this.draw(danmaku);
      this.events && this.events.trigger('danmaku_send', danmakuData);
    }
  }, {
    key: "frame",
    value: function frame() {
      var _this4 = this;

      if (this.dan.length && !this.paused && this.showing) {
        var item = this.dan[this.danIndex];
        var dan = [];

        while (item && this.options.time() > parseFloat(item.time)) {
          dan.push(item);
          item = this.dan[++this.danIndex];
        }

        this.draw(dan);
      }

      window.requestAnimationFrame(function () {
        _this4.frame();
      });
    }
  }, {
    key: "opacity",
    value: function opacity(percentage) {
      if (percentage !== undefined) {
        var items = this.container.getElementsByClassName('dplayer-danmaku-item');

        for (var i = 0; i < items.length; i++) {
          items[i].style.opacity = percentage;
        }

        this._opacity = percentage;
        this.events && this.events.trigger('danmaku_opacity', this._opacity);
      }

      return this._opacity;
    }
    /**
     * Push a danmaku into DPlayer
     *
     * @param {Object Array} dan - {text, color, type}
     * text - danmaku content
     * color - danmaku color, default: `#fff`
     * type - danmaku type, `right` `top` `bottom`, default: `right`
     */

  }, {
    key: "draw",
    value: function draw(dan) {
      var _this5 = this;

      if (this.showing) {
        var itemHeight = this.options.height;
        var danWidth = this.container.offsetWidth;
        var danHeight = this.container.offsetHeight;
        var itemY = parseInt(danHeight / itemHeight);

        var danItemRight = function danItemRight(ele) {
          var eleWidth = ele.offsetWidth || parseInt(ele.style.width);
          var eleRight = ele.getBoundingClientRect().right || _this5.container.getBoundingClientRect().right + eleWidth;
          return _this5.container.getBoundingClientRect().right - eleRight;
        };

        var danSpeed = function danSpeed(width) {
          return (danWidth + width) / 5;
        };

        var getTunnel = function getTunnel(ele, type, width) {
          var tmp = danWidth / danSpeed(width);

          var _loop2 = function _loop2(i) {
            var item = _this5.danTunnel[type][i + ''];

            if (item && item.length) {
              if (type !== 'right') {
                return "continue";
              }

              for (var j = 0; j < item.length; j++) {
                var danRight = danItemRight(item[j]) - 10;

                if (danRight <= danWidth - tmp * danSpeed(parseInt(item[j].style.width)) || danRight <= 0) {
                  break;
                }

                if (j === item.length - 1) {
                  _this5.danTunnel[type][i + ''].push(ele);

                  ele.addEventListener('animationend', function () {
                    _this5.danTunnel[type][i + ''].splice(0, 1);
                  });
                  return {
                    v: i % itemY
                  };
                }
              }
            } else {
              _this5.danTunnel[type][i + ''] = [ele];
              ele.addEventListener('animationend', function () {
                _this5.danTunnel[type][i + ''].splice(0, 1);
              });
              return {
                v: i % itemY
              };
            }
          };

          for (var i = 0; _this5.unlimited || i < itemY; i++) {
            var _ret = _loop2(i);

            if (_ret === "continue") continue;
            if (_typeof(_ret) === "object") return _ret.v;
          }

          return -1;
        };

        if (Object.prototype.toString.call(dan) !== '[object Array]') {
          dan = [dan];
        }

        var docFragment = document.createDocumentFragment();

        var _loop3 = function _loop3(i) {
          dan[i].type = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].number2Type(dan[i].type);

          if (!dan[i].color) {
            dan[i].color = 16777215;
          }

          var item = document.createElement('div');
          item.classList.add('dplayer-danmaku-item');
          item.classList.add("dplayer-danmaku-".concat(dan[i].type));

          if (dan[i].border) {
            item.innerHTML = "<span style=\"border:".concat(dan[i].border, "\">").concat(dan[i].text, "</span>");
          } else {
            item.innerHTML = dan[i].text;
          }

          item.style.opacity = _this5._opacity;
          item.style.color = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].number2Color(dan[i].color);
          item.addEventListener('animationend', function () {
            _this5.container.removeChild(item);
          });

          var itemWidth = _this5._measure(dan[i].text);

          var tunnel = void 0; // adjust

          switch (dan[i].type) {
            case 'right':
              tunnel = getTunnel(item, dan[i].type, itemWidth);

              if (tunnel >= 0) {
                item.style.width = itemWidth + 1 + 'px';
                item.style.top = itemHeight * tunnel + 'px';
                item.style.transform = "translateX(-".concat(danWidth, "px)");
              }

              break;

            case 'top':
              tunnel = getTunnel(item, dan[i].type);

              if (tunnel >= 0) {
                item.style.top = itemHeight * tunnel + 'px';
              }

              break;

            case 'bottom':
              tunnel = getTunnel(item, dan[i].type);

              if (tunnel >= 0) {
                item.style.bottom = itemHeight * tunnel + 'px';
              }

              break;

            default:
              console.error("Can't handled danmaku type: ".concat(dan[i].type));
          }

          if (tunnel >= 0) {
            // move
            item.classList.add('dplayer-danmaku-move');
            item.style.animationDuration = _this5._danAnimation(dan[i].type); // insert

            docFragment.appendChild(item);
          }
        };

        for (var i = 0; i < dan.length; i++) {
          _loop3(i);
        }

        this.container.appendChild(docFragment);
        return docFragment;
      }
    }
  }, {
    key: "play",
    value: function play() {
      this.paused = false;
    }
  }, {
    key: "pause",
    value: function pause() {
      this.paused = true;
    }
  }, {
    key: "_measure",
    value: function _measure(text) {
      if (!this.context) {
        var measureStyle = getComputedStyle(this.container.getElementsByClassName('dplayer-danmaku-item')[0], null);
        this.context = document.createElement('canvas').getContext('2d');
        this.context.font = measureStyle.getPropertyValue('font');
      }

      return this.context.measureText(text).width;
    }
  }, {
    key: "seek",
    value: function seek() {
      this.clear();

      for (var i = 0; i < this.dan.length; i++) {
        if (this.dan[i].time >= this.options.time()) {
          this.danIndex = i;
          break;
        }

        this.danIndex = this.dan.length;
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.danTunnel = {
        right: {},
        top: {},
        bottom: {}
      };
      this.danIndex = 0;
      this.options.container.innerHTML = '';
      this.events && this.events.trigger('danmaku_clear');
    }
  }, {
    key: "htmlEncode",
    value: function htmlEncode(str) {
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2f;');
    }
  }, {
    key: "resize",
    value: function resize() {
      var danWidth = this.container.offsetWidth;
      var items = this.container.getElementsByClassName('dplayer-danmaku-item');

      for (var i = 0; i < items.length; i++) {
        items[i].style.transform = "translateX(-".concat(danWidth, "px)");
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      this.showing = false;
      this.pause();
      this.clear();
      this.events && this.events.trigger('danmaku_hide');
    }
  }, {
    key: "show",
    value: function show() {
      this.seek();
      this.showing = true;
      this.play();
      this.events && this.events.trigger('danmaku_show');
    }
  }, {
    key: "unlimit",
    value: function unlimit(_boolean) {
      this.unlimited = _boolean;
    }
  }, {
    key: "speed",
    value: function speed(rate) {
      this.options.api.speedRate = rate;
    }
  }, {
    key: "_danAnimation",
    value: function _danAnimation(position) {
      var rate = this.options.api.speedRate || 1;
      var isFullScreen = !!this.player.fullScreen.isFullScreen();
      var animations = {
        top: "".concat((isFullScreen ? 6 : 4) / rate, "s"),
        right: "".concat((isFullScreen ? 8 : 5) / rate, "s"),
        bottom: "".concat((isFullScreen ? 6 : 4) / rate, "s")
      };
      return animations[position];
    }
  }]);

  return Danmaku;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Danmaku);

/***/ }),

/***/ "./src/js/events.js":
/*!**************************!*\
  !*** ./src/js/events.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Events = /*#__PURE__*/function () {
  function Events() {
    _classCallCheck(this, Events);

    this.events = {};
    this.videoEvents = ['abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'ended', 'error', 'loadeddata', 'loadedmetadata', 'loadstart', 'mozaudioavailable', 'pause', 'play', 'playing', 'progress', 'ratechange', 'seeked', 'seeking', 'stalled', 'suspend', 'timeupdate', 'volumechange', 'waiting'];
    this.playerEvents = ['screenshot', 'thumbnails_show', 'thumbnails_hide', 'danmaku_show', 'danmaku_hide', 'danmaku_clear', 'danmaku_loaded', 'danmaku_send', 'danmaku_opacity', 'contextmenu_show', 'contextmenu_hide', 'notice_show', 'notice_hide', 'quality_start', 'quality_end', 'destroy', 'resize', 'fullscreen', 'fullscreen_cancel', 'webfullscreen', 'webfullscreen_cancel', 'subtitle_show', 'subtitle_hide', 'subtitle_change'];
  }

  _createClass(Events, [{
    key: "on",
    value: function on(name, callback) {
      if (this.type(name) && typeof callback === 'function') {
        if (!this.events[name]) {
          this.events[name] = [];
        }

        this.events[name].push(callback);
      }
    }
  }, {
    key: "trigger",
    value: function trigger(name, info) {
      if (this.events[name] && this.events[name].length) {
        for (var i = 0; i < this.events[name].length; i++) {
          this.events[name][i](info);
        }
      }
    }
  }, {
    key: "type",
    value: function type(name) {
      if (this.playerEvents.indexOf(name) !== -1) {
        return 'player';
      } else if (this.videoEvents.indexOf(name) !== -1) {
        return 'video';
      }

      console.error("Unknown event name: ".concat(name));
      return null;
    }
  }]);

  return Events;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events);

/***/ }),

/***/ "./src/js/fullscreen.js":
/*!******************************!*\
  !*** ./src/js/fullscreen.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var FullScreen = /*#__PURE__*/function () {
  function FullScreen(player) {
    var _this = this;

    _classCallCheck(this, FullScreen);

    this.player = player;
    this.lastScrollPosition = {
      left: 0,
      top: 0
    };
    this.player.events.on('webfullscreen', function () {
      _this.player.resize();
    });
    this.player.events.on('webfullscreen_cancel', function () {
      _this.player.resize();

      _utils__WEBPACK_IMPORTED_MODULE_0__["default"].setScrollPosition(_this.lastScrollPosition);
    });

    this.fullscreenchange = function () {
      _this.player.resize();

      if (_this.isFullScreen('browser')) {
        _this.player.events.trigger('fullscreen');
      } else {
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].setScrollPosition(_this.lastScrollPosition);

        _this.player.events.trigger('fullscreen_cancel');
      }
    };

    this.docfullscreenchange = function () {
      var fullEle = document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;

      if (fullEle && fullEle !== _this.player.container) {
        return;
      }

      _this.player.resize();

      if (fullEle) {
        _this.player.events.trigger('fullscreen');
      } else {
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].setScrollPosition(_this.lastScrollPosition);

        _this.player.events.trigger('fullscreen_cancel');
      }
    };

    if (/Firefox/.test(navigator.userAgent)) {
      document.addEventListener('mozfullscreenchange', this.docfullscreenchange);
      document.addEventListener('fullscreenchange', this.docfullscreenchange);
    } else {
      this.player.container.addEventListener('fullscreenchange', this.fullscreenchange);
      this.player.container.addEventListener('webkitfullscreenchange', this.fullscreenchange);
      document.addEventListener('msfullscreenchange', this.docfullscreenchange);
      document.addEventListener('MSFullscreenChange', this.docfullscreenchange);
    }
  }

  _createClass(FullScreen, [{
    key: "isFullScreen",
    value: function isFullScreen() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'browser';

      switch (type) {
        case 'browser':
          return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;

        case 'web':
          return this.player.container.classList.contains('dplayer-fulled');
      }
    }
  }, {
    key: "request",
    value: function request() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'browser';
      var anotherType = type === 'browser' ? 'web' : 'browser';
      var anotherTypeOn = this.isFullScreen(anotherType);

      if (!anotherTypeOn) {
        this.lastScrollPosition = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getScrollPosition();
      }

      switch (type) {
        case 'browser':
          if (this.player.container.requestFullscreen) {
            this.player.container.requestFullscreen();
          } else if (this.player.container.mozRequestFullScreen) {
            this.player.container.mozRequestFullScreen();
          } else if (this.player.container.webkitRequestFullscreen) {
            this.player.container.webkitRequestFullscreen();
          } else if (this.player.video.webkitEnterFullscreen) {
            // Safari for iOS
            this.player.video.webkitEnterFullscreen();
          } else if (this.player.video.webkitEnterFullScreen) {
            this.player.video.webkitEnterFullScreen();
          } else if (this.player.container.msRequestFullscreen) {
            this.player.container.msRequestFullscreen();
          }

          break;

        case 'web':
          this.player.container.classList.add('dplayer-fulled');
          document.body.classList.add('dplayer-web-fullscreen-fix');
          this.player.events.trigger('webfullscreen');
          break;
      }

      if (anotherTypeOn) {
        this.cancel(anotherType);
      }
    }
  }, {
    key: "cancel",
    value: function cancel() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'browser';

      switch (type) {
        case 'browser':
          if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          } else if (document.webkitCancelFullscreen) {
            document.webkitCancelFullscreen();
          } else if (document.msCancelFullScreen) {
            document.msCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }

          break;

        case 'web':
          this.player.container.classList.remove('dplayer-fulled');
          document.body.classList.remove('dplayer-web-fullscreen-fix');
          this.player.events.trigger('webfullscreen_cancel');
          break;
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'browser';

      if (this.isFullScreen(type)) {
        this.cancel(type);
      } else {
        this.request(type);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (/Firefox/.test(navigator.userAgent)) {
        document.removeEventListener('mozfullscreenchange', this.docfullscreenchange);
        document.removeEventListener('fullscreenchange', this.docfullscreenchange);
      } else {
        this.player.container.removeEventListener('fullscreenchange', this.fullscreenchange);
        this.player.container.removeEventListener('webkitfullscreenchange', this.fullscreenchange);
        document.removeEventListener('msfullscreenchange', this.docfullscreenchange);
        document.removeEventListener('MSFullscreenChange', this.docfullscreenchange);
      }
    }
  }]);

  return FullScreen;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FullScreen);

/***/ }),

/***/ "./src/js/hotkey.js":
/*!**************************!*\
  !*** ./src/js/hotkey.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var HotKey = /*#__PURE__*/function () {
  function HotKey(player) {
    _classCallCheck(this, HotKey);

    this.player = player;
    this.doHotKeyHandler = this.doHotKey.bind(this);
    this.cancelFullScreenHandler = this.cancelFullScreen.bind(this);

    if (this.player.options.hotkey) {
      document.addEventListener('keydown', this.doHotKeyHandler);
    }

    document.addEventListener('keydown', this.cancelFullScreenHandler);
  }

  _createClass(HotKey, [{
    key: "doHotKey",
    value: function doHotKey(e) {
      if (this.player.focus) {
        var tag = document.activeElement.tagName.toUpperCase();
        var editable = document.activeElement.getAttribute('contenteditable');

        if (tag !== 'INPUT' && tag !== 'TEXTAREA' && editable !== '' && editable !== 'true') {
          var event = e || window.event;
          var percentage;

          switch (event.keyCode) {
            case 32:
              event.preventDefault();
              this.player.toggle();
              break;

            case 37:
              event.preventDefault();

              if (this.player.options.live) {
                break;
              }

              this.player.seek(this.player.video.currentTime - 5);
              this.player.controller.setAutoHide();
              break;

            case 39:
              event.preventDefault();

              if (this.player.options.live) {
                break;
              }

              this.player.seek(this.player.video.currentTime + 5);
              this.player.controller.setAutoHide();
              break;

            case 38:
              event.preventDefault();
              percentage = this.player.volume() + 0.1;
              this.player.volume(percentage);
              break;

            case 40:
              event.preventDefault();
              percentage = this.player.volume() - 0.1;
              this.player.volume(percentage);
              break;
          }
        }
      }
    }
  }, {
    key: "cancelFullScreen",
    value: function cancelFullScreen(e) {
      var event = e || window.event;

      switch (event.keyCode) {
        case 27:
          if (this.player.fullScreen.isFullScreen('web')) {
            this.player.fullScreen.cancel('web');
          }

          break;
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.player.options.hotkey) {
        document.removeEventListener('keydown', this.doHotKeyHandler);
      }

      document.removeEventListener('keydown', this.cancelFullScreenHandler);
    }
  }]);

  return HotKey;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HotKey);

/***/ }),

/***/ "./src/js/i18n.js":
/*!************************!*\
  !*** ./src/js/i18n.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i18n": () => (/* binding */ i18n)
/* harmony export */ });
/*
W3C def language codes is :
    language-code = primary-code ( "-" subcode )
        primary-code    ISO 639-1   ( the names of language with 2 code )
        subcode         ISO 3166    ( the names of countries )

NOTE: use lowercase to prevent case typo from user!
Use this as shown below..... */
function i18n(lang) {
  var _this = this;

  this.lang = lang; // in case someone says en-us, and en is present!

  this.fallbackLang = this.lang.includes('-') ? this.lang.split('-')[0] : this.lang;

  this.tran = function (key) {
    key = key.toLowerCase();

    if (tranTxt[_this.lang] && tranTxt[_this.lang][key]) {
      return tranTxt[_this.lang][key];
    } else if (tranTxt[_this.fallbackLang] && tranTxt[_this.fallbackLang][key]) {
      return tranTxt[_this.fallbackLang][key];
    } else if (standard[key]) {
      return standard[key];
    } else {
      return key;
    }
  };
} // abstract model for recognizing if valid translations are present
// const model = {
//     'danmaku-loading': [],
//     top: [],
//     bottom: [],
//     rolling: [],
//     'input-danmaku-enter': [],
//     'about-author': [],
//     'dplayer-feedback': [],
//     'about-dplayer': [],
//     loop: [],
//     speed: [],
//     'opacity-danmaku': [],
//     normal: [],
//     'please-input-danmaku': [],
//     'set-danmaku-color': [],
//     'set-danmaku-type': [],
//     'show-danmaku': [],
//     'video-failed': [],
//     'danmaku-failed': [],
//     'danmaku-send-failed': [],
//     'switching-quality': [{ symbol: '%q', name: 'Quality', example: '720p' }],
//     'switched-quality': [{ symbol: '%q', name: 'Quality', example: '720p' }],
//     ff: [{ symbol: '%s', name: 'Seconds', example: '5' }],
//     rew: [{ symbol: '%s', name: 'Seconds', example: '5' }],
//     'unlimited-danmaku': [],
//     'send-danmaku': [],
//     setting: [],
//     fullscreen: [],
//     'web-fullscreen': [],
//     send: [],
//     screenshot: [],
//     airplay: [],
//     chromecast: [],
//     'show-subs': [],
//     'hide-subs': [],
//     volume: [],
//     live: [],
//     'video-info': [],
// };
// Standard english translations


var standard = {
  'danmaku-loading': 'Danmaku is loading',
  top: 'Top',
  bottom: 'Bottom',
  rolling: 'Rolling',
  'input-danmaku-enter': 'Input danmaku, hit Enter',
  'about-author': 'About author',
  'dplayer-feedback': 'DPlayer feedback',
  'about-dplayer': 'About DPlayer',
  loop: 'Loop',
  speed: 'Speed',
  'opacity-danmaku': 'Opacity for danmaku',
  normal: 'Normal',
  'please-input-danmaku': 'Please input danmaku content!',
  'set-danmaku-color': 'Set danmaku color',
  'set-danmaku-type': 'Set danmaku type',
  'show-danmaku': 'Show danmaku',
  'video-failed': 'Video load failed',
  'danmaku-failed': 'Danmaku load failed',
  'danmaku-send-failed': 'Danmaku send failed',
  'switching-quality': 'Switching to %q quality',
  'switched-quality': 'Switched to %q quality',
  ff: 'FF %s s',
  rew: 'REW %s s',
  'unlimited-danmaku': 'Unlimited danmaku',
  'send-danmaku': 'Send danmaku',
  setting: 'Setting',
  fullscreen: 'Full screen',
  'web-fullscreen': 'Web full screen',
  send: 'Send',
  screenshot: 'Screenshot',
  airplay: 'AirPlay',
  chromecast: 'ChromeCast',
  subtitle: 'Subtitle',
  off: 'Off',
  'show-subs': 'Show subtitle',
  'hide-subs': 'Hide subtitle',
  volume: 'Volume',
  live: 'Live',
  'video-info': 'Video info'
}; // add translation text here

var tranTxt = {
  en: standard,
  'zh-cn': {
    'danmaku-loading': '弹幕加载中',
    top: '顶部',
    bottom: '底部',
    rolling: '滚动',
    'input-danmaku-enter': '输入弹幕，回车发送',
    'about-author': '关于作者',
    'dplayer-feedback': '播放器意见反馈',
    'about-dplayer': '关于 DPlayer 播放器',
    loop: '洗脑循环',
    speed: '速度',
    'opacity-danmaku': '弹幕透明度',
    normal: '正常',
    'please-input-danmaku': '要输入弹幕内容啊喂！',
    'set-danmaku-color': '设置弹幕颜色',
    'set-danmaku-type': '设置弹幕类型',
    'show-danmaku': '显示弹幕',
    'video-failed': '视频加载失败',
    'danmaku-failed': '弹幕加载失败',
    'danmaku-send-failed': '弹幕发送失败',
    'switching-quality': '正在切换至 %q 画质',
    'switched-quality': '已经切换至 %q 画质',
    ff: '快进 %s 秒',
    rew: '快退 %s 秒',
    'unlimited-danmaku': '海量弹幕',
    'send-danmaku': '发送弹幕',
    setting: '设置',
    fullscreen: '全屏',
    'web-fullscreen': '页面全屏',
    send: '发送',
    screenshot: '截图',
    airplay: '无线投屏',
    chromecast: 'ChromeCast',
    subtitle: '字幕',
    off: '关闭',
    'show-subs': '显示字幕',
    'hide-subs': '隐藏字幕',
    volume: '音量',
    live: '直播',
    'video-info': '视频统计信息'
  },
  'zh-tw': {
    'danmaku-loading': '彈幕載入中',
    top: '頂部',
    bottom: '底部',
    rolling: '滾動',
    'input-danmaku-enter': '輸入彈幕，Enter 發送',
    'about-author': '關於作者',
    'dplayer-feedback': '播放器意見回饋',
    'about-dplayer': '關於 DPlayer 播放器',
    loop: '循環播放',
    speed: '速度',
    'opacity-danmaku': '彈幕透明度',
    normal: '正常',
    'please-input-danmaku': '請輸入彈幕內容啊！',
    'set-danmaku-color': '設定彈幕顏色',
    'set-danmaku-type': '設定彈幕類型',
    'show-danmaku': '顯示彈幕',
    'video-failed': '影片載入失敗',
    'danmaku-failed': '彈幕載入失敗',
    'danmaku-send-failed': '彈幕發送失敗',
    'switching-quality': '正在切換至 %q 畫質',
    'switched-quality': '已經切換至 %q 畫質',
    ff: '快進 %s 秒',
    rew: '快退 %s 秒',
    'unlimited-danmaku': '巨量彈幕',
    'send-danmaku': '發送彈幕',
    setting: '設定',
    fullscreen: '全螢幕',
    'web-fullscreen': '頁面全螢幕',
    send: '發送',
    screenshot: '截圖',
    airplay: '無線投屏',
    chromecast: 'ChromeCast',
    subtitle: '字幕',
    off: '關閉',
    'show-subs': '顯示字幕',
    'hide-subs': '隱藏字幕',
    volume: '音量',
    live: '直播',
    'video-info': '影片統計訊息'
  },
  'ko-kr': {
    'danmaku-loading': 'Danmaku를 불러오는 중입니다.',
    top: 'Top',
    bottom: 'Bottom',
    rolling: 'Rolling',
    'input-danmaku-enter': 'Danmaku를 입력하고 Enter를 누르세요.',
    'about-author': '만든이',
    'dplayer-feedback': '피드백 보내기',
    'about-dplayer': 'DPlayer 정보',
    loop: '반복',
    speed: '배속',
    'opacity-danmaku': 'Danmaku 불투명도',
    normal: '표준',
    'please-input-danmaku': 'Danmaku를 입력하세요!',
    'set-danmaku-color': 'Danmaku 색상',
    'set-danmaku-type': 'Danmaku 설정',
    'show-danmaku': 'Danmaku 표시',
    'video-failed': '비디오를 불러오지 못했습니다.',
    'danmaku-failed': 'Danmaku를 불러오지 못했습니다.',
    'danmaku-send-failed': 'Danmaku 전송에 실패했습니다.',
    'Switching to': '',
    'Switched to': '',
    'switching-quality': '전환 %q 화질',
    'switched-quality': '전환 됨 %q 화질',
    ff: '앞으로 %s 초',
    rew: '뒤로 %s 초',
    'unlimited-danmaku': '끝없는 Danmaku',
    'send-danmaku': 'Danmaku 보내기',
    setting: '설정',
    fullscreen: '전체 화면',
    'web-fullscreen': '웹 내 전체화면',
    send: '보내기',
    screenshot: '화면 캡쳐',
    airplay: '에어플레이',
    chromecast: 'ChromeCast',
    subtitle: '부제',
    off: '끄다',
    'show-subs': '자막 보이기',
    'hide-subs': '자막 숨기기',
    Volume: '볼륨',
    live: '생방송',
    'video-info': '비디오 정보'
  },
  de: {
    'danmaku-loading': 'Danmaku lädt...',
    top: 'Oben',
    bottom: 'Unten',
    rolling: 'Rollend',
    'input-danmaku-enter': 'Drücke Enter nach dem Einfügen vom Danmaku',
    'about-author': 'Über den Autor',
    'dplayer-feedback': 'DPlayer Feedback',
    'about-dplayer': 'Über DPlayer',
    loop: 'Wiederholen',
    speed: 'Geschwindigkeit',
    'opacity-danmaku': 'Transparenz für Danmaku',
    normal: 'Normal',
    'please-input-danmaku': 'Bitte Danmaku Inhalt eingeben!',
    'set-danmaku-color': 'Danmaku Farbe festlegen',
    'set-danmaku-type': 'Danmaku Typ festlegen',
    'show-danmaku': 'Zeige Danmaku',
    'video-failed': 'Das Video konnte nicht geladen werden',
    'danmaku-failed': 'Danmaku konnte nicht geladen werden',
    'danmaku-send-failed': 'Das senden von Danmaku ist fehgeschlagen',
    'switching-quality': 'Wechsle zur %q Qualität',
    'switched-quality': 'Zur %q Qualität gewechselt',
    ff: '%s s Vorwärts',
    rew: '%s s Zurück',
    'unlimited-danmaku': 'Unlimitiertes Danmaku',
    'send-danmaku': 'Sende Danmaku',
    setting: 'Einstellungen',
    fullscreen: 'Vollbild',
    'web-fullscreen': 'Browser Vollbild',
    send: 'Senden',
    screenshot: 'Screenshot',
    airplay: 'AirPlay',
    'show-subs': 'Zeige Untertitel',
    chromecast: 'ChromeCast',
    subtitle: 'Untertitel',
    off: 'Schließung',
    'hide-subs': 'Verstecke Untertitel',
    volume: 'Lautstärke',
    live: 'Live',
    'video-info': 'Video Info'
  }
};


/***/ }),

/***/ "./src/js/icons.js":
/*!*************************!*\
  !*** ./src/js/icons.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_play_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/play.svg */ "./src/assets/play.svg");
/* harmony import */ var _assets_play_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_play_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_pause_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/pause.svg */ "./src/assets/pause.svg");
/* harmony import */ var _assets_pause_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_pause_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_volume_up_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/volume-up.svg */ "./src/assets/volume-up.svg");
/* harmony import */ var _assets_volume_up_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_volume_up_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_volume_down_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/volume-down.svg */ "./src/assets/volume-down.svg");
/* harmony import */ var _assets_volume_down_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_volume_down_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_volume_off_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/volume-off.svg */ "./src/assets/volume-off.svg");
/* harmony import */ var _assets_volume_off_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_volume_off_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_full_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/full.svg */ "./src/assets/full.svg");
/* harmony import */ var _assets_full_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_full_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_full_web_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/full-web.svg */ "./src/assets/full-web.svg");
/* harmony import */ var _assets_full_web_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_full_web_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_setting_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/setting.svg */ "./src/assets/setting.svg");
/* harmony import */ var _assets_setting_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_setting_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_right_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/right.svg */ "./src/assets/right.svg");
/* harmony import */ var _assets_right_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_right_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_comment_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/comment.svg */ "./src/assets/comment.svg");
/* harmony import */ var _assets_comment_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_comment_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_comment_off_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/comment-off.svg */ "./src/assets/comment-off.svg");
/* harmony import */ var _assets_comment_off_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_comment_off_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_send_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/send.svg */ "./src/assets/send.svg");
/* harmony import */ var _assets_send_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_send_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_pallette_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/pallette.svg */ "./src/assets/pallette.svg");
/* harmony import */ var _assets_pallette_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_pallette_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_camera_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/camera.svg */ "./src/assets/camera.svg");
/* harmony import */ var _assets_camera_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_camera_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_airplay_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/airplay.svg */ "./src/assets/airplay.svg");
/* harmony import */ var _assets_airplay_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_airplay_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_subtitle_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/subtitle.svg */ "./src/assets/subtitle.svg");
/* harmony import */ var _assets_subtitle_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_subtitle_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_loading_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/loading.svg */ "./src/assets/loading.svg");
/* harmony import */ var _assets_loading_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_loading_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_chromecast_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/chromecast.svg */ "./src/assets/chromecast.svg");
/* harmony import */ var _assets_chromecast_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_chromecast_svg__WEBPACK_IMPORTED_MODULE_17__);


















var Icons = {
  play: (_assets_play_svg__WEBPACK_IMPORTED_MODULE_0___default()),
  pause: (_assets_pause_svg__WEBPACK_IMPORTED_MODULE_1___default()),
  volumeUp: (_assets_volume_up_svg__WEBPACK_IMPORTED_MODULE_2___default()),
  volumeDown: (_assets_volume_down_svg__WEBPACK_IMPORTED_MODULE_3___default()),
  volumeOff: (_assets_volume_off_svg__WEBPACK_IMPORTED_MODULE_4___default()),
  full: (_assets_full_svg__WEBPACK_IMPORTED_MODULE_5___default()),
  fullWeb: (_assets_full_web_svg__WEBPACK_IMPORTED_MODULE_6___default()),
  setting: (_assets_setting_svg__WEBPACK_IMPORTED_MODULE_7___default()),
  right: (_assets_right_svg__WEBPACK_IMPORTED_MODULE_8___default()),
  comment: (_assets_comment_svg__WEBPACK_IMPORTED_MODULE_9___default()),
  commentOff: (_assets_comment_off_svg__WEBPACK_IMPORTED_MODULE_10___default()),
  send: (_assets_send_svg__WEBPACK_IMPORTED_MODULE_11___default()),
  pallette: (_assets_pallette_svg__WEBPACK_IMPORTED_MODULE_12___default()),
  camera: (_assets_camera_svg__WEBPACK_IMPORTED_MODULE_13___default()),
  subtitle: (_assets_subtitle_svg__WEBPACK_IMPORTED_MODULE_15___default()),
  loading: (_assets_loading_svg__WEBPACK_IMPORTED_MODULE_16___default()),
  airplay: (_assets_airplay_svg__WEBPACK_IMPORTED_MODULE_14___default()),
  chromecast: (_assets_chromecast_svg__WEBPACK_IMPORTED_MODULE_17___default())
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icons);

/***/ }),

/***/ "./src/js/info-panel.js":
/*!******************************!*\
  !*** ./src/js/info-panel.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* global DPLAYER_VERSION GIT_HASH */
var InfoPanel = /*#__PURE__*/function () {
  function InfoPanel(player) {
    var _this = this;

    _classCallCheck(this, InfoPanel);

    this.container = player.template.infoPanel;
    this.template = player.template;
    this.video = player.video;
    this.player = player;
    this.template.infoPanelClose.addEventListener('click', function () {
      _this.hide();
    });
  }

  _createClass(InfoPanel, [{
    key: "show",
    value: function show() {
      this.beginTime = Date.now();
      this.update();
      this.player.timer.enable('info');
      this.player.timer.enable('fps');
      this.container.classList.remove('dplayer-info-panel-hide');
    }
  }, {
    key: "hide",
    value: function hide() {
      this.player.timer.disable('info');
      this.player.timer.disable('fps');
      this.container.classList.add('dplayer-info-panel-hide');
    }
  }, {
    key: "triggle",
    value: function triggle() {
      if (this.container.classList.contains('dplayer-info-panel-hide')) {
        this.show();
      } else {
        this.hide();
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.template.infoVersion.innerHTML = "v".concat("1.27.0", " ").concat("v1.27.0-2-g81bd218");
      this.template.infoType.innerHTML = this.player.type;
      this.template.infoUrl.innerHTML = this.player.options.video.url;
      this.template.infoResolution.innerHTML = "".concat(this.player.video.videoWidth, " x ").concat(this.player.video.videoHeight);
      this.template.infoDuration.innerHTML = this.player.video.duration;

      if (this.player.options.danmaku) {
        this.template.infoDanmakuId.innerHTML = this.player.options.danmaku.id;
        this.template.infoDanmakuApi.innerHTML = this.player.options.danmaku.api;
        this.template.infoDanmakuAmount.innerHTML = this.player.danmaku.dan.length;
      }
    }
  }, {
    key: "fps",
    value: function fps(value) {
      this.template.infoFPS.innerHTML = "".concat(value.toFixed(1));
    }
  }]);

  return InfoPanel;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoPanel);

/***/ }),

/***/ "./src/js/options.js":
/*!***************************!*\
  !*** ./src/js/options.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/js/api.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/* global DPLAYER_VERSION */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (options) {
  // default options
  var defaultOption = {
    container: options.element || document.getElementsByClassName('dplayer')[0],
    live: false,
    autoplay: false,
    theme: '#b7daff',
    loop: false,
    lang: (navigator.language || navigator.browserLanguage).toLowerCase(),
    screenshot: false,
    airplay: true,
    chromecast: false,
    hotkey: true,
    preload: 'metadata',
    volume: 0.7,
    playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2],
    apiBackend: _api_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    video: {},
    contextmenu: [],
    mutex: true,
    pluginOptions: {
      hls: {},
      flv: {},
      dash: {},
      webtorrent: {}
    },
    preventClickToggle: false
  };

  for (var defaultKey in defaultOption) {
    if (defaultOption.hasOwnProperty(defaultKey) && !options.hasOwnProperty(defaultKey)) {
      options[defaultKey] = defaultOption[defaultKey];
    }
  }

  if (options.video) {
    !options.video.type && (options.video.type = 'auto');
  }

  if (_typeof(options.danmaku) === 'object' && options.danmaku) {
    !options.danmaku.user && (options.danmaku.user = 'DIYgod');
  }

  if (options.subtitle) {
    !options.subtitle.type && (options.subtitle.type = 'webvtt');
    !options.subtitle.fontSize && (options.subtitle.fontSize = '20px');
    !options.subtitle.bottom && (options.subtitle.bottom = '40px');
    !options.subtitle.color && (options.subtitle.color = '#fff');
  }

  if (options.video.quality) {
    options.video.url = options.video.quality[options.video.defaultQuality].url;
  }

  if (options.lang) {
    options.lang = options.lang.toLowerCase();
  }

  options.contextmenu = options.contextmenu.concat([{
    key: 'video-info',
    click: function click(player) {
      player.infoPanel.triggle();
    }
  }, {
    key: 'about-author',
    link: 'https://diygod.me'
  }, {
    text: "DPlayer v".concat("1.27.0"),
    link: 'https://github.com/MoePlayer/DPlayer'
  }]);
  return options;
});

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var promise_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! promise-polyfill */ "./node_modules/promise-polyfill/src/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ "./src/js/options.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i18n */ "./src/js/i18n.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template */ "./src/js/template.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons */ "./src/js/icons.js");
/* harmony import */ var _danmaku__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./danmaku */ "./src/js/danmaku.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events */ "./src/js/events.js");
/* harmony import */ var _fullscreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fullscreen */ "./src/js/fullscreen.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user */ "./src/js/user.js");
/* harmony import */ var _subtitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./subtitle */ "./src/js/subtitle.js");
/* harmony import */ var _subtitles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./subtitles */ "./src/js/subtitles.js");
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bar */ "./src/js/bar.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./timer */ "./src/js/timer.js");
/* harmony import */ var _bezel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bezel */ "./src/js/bezel.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./controller */ "./src/js/controller.js");
/* harmony import */ var _setting__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./setting */ "./src/js/setting.js");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./comment */ "./src/js/comment.js");
/* harmony import */ var _hotkey__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./hotkey */ "./src/js/hotkey.js");
/* harmony import */ var _contextmenu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contextmenu */ "./src/js/contextmenu.js");
/* harmony import */ var _info_panel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./info-panel */ "./src/js/info-panel.js");
/* harmony import */ var _template_video_art__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../template/video.art */ "./src/template/video.art");
/* harmony import */ var _template_video_art__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_template_video_art__WEBPACK_IMPORTED_MODULE_21__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }























var index = 0;
var instances = [];

var DPlayer = /*#__PURE__*/function () {
  /**
   * DPlayer constructor function
   *
   * @param {Object} options - See README
   * @constructor
   */
  function DPlayer(options) {
    var _this = this;

    _classCallCheck(this, DPlayer);

    this.options = (0,_options__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread({
      preload: options.video.type === 'webtorrent' ? 'none' : 'metadata'
    }, options));

    if (this.options.video.quality) {
      this.qualityIndex = this.options.video.defaultQuality;
      this.quality = this.options.video.quality[this.options.video.defaultQuality];
    }

    this.tran = new _i18n__WEBPACK_IMPORTED_MODULE_3__.i18n(this.options.lang).tran;
    this.events = new _events__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this.user = new _user__WEBPACK_IMPORTED_MODULE_9__["default"](this);
    this.container = this.options.container;
    this.container.classList.add('dplayer');

    if (!this.options.danmaku) {
      this.container.classList.add('dplayer-no-danmaku');
    }

    if (this.options.live) {
      this.container.classList.add('dplayer-live');
    } else {
      this.container.classList.remove('dplayer-live');
    }

    if (_utils__WEBPACK_IMPORTED_MODULE_1__["default"].isMobile) {
      this.container.classList.add('dplayer-mobile');
    }

    this.arrow = this.container.offsetWidth <= 500;

    if (this.arrow) {
      this.container.classList.add('dplayer-arrow');
    } // multi subtitles defaultSubtitle add index, off option


    if (this.options.subtitle) {
      if (Array.isArray(this.options.subtitle.url)) {
        var offSubtitle = {
          subtitle: '',
          lang: 'off'
        };
        this.options.subtitle.url.push(offSubtitle);

        if (this.options.subtitle.defaultSubtitle) {
          if (typeof this.options.subtitle.defaultSubtitle === 'string') {
            // defaultSubtitle is string, match in lang then name.
            this.options.subtitle.index = this.options.subtitle.url.findIndex(function (sub) {
              return (
                /* if (sub.lang === this.options.subtitle.defaultSubtitle) {
                return true;
                } else if (sub.name === this.options.subtitle.defaultSubtitle) {
                return true;
                } else {
                return false;
                } */
                sub.lang === _this.options.subtitle.defaultSubtitle ? true : sub.name === _this.options.subtitle.defaultSubtitle ? true : false
              );
            });
          } else if (typeof this.options.subtitle.defaultSubtitle === 'number') {
            // defaultSubtitle is int, directly use for index
            this.options.subtitle.index = this.options.subtitle.defaultSubtitle;
          }
        } // defaultSubtitle not match or not exist or index bound(when defaultSubtitle is int), try browser language.


        if (this.options.subtitle.index === -1 || !this.options.subtitle.index || this.options.subtitle.index > this.options.subtitle.url.length - 1) {
          this.options.subtitle.index = this.options.subtitle.url.findIndex(function (sub) {
            return sub.lang === _this.options.lang;
          });
        } // browser language not match, default off title


        if (this.options.subtitle.index === -1) {
          this.options.subtitle.index = this.options.subtitle.url.length - 1;
        }
      }
    }

    this.template = new _template__WEBPACK_IMPORTED_MODULE_4__["default"]({
      container: this.container,
      options: this.options,
      index: index,
      tran: this.tran
    });
    this.video = this.template.video;
    this.bar = new _bar__WEBPACK_IMPORTED_MODULE_12__["default"](this.template);
    this.bezel = new _bezel__WEBPACK_IMPORTED_MODULE_14__["default"](this.template.bezel);
    this.fullScreen = new _fullscreen__WEBPACK_IMPORTED_MODULE_8__["default"](this);
    this.controller = new _controller__WEBPACK_IMPORTED_MODULE_15__["default"](this);

    if (this.options.danmaku) {
      this.danmaku = new _danmaku__WEBPACK_IMPORTED_MODULE_6__["default"]({
        player: this,
        container: this.template.danmaku,
        opacity: this.user.get('opacity'),
        callback: function callback() {
          setTimeout(function () {
            _this.template.danmakuLoading.style.display = 'none'; // autoplay

            if (_this.options.autoplay) {
              _this.play();
            }
          }, 0);
        },
        error: function error(msg) {
          _this.notice(msg);
        },
        apiBackend: this.options.apiBackend,
        borderColor: this.options.theme,
        height: this.arrow ? 24 : 30,
        time: function time() {
          return _this.video.currentTime;
        },
        unlimited: this.user.get('unlimited'),
        api: {
          id: this.options.danmaku.id,
          address: this.options.danmaku.api,
          token: this.options.danmaku.token,
          maximum: this.options.danmaku.maximum,
          addition: this.options.danmaku.addition,
          user: this.options.danmaku.user,
          speedRate: this.options.danmaku.speedRate
        },
        events: this.events,
        tran: function tran(msg) {
          return _this.tran(msg);
        }
      });
      this.comment = new _comment__WEBPACK_IMPORTED_MODULE_17__["default"](this);
    }

    this.setting = new _setting__WEBPACK_IMPORTED_MODULE_16__["default"](this);
    this.plugins = {};

    this.docClickFun = function () {
      _this.focus = false;
    };

    this.containerClickFun = function () {
      _this.focus = true;
    };

    document.addEventListener('click', this.docClickFun, true);
    this.container.addEventListener('click', this.containerClickFun, true);
    this.paused = true;
    this.timer = new _timer__WEBPACK_IMPORTED_MODULE_13__["default"](this);
    this.hotkey = new _hotkey__WEBPACK_IMPORTED_MODULE_18__["default"](this);
    this.contextmenu = new _contextmenu__WEBPACK_IMPORTED_MODULE_19__["default"](this);
    this.initVideo(this.video, this.quality && this.quality.type || this.options.video.type);
    this.infoPanel = new _info_panel__WEBPACK_IMPORTED_MODULE_20__["default"](this);

    if (!this.danmaku && this.options.autoplay) {
      this.play();
    }

    index++;
    instances.push(this);
  }
  /**
   * Seek video
   */


  _createClass(DPlayer, [{
    key: "seek",
    value: function seek(time) {
      time = Math.max(time, 0);

      if (this.video.duration) {
        time = Math.min(time, this.video.duration);
      }

      if (this.video.currentTime < time) {
        this.notice("".concat(this.tran('ff').replace('%s', (time - this.video.currentTime).toFixed(0))));
      } else if (this.video.currentTime > time) {
        this.notice("".concat(this.tran('rew').replace('%s', (this.video.currentTime - time).toFixed(0))));
      }

      this.video.currentTime = time;

      if (this.danmaku) {
        this.danmaku.seek();
      }

      this.bar.set('played', time / this.video.duration, 'width');
      this.template.ptime.innerHTML = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].secondToTime(time);
    }
    /**
     * Play video
     */

  }, {
    key: "play",
    value: function play(fromNative) {
      var _this2 = this;

      this.paused = false;

      if (this.video.paused && !_utils__WEBPACK_IMPORTED_MODULE_1__["default"].isMobile) {
        this.bezel["switch"](_icons__WEBPACK_IMPORTED_MODULE_5__["default"].play);
      }

      this.template.playButton.innerHTML = _icons__WEBPACK_IMPORTED_MODULE_5__["default"].pause;
      this.template.mobilePlayButton.innerHTML = _icons__WEBPACK_IMPORTED_MODULE_5__["default"].pause;

      if (!fromNative) {
        var playedPromise = promise_polyfill__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(this.video.play());
        playedPromise["catch"](function () {
          _this2.pause();
        }).then(function () {});
      }

      this.timer.enable('loading');
      this.container.classList.remove('dplayer-paused');
      this.container.classList.add('dplayer-playing');

      if (this.danmaku) {
        this.danmaku.play();
      }

      if (this.options.mutex) {
        for (var i = 0; i < instances.length; i++) {
          if (this !== instances[i]) {
            instances[i].pause();
          }
        }
      }
    }
    /**
     * Pause video
     */

  }, {
    key: "pause",
    value: function pause(fromNative) {
      this.paused = true;
      this.container.classList.remove('dplayer-loading');

      if (!this.video.paused && !_utils__WEBPACK_IMPORTED_MODULE_1__["default"].isMobile) {
        this.bezel["switch"](_icons__WEBPACK_IMPORTED_MODULE_5__["default"].pause);
      }

      this.template.playButton.innerHTML = _icons__WEBPACK_IMPORTED_MODULE_5__["default"].play;
      this.template.mobilePlayButton.innerHTML = _icons__WEBPACK_IMPORTED_MODULE_5__["default"].play;

      if (!fromNative) {
        this.video.pause();
      }

      this.timer.disable('loading');
      this.container.classList.remove('dplayer-playing');
      this.container.classList.add('dplayer-paused');

      if (this.danmaku) {
        this.danmaku.pause();
      }
    }
  }, {
    key: "switchVolumeIcon",
    value: function switchVolumeIcon() {
      if (this.volume() >= 0.95) {
        this.template.volumeIcon.innerHTML = _icons__WEBPACK_IMPORTED_MODULE_5__["default"].volumeUp;
      } else if (this.volume() > 0) {
        this.template.volumeIcon.innerHTML = _icons__WEBPACK_IMPORTED_MODULE_5__["default"].volumeDown;
      } else {
        this.template.volumeIcon.innerHTML = _icons__WEBPACK_IMPORTED_MODULE_5__["default"].volumeOff;
      }
    }
    /**
     * Set volume
     */

  }, {
    key: "volume",
    value: function volume(percentage, nostorage, nonotice) {
      percentage = parseFloat(percentage);

      if (!isNaN(percentage)) {
        percentage = Math.max(percentage, 0);
        percentage = Math.min(percentage, 1);
        this.bar.set('volume', percentage, 'width');
        var formatPercentage = "".concat((percentage * 100).toFixed(0), "%");
        this.template.volumeBarWrapWrap.dataset.balloon = formatPercentage;

        if (!nostorage) {
          this.user.set('volume', percentage);
        }

        if (!nonotice) {
          this.notice("".concat(this.tran('volume'), " ").concat((percentage * 100).toFixed(0), "%"));
        }

        this.video.volume = percentage;

        if (this.video.muted) {
          this.video.muted = false;
        }

        this.switchVolumeIcon();
      }

      return this.video.volume;
    }
    /**
     * Toggle between play and pause
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.video.paused) {
        this.play();
      } else {
        this.pause();
      }
    }
    /**
     * attach event
     */

  }, {
    key: "on",
    value: function on(name, callback) {
      this.events.on(name, callback);
    }
    /**
     * Switch to a new video
     *
     * @param {Object} video - new video info
     * @param {Object} danmaku - new danmaku info
     */

  }, {
    key: "switchVideo",
    value: function switchVideo(video, danmakuAPI) {
      this.pause();
      this.video.poster = video.pic ? video.pic : '';
      this.video.src = video.url;
      this.initMSE(this.video, video.type || 'auto');

      if (danmakuAPI) {
        this.template.danmakuLoading.style.display = 'block';
        this.bar.set('played', 0, 'width');
        this.bar.set('loaded', 0, 'width');
        this.template.ptime.innerHTML = '00:00';
        this.template.danmaku.innerHTML = '';

        if (this.danmaku) {
          this.danmaku.reload({
            id: danmakuAPI.id,
            address: danmakuAPI.api,
            token: danmakuAPI.token,
            maximum: danmakuAPI.maximum,
            addition: danmakuAPI.addition,
            user: danmakuAPI.user
          });
        }
      }
    }
  }, {
    key: "initMSE",
    value: function initMSE(video, type) {
      var _this3 = this;

      this.type = type;

      if (this.options.video.customType && this.options.video.customType[type]) {
        if (Object.prototype.toString.call(this.options.video.customType[type]) === '[object Function]') {
          this.options.video.customType[type](this.video, this);
        } else {
          console.error("Illegal customType: ".concat(type));
        }
      } else {
        if (this.type === 'auto') {
          if (/m3u8(#|\?|$)/i.exec(video.src)) {
            this.type = 'hls';
          } else if (/.flv(#|\?|$)/i.exec(video.src)) {
            this.type = 'flv';
          } else if (/.mpd(#|\?|$)/i.exec(video.src)) {
            this.type = 'dash';
          } else {
            this.type = 'normal';
          }
        }

        if (this.type === 'hls' && (video.canPlayType('application/x-mpegURL') || video.canPlayType('application/vnd.apple.mpegURL'))) {
          this.type = 'normal';
        }

        switch (this.type) {
          // https://github.com/video-dev/hls.js
          case 'hls':
            if (window.Hls) {
              if (window.Hls.isSupported()) {
                var options = this.options.pluginOptions.hls;
                var hls = new window.Hls(options);
                this.plugins.hls = hls;
                hls.loadSource(video.src);
                hls.attachMedia(video);
                this.events.on('destroy', function () {
                  hls.destroy();
                  delete _this3.plugins.hls;
                });
              } else {
                this.notice('Error: Hls is not supported.');
              }
            } else {
              this.notice("Error: Can't find Hls.");
            }

            break;
          // https://github.com/Bilibili/flv.js

          case 'flv':
            if (window.flvjs) {
              if (window.flvjs.isSupported()) {
                var flvPlayer = window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource || {}, {
                  type: 'flv',
                  url: video.src
                }), this.options.pluginOptions.flv.config);
                this.plugins.flvjs = flvPlayer;
                flvPlayer.attachMediaElement(video);
                flvPlayer.load();
                this.events.on('destroy', function () {
                  flvPlayer.unload();
                  flvPlayer.detachMediaElement();
                  flvPlayer.destroy();
                  delete _this3.plugins.flvjs;
                });
              } else {
                this.notice('Error: flvjs is not supported.');
              }
            } else {
              this.notice("Error: Can't find flvjs.");
            }

            break;
          // https://github.com/Dash-Industry-Forum/dash.js

          case 'dash':
            if (window.dashjs) {
              var dashjsPlayer = window.dashjs.MediaPlayer().create().initialize(video, video.src, false);
              var _options = this.options.pluginOptions.dash;
              dashjsPlayer.updateSettings(_options);
              this.plugins.dash = dashjsPlayer;
              this.events.on('destroy', function () {
                window.dashjs.MediaPlayer().reset();
                delete _this3.plugins.dash;
              });
            } else {
              this.notice("Error: Can't find dashjs.");
            }

            break;
          // https://github.com/webtorrent/webtorrent

          case 'webtorrent':
            if (window.WebTorrent) {
              if (window.WebTorrent.WEBRTC_SUPPORT) {
                this.container.classList.add('dplayer-loading');
                var _options2 = this.options.pluginOptions.webtorrent;
                var client = new window.WebTorrent(_options2);
                this.plugins.webtorrent = client;
                var torrentId = video.src;
                video.src = '';
                video.preload = 'metadata';
                video.addEventListener('durationchange', function () {
                  return _this3.container.classList.remove('dplayer-loading');
                }, {
                  once: true
                });
                client.add(torrentId, function (torrent) {
                  var file = torrent.files.find(function (file) {
                    return file.name.endsWith('.mp4');
                  });
                  file.renderTo(_this3.video, {
                    autoplay: _this3.options.autoplay,
                    controls: false
                  });
                });
                this.events.on('destroy', function () {
                  client.remove(torrentId);
                  client.destroy();
                  delete _this3.plugins.webtorrent;
                });
              } else {
                this.notice('Error: Webtorrent is not supported.');
              }
            } else {
              this.notice("Error: Can't find Webtorrent.");
            }

            break;
        }
      }
    }
  }, {
    key: "initVideo",
    value: function initVideo(video, type) {
      var _this4 = this;

      this.initMSE(video, type);
      /**
       * video events
       */
      // show video time: the metadata has loaded or changed

      this.on('durationchange', function () {
        // compatibility: Android browsers will output 1 or Infinity at first
        if (video.duration !== 1 && video.duration !== Infinity) {
          _this4.template.dtime.innerHTML = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].secondToTime(video.duration);
        }
      }); // show video loaded bar: to inform interested parties of progress downloading the media

      this.on('progress', function () {
        var percentage = video.buffered.length ? video.buffered.end(video.buffered.length - 1) / video.duration : 0;

        _this4.bar.set('loaded', percentage, 'width');
      }); // video download error: an error occurs

      this.on('error', function () {
        if (!_this4.video.error) {
          // Not a video load error, may be poster load failed, see #307
          return;
        }

        _this4.tran && _this4.notice && _this4.type !== 'webtorrent' && _this4.notice(_this4.tran('video-failed'), -1);
      }); // video end

      this.on('ended', function () {
        _this4.bar.set('played', 1, 'width');

        if (!_this4.setting.loop) {
          _this4.pause();
        } else {
          _this4.seek(0);

          _this4.play();
        }

        if (_this4.danmaku) {
          _this4.danmaku.danIndex = 0;
        }
      });
      this.on('play', function () {
        if (_this4.paused) {
          _this4.play(true);
        }
      });
      this.on('pause', function () {
        if (!_this4.paused) {
          _this4.pause(true);
        }
      });
      this.on('timeupdate', function () {
        _this4.bar.set('played', _this4.video.currentTime / _this4.video.duration, 'width');

        var currentTime = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].secondToTime(_this4.video.currentTime);

        if (_this4.template.ptime.innerHTML !== currentTime) {
          _this4.template.ptime.innerHTML = currentTime;
        }
      });

      var _loop = function _loop(i) {
        video.addEventListener(_this4.events.videoEvents[i], function () {
          _this4.events.trigger(_this4.events.videoEvents[i]);
        });
      };

      for (var i = 0; i < this.events.videoEvents.length; i++) {
        _loop(i);
      }

      this.volume(this.user.get('volume'), true, true);

      if (this.options.subtitle) {
        // init old single subtitle function(sub show and style)
        this.subtitle = new _subtitle__WEBPACK_IMPORTED_MODULE_10__["default"](this.template.subtitle, this.video, this.options.subtitle, this.events); // init multi subtitles function(sub update)

        if (Array.isArray(this.options.subtitle.url)) {
          this.subtitles = new _subtitles__WEBPACK_IMPORTED_MODULE_11__["default"](this);
        }

        if (!this.user.get('subtitle')) {
          this.subtitle.hide();
        }
      }
    }
  }, {
    key: "switchQuality",
    value: function switchQuality(index) {
      var _this5 = this;

      index = typeof index === 'string' ? parseInt(index) : index;

      if (this.qualityIndex === index || this.switchingQuality) {
        return;
      } else {
        this.prevIndex = this.qualityIndex;
        this.qualityIndex = index;
      }

      this.switchingQuality = true;
      this.quality = this.options.video.quality[index];
      this.template.qualityButton.innerHTML = this.quality.name;
      var paused = this.video.paused;
      this.video.pause();
      var videoHTML = _template_video_art__WEBPACK_IMPORTED_MODULE_21___default()({
        current: false,
        pic: null,
        screenshot: this.options.screenshot,
        preload: 'auto',
        url: this.quality.url,
        subtitle: this.options.subtitle
      });
      var videoEle = new DOMParser().parseFromString(videoHTML, 'text/html').body.firstChild;
      this.template.videoWrap.insertBefore(videoEle, this.template.videoWrap.getElementsByTagName('div')[0]);
      this.prevVideo = this.video;
      this.video = videoEle;
      this.initVideo(this.video, this.quality.type || this.options.video.type);
      this.seek(this.prevVideo.currentTime);
      this.notice("".concat(this.tran('switching-quality').replace('%q', this.quality.name)), -1);
      this.events.trigger('quality_start', this.quality);
      this.on('canplay', function () {
        if (_this5.prevVideo) {
          if (_this5.video.currentTime !== _this5.prevVideo.currentTime) {
            _this5.seek(_this5.prevVideo.currentTime);

            return;
          }

          _this5.template.videoWrap.removeChild(_this5.prevVideo);

          _this5.video.classList.add('dplayer-video-current');

          if (!paused) {
            _this5.video.play();
          }

          _this5.prevVideo = null;

          _this5.notice("".concat(_this5.tran('switched-quality').replace('%q', _this5.quality.name)));

          _this5.switchingQuality = false;

          _this5.events.trigger('quality_end');
        }
      });
      this.on('error', function () {
        if (!_this5.video.error) {
          return;
        }

        if (_this5.prevVideo) {
          _this5.template.videoWrap.removeChild(_this5.video);

          _this5.video = _this5.prevVideo;

          if (!paused) {
            _this5.video.play();
          }

          _this5.qualityIndex = _this5.prevIndex;
          _this5.quality = _this5.options.video.quality[_this5.qualityIndex];
          _this5.noticeTime = setTimeout(function () {
            _this5.template.notice.style.opacity = 0;

            _this5.events.trigger('notice_hide');
          }, 3000);
          _this5.prevVideo = null;
          _this5.switchingQuality = false;
        }
      });
    }
  }, {
    key: "notice",
    value: function notice(text) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
      var opacity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.8;
      var notice = _template__WEBPACK_IMPORTED_MODULE_4__["default"].NewNotice(text, opacity);
      this.template.noticeList.appendChild(notice);
      this.events.trigger('notice_show', notice);

      if (time > 0) {
        setTimeout(function (e, dp) {
          return function () {
            e.addEventListener('animationend', function () {
              dp.template.noticeList.removeChild(e);
            });
            e.classList.add('remove-notice');
            dp.events.trigger('notice_hide');
          };
        }(notice, this), time);
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      if (this.danmaku) {
        this.danmaku.resize();
      }

      if (this.controller.thumbnails) {
        this.controller.thumbnails.resize(160, this.video.videoHeight / this.video.videoWidth * 160, this.template.barWrap.offsetWidth);
      }

      this.events.trigger('resize');
    }
  }, {
    key: "speed",
    value: function speed(rate) {
      this.video.playbackRate = rate;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      instances.splice(instances.indexOf(this), 1);
      this.pause();
      document.removeEventListener('click', this.docClickFun, true);
      this.container.removeEventListener('click', this.containerClickFun, true);
      this.fullScreen.destroy();
      this.hotkey.destroy();
      this.contextmenu.destroy();
      this.controller.destroy();
      this.timer.destroy();
      this.video.src = '';
      this.container.innerHTML = '';
      this.events.trigger('destroy');
    }
  }], [{
    key: "version",
    get: function get() {
      /* global DPLAYER_VERSION */
      return "1.27.0";
    }
  }]);

  return DPlayer;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DPlayer);

/***/ }),

/***/ "./src/js/setting.js":
/*!***************************!*\
  !*** ./src/js/setting.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Setting = /*#__PURE__*/function () {
  function Setting(player) {
    var _this = this;

    _classCallCheck(this, Setting);

    this.player = player;
    this.player.template.mask.addEventListener('click', function () {
      _this.hide();
    });
    this.player.template.settingButton.addEventListener('click', function () {
      _this.show();
    }); // loop

    this.loop = this.player.options.loop;
    this.player.template.loopToggle.checked = this.loop;
    this.player.template.loop.addEventListener('click', function () {
      _this.player.template.loopToggle.checked = !_this.player.template.loopToggle.checked;

      if (_this.player.template.loopToggle.checked) {
        _this.loop = true;
      } else {
        _this.loop = false;
      }

      _this.hide();
    }); // show danmaku

    this.showDanmaku = this.player.user.get('danmaku');

    if (!this.showDanmaku) {
      this.player.danmaku && this.player.danmaku.hide();
    }

    this.player.template.showDanmakuToggle.checked = this.showDanmaku;
    this.player.template.showDanmaku.addEventListener('click', function () {
      _this.player.template.showDanmakuToggle.checked = !_this.player.template.showDanmakuToggle.checked;

      if (_this.player.template.showDanmakuToggle.checked) {
        _this.showDanmaku = true;

        _this.player.danmaku.show();
      } else {
        _this.showDanmaku = false;

        _this.player.danmaku.hide();
      }

      _this.player.user.set('danmaku', _this.showDanmaku ? 1 : 0);

      _this.hide();
    }); // unlimit danmaku

    this.unlimitDanmaku = this.player.user.get('unlimited');
    this.player.template.unlimitDanmakuToggle.checked = this.unlimitDanmaku;
    this.player.template.unlimitDanmaku.addEventListener('click', function () {
      _this.player.template.unlimitDanmakuToggle.checked = !_this.player.template.unlimitDanmakuToggle.checked;

      if (_this.player.template.unlimitDanmakuToggle.checked) {
        _this.unlimitDanmaku = true;

        _this.player.danmaku.unlimit(true);
      } else {
        _this.unlimitDanmaku = false;

        _this.player.danmaku.unlimit(false);
      }

      _this.player.user.set('unlimited', _this.unlimitDanmaku ? 1 : 0);

      _this.hide();
    }); // speed

    this.player.template.speed.addEventListener('click', function () {
      _this.player.template.settingBox.classList.add('dplayer-setting-box-narrow');

      _this.player.template.settingBox.classList.add('dplayer-setting-box-speed');
    });

    var _loop = function _loop(i) {
      _this.player.template.speedItem[i].addEventListener('click', function () {
        _this.player.speed(_this.player.template.speedItem[i].dataset.speed);

        _this.hide();
      });
    };

    for (var i = 0; i < this.player.template.speedItem.length; i++) {
      _loop(i);
    } // danmaku opacity


    if (this.player.danmaku) {
      var dWidth = 130;
      this.player.on('danmaku_opacity', function (percentage) {
        _this.player.bar.set('danmaku', percentage, 'width');

        _this.player.user.set('opacity', percentage);
      });
      this.player.danmaku.opacity(this.player.user.get('opacity'));

      var danmakuMove = function danmakuMove(event) {
        var e = event || window.event;
        var percentage = ((e.clientX || e.changedTouches[0].clientX) - _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getBoundingClientRectViewLeft(_this.player.template.danmakuOpacityBarWrap)) / dWidth;
        percentage = Math.max(percentage, 0);
        percentage = Math.min(percentage, 1);

        _this.player.danmaku.opacity(percentage);
      };

      var danmakuUp = function danmakuUp() {
        document.removeEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragEnd, danmakuUp);
        document.removeEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragMove, danmakuMove);

        _this.player.template.danmakuOpacityBox.classList.remove('dplayer-setting-danmaku-active');
      };

      this.player.template.danmakuOpacityBarWrapWrap.addEventListener('click', function (event) {
        var e = event || window.event;
        var percentage = ((e.clientX || e.changedTouches[0].clientX) - _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getBoundingClientRectViewLeft(_this.player.template.danmakuOpacityBarWrap)) / dWidth;
        percentage = Math.max(percentage, 0);
        percentage = Math.min(percentage, 1);

        _this.player.danmaku.opacity(percentage);
      });
      this.player.template.danmakuOpacityBarWrapWrap.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragStart, function () {
        document.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragMove, danmakuMove);
        document.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragEnd, danmakuUp);

        _this.player.template.danmakuOpacityBox.classList.add('dplayer-setting-danmaku-active');
      });
    }
  }

  _createClass(Setting, [{
    key: "hide",
    value: function hide() {
      var _this2 = this;

      this.player.template.settingBox.classList.remove('dplayer-setting-box-open');
      this.player.template.mask.classList.remove('dplayer-mask-show');
      setTimeout(function () {
        _this2.player.template.settingBox.classList.remove('dplayer-setting-box-narrow');

        _this2.player.template.settingBox.classList.remove('dplayer-setting-box-speed');
      }, 300);
      this.player.controller.disableAutoHide = false;
    }
  }, {
    key: "show",
    value: function show() {
      this.player.template.settingBox.classList.add('dplayer-setting-box-open');
      this.player.template.mask.classList.add('dplayer-mask-show');
      this.player.controller.disableAutoHide = true;
    }
  }]);

  return Setting;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);

/***/ }),

/***/ "./src/js/subtitle.js":
/*!****************************!*\
  !*** ./src/js/subtitle.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Subtitle = /*#__PURE__*/function () {
  function Subtitle(container, video, options, events) {
    _classCallCheck(this, Subtitle);

    this.container = container;
    this.video = video;
    this.options = options;
    this.events = events;
    this.init();
  }

  _createClass(Subtitle, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.container.style.fontSize = this.options.fontSize;
      this.container.style.bottom = this.options.bottom;
      this.container.style.color = this.options.color;

      if (this.video.textTracks && this.video.textTracks[0]) {
        var track = this.video.textTracks[0];

        track.oncuechange = function () {
          var cue = track.activeCues[track.activeCues.length - 1];
          _this.container.innerHTML = '';

          if (cue) {
            var template = document.createElement('div');
            template.appendChild(cue.getCueAsHTML());
            var trackHtml = template.innerHTML.split(/\r?\n/).map(function (item) {
              return "<p>".concat(item, "</p>");
            }).join('');
            _this.container.innerHTML = trackHtml;
          }

          _this.events.trigger('subtitle_change');
        };
      }
    }
  }, {
    key: "show",
    value: function show() {
      this.container.classList.remove('dplayer-subtitle-hide');
      this.events.trigger('subtitle_show');
    }
  }, {
    key: "hide",
    value: function hide() {
      this.container.classList.add('dplayer-subtitle-hide');
      this.events.trigger('subtitle_hide');
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.container.classList.contains('dplayer-subtitle-hide')) {
        this.show();
      } else {
        this.hide();
      }
    }
  }]);

  return Subtitle;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Subtitle);

/***/ }),

/***/ "./src/js/subtitles.js":
/*!*****************************!*\
  !*** ./src/js/subtitles.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Subtitles = /*#__PURE__*/function () {
  function Subtitles(player) {
    var _this = this;

    _classCallCheck(this, Subtitles);

    this.player = player;
    this.player.template.mask.addEventListener('click', function () {
      _this.hide();
    });
    this.player.template.subtitlesButton.addEventListener('click', function () {
      _this.adaptiveHeight();

      _this.show();
    });
    var lastItemIndex = this.player.template.subtitlesItem.length - 1;

    var _loop = function _loop(i) {
      _this.player.template.subtitlesItem[i].addEventListener('click', function () {
        _this.hide();

        if (_this.player.options.subtitle.index !== i) {
          // clear subtitle show for new subtitle don't have now duration time. If don't, will display last subtitle.
          _this.player.template.subtitle.innerHTML = "<p></p>"; // update video track src

          _this.player.template.subtrack.src = _this.player.template.subtitlesItem[i].dataset.subtitle; // update options current subindex for reload (such as changeQuality)

          _this.player.options.subtitle.index = i;

          if (_this.player.template.subtitle.classList.contains('dplayer-subtitle-hide')) {
            _this.subContainerShow();
          }
        }
      });
    };

    for (var i = 0; i < lastItemIndex; i++) {
      _loop(i);
    }

    this.player.template.subtitlesItem[lastItemIndex].addEventListener('click', function () {
      _this.hide();

      if (_this.player.options.subtitle.index !== lastItemIndex) {
        // clear subtitle show for new subtitle don't have now duration time. If don't, will display last subtitle.
        _this.player.template.subtitle.innerHTML = "<p></p>"; // update video track src

        _this.player.template.subtrack.src = ''; // update options current subindex for reload (such as changeQuality)

        _this.player.options.subtitle.index = lastItemIndex;

        _this.subContainerHide();
      }
    });
  }

  _createClass(Subtitles, [{
    key: "subContainerShow",
    value: function subContainerShow() {
      this.player.template.subtitle.classList.remove('dplayer-subtitle-hide');
      this.player.events.trigger('subtitle_show');
    }
  }, {
    key: "subContainerHide",
    value: function subContainerHide() {
      this.player.template.subtitle.classList.add('dplayer-subtitle-hide');
      this.player.events.trigger('subtitle_hide');
    }
  }, {
    key: "hide",
    value: function hide() {
      this.player.template.subtitlesBox.classList.remove('dplayer-subtitles-box-open');
      this.player.template.mask.classList.remove('dplayer-mask-show');
      this.player.controller.disableAutoHide = false;
    }
  }, {
    key: "show",
    value: function show() {
      this.player.template.subtitlesBox.classList.add('dplayer-subtitles-box-open');
      this.player.template.mask.classList.add('dplayer-mask-show');
      this.player.controller.disableAutoHide = true;
    }
  }, {
    key: "adaptiveHeight",
    value: function adaptiveHeight() {
      var curBoxHeight = this.player.template.subtitlesItem.length * 30 + 14;
      var stdMaxHeight = this.player.template.videoWrap.offsetHeight * 0.8;

      if (curBoxHeight >= stdMaxHeight - 50) {
        this.player.template.subtitlesBox.style.bottom = '8px';
        this.player.template.subtitlesBox.style['max-height'] = stdMaxHeight - 8 + 'px';
      } else {
        this.player.template.subtitlesBox.style.bottom = '50px';
        this.player.template.subtitlesBox.style['max-height'] = stdMaxHeight - 50 + 'px';
      }
    }
  }]);

  return Subtitles;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Subtitles);

/***/ }),

/***/ "./src/js/template.js":
/*!****************************!*\
  !*** ./src/js/template.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons */ "./src/js/icons.js");
/* harmony import */ var _template_player_art__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../template/player.art */ "./src/template/player.art");
/* harmony import */ var _template_player_art__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_template_player_art__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





var Template = /*#__PURE__*/function () {
  function Template(options) {
    _classCallCheck(this, Template);

    this.container = options.container;
    this.options = options.options;
    this.index = options.index;
    this.tran = options.tran;
    this.init();
  }

  _createClass(Template, [{
    key: "init",
    value: function init() {
      this.container.innerHTML = _template_player_art__WEBPACK_IMPORTED_MODULE_1___default()({
        options: this.options,
        index: this.index,
        tran: this.tran,
        icons: _icons__WEBPACK_IMPORTED_MODULE_0__["default"],
        mobile: _utils__WEBPACK_IMPORTED_MODULE_2__["default"].isMobile,
        video: {
          current: true,
          pic: this.options.video.pic,
          screenshot: this.options.screenshot,
          airplay: _utils__WEBPACK_IMPORTED_MODULE_2__["default"].isSafari && !_utils__WEBPACK_IMPORTED_MODULE_2__["default"].isChrome ? this.options.airplay : false,
          chromecast: this.options.chromecast,
          preload: this.options.preload,
          url: this.options.video.url,
          subtitle: this.options.subtitle
        }
      });
      this.volumeBar = this.container.querySelector('.dplayer-volume-bar-inner');
      this.volumeBarWrap = this.container.querySelector('.dplayer-volume-bar');
      this.volumeBarWrapWrap = this.container.querySelector('.dplayer-volume-bar-wrap');
      this.volumeButton = this.container.querySelector('.dplayer-volume');
      this.volumeButtonIcon = this.container.querySelector('.dplayer-volume-icon');
      this.volumeIcon = this.container.querySelector('.dplayer-volume-icon .dplayer-icon-content');
      this.playedBar = this.container.querySelector('.dplayer-played');
      this.loadedBar = this.container.querySelector('.dplayer-loaded');
      this.playedBarWrap = this.container.querySelector('.dplayer-bar-wrap');
      this.playedBarTime = this.container.querySelector('.dplayer-bar-time');
      this.danmaku = this.container.querySelector('.dplayer-danmaku');
      this.danmakuLoading = this.container.querySelector('.dplayer-danloading');
      this.video = this.container.querySelector('.dplayer-video-current');
      this.bezel = this.container.querySelector('.dplayer-bezel-icon');
      this.playButton = this.container.querySelector('.dplayer-play-icon');
      this.mobilePlayButton = this.container.querySelector('.dplayer-mobile-play');
      this.videoWrap = this.container.querySelector('.dplayer-video-wrap');
      this.controllerMask = this.container.querySelector('.dplayer-controller-mask');
      this.ptime = this.container.querySelector('.dplayer-ptime');
      this.settingButton = this.container.querySelector('.dplayer-setting-icon');
      this.settingBox = this.container.querySelector('.dplayer-setting-box');
      this.mask = this.container.querySelector('.dplayer-mask');
      this.loop = this.container.querySelector('.dplayer-setting-loop');
      this.loopToggle = this.container.querySelector('.dplayer-setting-loop .dplayer-toggle-setting-input');
      this.showDanmaku = this.container.querySelector('.dplayer-setting-showdan');
      this.showDanmakuToggle = this.container.querySelector('.dplayer-showdan-setting-input');
      this.unlimitDanmaku = this.container.querySelector('.dplayer-setting-danunlimit');
      this.unlimitDanmakuToggle = this.container.querySelector('.dplayer-danunlimit-setting-input');
      this.speed = this.container.querySelector('.dplayer-setting-speed');
      this.speedItem = this.container.querySelectorAll('.dplayer-setting-speed-item');
      this.danmakuOpacityBar = this.container.querySelector('.dplayer-danmaku-bar-inner');
      this.danmakuOpacityBarWrap = this.container.querySelector('.dplayer-danmaku-bar');
      this.danmakuOpacityBarWrapWrap = this.container.querySelector('.dplayer-danmaku-bar-wrap');
      this.danmakuOpacityBox = this.container.querySelector('.dplayer-setting-danmaku');
      this.dtime = this.container.querySelector('.dplayer-dtime');
      this.controller = this.container.querySelector('.dplayer-controller');
      this.commentInput = this.container.querySelector('.dplayer-comment-input');
      this.commentButton = this.container.querySelector('.dplayer-comment-icon');
      this.commentSettingBox = this.container.querySelector('.dplayer-comment-setting-box');
      this.commentSettingButton = this.container.querySelector('.dplayer-comment-setting-icon');
      this.commentSettingFill = this.container.querySelector('.dplayer-comment-setting-icon path');
      this.commentSendButton = this.container.querySelector('.dplayer-send-icon');
      this.commentSendFill = this.container.querySelector('.dplayer-send-icon path');
      this.commentColorSettingBox = this.container.querySelector('.dplayer-comment-setting-color');
      this.browserFullButton = this.container.querySelector('.dplayer-full-icon');
      this.webFullButton = this.container.querySelector('.dplayer-full-in-icon');
      this.menu = this.container.querySelector('.dplayer-menu');
      this.menuItem = this.container.querySelectorAll('.dplayer-menu-item');
      this.qualityList = this.container.querySelector('.dplayer-quality-list');
      this.camareButton = this.container.querySelector('.dplayer-camera-icon');
      this.airplayButton = this.container.querySelector('.dplayer-airplay-icon');
      this.chromecastButton = this.container.querySelector('.dplayer-chromecast-icon');
      this.subtitleButton = this.container.querySelector('.dplayer-subtitle-icon');
      this.subtitleButtonInner = this.container.querySelector('.dplayer-subtitle-icon .dplayer-icon-content');
      this.subtitlesButton = this.container.querySelector('.dplayer-subtitles-icon');
      this.subtitlesBox = this.container.querySelector('.dplayer-subtitles-box');
      this.subtitlesItem = this.container.querySelectorAll('.dplayer-subtitles-item');
      this.subtitle = this.container.querySelector('.dplayer-subtitle');
      this.subtrack = this.container.querySelector('.dplayer-subtrack');
      this.qualityButton = this.container.querySelector('.dplayer-quality-icon');
      this.barPreview = this.container.querySelector('.dplayer-bar-preview');
      this.barWrap = this.container.querySelector('.dplayer-bar-wrap');
      this.noticeList = this.container.querySelector('.dplayer-notice-list');
      this.infoPanel = this.container.querySelector('.dplayer-info-panel');
      this.infoPanelClose = this.container.querySelector('.dplayer-info-panel-close');
      this.infoVersion = this.container.querySelector('.dplayer-info-panel-item-version .dplayer-info-panel-item-data');
      this.infoFPS = this.container.querySelector('.dplayer-info-panel-item-fps .dplayer-info-panel-item-data');
      this.infoType = this.container.querySelector('.dplayer-info-panel-item-type .dplayer-info-panel-item-data');
      this.infoUrl = this.container.querySelector('.dplayer-info-panel-item-url .dplayer-info-panel-item-data');
      this.infoResolution = this.container.querySelector('.dplayer-info-panel-item-resolution .dplayer-info-panel-item-data');
      this.infoDuration = this.container.querySelector('.dplayer-info-panel-item-duration .dplayer-info-panel-item-data');
      this.infoDanmakuId = this.container.querySelector('.dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data');
      this.infoDanmakuApi = this.container.querySelector('.dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data');
      this.infoDanmakuAmount = this.container.querySelector('.dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data');
    }
  }], [{
    key: "NewNotice",
    value: function NewNotice(text, opacity) {
      var notice = document.createElement('div');
      notice.classList.add('dplayer-notice');
      notice.style.opacity = opacity;
      notice.innerText = text;
      return notice;
    }
  }]);

  return Template;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Template);

/***/ }),

/***/ "./src/js/thumbnails.js":
/*!******************************!*\
  !*** ./src/js/thumbnails.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Thumbnails = /*#__PURE__*/function () {
  function Thumbnails(options) {
    _classCallCheck(this, Thumbnails);

    this.container = options.container;
    this.barWidth = options.barWidth;
    this.container.style.backgroundImage = "url('".concat(options.url, "')");
    this.events = options.events;
  }

  _createClass(Thumbnails, [{
    key: "resize",
    value: function resize(width, height, barWrapWidth) {
      this.container.style.width = "".concat(width, "px");
      this.container.style.height = "".concat(height, "px");
      this.container.style.top = "".concat(-height + 2, "px");
      this.barWidth = barWrapWidth;
    }
  }, {
    key: "show",
    value: function show() {
      this.container.style.display = 'block';
      this.events && this.events.trigger('thumbnails_show');
    }
  }, {
    key: "move",
    value: function move(position) {
      this.container.style.backgroundPosition = "-".concat((Math.ceil(position / this.barWidth * 100) - 1) * 160, "px 0");
      this.container.style.left = "".concat(Math.min(Math.max(position - this.container.offsetWidth / 2, -10), this.barWidth - 150), "px");
    }
  }, {
    key: "hide",
    value: function hide() {
      this.container.style.display = 'none';
      this.events && this.events.trigger('thumbnails_hide');
    }
  }]);

  return Thumbnails;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Thumbnails);

/***/ }),

/***/ "./src/js/timer.js":
/*!*************************!*\
  !*** ./src/js/timer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Timer = /*#__PURE__*/function () {
  function Timer(player) {
    _classCallCheck(this, Timer);

    this.player = player;

    window.requestAnimationFrame = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    }();

    this.types = ['loading', 'info', 'fps'];
    this.init();
  }

  _createClass(Timer, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.types.map(function (item) {
        if (item !== 'fps') {
          _this["init".concat(item, "Checker")]();
        }

        return item;
      });
    }
  }, {
    key: "initloadingChecker",
    value: function initloadingChecker() {
      var _this2 = this;

      var lastPlayPos = 0;
      var currentPlayPos = 0;
      var bufferingDetected = false;
      this.loadingChecker = setInterval(function () {
        if (_this2.enableloadingChecker) {
          // whether the video is buffering
          currentPlayPos = _this2.player.video.currentTime;

          if (!bufferingDetected && currentPlayPos === lastPlayPos && !_this2.player.video.paused) {
            _this2.player.container.classList.add('dplayer-loading');

            bufferingDetected = true;
          }

          if (bufferingDetected && currentPlayPos > lastPlayPos && !_this2.player.video.paused) {
            _this2.player.container.classList.remove('dplayer-loading');

            bufferingDetected = false;
          }

          lastPlayPos = currentPlayPos;
        }
      }, 100);
    }
  }, {
    key: "initfpsChecker",
    value: function initfpsChecker() {
      var _this3 = this;

      window.requestAnimationFrame(function () {
        if (_this3.enablefpsChecker) {
          _this3.initfpsChecker();

          if (!_this3.fpsStart) {
            _this3.fpsStart = new Date();
            _this3.fpsIndex = 0;
          } else {
            _this3.fpsIndex++;
            var fpsCurrent = new Date();

            if (fpsCurrent - _this3.fpsStart > 1000) {
              _this3.player.infoPanel.fps(_this3.fpsIndex / (fpsCurrent - _this3.fpsStart) * 1000);

              _this3.fpsStart = new Date();
              _this3.fpsIndex = 0;
            }
          }
        } else {
          _this3.fpsStart = 0;
          _this3.fpsIndex = 0;
        }
      });
    }
  }, {
    key: "initinfoChecker",
    value: function initinfoChecker() {
      var _this4 = this;

      this.infoChecker = setInterval(function () {
        if (_this4.enableinfoChecker) {
          _this4.player.infoPanel.update();
        }
      }, 1000);
    }
  }, {
    key: "enable",
    value: function enable(type) {
      this["enable".concat(type, "Checker")] = true;

      if (type === 'fps') {
        this.initfpsChecker();
      }
    }
  }, {
    key: "disable",
    value: function disable(type) {
      this["enable".concat(type, "Checker")] = false;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this5 = this;

      this.types.map(function (item) {
        _this5["enable".concat(item, "Checker")] = false;
        _this5["".concat(item, "Checker")] && clearInterval(_this5["".concat(item, "Checker")]);
        return item;
      });
    }
  }]);

  return Timer;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timer);

/***/ }),

/***/ "./src/js/user.js":
/*!************************!*\
  !*** ./src/js/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var User = /*#__PURE__*/function () {
  function User(player) {
    _classCallCheck(this, User);

    this.storageName = {
      opacity: 'dplayer-danmaku-opacity',
      volume: 'dplayer-volume',
      unlimited: 'dplayer-danmaku-unlimited',
      danmaku: 'dplayer-danmaku-show',
      subtitle: 'dplayer-subtitle-show'
    };
    this["default"] = {
      opacity: 0.7,
      volume: player.options.hasOwnProperty('volume') ? player.options.volume : 0.7,
      unlimited: (player.options.danmaku && player.options.danmaku.unlimited ? 1 : 0) || 0,
      danmaku: 1,
      subtitle: 1
    };
    this.data = {};
    this.init();
  }

  _createClass(User, [{
    key: "init",
    value: function init() {
      for (var item in this.storageName) {
        var name = this.storageName[item];
        this.data[item] = parseFloat(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].storage.get(name) || this["default"][item]);
      }
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.data[key];
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this.data[key] = value;
      _utils__WEBPACK_IMPORTED_MODULE_0__["default"].storage.set(this.storageName[key], value);
    }
  }]);

  return User;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isMobile = /mobile/i.test(window.navigator.userAgent);
var utils = {
  /**
   * Parse second to time string
   *
   * @param {Number} second
   * @return {String} 00:00 or 00:00:00
   */
  secondToTime: function secondToTime(second) {
    second = second || 0;

    if (second === 0 || second === Infinity || second.toString() === 'NaN') {
      return '00:00';
    }

    var add0 = function add0(num) {
      return num < 10 ? '0' + num : '' + num;
    };

    var hour = Math.floor(second / 3600);
    var min = Math.floor((second - hour * 3600) / 60);
    var sec = Math.floor(second - hour * 3600 - min * 60);
    return (hour > 0 ? [hour, min, sec] : [min, sec]).map(add0).join(':');
  },

  /**
   * control play progress
   */
  // get element's view position
  getElementViewLeft: function getElementViewLeft(element) {
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;
    var elementScrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;

    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
      while (current !== null) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
      }
    } else {
      while (current !== null && current !== element) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
      }
    }

    return actualLeft - elementScrollLeft;
  },

  /**
  * optimize control play progress
   * optimize get element's view position,for float dialog video player
  * getBoundingClientRect 在 IE8 及以下返回的值缺失 width、height 值
  * getBoundingClientRect 在 Firefox 11 及以下返回的值会把 transform 的值也包含进去
  * getBoundingClientRect 在 Opera 10.5 及以下返回的值缺失 width、height 值
  */
  getBoundingClientRectViewLeft: function getBoundingClientRectViewLeft(element) {
    var scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

    if (element.getBoundingClientRect) {
      if (typeof this.getBoundingClientRectViewLeft.offset !== 'number') {
        var temp = document.createElement('div');
        temp.style.cssText = 'position:absolute;top:0;left:0;';
        document.body.appendChild(temp);
        this.getBoundingClientRectViewLeft.offset = -temp.getBoundingClientRect().top - scrollTop;
        document.body.removeChild(temp);
        temp = null;
      }

      var rect = element.getBoundingClientRect();
      var offset = this.getBoundingClientRectViewLeft.offset;
      return rect.left + offset;
    } else {
      // not support getBoundingClientRect
      return this.getElementViewLeft(element);
    }
  },
  getScrollPosition: function getScrollPosition() {
    return {
      left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
      top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
  },
  setScrollPosition: function setScrollPosition(_ref) {
    var _ref$left = _ref.left,
        left = _ref$left === void 0 ? 0 : _ref$left,
        _ref$top = _ref.top,
        top = _ref$top === void 0 ? 0 : _ref$top;

    if (this.isFirefox) {
      document.documentElement.scrollLeft = left;
      document.documentElement.scrollTop = top;
    } else {
      window.scrollTo(left, top);
    }
  },
  isMobile: isMobile,
  isFirefox: /firefox/i.test(window.navigator.userAgent),
  isChrome: /chrome/i.test(window.navigator.userAgent),
  isSafari: /safari/i.test(window.navigator.userAgent),
  storage: {
    set: function set(key, value) {
      localStorage.setItem(key, value);
    },
    get: function get(key) {
      return localStorage.getItem(key);
    }
  },
  nameMap: {
    dragStart: isMobile ? 'touchstart' : 'mousedown',
    dragMove: isMobile ? 'touchmove' : 'mousemove',
    dragEnd: isMobile ? 'touchend' : 'mouseup'
  },
  color2Number: function color2Number(color) {
    if (color[0] === '#') {
      color = color.substr(1);
    }

    if (color.length === 3) {
      color = "".concat(color[0]).concat(color[0]).concat(color[1]).concat(color[1]).concat(color[2]).concat(color[2]);
    }

    return parseInt(color, 16) + 0x000000 & 0xffffff;
  },
  number2Color: function number2Color(number) {
    return '#' + ('00000' + number.toString(16)).slice(-6);
  },
  number2Type: function number2Type(number) {
    switch (number) {
      case 0:
        return 'right';

      case 1:
        return 'top';

      case 2:
        return 'bottom';

      default:
        return 'right';
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utils);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/balloon-css/balloon.css":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/balloon-css/balloon.css ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --balloon-border-radius: 2px;\n  --balloon-color: rgba(16, 16, 16, 0.95);\n  --balloon-text-color: #fff;\n  --balloon-font-size: 12px;\n  --balloon-move: 4px; }\n\nbutton[aria-label][data-balloon-pos] {\n  overflow: visible; }\n\n[aria-label][data-balloon-pos] {\n  position: relative;\n  cursor: pointer; }\n  [aria-label][data-balloon-pos]:after {\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.18s ease-out 0.18s;\n    text-indent: 0;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n    font-weight: normal;\n    font-style: normal;\n    text-shadow: none;\n    font-size: 12px;\n    font-size: var(--balloon-font-size);\n    background: rgba(16, 16, 16, 0.95);\n    background: var(--balloon-color);\n    border-radius: 2px;\n    color: #fff;\n    color: var(--balloon-text-color);\n    border-radius: var(--balloon-border-radius);\n    content: attr(aria-label);\n    padding: .5em 1em;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 10; }\n  [aria-label][data-balloon-pos]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-top-color: rgba(16, 16, 16, 0.95);\n    border-top-color: var(--balloon-color);\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.18s ease-out 0.18s;\n    content: \"\";\n    position: absolute;\n    z-index: 10; }\n  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {\n    opacity: 1;\n    pointer-events: none; }\n  [aria-label][data-balloon-pos].font-awesome:after {\n    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }\n  [aria-label][data-balloon-pos][data-balloon-break]:after {\n    white-space: pre; }\n  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {\n    white-space: pre-line;\n    word-break: break-word; }\n  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {\n    transition: none; }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"up\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos=\"up\"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos=\"down\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos=\"down\"][data-balloon-visible]:after {\n    transform: translate(-50%, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"up\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos=\"up\"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos=\"down\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos=\"down\"][data-balloon-visible]:before {\n    transform: translate(-50%, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos*=\"-left\"]:after {\n    left: 0; }\n  [aria-label][data-balloon-pos][data-balloon-pos*=\"-left\"]:before {\n    left: 5px; }\n  [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"]:after {\n    right: 0; }\n  [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"]:before {\n    right: 5px; }\n  [aria-label][data-balloon-pos][data-balloon-po*=\"-left\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*=\"-left\"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"][data-balloon-visible]:after {\n    transform: translate(0, 0); }\n  [aria-label][data-balloon-pos][data-balloon-po*=\"-left\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*=\"-left\"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"][data-balloon-visible]:before {\n    transform: translate(0, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos^=\"up\"]:before, [aria-label][data-balloon-pos][data-balloon-pos^=\"up\"]:after {\n    bottom: 100%;\n    transform-origin: top;\n    transform: translate(0, 4px);\n    transform: translate(0, var(--balloon-move)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^=\"up\"]:after {\n    margin-bottom: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"up\"]:before, [aria-label][data-balloon-pos][data-balloon-pos=\"up\"]:after {\n    left: 50%;\n    transform: translate(-50%, 4px);\n    transform: translate(-50%, var(--balloon-move)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^=\"down\"]:before, [aria-label][data-balloon-pos][data-balloon-pos^=\"down\"]:after {\n    top: 100%;\n    transform: translate(0, calc(4px * -1));\n    transform: translate(0, calc(var(--balloon-move) * -1)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^=\"down\"]:after {\n    margin-top: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos^=\"down\"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-bottom-color: rgba(16, 16, 16, 0.95);\n    border-bottom-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"down\"]:after, [aria-label][data-balloon-pos][data-balloon-pos=\"down\"]:before {\n    left: 50%;\n    transform: translate(-50%, calc(4px * -1));\n    transform: translate(-50%, calc(var(--balloon-move) * -1)); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos=\"left\"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos=\"right\"][data-balloon-visible]:after {\n    transform: translate(0, -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos=\"left\"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos=\"right\"][data-balloon-visible]:before {\n    transform: translate(0, -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:after, [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:before {\n    right: 100%;\n    top: 50%;\n    transform: translate(4px, -50%);\n    transform: translate(var(--balloon-move), -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:after {\n    margin-right: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-left-color: rgba(16, 16, 16, 0.95);\n    border-left-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:after, [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:before {\n    left: 100%;\n    top: 50%;\n    transform: translate(calc(4px * -1), -50%);\n    transform: translate(calc(var(--balloon-move) * -1), -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:after {\n    margin-left: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-right-color: rgba(16, 16, 16, 0.95);\n    border-right-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-length]:after {\n    white-space: normal; }\n  [aria-label][data-balloon-pos][data-balloon-length=\"small\"]:after {\n    width: 80px; }\n  [aria-label][data-balloon-pos][data-balloon-length=\"medium\"]:after {\n    width: 150px; }\n  [aria-label][data-balloon-pos][data-balloon-length=\"large\"]:after {\n    width: 260px; }\n  [aria-label][data-balloon-pos][data-balloon-length=\"xlarge\"]:after {\n    width: 380px; }\n    @media screen and (max-width: 768px) {\n      [aria-label][data-balloon-pos][data-balloon-length=\"xlarge\"]:after {\n        width: 90vw; } }\n  [aria-label][data-balloon-pos][data-balloon-length=\"fit\"]:after {\n    width: 100%; }\n", "",{"version":3,"sources":["webpack://./node_modules/balloon-css/balloon.css"],"names":[],"mappings":"AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE","sourcesContent":[":root {\n  --balloon-border-radius: 2px;\n  --balloon-color: rgba(16, 16, 16, 0.95);\n  --balloon-text-color: #fff;\n  --balloon-font-size: 12px;\n  --balloon-move: 4px; }\n\nbutton[aria-label][data-balloon-pos] {\n  overflow: visible; }\n\n[aria-label][data-balloon-pos] {\n  position: relative;\n  cursor: pointer; }\n  [aria-label][data-balloon-pos]:after {\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.18s ease-out 0.18s;\n    text-indent: 0;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n    font-weight: normal;\n    font-style: normal;\n    text-shadow: none;\n    font-size: var(--balloon-font-size);\n    background: var(--balloon-color);\n    border-radius: 2px;\n    color: var(--balloon-text-color);\n    border-radius: var(--balloon-border-radius);\n    content: attr(aria-label);\n    padding: .5em 1em;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 10; }\n  [aria-label][data-balloon-pos]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-top-color: var(--balloon-color);\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.18s ease-out 0.18s;\n    content: \"\";\n    position: absolute;\n    z-index: 10; }\n  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {\n    opacity: 1;\n    pointer-events: none; }\n  [aria-label][data-balloon-pos].font-awesome:after {\n    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }\n  [aria-label][data-balloon-pos][data-balloon-break]:after {\n    white-space: pre; }\n  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {\n    white-space: pre-line;\n    word-break: break-word; }\n  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {\n    transition: none; }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"up\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos=\"up\"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos=\"down\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos=\"down\"][data-balloon-visible]:after {\n    transform: translate(-50%, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"up\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos=\"up\"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos=\"down\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos=\"down\"][data-balloon-visible]:before {\n    transform: translate(-50%, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos*=\"-left\"]:after {\n    left: 0; }\n  [aria-label][data-balloon-pos][data-balloon-pos*=\"-left\"]:before {\n    left: 5px; }\n  [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"]:after {\n    right: 0; }\n  [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"]:before {\n    right: 5px; }\n  [aria-label][data-balloon-pos][data-balloon-po*=\"-left\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*=\"-left\"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"][data-balloon-visible]:after {\n    transform: translate(0, 0); }\n  [aria-label][data-balloon-pos][data-balloon-po*=\"-left\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*=\"-left\"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*=\"-right\"][data-balloon-visible]:before {\n    transform: translate(0, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos^=\"up\"]:before, [aria-label][data-balloon-pos][data-balloon-pos^=\"up\"]:after {\n    bottom: 100%;\n    transform-origin: top;\n    transform: translate(0, var(--balloon-move)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^=\"up\"]:after {\n    margin-bottom: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"up\"]:before, [aria-label][data-balloon-pos][data-balloon-pos=\"up\"]:after {\n    left: 50%;\n    transform: translate(-50%, var(--balloon-move)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^=\"down\"]:before, [aria-label][data-balloon-pos][data-balloon-pos^=\"down\"]:after {\n    top: 100%;\n    transform: translate(0, calc(var(--balloon-move) * -1)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^=\"down\"]:after {\n    margin-top: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos^=\"down\"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-bottom-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"down\"]:after, [aria-label][data-balloon-pos][data-balloon-pos=\"down\"]:before {\n    left: 50%;\n    transform: translate(-50%, calc(var(--balloon-move) * -1)); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos=\"left\"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos=\"right\"][data-balloon-visible]:after {\n    transform: translate(0, -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos=\"left\"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos=\"right\"][data-balloon-visible]:before {\n    transform: translate(0, -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:after, [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:before {\n    right: 100%;\n    top: 50%;\n    transform: translate(var(--balloon-move), -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:after {\n    margin-right: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"left\"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-left-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:after, [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:before {\n    left: 100%;\n    top: 50%;\n    transform: translate(calc(var(--balloon-move) * -1), -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:after {\n    margin-left: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos=\"right\"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-right-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-length]:after {\n    white-space: normal; }\n  [aria-label][data-balloon-pos][data-balloon-length=\"small\"]:after {\n    width: 80px; }\n  [aria-label][data-balloon-pos][data-balloon-length=\"medium\"]:after {\n    width: 150px; }\n  [aria-label][data-balloon-pos][data-balloon-length=\"large\"]:after {\n    width: 260px; }\n  [aria-label][data-balloon-pos][data-balloon-length=\"xlarge\"]:after {\n    width: 380px; }\n    @media screen and (max-width: 768px) {\n      [aria-label][data-balloon-pos][data-balloon-length=\"xlarge\"]:after {\n        width: 90vw; } }\n  [aria-label][data-balloon-pos][data-balloon-length=\"fit\"]:after {\n    width: 100%; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/less-loader/dist/cjs.js!./src/css/index.less":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/less-loader/dist/cjs.js!./src/css/index.less ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_balloon_css_balloon_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/balloon-css/balloon.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/balloon-css/balloon.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg== */ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_balloon_css_balloon_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes my-face {\n  2% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  4% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  6% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  8% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  10% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  12% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  14% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  16% {\n    transform: translate(0, -0.5px) rotate(-1.5deg);\n  }\n  18% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  20% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  22% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  24% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  26% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  28% {\n    transform: translate(0, 0.5px) rotate(1.5deg);\n  }\n  30% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  32% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  34% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  36% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  38% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  40% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  42% {\n    transform: translate(0, 2.5px) rotate(-1.5deg);\n  }\n  44% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  46% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  48% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  50% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  52% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  54% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  56% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  58% {\n    transform: translate(0, 0.5px) rotate(2.5deg);\n  }\n  60% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  62% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  64% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  66% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  68% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  70% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  72% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  74% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  76% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  78% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  80% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  82% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  84% {\n    transform: translate(0, 1.5px) rotate(2.5deg);\n  }\n  86% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  88% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  90% {\n    transform: translate(0, 2.5px) rotate(-0.5deg);\n  }\n  92% {\n    transform: translate(0, 0.5px) rotate(-0.5deg);\n  }\n  94% {\n    transform: translate(0, 2.5px) rotate(0.5deg);\n  }\n  96% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  98% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  0%,\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n.dplayer {\n  position: relative;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  line-height: 1;\n}\n.dplayer * {\n  box-sizing: content-box;\n}\n.dplayer svg {\n  width: 100%;\n  height: 100%;\n}\n.dplayer svg path,\n.dplayer svg circle {\n  fill: #fff;\n}\n.dplayer:-webkit-full-screen {\n  width: 100%;\n  height: 100%;\n  background: #000;\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  margin: 0;\n  padding: 0;\n  transform: translate(0, 0);\n}\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {\n  display: none;\n}\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {\n  display: none;\n}\n.dplayer.dplayer-no-danmaku .dplayer-danmaku {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-time {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-bar-wrap {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-setting-speed {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-setting-loop {\n  display: none;\n}\n.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {\n  display: none;\n}\n.dplayer.dplayer-arrow .dplayer-danmaku {\n  font-size: 18px;\n}\n.dplayer.dplayer-arrow .dplayer-icon {\n  margin: 0 -3px;\n}\n.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {\n  animation-play-state: running;\n}\n@media (min-width: 900px) {\n  .dplayer.dplayer-playing .dplayer-controller-mask {\n    opacity: 0;\n  }\n  .dplayer.dplayer-playing .dplayer-controller {\n    opacity: 0;\n  }\n  .dplayer.dplayer-playing:hover .dplayer-controller-mask {\n    opacity: 1;\n  }\n  .dplayer.dplayer-playing:hover .dplayer-controller {\n    opacity: 1;\n  }\n}\n.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {\n  display: block;\n}\n.dplayer.dplayer-loading .dplayer-danmaku,\n.dplayer.dplayer-paused .dplayer-danmaku,\n.dplayer.dplayer-loading .dplayer-danmaku-move,\n.dplayer.dplayer-paused .dplayer-danmaku-move {\n  animation-play-state: paused;\n}\n.dplayer.dplayer-hide-controller {\n  cursor: none;\n}\n.dplayer.dplayer-hide-controller .dplayer-controller-mask {\n  opacity: 0;\n  transform: translateY(100%);\n}\n.dplayer.dplayer-hide-controller .dplayer-controller {\n  opacity: 0;\n  transform: translateY(100%);\n}\n.dplayer.dplayer-show-controller .dplayer-controller-mask {\n  opacity: 1;\n}\n.dplayer.dplayer-show-controller .dplayer-controller {\n  opacity: 1;\n}\n.dplayer.dplayer-fulled {\n  width: 100% !important;\n  height: 100% !important;\n}\n.dplayer.dplayer-fulled {\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {\n  display: none;\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {\n  position: static;\n  display: inline-block;\n}\n.dplayer.dplayer-mobile .dplayer-bar-time {\n  display: none;\n}\n.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {\n  display: none;\n}\n.dplayer.dplayer-mobile .dplayer-mobile-play {\n  display: block;\n}\n.dplayer-web-fullscreen-fix {\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n}\n[data-balloon]:before {\n  display: none;\n}\n[data-balloon]:after {\n  padding: 0.3em 0.7em;\n  background: rgba(17, 17, 17, 0.7);\n}\n[data-balloon][data-balloon-pos=\"up\"]:after {\n  margin-bottom: 0;\n}\n.dplayer-bezel {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 22px;\n  color: #fff;\n  pointer-events: none;\n}\n.dplayer-bezel .dplayer-bezel-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -26px 0 0 -26px;\n  height: 52px;\n  width: 52px;\n  padding: 12px;\n  box-sizing: border-box;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n}\n.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {\n  animation: bezel-hide 0.5s linear;\n}\n@keyframes bezel-hide {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n.dplayer-bezel .dplayer-danloading {\n  position: absolute;\n  top: 50%;\n  margin-top: -7px;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  line-height: 14px;\n  animation: my-face 5s infinite ease-in-out;\n}\n.dplayer-bezel .diplayer-loading-icon {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -18px 0 0 -18px;\n  height: 36px;\n  width: 36px;\n  pointer-events: none;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {\n  display: none;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {\n  animation: diplayer-loading-dot-fade 0.8s ease infinite;\n  opacity: 0;\n  transform-origin: 4px 4px;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {\n  animation-delay: 0.1s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {\n  animation-delay: 0.2s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {\n  animation-delay: 0.3s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {\n  animation-delay: 0.4s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {\n  animation-delay: 0.5s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {\n  animation-delay: 0.6s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {\n  animation-delay: 0.7s;\n}\n@keyframes diplayer-loading-dot-fade {\n  0% {\n    opacity: 0.7;\n    transform: scale(1.2, 1.2);\n  }\n  50% {\n    opacity: 0.25;\n    transform: scale(0.9, 0.9);\n  }\n  to {\n    opacity: 0.25;\n    transform: scale(0.85, 0.85);\n  }\n}\n.dplayer-controller-mask {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") repeat-x bottom;\n  height: 98px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  transition: all 0.3s ease;\n}\n.dplayer-controller {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 41px;\n  padding: 0 20px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  transition: all 0.3s ease;\n}\n.dplayer-controller.dplayer-controller-comment .dplayer-icons {\n  display: none;\n}\n.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {\n  display: block;\n}\n.dplayer-controller .dplayer-bar-wrap {\n  padding: 5px 0;\n  cursor: pointer;\n  position: absolute;\n  bottom: 33px;\n  width: calc(100% - 40px);\n  height: 3px;\n}\n.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {\n  display: block;\n  width: 8px;\n  transform: translateX(-4px);\n  top: 4px;\n  height: 40%;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {\n  z-index: 12;\n  position: absolute;\n  top: 5px;\n  width: 6px;\n  height: 20%;\n  border-radius: 6px;\n  background-color: #fff;\n  text-align: center;\n  transform: translateX(-3px);\n  transition: all 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {\n  display: block;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: -24px;\n  padding: 5px 8px;\n  background-color: rgba(0, 0, 0, 0.62);\n  color: #fff;\n  border-radius: 4px;\n  font-size: 12px;\n  white-space: nowrap;\n  transform: translateX(-50%);\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {\n  position: absolute;\n  background: #fff;\n  pointer-events: none;\n  display: none;\n  background-size: 16000px 100%;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  pointer-events: none;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {\n  position: absolute;\n  left: 0px;\n  top: -20px;\n  border-radius: 4px;\n  padding: 5px 7px;\n  background-color: rgba(0, 0, 0, 0.62);\n  color: #fff;\n  font-size: 12px;\n  text-align: center;\n  opacity: 1;\n  transition: opacity 0.1s ease-in-out;\n  word-wrap: normal;\n  word-break: normal;\n  z-index: 2;\n  pointer-events: none;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar {\n  position: relative;\n  height: 3px;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.4);\n  height: 3px;\n  transition: all 0.5s ease;\n  will-change: width;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  height: 3px;\n  will-change: width;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons {\n  height: 38px;\n  position: absolute;\n  bottom: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box {\n  display: none;\n  position: absolute;\n  transition: all 0.3s ease-in-out;\n  z-index: 2;\n  height: 38px;\n  bottom: 0;\n  left: 20px;\n  right: 20px;\n  color: #fff;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {\n  padding: 7px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {\n  position: absolute;\n  background: rgba(28, 28, 28, 0.9);\n  bottom: 41px;\n  left: 0;\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n  padding: 10px 10px 16px;\n  font-size: 14px;\n  width: 204px;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {\n  display: none;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {\n  font-size: 13px;\n  color: #fff;\n  line-height: 30px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {\n  font-size: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {\n  margin-bottom: 6px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {\n  border-radius: 4px 0 0 4px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {\n  border-radius: 0 4px 4px 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {\n  width: 33%;\n  padding: 4px 6px;\n  line-height: 16px;\n  display: inline-block;\n  font-size: 12px;\n  color: #fff;\n  border: 1px solid #fff;\n  margin-right: -1px;\n  box-sizing: border-box;\n  text-align: center;\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {\n  background: #E4E4E6;\n  color: #1c1c1c;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {\n  font-size: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {\n  font-size: 0;\n  padding: 6px;\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {\n  width: 22px;\n  height: 22px;\n  display: inline-block;\n  border-radius: 50%;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {\n  animation: my-face 5s infinite ease-in-out;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {\n  outline: none;\n  border: none;\n  padding: 8px 31px;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  border-radius: 4px;\n  background: none;\n  margin: 0;\n  height: 100%;\n  box-sizing: border-box;\n  width: 100%;\n  color: #fff;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {\n  color: #fff;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {\n  color: #fff;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {\n  display: none;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {\n  padding: 7px;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-right {\n  right: 20px;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {\n  padding: 8px;\n}\n.dplayer-controller .dplayer-icons .dplayer-time,\n.dplayer-controller .dplayer-icons .dplayer-live-badge {\n  line-height: 38px;\n  color: #eee;\n  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n  vertical-align: middle;\n  font-size: 13px;\n  cursor: default;\n}\n.dplayer-controller .dplayer-icons .dplayer-live-dot {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  vertical-align: 4%;\n  margin-right: 5px;\n  content: '';\n  border-radius: 6px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon {\n  width: 40px;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  vertical-align: middle;\n  box-sizing: border-box;\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {\n  transition: all 0.2s ease-in-out;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {\n  opacity: 1;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {\n  color: #fff;\n  width: auto;\n  line-height: 22px;\n  font-size: 14px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {\n  padding: 10px 9px 9px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {\n  padding-top: 8.5px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {\n  width: 43px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  width: 45px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  width: 45px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {\n  display: inline-block;\n  margin: 0 10px 0 -5px;\n  vertical-align: middle;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  position: relative;\n  top: 17px;\n  width: 0;\n  height: 3px;\n  background: #aaa;\n  transition: all 0.3s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  transition: all 0.1s ease;\n  will-change: width;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {\n  position: absolute;\n  right: 0;\n  bottom: 50px;\n  transform: scale(0);\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 240px;\n  min-width: 120px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 7px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: auto;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {\n  height: 30px;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {\n  position: absolute;\n  right: 0;\n  bottom: 50px;\n  transform: scale(0);\n  width: 150px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 7px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {\n  width: 70px;\n  text-align: center;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {\n  height: 30px;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {\n  padding: 5px 0;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {\n  padding: 0 10px;\n  display: inline;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {\n  padding: 0 10px;\n  box-sizing: border-box;\n  display: none;\n  vertical-align: middle;\n  height: 100%;\n  width: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {\n  position: relative;\n  top: 8.5px;\n  width: 100%;\n  height: 3px;\n  background: #fff;\n  transition: all 0.3s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  transition: all 0.1s ease;\n  background: #aaa;\n  will-change: width;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  background: #aaa;\n}\n.dplayer-controller .dplayer-icons .dplayer-full {\n  display: inline-block;\n  height: 100%;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {\n  position: absolute;\n  top: -30px;\n  z-index: 1;\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality {\n  position: relative;\n  display: inline-block;\n  height: 100%;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {\n  display: none;\n  position: absolute;\n  bottom: 38px;\n  left: -18px;\n  width: 80px;\n  padding-bottom: 12px;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {\n  display: none;\n  font-size: 12px;\n  width: 80px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 5px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {\n  height: 25px;\n  box-sizing: border-box;\n  cursor: pointer;\n  line-height: 25px;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-comment {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-label {\n  color: #eee;\n  font-size: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle {\n  width: 32px;\n  height: 20px;\n  text-align: center;\n  font-size: 0;\n  vertical-align: middle;\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input {\n  max-height: 0;\n  max-width: 0;\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label {\n  display: inline-block;\n  position: relative;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  border: 1px solid #dfdfdf;\n  height: 20px;\n  width: 32px;\n  border-radius: 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  height: 18px;\n  width: 18px;\n  top: 0;\n  left: 0;\n  border-radius: 15px;\n  transition: 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  border-radius: 15px;\n  background: #fff;\n  transition: 0.2s ease-in-out;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  height: 18px;\n  width: 18px;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {\n  width: 30px;\n  background: rgba(255, 255, 255, 0.5);\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {\n  left: 12px;\n}\n.dplayer-mobile-play {\n  display: none;\n  width: 50px;\n  height: 50px;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  box-sizing: border-box;\n  bottom: 0;\n  opacity: 0.8;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.dplayer-danmaku {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 22px;\n  color: #fff;\n}\n.dplayer-danmaku .dplayer-danmaku-item {\n  display: inline-block;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  cursor: default;\n  white-space: nowrap;\n  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n}\n.dplayer-danmaku .dplayer-danmaku-item--demo {\n  position: absolute;\n  visibility: hidden;\n}\n.dplayer-danmaku .dplayer-danmaku-right {\n  position: absolute;\n  right: 0;\n  transform: translateX(100%);\n}\n.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {\n  will-change: transform;\n  animation-name: 'danmaku';\n  animation-timing-function: linear;\n  animation-play-state: paused;\n}\n@keyframes danmaku {\n  from {\n    transform: translateX(100%);\n  }\n}\n.dplayer-danmaku .dplayer-danmaku-top,\n.dplayer-danmaku .dplayer-danmaku-bottom {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  visibility: hidden;\n}\n.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,\n.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {\n  will-change: visibility;\n  animation-name: 'danmaku-center';\n  animation-timing-function: linear;\n  animation-play-state: paused;\n}\n@keyframes danmaku-center {\n  from {\n    visibility: visible;\n  }\n  to {\n    visibility: visible;\n  }\n}\n.dplayer-logo {\n  pointer-events: none;\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  max-width: 50px;\n  max-height: 50px;\n}\n.dplayer-logo img {\n  max-width: 100%;\n  max-height: 100%;\n  background: none;\n}\n.dplayer-menu {\n  position: absolute;\n  width: 170px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.85);\n  padding: 5px 0;\n  overflow: hidden;\n  z-index: 3;\n  display: none;\n}\n.dplayer-menu.dplayer-menu-show {\n  display: block;\n}\n.dplayer-menu .dplayer-menu-item {\n  height: 30px;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.dplayer-menu .dplayer-menu-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-menu .dplayer-menu-item a {\n  padding: 0 10px;\n  line-height: 30px;\n  color: #eee;\n  font-size: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%;\n  box-sizing: border-box;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.dplayer-menu .dplayer-menu-item a:hover {\n  text-decoration: none;\n}\n.dplayer-notice-list {\n  position: absolute;\n  bottom: 60px;\n  left: 20px;\n}\n.dplayer-notice-list .dplayer-notice {\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  color: #fff;\n  display: table;\n  pointer-events: none;\n  animation: showNotice 0.3s ease 1 forwards;\n}\n.dplayer-notice-list .remove-notice {\n  animation: removeNotice 0.3s ease 1 forwards;\n}\n@keyframes showNotice {\n  from {\n    padding: 0;\n    font-size: 0;\n    margin-top: 0;\n  }\n  to {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n}\n@keyframes removeNotice {\n  0% {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n  20% {\n    font-size: 12px;\n  }\n  21% {\n    font-size: 0;\n    padding: 7px 10px;\n  }\n  100% {\n    padding: 0;\n    margin-top: 0;\n    font-size: 0;\n  }\n}\n.dplayer-subtitle {\n  position: absolute;\n  bottom: 40px;\n  width: 90%;\n  left: 5%;\n  text-align: center;\n  color: #fff;\n  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n  font-size: 20px;\n}\n.dplayer-subtitle.dplayer-subtitle-hide {\n  display: none;\n}\n.dplayer-mask {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  display: none;\n}\n.dplayer-mask.dplayer-mask-show {\n  display: block;\n}\n.dplayer-video-wrap {\n  position: relative;\n  background: #000;\n  font-size: 0;\n  width: 100%;\n  height: 100%;\n}\n.dplayer-video-wrap .dplayer-video {\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n.dplayer-video-wrap .dplayer-video-current {\n  display: block;\n}\n.dplayer-video-wrap .dplayer-video-prepare {\n  display: none;\n}\n.dplayer-info-panel {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 400px;\n  background: rgba(28, 28, 28, 0.8);\n  padding: 10px;\n  color: #fff;\n  font-size: 12px;\n  border-radius: 2px;\n}\n.dplayer-info-panel-hide {\n  display: none;\n}\n.dplayer-info-panel .dplayer-info-panel-close {\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n.dplayer-info-panel .dplayer-info-panel-item > span {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 15px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.dplayer-info-panel .dplayer-info-panel-item-title {\n  width: 100px;\n  text-align: right;\n  margin-right: 10px;\n}\n.dplayer-info-panel .dplayer-info-panel-item-data {\n  width: 260px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/global.less","webpack://./src/css/index.less","webpack://./src/css/player.less","webpack://./src/css/balloon.less","webpack://./src/css/bezel.less","webpack://./src/css/info-panel.less","webpack://./src/css/controller.less","webpack://./src/css/danmaku.less","webpack://./src/css/logo.less","webpack://./src/css/menu.less","webpack://./src/css/notice.less","webpack://./src/css/subtitle.less","webpack://./src/css/video.less"],"names":[],"mappings":"AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,qBAAA;AHkTpB;AIlXC;EDgEmB,qBAAA;AHqTpB;AIrXC;EDgEmB,qBAAA;AHwTpB;AIxXC;EDgEmB,qBAAA;AH2TpB;AI3XC;EDgEmB,qBAAA;AH8TpB;AI9XC;EDgEmB,qBAAA;AHiUpB;AIjYC;EDgEmB,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,yBAAA;EACA,iCAAA;EACA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,gCAAA;EACA,iCAAA;EACA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;ASjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;ATmqCJ;AStqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,0CAAA;ATmqCR;AShrCA;EAiBQ,4CAAA;ATkqCR;AS9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;ETgqCN;ES9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ETgqCN;AACF;AS7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ET+pCN;ES7pCE;IACI,eAAA;ET+pCN;ES7pCE;IACI,YAAA;IACA,iBAAA;ET+pCN;ES7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;ET+pCN;AACF;AUltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;AVotCJ;AUntCI;EACI,aAAA;AVqtCR;AW/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AXiuCJ;AWhuCI;EACI,cAAA;AXkuCR;AW9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AXguCJ;AWruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AXiuCR;AW1uCA;EAYQ,cAAA;AXiuCR;AW7uCA;EAeQ,aAAA;AXiuCR;AI7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AJ+vCJ;AI7vCI;EACI,aAAA;AJ+vCR;AI3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AJ8vCR;AI1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AJ4vCZ;AIzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AJ0vCR;AI9xCA;EAwCQ,YAAA;AJyvCR","sourcesContent":["@keyframes my-face {\n    2% {\n        transform: translate(0, 1.5px) rotate(1.5deg);\n    }\n    4% {\n        transform: translate(0, -1.5px) rotate(-0.5deg);\n    }\n    6% {\n        transform: translate(0, 1.5px) rotate(-1.5deg);\n    }\n    8% {\n        transform: translate(0, -1.5px) rotate(-1.5deg);\n    }\n    10% {\n        transform: translate(0, 2.5px) rotate(1.5deg);\n    }\n    12% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    14% {\n        transform: translate(0, -1.5px) rotate(1.5deg);\n    }\n    16% {\n        transform: translate(0, -0.5px) rotate(-1.5deg);\n    }\n    18% {\n        transform: translate(0, 0.5px) rotate(-1.5deg);\n    }\n    20% {\n        transform: translate(0, -1.5px) rotate(2.5deg);\n    }\n    22% {\n        transform: translate(0, 0.5px) rotate(-1.5deg);\n    }\n    24% {\n        transform: translate(0, 1.5px) rotate(1.5deg);\n    }\n    26% {\n        transform: translate(0, 0.5px) rotate(0.5deg);\n    }\n    28% {\n        transform: translate(0, 0.5px) rotate(1.5deg);\n    }\n    30% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    32% {\n        transform: translate(0, 1.5px) rotate(-0.5deg);\n    }\n    34% {\n        transform: translate(0, 1.5px) rotate(-0.5deg);\n    }\n    36% {\n        transform: translate(0, -1.5px) rotate(2.5deg);\n    }\n    38% {\n        transform: translate(0, 1.5px) rotate(-1.5deg);\n    }\n    40% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    42% {\n        transform: translate(0, 2.5px) rotate(-1.5deg);\n    }\n    44% {\n        transform: translate(0, 1.5px) rotate(0.5deg);\n    }\n    46% {\n        transform: translate(0, -1.5px) rotate(2.5deg);\n    }\n    48% {\n        transform: translate(0, -0.5px) rotate(0.5deg);\n    }\n    50% {\n        transform: translate(0, 0.5px) rotate(0.5deg);\n    }\n    52% {\n        transform: translate(0, 2.5px) rotate(2.5deg);\n    }\n    54% {\n        transform: translate(0, -1.5px) rotate(1.5deg);\n    }\n    56% {\n        transform: translate(0, 2.5px) rotate(2.5deg);\n    }\n    58% {\n        transform: translate(0, 0.5px) rotate(2.5deg);\n    }\n    60% {\n        transform: translate(0, 2.5px) rotate(2.5deg);\n    }\n    62% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    64% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    66% {\n        transform: translate(0, 1.5px) rotate(-0.5deg);\n    }\n    68% {\n        transform: translate(0, -1.5px) rotate(-0.5deg);\n    }\n    70% {\n        transform: translate(0, 1.5px) rotate(0.5deg);\n    }\n    72% {\n        transform: translate(0, 2.5px) rotate(1.5deg);\n    }\n    74% {\n        transform: translate(0, -0.5px) rotate(0.5deg);\n    }\n    76% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    78% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    80% {\n        transform: translate(0, 1.5px) rotate(1.5deg);\n    }\n    82% {\n        transform: translate(0, -0.5px) rotate(0.5deg);\n    }\n    84% {\n        transform: translate(0, 1.5px) rotate(2.5deg);\n    }\n    86% {\n        transform: translate(0, -1.5px) rotate(-1.5deg);\n    }\n    88% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    90% {\n        transform: translate(0, 2.5px) rotate(-0.5deg);\n    }\n    92% {\n        transform: translate(0, 0.5px) rotate(-0.5deg);\n    }\n    94% {\n        transform: translate(0, 2.5px) rotate(0.5deg);\n    }\n    96% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    98% {\n        transform: translate(0, -1.5px) rotate(-0.5deg);\n    }\n    0%,\n    100% {\n        transform: translate(0, 0) rotate(0deg);\n    }\n}","@import '../../node_modules/balloon-css/balloon.css';\n@keyframes my-face {\n  2% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  4% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  6% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  8% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  10% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  12% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  14% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  16% {\n    transform: translate(0, -0.5px) rotate(-1.5deg);\n  }\n  18% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  20% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  22% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  24% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  26% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  28% {\n    transform: translate(0, 0.5px) rotate(1.5deg);\n  }\n  30% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  32% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  34% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  36% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  38% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  40% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  42% {\n    transform: translate(0, 2.5px) rotate(-1.5deg);\n  }\n  44% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  46% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  48% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  50% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  52% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  54% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  56% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  58% {\n    transform: translate(0, 0.5px) rotate(2.5deg);\n  }\n  60% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  62% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  64% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  66% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  68% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  70% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  72% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  74% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  76% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  78% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  80% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  82% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  84% {\n    transform: translate(0, 1.5px) rotate(2.5deg);\n  }\n  86% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  88% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  90% {\n    transform: translate(0, 2.5px) rotate(-0.5deg);\n  }\n  92% {\n    transform: translate(0, 0.5px) rotate(-0.5deg);\n  }\n  94% {\n    transform: translate(0, 2.5px) rotate(0.5deg);\n  }\n  96% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  98% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  0%,\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n.dplayer {\n  position: relative;\n  overflow: hidden;\n  user-select: none;\n  line-height: 1;\n}\n.dplayer * {\n  box-sizing: content-box;\n}\n.dplayer svg {\n  width: 100%;\n  height: 100%;\n}\n.dplayer svg path,\n.dplayer svg circle {\n  fill: #fff;\n}\n.dplayer:-webkit-full-screen {\n  width: 100%;\n  height: 100%;\n  background: #000;\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  margin: 0;\n  padding: 0;\n  transform: translate(0, 0);\n}\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {\n  display: none;\n}\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {\n  display: none;\n}\n.dplayer.dplayer-no-danmaku .dplayer-danmaku {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-time {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-bar-wrap {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-setting-speed {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-setting-loop {\n  display: none;\n}\n.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {\n  display: none;\n}\n.dplayer.dplayer-arrow .dplayer-danmaku {\n  font-size: 18px;\n}\n.dplayer.dplayer-arrow .dplayer-icon {\n  margin: 0 -3px;\n}\n.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {\n  animation-play-state: running;\n}\n@media (min-width: 900px) {\n  .dplayer.dplayer-playing .dplayer-controller-mask {\n    opacity: 0;\n  }\n  .dplayer.dplayer-playing .dplayer-controller {\n    opacity: 0;\n  }\n  .dplayer.dplayer-playing:hover .dplayer-controller-mask {\n    opacity: 1;\n  }\n  .dplayer.dplayer-playing:hover .dplayer-controller {\n    opacity: 1;\n  }\n}\n.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {\n  display: block;\n}\n.dplayer.dplayer-loading .dplayer-danmaku,\n.dplayer.dplayer-paused .dplayer-danmaku,\n.dplayer.dplayer-loading .dplayer-danmaku-move,\n.dplayer.dplayer-paused .dplayer-danmaku-move {\n  animation-play-state: paused;\n}\n.dplayer.dplayer-hide-controller {\n  cursor: none;\n}\n.dplayer.dplayer-hide-controller .dplayer-controller-mask {\n  opacity: 0;\n  transform: translateY(100%);\n}\n.dplayer.dplayer-hide-controller .dplayer-controller {\n  opacity: 0;\n  transform: translateY(100%);\n}\n.dplayer.dplayer-show-controller .dplayer-controller-mask {\n  opacity: 1;\n}\n.dplayer.dplayer-show-controller .dplayer-controller {\n  opacity: 1;\n}\n.dplayer.dplayer-fulled {\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  width: 100% !important;\n  height: 100% !important;\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {\n  display: none;\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {\n  position: static;\n  display: inline-block;\n}\n.dplayer.dplayer-mobile .dplayer-bar-time {\n  display: none;\n}\n.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {\n  display: none;\n}\n.dplayer.dplayer-mobile .dplayer-mobile-play {\n  display: block;\n}\n.dplayer-web-fullscreen-fix {\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n}\n[data-balloon]:before {\n  display: none;\n}\n[data-balloon]:after {\n  padding: 0.3em 0.7em;\n  background: rgba(17, 17, 17, 0.7);\n}\n[data-balloon][data-balloon-pos=\"up\"]:after {\n  margin-bottom: 0;\n}\n.dplayer-bezel {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 22px;\n  color: #fff;\n  pointer-events: none;\n}\n.dplayer-bezel .dplayer-bezel-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -26px 0 0 -26px;\n  height: 52px;\n  width: 52px;\n  padding: 12px;\n  box-sizing: border-box;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n}\n.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {\n  animation: bezel-hide 0.5s linear;\n}\n@keyframes bezel-hide {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n.dplayer-bezel .dplayer-danloading {\n  position: absolute;\n  top: 50%;\n  margin-top: -7px;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  line-height: 14px;\n  animation: my-face 5s infinite ease-in-out;\n}\n.dplayer-bezel .diplayer-loading-icon {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -18px 0 0 -18px;\n  height: 36px;\n  width: 36px;\n  pointer-events: none;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {\n  display: none;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {\n  animation: diplayer-loading-dot-fade 0.8s ease infinite;\n  opacity: 0;\n  transform-origin: 4px 4px;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {\n  animation-delay: 0.1s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {\n  animation-delay: 0.2s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {\n  animation-delay: 0.3s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {\n  animation-delay: 0.4s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {\n  animation-delay: 0.5s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {\n  animation-delay: 0.6s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {\n  animation-delay: 0.7s;\n}\n@keyframes diplayer-loading-dot-fade {\n  0% {\n    opacity: 0.7;\n    transform: scale(1.2, 1.2);\n  }\n  50% {\n    opacity: 0.25;\n    transform: scale(0.9, 0.9);\n  }\n  to {\n    opacity: 0.25;\n    transform: scale(0.85, 0.85);\n  }\n}\n.dplayer-controller-mask {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;\n  height: 98px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  transition: all 0.3s ease;\n}\n.dplayer-controller {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 41px;\n  padding: 0 20px;\n  user-select: none;\n  transition: all 0.3s ease;\n}\n.dplayer-controller.dplayer-controller-comment .dplayer-icons {\n  display: none;\n}\n.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {\n  display: block;\n}\n.dplayer-controller .dplayer-bar-wrap {\n  padding: 5px 0;\n  cursor: pointer;\n  position: absolute;\n  bottom: 33px;\n  width: calc(100% - 40px);\n  height: 3px;\n}\n.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {\n  display: block;\n  width: 8px;\n  transform: translateX(-4px);\n  top: 4px;\n  height: 40%;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {\n  z-index: 12;\n  position: absolute;\n  top: 5px;\n  width: 6px;\n  height: 20%;\n  border-radius: 6px;\n  background-color: #fff;\n  text-align: center;\n  transform: translateX(-3px);\n  transition: all 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {\n  display: block;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: -24px;\n  padding: 5px 8px;\n  background-color: rgba(0, 0, 0, 0.62);\n  color: #fff;\n  border-radius: 4px;\n  font-size: 12px;\n  white-space: nowrap;\n  transform: translateX(-50%);\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {\n  position: absolute;\n  background: #fff;\n  pointer-events: none;\n  display: none;\n  background-size: 16000px 100%;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  pointer-events: none;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {\n  position: absolute;\n  left: 0px;\n  top: -20px;\n  border-radius: 4px;\n  padding: 5px 7px;\n  background-color: rgba(0, 0, 0, 0.62);\n  color: #fff;\n  font-size: 12px;\n  text-align: center;\n  opacity: 1;\n  transition: opacity 0.1s ease-in-out;\n  word-wrap: normal;\n  word-break: normal;\n  z-index: 2;\n  pointer-events: none;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar {\n  position: relative;\n  height: 3px;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.4);\n  height: 3px;\n  transition: all 0.5s ease;\n  will-change: width;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  height: 3px;\n  will-change: width;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons {\n  height: 38px;\n  position: absolute;\n  bottom: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box {\n  display: none;\n  position: absolute;\n  transition: all 0.3s ease-in-out;\n  z-index: 2;\n  height: 38px;\n  bottom: 0;\n  left: 20px;\n  right: 20px;\n  color: #fff;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {\n  padding: 7px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {\n  position: absolute;\n  background: rgba(28, 28, 28, 0.9);\n  bottom: 41px;\n  left: 0;\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n  padding: 10px 10px 16px;\n  font-size: 14px;\n  width: 204px;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {\n  display: none;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {\n  font-size: 13px;\n  color: #fff;\n  line-height: 30px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {\n  font-size: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {\n  margin-bottom: 6px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {\n  border-radius: 4px 0 0 4px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {\n  border-radius: 0 4px 4px 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {\n  width: 33%;\n  padding: 4px 6px;\n  line-height: 16px;\n  display: inline-block;\n  font-size: 12px;\n  color: #fff;\n  border: 1px solid #fff;\n  margin-right: -1px;\n  box-sizing: border-box;\n  text-align: center;\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {\n  background: #E4E4E6;\n  color: #1c1c1c;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {\n  font-size: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {\n  font-size: 0;\n  padding: 6px;\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {\n  width: 22px;\n  height: 22px;\n  display: inline-block;\n  border-radius: 50%;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {\n  animation: my-face 5s infinite ease-in-out;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {\n  outline: none;\n  border: none;\n  padding: 8px 31px;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  border-radius: 4px;\n  background: none;\n  margin: 0;\n  height: 100%;\n  box-sizing: border-box;\n  width: 100%;\n  color: #fff;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {\n  color: #fff;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {\n  display: none;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {\n  padding: 7px;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-right {\n  right: 20px;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {\n  padding: 8px;\n}\n.dplayer-controller .dplayer-icons .dplayer-time,\n.dplayer-controller .dplayer-icons .dplayer-live-badge {\n  line-height: 38px;\n  color: #eee;\n  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n  vertical-align: middle;\n  font-size: 13px;\n  cursor: default;\n}\n.dplayer-controller .dplayer-icons .dplayer-live-dot {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  vertical-align: 4%;\n  margin-right: 5px;\n  content: '';\n  border-radius: 6px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon {\n  width: 40px;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  vertical-align: middle;\n  box-sizing: border-box;\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {\n  transition: all 0.2s ease-in-out;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {\n  opacity: 1;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {\n  color: #fff;\n  width: auto;\n  line-height: 22px;\n  font-size: 14px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {\n  padding: 10px 9px 9px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {\n  padding-top: 8.5px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {\n  width: 43px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  width: 45px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  width: 45px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {\n  display: inline-block;\n  margin: 0 10px 0 -5px;\n  vertical-align: middle;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  position: relative;\n  top: 17px;\n  width: 0;\n  height: 3px;\n  background: #aaa;\n  transition: all 0.3s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  transition: all 0.1s ease;\n  will-change: width;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {\n  position: absolute;\n  right: 0;\n  bottom: 50px;\n  transform: scale(0);\n  width: fit-content;\n  max-width: 240px;\n  min-width: 120px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 7px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: auto;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {\n  height: 30px;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {\n  position: absolute;\n  right: 0;\n  bottom: 50px;\n  transform: scale(0);\n  width: 150px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 7px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {\n  width: 70px;\n  text-align: center;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {\n  height: 30px;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {\n  padding: 5px 0;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {\n  padding: 0 10px;\n  display: inline;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {\n  padding: 0 10px;\n  box-sizing: border-box;\n  display: none;\n  vertical-align: middle;\n  height: 100%;\n  width: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {\n  position: relative;\n  top: 8.5px;\n  width: 100%;\n  height: 3px;\n  background: #fff;\n  transition: all 0.3s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  transition: all 0.1s ease;\n  background: #aaa;\n  will-change: width;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  background: #aaa;\n}\n.dplayer-controller .dplayer-icons .dplayer-full {\n  display: inline-block;\n  height: 100%;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {\n  position: absolute;\n  top: -30px;\n  z-index: 1;\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality {\n  position: relative;\n  display: inline-block;\n  height: 100%;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {\n  display: none;\n  position: absolute;\n  bottom: 38px;\n  left: -18px;\n  width: 80px;\n  padding-bottom: 12px;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {\n  display: none;\n  font-size: 12px;\n  width: 80px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 5px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {\n  height: 25px;\n  box-sizing: border-box;\n  cursor: pointer;\n  line-height: 25px;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-comment {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-label {\n  color: #eee;\n  font-size: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle {\n  width: 32px;\n  height: 20px;\n  text-align: center;\n  font-size: 0;\n  vertical-align: middle;\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input {\n  max-height: 0;\n  max-width: 0;\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label {\n  display: inline-block;\n  position: relative;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  border: 1px solid #dfdfdf;\n  height: 20px;\n  width: 32px;\n  border-radius: 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  height: 18px;\n  width: 18px;\n  top: 0;\n  left: 0;\n  border-radius: 15px;\n  transition: 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  border-radius: 15px;\n  background: #fff;\n  transition: 0.2s ease-in-out;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  height: 18px;\n  width: 18px;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {\n  width: 30px;\n  background: rgba(255, 255, 255, 0.5);\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {\n  left: 12px;\n}\n.dplayer-mobile-play {\n  display: none;\n  width: 50px;\n  height: 50px;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  box-sizing: border-box;\n  bottom: 0;\n  opacity: 0.8;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.dplayer-danmaku {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 22px;\n  color: #fff;\n}\n.dplayer-danmaku .dplayer-danmaku-item {\n  display: inline-block;\n  pointer-events: none;\n  user-select: none;\n  cursor: default;\n  white-space: nowrap;\n  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n}\n.dplayer-danmaku .dplayer-danmaku-item--demo {\n  position: absolute;\n  visibility: hidden;\n}\n.dplayer-danmaku .dplayer-danmaku-right {\n  position: absolute;\n  right: 0;\n  transform: translateX(100%);\n}\n.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {\n  will-change: transform;\n  animation-name: 'danmaku';\n  animation-timing-function: linear;\n  animation-play-state: paused;\n}\n@keyframes danmaku {\n  from {\n    transform: translateX(100%);\n  }\n}\n.dplayer-danmaku .dplayer-danmaku-top,\n.dplayer-danmaku .dplayer-danmaku-bottom {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  visibility: hidden;\n}\n.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,\n.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {\n  will-change: visibility;\n  animation-name: 'danmaku-center';\n  animation-timing-function: linear;\n  animation-play-state: paused;\n}\n@keyframes danmaku-center {\n  from {\n    visibility: visible;\n  }\n  to {\n    visibility: visible;\n  }\n}\n.dplayer-logo {\n  pointer-events: none;\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  max-width: 50px;\n  max-height: 50px;\n}\n.dplayer-logo img {\n  max-width: 100%;\n  max-height: 100%;\n  background: none;\n}\n.dplayer-menu {\n  position: absolute;\n  width: 170px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.85);\n  padding: 5px 0;\n  overflow: hidden;\n  z-index: 3;\n  display: none;\n}\n.dplayer-menu.dplayer-menu-show {\n  display: block;\n}\n.dplayer-menu .dplayer-menu-item {\n  height: 30px;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.dplayer-menu .dplayer-menu-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-menu .dplayer-menu-item a {\n  padding: 0 10px;\n  line-height: 30px;\n  color: #eee;\n  font-size: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%;\n  box-sizing: border-box;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.dplayer-menu .dplayer-menu-item a:hover {\n  text-decoration: none;\n}\n.dplayer-notice-list {\n  position: absolute;\n  bottom: 60px;\n  left: 20px;\n}\n.dplayer-notice-list .dplayer-notice {\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  color: #fff;\n  display: table;\n  pointer-events: none;\n  animation: showNotice 0.3s ease 1 forwards;\n}\n.dplayer-notice-list .remove-notice {\n  animation: removeNotice 0.3s ease 1 forwards;\n}\n@keyframes showNotice {\n  from {\n    padding: 0;\n    font-size: 0;\n    margin-top: 0;\n  }\n  to {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n}\n@keyframes removeNotice {\n  0% {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n  20% {\n    font-size: 12px;\n  }\n  21% {\n    font-size: 0;\n    padding: 7px 10px;\n  }\n  100% {\n    padding: 0;\n    margin-top: 0;\n    font-size: 0;\n  }\n}\n.dplayer-subtitle {\n  position: absolute;\n  bottom: 40px;\n  width: 90%;\n  left: 5%;\n  text-align: center;\n  color: #fff;\n  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n  font-size: 20px;\n}\n.dplayer-subtitle.dplayer-subtitle-hide {\n  display: none;\n}\n.dplayer-mask {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  display: none;\n}\n.dplayer-mask.dplayer-mask-show {\n  display: block;\n}\n.dplayer-video-wrap {\n  position: relative;\n  background: #000;\n  font-size: 0;\n  width: 100%;\n  height: 100%;\n}\n.dplayer-video-wrap .dplayer-video {\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n.dplayer-video-wrap .dplayer-video-current {\n  display: block;\n}\n.dplayer-video-wrap .dplayer-video-prepare {\n  display: none;\n}\n.dplayer-info-panel {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 400px;\n  background: rgba(28, 28, 28, 0.8);\n  padding: 10px;\n  color: #fff;\n  font-size: 12px;\n  border-radius: 2px;\n}\n.dplayer-info-panel-hide {\n  display: none;\n}\n.dplayer-info-panel .dplayer-info-panel-close {\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n.dplayer-info-panel .dplayer-info-panel-item > span {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 15px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.dplayer-info-panel .dplayer-info-panel-item-title {\n  width: 100px;\n  text-align: right;\n  margin-right: 10px;\n}\n.dplayer-info-panel .dplayer-info-panel-item-data {\n  width: 260px;\n}\n",".dplayer {\n    position: relative;\n    overflow: hidden;\n    user-select: none;\n    line-height: 1;\n\n    * {\n        box-sizing: content-box;\n    }\n\n    svg {\n        width: 100%;\n        height: 100%;\n\n        path,\n        circle {\n            fill: #fff;\n        }\n    }\n\n    &:-webkit-full-screen {\n        width: 100%;\n        height: 100%;\n        background: #000;\n        position: fixed;\n        z-index: 100000;\n        left: 0;\n        top: 0;\n        margin: 0;\n        padding: 0;\n        transform: translate(0, 0);\n        \n    }\n\n    &.dplayer-no-danmaku {\n        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {\n            .dplayer-setting-showdan,\n            .dplayer-setting-danmaku,\n            .dplayer-setting-danunlimit {\n                display: none;\n            }\n        }\n\n        .dplayer-controller .dplayer-icons .dplayer-comment {\n            display: none;\n        }\n\n        .dplayer-danmaku {\n            display: none;\n        }\n    }\n\n    &.dplayer-live {\n        .dplayer-time {\n            display: none;\n        }\n        .dplayer-bar-wrap {\n            display: none;\n        }\n        .dplayer-setting-speed {\n            display: none;\n        }\n        .dplayer-setting-loop {\n            display: none;\n        }\n\n        &.dplayer-no-danmaku {\n            .dplayer-setting {\n                display: none;\n            }\n        }\n    }\n\n    &.dplayer-arrow {\n        .dplayer-danmaku {\n            font-size: 18px;\n        }\n        .dplayer-icon {\n            margin: 0 -3px;\n        }\n    }\n\n    &.dplayer-playing {\n        .dplayer-danmaku .dplayer-danmaku-move {\n            animation-play-state: running;\n        }\n\n        @media (min-width: 900px) {\n            .dplayer-controller-mask {\n                opacity: 0;\n            }\n            .dplayer-controller {\n                opacity: 0;\n            }\n\n            &:hover {\n                .dplayer-controller-mask {\n                    opacity: 1;\n                }\n                .dplayer-controller {\n                    opacity: 1;\n                }\n            }\n        }\n    }\n\n    &.dplayer-loading {\n        .dplayer-bezel .diplayer-loading-icon {\n            display: block;\n        }\n    }\n\n    &.dplayer-loading,\n    &.dplayer-paused {\n        .dplayer-danmaku,\n        .dplayer-danmaku-move {\n            animation-play-state: paused;\n        }\n    }\n\n    &.dplayer-hide-controller {\n        cursor: none;\n\n        .dplayer-controller-mask {\n            opacity: 0;\n            transform: translateY(100%);\n        }\n        .dplayer-controller {\n            opacity: 0;\n            transform: translateY(100%);\n        }\n    }\n    &.dplayer-show-controller {\n        .dplayer-controller-mask {\n            opacity: 1;\n        }\n        .dplayer-controller {\n            opacity: 1;\n        }\n    }\n    &.dplayer-fulled {\n        position: fixed;\n        z-index: 100000;\n        left: 0;\n        top: 0;\n        width: 100% !important;\n        height: 100% !important;\n    }\n    &.dplayer-mobile {\n        .dplayer-controller .dplayer-icons {\n            .dplayer-volume,\n            .dplayer-camera-icon,\n            .dplayer-airplay-icon,\n            .dplayer-chromecast-icon,\n            .dplayer-play-icon {\n                display: none;\n            }\n            .dplayer-full .dplayer-full-in-icon {\n                position: static;\n                display: inline-block;\n            }\n        }\n\n        .dplayer-bar-time {\n            display: none;\n        }\n\n        &.dplayer-hide-controller {\n            .dplayer-mobile-play {\n                display: none;\n            }\n        }\n\n        .dplayer-mobile-play {\n            display: block;\n        }\n    }\n}\n\n// To hide scroll bar, apply this class to <body>\n.dplayer-web-fullscreen-fix {\n    position: fixed;\n    top: 0;\n    left: 0;\n    margin: 0;\n    padding: 0;\n}\n","@import '../../node_modules/balloon-css/balloon.css';\n\n[data-balloon]:before {\n    display: none;\n}\n\n[data-balloon]:after {\n    padding: 0.3em 0.7em;\n    background: rgba(17, 17, 17, 0.7);\n}\n\n[data-balloon][data-balloon-pos=\"up\"]:after {\n    margin-bottom: 0;\n}",".dplayer-bezel {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    font-size: 22px;\n    color: #fff;\n    pointer-events: none;\n    .dplayer-bezel-icon {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -26px 0 0 -26px;\n        height: 52px;\n        width: 52px;\n        padding: 12px;\n        box-sizing: border-box;\n        background: rgba(0, 0, 0, .5);\n        border-radius: 50%;\n        opacity: 0;\n        pointer-events: none;\n        &.dplayer-bezel-transition {\n            animation: bezel-hide .5s linear;\n        }\n        @keyframes bezel-hide {\n            from {\n                opacity: 1;\n                transform: scale(1);\n            }\n            to {\n                opacity: 0;\n                transform: scale(2);\n            }\n        }\n    }\n    .dplayer-danloading {\n        position: absolute;\n        top: 50%;\n        margin-top: -7px;\n        width: 100%;\n        text-align: center;\n        font-size: 14px;\n        line-height: 14px;\n        animation: my-face 5s infinite ease-in-out;\n    }\n    .diplayer-loading-icon {\n        display: none;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -18px 0 0 -18px;\n        height: 36px;\n        width: 36px;\n        pointer-events: none;\n        .diplayer-loading-hide {\n            display: none;\n        }\n        .diplayer-loading-dot {\n            animation: diplayer-loading-dot-fade .8s ease infinite;\n            opacity: 0;\n            transform-origin: 4px 4px;\n            each(range(7), {\n                &.diplayer-loading-dot-@{value} {\n                    animation-delay: (@value * 0.1s);\n                }\n            });\n        }\n        @keyframes diplayer-loading-dot-fade {\n            0% {\n                opacity: .7;\n                transform: scale(1.2, 1.2)\n            }\n            50% {\n                opacity: .25;\n                transform: scale(.9, .9)\n            }\n            to {\n                opacity: .25;\n                transform: scale(.85, .85)\n            }\n        }\n    }\n}",".dplayer-info-panel {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    width: 400px;\n    background: rgba(28, 28, 28, 0.8);\n    padding: 10px;\n    color: #fff;\n    font-size: 12px;\n    border-radius: 2px;\n\n    &-hide {\n        display: none;\n    }\n\n    .dplayer-info-panel-close {\n        cursor: pointer;\n        position: absolute;\n        right: 10px;\n        top: 10px;\n    }\n\n    .dplayer-info-panel-item {\n        & > span {\n            display: inline-block;\n            vertical-align: middle;\n            line-height: 15px;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            overflow: hidden;\n        }\n    }\n\n    .dplayer-info-panel-item-title {\n        width: 100px;\n        text-align: right;\n        margin-right: 10px;\n    }\n    \n    .dplayer-info-panel-item-data {\n        width: 260px;\n    }\n}",".dplayer-controller-mask {\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;\n    height: 98px;\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    transition: all 0.3s ease;\n}\n\n.dplayer-controller {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 41px;\n    padding: 0 20px;\n    user-select: none;\n    transition: all 0.3s ease;\n    &.dplayer-controller-comment {\n        .dplayer-icons {\n            display: none;\n        }\n        .dplayer-icons.dplayer-comment-box {\n            display: block;\n        }\n    }\n    .dplayer-bar-wrap {\n        padding: 5px 0;\n        cursor: pointer;\n        position: absolute;\n        bottom: 33px;\n        width: calc(100% - 40px);\n        height: 3px;\n        &:hover {\n            .dplayer-bar .dplayer-played .dplayer-thumb {\n                transform: scale(1);\n            }\n            .dplayer-highlight {\n                display: block;\n                width: 8px;\n                transform: translateX(-4px);\n                top: 4px;\n                height: 40%;\n            }\n        }\n        .dplayer-highlight {\n            z-index: 12;\n            position: absolute;\n            top: 5px;\n            width: 6px;\n            height: 20%;\n            border-radius: 6px;\n            background-color: #fff;\n            text-align: center;\n            transform: translateX(-3px);\n            transition: all .2s ease-in-out;\n            &:hover {\n                .dplayer-highlight-text {\n                    display: block;\n                }\n                &~.dplayer-bar-preview {\n                    opacity: 0;\n                }\n                &~.dplayer-bar-time {\n                    opacity: 0;\n                }\n            }\n            .dplayer-highlight-text {\n                display: none;\n                position: absolute;\n                left: 50%;\n                top: -24px;\n                padding: 5px 8px;\n                background-color: rgba(0, 0, 0, .62);\n                color: #fff;\n                border-radius: 4px;\n                font-size: 12px;\n                white-space: nowrap;\n                transform: translateX(-50%);\n            }\n        }\n        .dplayer-bar-preview {\n            position: absolute;\n            background: #fff;\n            pointer-events: none;\n            display: none;\n            background-size: 16000px 100%;\n        }\n        .dplayer-bar-preview-canvas {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            z-index: 1;\n            pointer-events: none;\n        }\n        .dplayer-bar-time {\n            &.hidden {\n                opacity: 0;\n            }\n            position: absolute;\n            left: 0px;\n            top: -20px;\n            border-radius: 4px;\n            padding: 5px 7px;\n            background-color: rgba(0, 0, 0, 0.62);\n            color: #fff;\n            font-size: 12px;\n            text-align: center;\n            opacity: 1;\n            transition: opacity .1s ease-in-out;\n            word-wrap: normal;\n            word-break: normal;\n            z-index: 2;\n            pointer-events: none;\n        }\n        .dplayer-bar {\n            position: relative;\n            height: 3px;\n            width: 100%;\n            background: rgba(255, 255, 255, .2);\n            cursor: pointer;\n            .dplayer-loaded {\n                position: absolute;\n                left: 0;\n                top: 0;\n                bottom: 0;\n                background: rgba(255, 255, 255, .4);\n                height: 3px;\n                transition: all 0.5s ease;\n                will-change: width;\n            }\n            .dplayer-played {\n                position: absolute;\n                left: 0;\n                top: 0;\n                bottom: 0;\n                height: 3px;\n                will-change: width;\n                .dplayer-thumb {\n                    position: absolute;\n                    top: 0;\n                    right: 5px;\n                    margin-top: -4px;\n                    margin-right: -10px;\n                    height: 11px;\n                    width: 11px;\n                    border-radius: 50%;\n                    cursor: pointer;\n                    transition: all .3s ease-in-out;\n                    transform: scale(0);\n                }\n            }\n        }\n    }\n    .dplayer-icons {\n        height: 38px;\n        position: absolute;\n        bottom: 0;\n        &.dplayer-comment-box {\n            display: none;\n            position: absolute;\n            transition: all .3s ease-in-out;\n            z-index: 2;\n            height: 38px;\n            bottom: 0;\n            left: 20px;\n            right: 20px;\n            color: #fff;\n            .dplayer-icon {\n                padding: 7px;\n            }\n            .dplayer-comment-setting-icon {\n                position: absolute;\n                left: 0;\n                top: 0;\n            }\n            .dplayer-send-icon {\n                position: absolute;\n                right: 0;\n                top: 0;\n            }\n            .dplayer-comment-setting-box {\n                position: absolute;\n                background: rgba(28, 28, 28, 0.9);\n                bottom: 41px;\n                left: 0;\n                box-shadow: 0 0 25px rgba(0, 0, 0, .3);\n                border-radius: 4px;\n                padding: 10px 10px 16px;\n                font-size: 14px;\n                width: 204px;\n                transition: all .3s ease-in-out;\n                transform: scale(0);\n                &.dplayer-comment-setting-open {\n                    transform: scale(1);\n                }\n                input[type=radio] {\n                    display: none;\n                }\n                label {\n                    cursor: pointer;\n                }\n                .dplayer-comment-setting-title {\n                    font-size: 13px;\n                    color: #fff;\n                    line-height: 30px;\n                }\n                .dplayer-comment-setting-type {\n                    font-size: 0;\n                    .dplayer-comment-setting-title {\n                        margin-bottom: 6px;\n                    }\n                    label {\n                        &:nth-child(2) {\n                            span {\n                                border-radius: 4px 0 0 4px;\n                            }\n                        }\n                        &:nth-child(4) {\n                            span {\n                                border-radius: 0 4px 4px 0;\n                            }\n                        }\n                    }\n                    span {\n                        width: 33%;\n                        padding: 4px 6px;\n                        line-height: 16px;\n                        display: inline-block;\n                        font-size: 12px;\n                        color: #fff;\n                        border: 1px solid #fff;\n                        margin-right: -1px;\n                        box-sizing: border-box;\n                        text-align: center;\n                        cursor: pointer;\n                    }\n                    input:checked+span {\n                        background: #E4E4E6;\n                        color: #1c1c1c;\n                    }\n                }\n                .dplayer-comment-setting-color {\n                    font-size: 0;\n                    label {\n                        font-size: 0;\n                        padding: 6px;\n                        display: inline-block;\n                    }\n                    span {\n                        width: 22px;\n                        height: 22px;\n                        display: inline-block;\n                        border-radius: 50%;\n                        box-sizing: border-box;\n                        cursor: pointer;\n                        &:hover {\n                            animation: my-face 5s infinite ease-in-out;\n                        }\n                    }\n                }\n            }\n            .dplayer-comment-input {\n                outline: none;\n                border: none;\n                padding: 8px 31px;\n                font-size: 14px;\n                line-height: 18px;\n                text-align: center;\n                border-radius: 4px;\n                background: none;\n                margin: 0;\n                height: 100%;\n                box-sizing: border-box;\n                width: 100%;\n                color: #fff;\n                &::placeholder {\n                    color: #fff;\n                    opacity: 0.8;\n                }\n                &::-ms-clear {\n                    display: none;\n                }\n            }\n        }\n        &.dplayer-icons-left {\n            .dplayer-icon {\n                padding: 7px;\n            }\n        }\n        &.dplayer-icons-right {\n            right: 20px;\n            .dplayer-icon {\n                padding: 8px;\n            }\n        }\n        .dplayer-time,\n        .dplayer-live-badge {\n            line-height: 38px;\n            color: #eee;\n            text-shadow: 0 0 2px rgba(0, 0, 0, .5);\n            vertical-align: middle;\n            font-size: 13px;\n            cursor: default;\n        }\n        .dplayer-live-dot {\n            display: inline-block;\n            width: 6px;\n            height: 6px;\n            vertical-align: 4%;\n            margin-right: 5px;\n            content: '';\n            border-radius: 6px;\n        }\n        .dplayer-icon {\n            width: 40px;\n            height: 100%;\n            border: none;\n            background-color: transparent;\n            outline: none;\n            cursor: pointer;\n            vertical-align: middle;\n            box-sizing: border-box;\n            display: inline-block;\n            .dplayer-icon-content {\n                transition: all .2s ease-in-out;\n                opacity: .8;\n            }\n            &:hover {\n                .dplayer-icon-content {\n                    opacity: 1;\n                }\n            }\n            &.dplayer-quality-icon {\n                color: #fff;\n                width: auto;\n                line-height: 22px;\n                font-size: 14px;\n            }\n            &.dplayer-comment-icon {\n                padding: 10px 9px 9px;\n            }\n            &.dplayer-setting-icon {\n                padding-top: 8.5px;\n            }\n            &.dplayer-volume-icon {\n                width: 43px;\n            }\n        }\n        .dplayer-volume {\n            position: relative;\n            display: inline-block;\n            cursor: pointer;\n            height: 100%;\n            &:hover {\n                .dplayer-volume-bar-wrap .dplayer-volume-bar {\n                    width: 45px;\n                }\n                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n                    transform: scale(1);\n                }\n            }\n            &.dplayer-volume-active {\n                .dplayer-volume-bar-wrap .dplayer-volume-bar {\n                    width: 45px;\n                }\n                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n                    transform: scale(1);\n                }\n            }\n            .dplayer-volume-bar-wrap {\n                display: inline-block;\n                margin: 0 10px 0 -5px;\n                vertical-align: middle;\n                height: 100%;\n                .dplayer-volume-bar {\n                    position: relative;\n                    top: 17px;\n                    width: 0;\n                    height: 3px;\n                    background: #aaa;\n                    transition: all 0.3s ease-in-out;\n                    .dplayer-volume-bar-inner {\n                        position: absolute;\n                        bottom: 0;\n                        left: 0;\n                        height: 100%;\n                        transition: all 0.1s ease;\n                        will-change: width;\n                        .dplayer-thumb {\n                            position: absolute;\n                            top: 0;\n                            right: 5px;\n                            margin-top: -4px;\n                            margin-right: -10px;\n                            height: 11px;\n                            width: 11px;\n                            border-radius: 50%;\n                            cursor: pointer;\n                            transition: all .3s ease-in-out;\n                            transform: scale(0);\n                        }\n                    }\n                }\n            }\n        }\n        .dplayer-subtitle-btn {\n            display: inline-block;\n            height: 100%;\n        }\n        .dplayer-subtitles {\n            display: inline-block;\n            height: 100%;\n            .dplayer-subtitles-box {\n                position: absolute;\n                right: 0;\n                bottom: 50px;\n                transform: scale(0);\n                width: fit-content;\n                max-width: 240px;\n                min-width: 120px;\n                border-radius: 2px;\n                background: rgba(28, 28, 28, 0.9);\n                padding: 7px 0;\n                transition: all .3s ease-in-out;\n                overflow: auto;\n                z-index: 2;\n                &.dplayer-subtitles-panel {\n                    display: block;\n                }\n                &.dplayer-subtitles-box-open {\n                    transform: scale(1);\n                }\n            }\n            .dplayer-subtitles-item {\n                height: 30px;\n                padding: 5px 10px;\n                box-sizing: border-box;\n                cursor: pointer;\n                position: relative;\n                &:hover {\n                    background-color: rgba(255, 255, 255, .1);\n                }\n            }\n        }\n        .dplayer-setting {\n            display: inline-block;\n            height: 100%;\n            .dplayer-setting-box {\n                position: absolute;\n                right: 0;\n                bottom: 50px;\n                transform: scale(0);\n                width: 150px;\n                border-radius: 2px;\n                background: rgba(28, 28, 28, 0.9);\n                padding: 7px 0;\n                transition: all .3s ease-in-out;\n                overflow: hidden;\n                z-index: 2;\n                &>div {\n                    display: none;\n                    &.dplayer-setting-origin-panel {\n                        display: block;\n                    }\n                }\n                &.dplayer-setting-box-open {\n                    transform: scale(1);\n                }\n                &.dplayer-setting-box-narrow {\n                    width: 70px;\n                    text-align: center;\n                }\n                &.dplayer-setting-box-speed {\n                    .dplayer-setting-origin-panel {\n                        display: none;\n                    }\n                    .dplayer-setting-speed-panel {\n                        display: block;\n                    }\n                }\n            }\n            .dplayer-setting-item,\n            .dplayer-setting-speed-item {\n                height: 30px;\n                padding: 5px 10px;\n                box-sizing: border-box;\n                cursor: pointer;\n                position: relative;\n                &:hover {\n                    background-color: rgba(255, 255, 255, .1);\n                }\n            }\n            .dplayer-setting-danmaku {\n                padding: 5px 0;\n                .dplayer-label {\n                    padding: 0 10px;\n                    display: inline;\n                }\n                &:hover {\n                    .dplayer-label {\n                        display: none;\n                    }\n                    .dplayer-danmaku-bar-wrap {\n                        display: inline-block;\n                    }\n                }\n                &.dplayer-setting-danmaku-active {\n                    .dplayer-label {\n                        display: none;\n                    }\n                    .dplayer-danmaku-bar-wrap {\n                        display: inline-block;\n                    }\n                }\n                .dplayer-danmaku-bar-wrap {\n                    padding: 0 10px;\n                    box-sizing: border-box;\n                    display: none;\n                    vertical-align: middle;\n                    height: 100%;\n                    width: 100%;\n                    .dplayer-danmaku-bar {\n                        position: relative;\n                        top: 8.5px;\n                        width: 100%;\n                        height: 3px;\n                        background: #fff;\n                        transition: all 0.3s ease-in-out;\n                        .dplayer-danmaku-bar-inner {\n                            position: absolute;\n                            bottom: 0;\n                            left: 0;\n                            height: 100%;\n                            transition: all 0.1s ease;\n                            background: #aaa;\n                            will-change: width;\n                            .dplayer-thumb {\n                                position: absolute;\n                                top: 0;\n                                right: 5px;\n                                margin-top: -4px;\n                                margin-right: -10px;\n                                height: 11px;\n                                width: 11px;\n                                border-radius: 50%;\n                                cursor: pointer;\n                                transition: all .3s ease-in-out;\n                                background: #aaa;\n                            }\n                        }\n                    }\n                }\n            }\n        }\n        .dplayer-full {\n            display: inline-block;\n            height: 100%;\n            position: relative;\n            &:hover {\n                .dplayer-full-in-icon {\n                    display: block;\n                }\n            }\n            .dplayer-full-in-icon {\n                position: absolute;\n                top: -30px;\n                z-index: 1;\n                display: none;\n            }\n        }\n        .dplayer-quality {\n            position: relative;\n            display: inline-block;\n            height: 100%;\n            z-index: 2;\n            &:hover {\n                .dplayer-quality-list {\n                    display: block;\n                }\n                .dplayer-quality-mask {\n                    display: block;\n                }\n            }\n            .dplayer-quality-mask {\n                display: none;\n                position: absolute;\n                bottom: 38px;\n                left: -18px;\n                width: 80px;\n                padding-bottom: 12px;\n            }\n            .dplayer-quality-list {\n                display: none;\n                font-size: 12px;\n                width: 80px;\n                border-radius: 2px;\n                background: rgba(28, 28, 28, 0.9);\n                padding: 5px 0;\n                transition: all .3s ease-in-out;\n                overflow: hidden;\n                color: #fff;\n                text-align: center;\n            }\n            .dplayer-quality-item {\n                height: 25px;\n                box-sizing: border-box;\n                cursor: pointer;\n                line-height: 25px;\n                &:hover {\n                    background-color: rgba(255, 255, 255, .1);\n                }\n            }\n        }\n        .dplayer-comment {\n            display: inline-block;\n            height: 100%;\n        }\n        .dplayer-label {\n            color: #eee;\n            font-size: 13px;\n            display: inline-block;\n            vertical-align: middle;\n            white-space: nowrap;\n        }\n        .dplayer-toggle {\n            width: 32px;\n            height: 20px;\n            text-align: center;\n            font-size: 0;\n            vertical-align: middle;\n            position: absolute;\n            top: 5px;\n            right: 10px;\n            input {\n                max-height: 0;\n                max-width: 0;\n                display: none;\n            }\n            input+label {\n                display: inline-block;\n                position: relative;\n                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;\n                border: 1px solid rgb(223, 223, 223);\n                height: 20px;\n                width: 32px;\n                border-radius: 10px;\n                box-sizing: border-box;\n                cursor: pointer;\n                transition: .2s ease-in-out;\n            }\n            input+label:before {\n                content: \"\";\n                position: absolute;\n                display: block;\n                height: 18px;\n                width: 18px;\n                top: 0;\n                left: 0;\n                border-radius: 15px;\n                transition: .2s ease-in-out;\n            }\n            input+label:after {\n                content: \"\";\n                position: absolute;\n                display: block;\n                left: 0;\n                top: 0;\n                border-radius: 15px;\n                background: #fff;\n                transition: .2s ease-in-out;\n                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n                height: 18px;\n                width: 18px;\n            }\n            input:checked+label {\n                border-color: rgba(255, 255, 255, 0.5);\n            }\n            input:checked+label:before {\n                width: 30px;\n                background: rgba(255, 255, 255, 0.5);\n            }\n            input:checked+label:after {\n                left: 12px;\n            }\n        }\n    }\n}\n\n.dplayer-mobile-play {\n    display: none;\n    width: 50px;\n    height: 50px;\n    border: none;\n    background-color: transparent;\n    outline: none;\n    cursor: pointer;\n    box-sizing: border-box;\n    position: absolute;\n    bottom: 0;\n    opacity: 0.8;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}",".dplayer-danmaku {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    font-size: 22px;\n    color: #fff;\n    .dplayer-danmaku-item {\n        display: inline-block;\n        pointer-events: none;\n        user-select: none;\n        cursor: default;\n        white-space: nowrap;\n        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);\n        &--demo {\n            position: absolute;\n            visibility: hidden;\n        }\n    }\n    .dplayer-danmaku-right {\n        position: absolute;\n        right: 0;\n        transform: translateX(100%);\n        &.dplayer-danmaku-move {\n            will-change: transform;\n            animation-name: 'danmaku';\n            animation-timing-function: linear;\n            animation-play-state: paused;\n        }\n    }\n    @keyframes danmaku {\n        from {\n            transform: translateX(100%);\n        }\n    }\n    .dplayer-danmaku-top,\n    .dplayer-danmaku-bottom {\n        position: absolute;\n        width: 100%;\n        text-align: center;\n        visibility: hidden;\n        &.dplayer-danmaku-move {\n            will-change: visibility;\n            animation-name: 'danmaku-center';\n            animation-timing-function: linear;\n            animation-play-state: paused;\n        }\n    }\n    @keyframes danmaku-center {\n        from {\n            visibility: visible;\n        }\n        to {\n            visibility: visible;\n        }\n    }\n}",".dplayer-logo {\n    pointer-events: none;\n    position: absolute;\n    left: 20px;\n    top: 20px;\n    max-width: 50px;\n    max-height: 50px;\n    img {\n        max-width: 100%;\n        max-height: 100%;\n        background: none;\n    }\n}",".dplayer-menu {\n    position: absolute;\n    width: 170px;\n    border-radius: 2px;\n    background: rgba(28, 28, 28, 0.85);\n    padding: 5px 0;\n    overflow: hidden;\n    z-index: 3;\n    display: none;\n    &.dplayer-menu-show {\n        display: block;\n    }\n    .dplayer-menu-item {\n        height: 30px;\n        box-sizing: border-box;\n        cursor: pointer;\n        &:hover {\n            background-color: rgba(255, 255, 255, .1);\n        }\n        a {\n            display: inline-block;\n            padding: 0 10px;\n            line-height: 30px;\n            color: #eee;\n            font-size: 13px;\n            display: inline-block;\n            vertical-align: middle;\n            width: 100%;\n            box-sizing: border-box;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            overflow: hidden;\n            &:hover {\n                text-decoration: none;\n            }\n        }\n    }\n}",".dplayer-notice-list{\n    position: absolute;\n    bottom: 60px;\n    left: 20px;\n\n    .dplayer-notice {\n        border-radius: 2px;\n        background: rgba(28, 28, 28, 0.9);\n        transition: all .3s ease-in-out;\n        overflow: hidden;\n        color: #fff;\n        display: table;\n        pointer-events: none;\n        animation: showNotice .3s ease 1 forwards;\n    }\n\n    .remove-notice{\n        animation: removeNotice .3s ease 1 forwards;\n    }\n}\n\n@keyframes showNotice {\n    from {\n        padding: 0;\n        font-size: 0;\n        margin-top: 0;\n    }\n    to {\n        padding: 7px 20px;\n        font-size: 14px;\n        margin-top: 5px;\n    }\n}\n\n@keyframes removeNotice {\n    0%{\n        padding: 7px 20px;\n        font-size: 14px;\n        margin-top: 5px;\n    }\n    20%{\n        font-size: 12px;\n    }\n    21%{\n        font-size: 0;\n        padding: 7px 10px;\n    }\n    100%{\n        padding: 0;\n        margin-top: 0;\n        font-size: 0;\n    }\n}\n",".dplayer-subtitle {\n    position: absolute;\n    bottom: 40px;\n    width: 90%;\n    left: 5%;\n    text-align: center;\n    color: #fff;\n    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n    font-size: 20px;\n    &.dplayer-subtitle-hide {\n        display: none;\n    }\n}",".dplayer-mask {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n    display: none;\n    &.dplayer-mask-show {\n        display: block;\n    }\n}\n\n.dplayer-video-wrap {\n    position: relative;\n    background: #000;\n    font-size: 0;\n    width: 100%;\n    height: 100%;\n    .dplayer-video {\n        width: 100%;\n        height: 100%;\n        display: none;\n    }\n    .dplayer-video-current {\n        display: block;\n    }\n    .dplayer-video-prepare {\n        display: none;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/css/index.less":
/*!****************************!*\
  !*** ./src/css/index.less ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/less-loader/dist/cjs.js!./src/css/index.less");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/airplay.svg":
/*!********************************!*\
  !*** ./src/assets/airplay.svg ***!
  \********************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 288 288\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z\"></path></svg>"

/***/ }),

/***/ "./src/assets/camera.svg":
/*!*******************************!*\
  !*** ./src/assets/camera.svg ***!
  \*******************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z\"></path></svg>"

/***/ }),

/***/ "./src/assets/chromecast.svg":
/*!***********************************!*\
  !*** ./src/assets/chromecast.svg ***!
  \***********************************/
/***/ ((module) => {

module.exports = "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"chromecast\" class=\"svg-inline--fa fa-chromecast fa-w-16\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z\"></path></svg>"

/***/ }),

/***/ "./src/assets/comment-off.svg":
/*!************************************!*\
  !*** ./src/assets/comment-off.svg ***!
  \************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z\"></path></svg>"

/***/ }),

/***/ "./src/assets/comment.svg":
/*!********************************!*\
  !*** ./src/assets/comment.svg ***!
  \********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z\"></path></svg>"

/***/ }),

/***/ "./src/assets/full-web.svg":
/*!*********************************!*\
  !*** ./src/assets/full-web.svg ***!
  \*********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 33\"><path d=\"M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z\"></path></svg>"

/***/ }),

/***/ "./src/assets/full.svg":
/*!*****************************!*\
  !*** ./src/assets/full.svg ***!
  \*****************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 33\"><path d=\"M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z\"></path></svg>"

/***/ }),

/***/ "./src/assets/loading.svg":
/*!********************************!*\
  !*** ./src/assets/loading.svg ***!
  \********************************/
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" viewBox=\"0 0 22 22\"><svg x=\"7\" y=\"1\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-0\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"11\" y=\"3\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-1\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"13\" y=\"7\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-2\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"11\" y=\"11\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-3\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"7\" y=\"13\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-4\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"3\" y=\"11\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-5\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"1\" y=\"7\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-6\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"3\" y=\"3\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-7\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg></svg>"

/***/ }),

/***/ "./src/assets/pallette.svg":
/*!*********************************!*\
  !*** ./src/assets/pallette.svg ***!
  \*********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z\"></path></svg>"

/***/ }),

/***/ "./src/assets/pause.svg":
/*!******************************!*\
  !*** ./src/assets/pause.svg ***!
  \******************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 17 32\"><path d=\"M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z\"></path></svg>"

/***/ }),

/***/ "./src/assets/play.svg":
/*!*****************************!*\
  !*** ./src/assets/play.svg ***!
  \*****************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 16 32\"><path d=\"M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z\"></path></svg>"

/***/ }),

/***/ "./src/assets/right.svg":
/*!******************************!*\
  !*** ./src/assets/right.svg ***!
  \******************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z\"></path></svg>"

/***/ }),

/***/ "./src/assets/send.svg":
/*!*****************************!*\
  !*** ./src/assets/send.svg ***!
  \*****************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z\"></path></svg>"

/***/ }),

/***/ "./src/assets/setting.svg":
/*!********************************!*\
  !*** ./src/assets/setting.svg ***!
  \********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 28\"><path d=\"M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z\"></path></svg>"

/***/ }),

/***/ "./src/assets/subtitle.svg":
/*!*********************************!*\
  !*** ./src/assets/subtitle.svg ***!
  \*********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z\"></path></svg>"

/***/ }),

/***/ "./src/assets/volume-down.svg":
/*!************************************!*\
  !*** ./src/assets/volume-down.svg ***!
  \************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 21 32\"><path d=\"M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z\"></path></svg>"

/***/ }),

/***/ "./src/assets/volume-off.svg":
/*!***********************************!*\
  !*** ./src/assets/volume-off.svg ***!
  \***********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 21 32\"><path d=\"M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z\"></path></svg>"

/***/ }),

/***/ "./src/assets/volume-up.svg":
/*!**********************************!*\
  !*** ./src/assets/volume-up.svg ***!
  \**********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 21 32\"><path d=\"M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z\"></path></svg>"

/***/ }),

/***/ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg== ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"DPlayer": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.less */ "./src/css/index.less");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/js/player.js");


/* global DPLAYER_VERSION GIT_HASH */

console.log('\n'.concat(" %c DPlayer v", "1.27.0", " ").concat("v1.27.0-2-g81bd218", " %c https://dplayer.diygod.dev ", '\n', '\n'), 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_player__WEBPACK_IMPORTED_MODULE_1__["default"]);
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=DPlayer.js.map