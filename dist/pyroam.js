parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uCOr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getActiveBlockUid=exports.createUid=exports.addScriptToPage=exports.addElementToPage=exports.sleep=void 0;var e=function(e){var t=e||10;return new Promise(function(e){return setTimeout(e,t)})};exports.sleep=e;var t=function(e,t,r){try{document.getElementById(t).remove()}catch(o){}Object.assign(e,{type:r,async:!1,tagId:t}),document.getElementsByTagName("head")[0].appendChild(e)};exports.addElementToPage=t;var r=function(e,t){exports.addElementToPage(Object.assign(document.createElement("script"),{src:t}),e,"text/javascript")};exports.addScriptToPage=r;var o=function(){return function(e){void 0===e&&(e=21);for(var t="",r=crypto.getRandomValues(new Uint8Array(e));e--;){var o=63&r[e];t+=o<36?o.toString(36):o<62?(o-26).toString(36).toUpperCase():o<63?"_":"-"}return t}(9)};exports.createUid=o;var n=function(){return document.activeElement.closest(".rm-block__input").id.slice(-9)};exports.getActiveBlockUid=n;
},{}],"sHO4":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,s){function a(e){try{u(o.next(e))}catch(t){s(t)}}function c(e){try{u(o.throw(e))}catch(t){s(t)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,c)}u((o=o.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,o,r,s,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function c(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&s[0]?o.return:s[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,s[1])).done)return r;switch(o=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,o=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){a.label=s[1];break}if(6===s[0]&&a.label<r[1]){a.label=r[1],r=s;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(s);break}r[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(c){s=[6,c],o=0}finally{n=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.runPython=exports.loadPyodide=void 0;var n=require("./helpers"),o=function(){return e(void 0,void 0,void 0,function(){return t(this,function(e){switch(e.label){case 0:return n.addScriptToPage("pyodide","https://cdn.jsdelivr.net/pyodide/v0.16.1/full/pyodide.js"),[4,n.sleep(2e3)];case 1:return e.sent(),[4,languagePluginLoader];case 2:return e.sent(),console.log("pyodide successfully loaded."),'\nimport sys, io, traceback\nnamespace = {}  # use separate namespace to hide run_code, modules, etc.\ndef run_code(code):\n  """run specified code and return stdout and stderr"""\n  out = io.StringIO()\n  oldout = sys.stdout\n  olderr = sys.stderr\n  sys.stdout = sys.stderr = out\n  try:\n      # change next line to exec(code, {}) if you want to clear vars each time\n      exec(code, namespace)\n  except:\n      traceback.print_exc()\n\n  sys.stdout = oldout\n  sys.stderr = olderr\n  return out.getvalue()\n',pyodide.runPython('\nimport sys, io, traceback\nnamespace = {}  # use separate namespace to hide run_code, modules, etc.\ndef run_code(code):\n  """run specified code and return stdout and stderr"""\n  out = io.StringIO()\n  oldout = sys.stdout\n  olderr = sys.stderr\n  sys.stdout = sys.stderr = out\n  try:\n      # change next line to exec(code, {}) if you want to clear vars each time\n      exec(code, namespace)\n  except:\n      traceback.print_exc()\n\n  sys.stdout = oldout\n  sys.stderr = olderr\n  return out.getvalue()\n'),[4,pyodide.loadPackage(["numpy","matplotlib","scipy"])];case 3:return e.sent(),console.log("Loaded packages: "),console.log(pyodide.loadedPackages),[2]}})})};exports.loadPyodide=o;var r=function(n){return e(void 0,void 0,void 0,function(){return t(this,function(e){switch(e.label){case 0:return pyodide.globals.code_to_run=n,[4,pyodide.runPythonAsync("run_code(code_to_run)")];case 1:return[2,e.sent()]}})})};exports.runPython=r;
},{"./helpers":"uCOr"}],"in7L":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))(function(o,i){function c(e){try{l(n.next(e))}catch(r){i(r)}}function u(e){try{l(n.throw(e))}catch(r){i(r)}}function l(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t(function(e){e(r)})).then(c,u)}l((n=n.apply(e,r||[])).next())})},r=this&&this.__generator||function(e,r){var t,n,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,n=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=r.call(e,c)}catch(u){i=[6,u],n=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.writeToNextBlock=exports.createBlock=exports.updateBlock=exports.q=void 0;var t=require("./helpers"),n=function(t){return e(void 0,void 0,void 0,function(){var e;return r(this,function(r){switch(r.label){case 0:return[4,window.roamAlphaAPI.q(t)];case 1:return(e=r.sent())&&0!==e.length?[2,e]:[2,null]}})})};exports.q=n;var o=function(t,n){return e(void 0,void 0,void 0,function(){return r(this,function(e){switch(e.label){case 0:return[4,window.roamAlphaAPI.updateBlock({block:{uid:t,string:n}})];case 1:return e.sent(),[2]}})})};exports.updateBlock=o;var i=function(t,n,o,i){return e(void 0,void 0,void 0,function(){return r(this,function(e){switch(e.label){case 0:return[4,window.roamAlphaAPI.createBlock({location:{"parent-uid":t,order:n},block:{uid:o,string:i}})];case 1:return e.sent(),[2]}})})};exports.createBlock=i;var c=function(n,o){return e(void 0,void 0,void 0,function(){var e,i,c,u,l,a,s;return r(this,function(r){switch(r.label){case 0:return e='\n  [:find \n    (pull ?block \n        [:block/order \n        {:block/_children \n            [:block/uid \n            {:block/children [:block/uid :block/order]}]}])\n   :where\n    [?block :block/uid "'+n+'"]]',[4,exports.q(e)];case 1:return(i=r.sent())||console.log("Couldn't find the block."),c=i[0][0],u=c._children[0],(l=u.children).some(function(e){return e.order>c.order})?(s=l.filter(function(e){return e.order===c.order+1})[0],exports.updateBlock(s.uid,o)):(a=t.createUid(),exports.createBlock(u.uid,c.order+1,a,o)),[2]}})})};exports.writeToNextBlock=c;
},{"./helpers":"uCOr"}],"ystA":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{a(r.next(e))}catch(t){i(t)}}function c(e){try{a(r.throw(e))}catch(t){i(t)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(u,c)}a((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.handleKeyPress=void 0;var n=require("./helpers"),r=require("./api"),o=require("./pyodide"),i=function(){return e(void 0,void 0,void 0,function(){var e,i,u,c,a,l;return t(this,function(t){switch(t.label){case 0:return e=n.getActiveBlockUid(),i='[:find (pull ?block [:block/string])\n         :where [?block :block/uid "'+e+'"]]',[4,r.q(i)];case 1:return u=t.sent(),c=u[0][0].string,"```",a=c.replace("```python","").replace("```",""),[4,o.runPython(a)];case 2:return l=t.sent(),[4,r.writeToNextBlock(e,l||"")];case 3:return t.sent(),[2]}})})},u=function(n){return e(void 0,void 0,void 0,function(){return t(this,function(e){return"Enter"==n.code&&1==n.altKey&&i(),[2]})})};exports.handleKeyPress=u;
},{"./helpers":"uCOr","./api":"in7L","./pyodide":"sHO4"}],"QCba":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./pyodide"),d=require("./keyboard");console.log("Loading pyroam."),e.loadPyodide(),document.addEventListener("keydown",d.handleKeyPress);
},{"./pyodide":"sHO4","./keyboard":"ystA"}]},{},["QCba"], null)
//# sourceMappingURL=/pyroam.js.map