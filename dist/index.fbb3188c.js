// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aIdiY":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "106c69fefbb3188c";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bDbGG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _viewJs = require("./view.js");
var _autorizationJs = require("./autorization.js");
var _appJs = require("./app.js");
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
_viewJs.FORMS.AUTORIZATION.addEventListener('submit', _autorizationJs.sendToken);
_viewJs.FORMS.CONFIRM.addEventListener('submit', _autorizationJs.confirm);
_viewJs.FORMS.RENAME.addEventListener('submit', _appJs.rename);
_viewJs.UI.MESSAGE_FORM.addEventListener('submit', _appJs.sendMessage);
_viewJs.BTNS.OPTIONS.addEventListener('click', _appJs.showOptions);
_viewJs.BTNS.SCREEN_CLOSE.forEach((item)=>item.addEventListener('click', _appJs.closePopup)
);
if (_jsCookieDefault.default.get('token')) _appJs.chatStart();
else _appJs.showPopup(_viewJs.SCREENS.AUTORIZATION);

},{"./view.js":"2GA9o","./autorization.js":"8Ii9a","./app.js":"5AKj5","js-cookie":"c8bBu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2GA9o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UI", ()=>UI
);
parcelHelpers.export(exports, "BTNS", ()=>BTNS
);
parcelHelpers.export(exports, "SCREENS", ()=>SCREENS
);
parcelHelpers.export(exports, "FORMS", ()=>FORMS
);
const UI = {
    MESSAGE_FORM: document.getElementById('send-message'),
    MESSAGE_TEMPLATE: document.getElementById('template'),
    MESSAGE_INPUT: document.getElementById('message-input'),
    MESSAGES_WRAPPER: document.querySelector('.chat_messages'),
    AUTORIZATION_INPUT: document.querySelector('.autorization_input'),
    CONFIRM_INPUT: document.querySelector('.confirm_input'),
    RENAME_INPUT: document.querySelector('.rename_input')
};
const BTNS = {
    OPTIONS: document.querySelector('.chat_options'),
    SCREEN_CLOSE: document.querySelectorAll('.popup-close')
};
const SCREENS = {
    OPTIONS: document.querySelector('.options_popup'),
    AUTORIZATION: document.querySelector('.autorization_popup'),
    CONFIRM: document.querySelector('.confirm_popup'),
    POPUPS: document.querySelectorAll('.popup')
};
const FORMS = {
    AUTORIZATION: document.querySelector('.autorization-form'),
    CONFIRM: document.querySelector('.confirm-form'),
    RENAME: document.querySelector('.options_name-form')
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8Ii9a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sendToken", ()=>sendToken
);
parcelHelpers.export(exports, "confirm", ()=>confirm
);
var _viewJs = require("./view.js");
var _appJs = require("./app.js");
var _apiJs = require("./api.js");
var _urlsJs = require("./urls.js");
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
function sendToken() {
    const user = {
    };
    user.email = _viewJs.UI.AUTORIZATION_INPUT.value;
    _apiJs.sendRequest('POST', _urlsJs.URLS.USER, {
        body: user
    });
    _appJs.closePopup();
    _appJs.showPopup(_viewJs.SCREENS.CONFIRM);
}
function confirm() {
    const token = _viewJs.UI.CONFIRM_INPUT.value;
    _jsCookieDefault.default.set('token', token);
    _appJs.closePopup();
    _appJs.chatStart();
}
const a = 123;
exports.default = {
    a
};

},{"./view.js":"2GA9o","./app.js":"5AKj5","./api.js":"6yDOL","./urls.js":"cJeMZ","js-cookie":"c8bBu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5AKj5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "myEmail", ()=>myEmail
);
parcelHelpers.export(exports, "showOptions", ()=>showOptions
);
parcelHelpers.export(exports, "showPopup", ()=>showPopup
);
parcelHelpers.export(exports, "closePopup", ()=>closePopup
);
parcelHelpers.export(exports, "rename", ()=>rename
);
parcelHelpers.export(exports, "sendMessage", ()=>sendMessage
);
parcelHelpers.export(exports, "createMessage", ()=>createMessage
);
parcelHelpers.export(exports, "isMyMessage", ()=>isMyMessage
);
parcelHelpers.export(exports, "oldMessages", ()=>oldMessages
);
parcelHelpers.export(exports, "chatStart", ()=>chatStart
);
parcelHelpers.export(exports, "scrollMessage", ()=>scrollMessage
);
var _viewJs = require("./view.js");
var _renderJs = require("./render.js");
var _apiJs = require("./api.js");
var _urlsJs = require("./urls.js");
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
let myEmail = '';
function showOptions() {
    _viewJs.SCREENS.OPTIONS.style.display = 'flex';
}
function showPopup(popup) {
    popup.style.display = 'flex';
}
function closePopup() {
    _viewJs.SCREENS.POPUPS.forEach((item)=>item.style.display = 'none'
    );
}
function rename() {
    const name = {
        name: _viewJs.UI.RENAME_INPUT.value
    };
    _apiJs.sendRequest('PATCH', _urlsJs.URLS.USER, {
        body: name
    });
    closePopup();
}
function sendMessage() {
    const messageText = _viewJs.UI.MESSAGE_INPUT.value;
    const isNotValidMessage = _viewJs.UI.MESSAGE_INPUT.value.length < 1;
    if (isNotValidMessage) return;
    socket.send(JSON.stringify({
        text: messageText
    }));
    _viewJs.UI.MESSAGE_FORM.reset();
    return false;
}
function createMessage(messageData, method) {
    const className = getClassName(messageData);
    _renderJs.renderMessage(messageData, className, method);
}
function getClassName(messageData) {
    if (isMyMessage(messageData)) return _renderJs.classesMessageFrom.me;
    else return _renderJs.classesMessageFrom.other;
}
function isMyMessage(messageData) {
    return myEmail === messageData.userEmail;
}
let socket = null;
let oldMessages = null;
async function chatStart() {
    myEmail = (await _apiJs.sendRequest('GET', _urlsJs.URLS.ME)).email;
    console.log(_jsCookieDefault.default.get('token')) // выводит верный токен
    ;
    console.log(_urlsJs.URLS.SOCKET) // получает урл с undefined токеном
    ;
    socket = new WebSocket(_urlsJs.URLS.SOCKET); //обращается к url  с undefined токеном
    console.log(_jsCookieDefault.default.get('token')) // выводит верный токен
    ;
    console.log(_urlsJs.URLS.SOCKET) // получает урл с undefined токеном
    ;
    socket.onmessage = function(event) {
        console.log(event.data) // ошибка
        ;
        const messageData = new _renderJs.MessageData(JSON.parse(event.data));
        createMessage(messageData, 'append');
    };
    oldMessages = (await _apiJs.sendRequest("GET", _urlsJs.URLS.MESSAGE)).messages.reverse();
    _renderJs.renderOldMessage();
    _viewJs.UI.MESSAGES_WRAPPER.scrollIntoView(false);
}
document.querySelector('.messages_wrapper').addEventListener('scroll', scrollMessage);
function scrollMessage() {
    if (this.scrollTop === 0) {
        const wrapperHeight = _viewJs.UI.MESSAGES_WRAPPER.scrollHeight;
        _renderJs.renderOldMessage();
        const wrapperHeightAfterScroll = _viewJs.UI.MESSAGES_WRAPPER.offsetHeight;
        this.scrollTo(0, wrapperHeightAfterScroll - wrapperHeight);
    }
}

},{"./view.js":"2GA9o","./render.js":"9k0mC","./api.js":"6yDOL","./urls.js":"cJeMZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","js-cookie":"c8bBu"}],"9k0mC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "classesMessageFrom", ()=>classesMessageFrom
);
parcelHelpers.export(exports, "renderMessage", ()=>renderMessage
);
parcelHelpers.export(exports, "MessageData", ()=>MessageData
);
parcelHelpers.export(exports, "renderOldMessage", ()=>renderOldMessage
);
var _viewJs = require("./view.js");
var _appJs = require("./app.js");
const classesMessageFrom = {
    me: 'message-user',
    other: 'message-answer'
};
function renderMessage(messageData, className, method) {
    const message = document.createElement('div');
    message.className = `message ${className} new`;
    const messageContent = _viewJs.UI.MESSAGE_TEMPLATE.content.cloneNode(true);
    messageContent.querySelector('.message_text').textContent = `${messageData.userName}: ${messageData.userMessage}`;
    messageContent.querySelector('.message_time').textContent = `${messageData.userMessageHour}:${messageData.userMessageMinutes}`;
    message.append(messageContent);
    if (method === 'append') {
        _viewJs.UI.MESSAGES_WRAPPER.append(message);
        _viewJs.UI.MESSAGES_WRAPPER.scrollIntoView(false);
    } else _viewJs.UI.MESSAGES_WRAPPER.prepend(message);
    setTimeout(function() {
        message.classList.remove('new');
    }, 2000);
}
function MessageData(messageData) {
    this.userMessage = messageData.text;
    this.userMessageHour = new Date(messageData.createdAt).getHours();
    this.userMessageMinutes = new Date(messageData.createdAt).getMinutes();
    this.userEmail = messageData.user.email;
    this.userName = messageData.user.email === _appJs.myEmail ? 'я' : messageData.user.name;
}
function renderOldMessage() {
    if (_appJs.oldMessages.length < 1) notMessage();
    const messagesForShow = _appJs.oldMessages.splice(0, 20);
    messagesForShow.forEach((data)=>{
        const messageData = new MessageData(data);
        _appJs.createMessage(messageData, 'prepend');
    });
}
function notMessage() {
    const message = document.createElement('div');
    message.textContent = 'Вся история загружена';
    message.style = 'text-align: center; margin: 15px;';
    _viewJs.UI.MESSAGES_WRAPPER.prepend(message);
    document.querySelector('.messages_wrapper').removeEventListener('scroll', _appJs.scrollMessage);
}

},{"./view.js":"2GA9o","./app.js":"5AKj5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6yDOL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sendRequest", ()=>sendRequest
);
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
async function sendRequest(method, url, options) {
    const token = _jsCookieDefault.default.get('token');
    const fetchBody = {
        method: method,
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${token}`
        }
    };
    const needBody = method === 'POST' || method === 'PATCH';
    if (needBody) fetchBody.body = JSON.stringify(options.body);
    const response = await fetch(url, fetchBody);
    return await response.json();
}

},{"js-cookie":"c8bBu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c8bBu":[function(require,module,exports) {
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, (function() {
        var current = global.Cookies;
        var exports = global.Cookies = factory();
        exports.noConflict = function() {
            global.Cookies = current;
            return exports;
        };
    })());
})(this, function() {
    'use strict';
    /* eslint-disable no-var */ function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)target[key] = source[key];
        }
        return target;
    }
    /* eslint-enable no-var */ /* eslint-disable no-var */ var defaultConverter = {
        read: function(value) {
            if (value[0] === '"') value = value.slice(1, -1);
            return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
        },
        write: function(value) {
            return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
        }
    };
    /* eslint-enable no-var */ /* eslint-disable no-var */ function init(converter1, defaultAttributes) {
        function set(key, value, attributes) {
            if (typeof document === 'undefined') return;
            attributes = assign({
            }, defaultAttributes, attributes);
            if (typeof attributes.expires === 'number') attributes.expires = new Date(Date.now() + attributes.expires * 86400000);
            if (attributes.expires) attributes.expires = attributes.expires.toUTCString();
            key = encodeURIComponent(key).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var stringifiedAttributes = '';
            for(var attributeName in attributes){
                if (!attributes[attributeName]) continue;
                stringifiedAttributes += '; ' + attributeName;
                if (attributes[attributeName] === true) continue;
                // Considers RFC 6265 section 5.2:
                // ...
                // 3.  If the remaining unparsed-attributes contains a %x3B (";")
                //     character:
                // Consume the characters of the unparsed-attributes up to,
                // not including, the first %x3B (";") character.
                // ...
                stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
            }
            return document.cookie = key + '=' + converter1.write(value, key) + stringifiedAttributes;
        }
        function get(key) {
            if (typeof document === 'undefined' || arguments.length && !key) return;
            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all.
            var cookies = document.cookie ? document.cookie.split('; ') : [];
            var jar = {
            };
            for(var i = 0; i < cookies.length; i++){
                var parts = cookies[i].split('=');
                var value = parts.slice(1).join('=');
                try {
                    var foundKey = decodeURIComponent(parts[0]);
                    jar[foundKey] = converter1.read(value, foundKey);
                    if (key === foundKey) break;
                } catch (e) {
                }
            }
            return key ? jar[key] : jar;
        }
        return Object.create({
            set: set,
            get: get,
            remove: function(key, attributes) {
                set(key, '', assign({
                }, attributes, {
                    expires: -1
                }));
            },
            withAttributes: function(attributes) {
                return init(this.converter, assign({
                }, this.attributes, attributes));
            },
            withConverter: function(converter) {
                return init(assign({
                }, this.converter, converter), this.attributes);
            }
        }, {
            attributes: {
                value: Object.freeze(defaultAttributes)
            },
            converter: {
                value: Object.freeze(converter1)
            }
        });
    }
    var api = init(defaultConverter, {
        path: '/'
    });
    /* eslint-enable no-var */ return api;
});

},{}],"cJeMZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "URLS", ()=>URLS
);
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
const url = 'https://chat1-341409.oa.r.appspot.com/api/';
const URLS = {
    USER: `${url}user/`,
    MESSAGE: `${url}messages/`,
    ME: `${url}user/me`,
    SOCKET: `ws://chat1-341409.oa.r.appspot.com/websockets?${_jsCookieDefault.default.get('token')}`
};

},{"js-cookie":"c8bBu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aIdiY","bDbGG"], "bDbGG", "parcelRequire25d8")

//# sourceMappingURL=index.fbb3188c.js.map
