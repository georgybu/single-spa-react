System.register(["react","react-dom"],(function(e){var t,n;return{setters:[function(e){t=e},function(e){n=e}],execute:function(){e(function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,n){e.exports=t},function(e,t,n){function o(e,t){const n=document.createElement("a");n.href=e;const o="/"===n.pathname[0]?n.pathname:"/"+n.pathname;let r=0,a=o.length;for(;r!==t&&a>=0;){"/"===o[--a]&&r++}if(r!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+r+") in the URL path "+e);const i=o.slice(0,a+1);return n.protocol+"//"+n.host+i}t.setPublicPath=function(e,t){if(t||(t=1),"string"!=typeof e||0===e.trim().length)throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'");if("number"!=typeof t||t<=0||!r(t))throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'");let a;try{if(a=window.System.resolve(e),!a)throw Error()}catch(t){throw Error("systemjs-webpack-interop: There is no such module '"+e+"' in the SystemJS registry. Did you misspell the name of your module?")}n.p=o(a,t)},t.resolveDirectory=o;const r=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}},function(e,t){e.exports=n},function(e,t,n){!function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}e.SingleSpaContext=null;var r={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,suppressComponentDidCatchWarning:!1,domElements:{},errorBoundary:null,domElementGetter:null,parcelCanUpdate:!0};function a(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function i(e,t){return new Promise((function(n,o){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var r=function(e,t){return(t=t&&t.customProps?t.customProps:t).domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa-react was not given an application name as a prop, so it can't make a unique dom element container for the react application");var n="single-spa-application:".concat(t);return function(){var e=document.getElementById(n);return e||((e=document.createElement("div")).id=n,document.body.appendChild(e)),e}}(t)}(e,t);if("function"!=typeof r)throw new Error("single-spa-react: the domElementGetter for react application '".concat(t.appName||t.name,"' is not a function"));var a=p(e,t),i=function(e,t){var n=e(t);if(!n)throw new Error("single-spa-react: domElementGetter function for application '".concat(t.appName||t.name,"' did not return a valid dom element. Please pass a valid domElement or domElementGetter via opts or props"));return n}(r,t);s({elementToRender:a,domElement:i,whenFinished:function(){n(this)},opts:e}),e.domElements[t.name]=i}))}function c(e,t){return Promise.resolve().then((function(){e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name]}))}function u(e,t){return new Promise((function(n,o){s({elementToRender:p(e,t),domElement:e.domElements[t.name],whenFinished:function(){n(this)},opts:e})}))}function s(e){var t=e.opts,n=e.elementToRender,o=e.domElement,r=e.whenFinished;return"createRoot"===t.renderType?t.ReactDOM.createRoot(o).render(n,r):"createBlockingRoot"===t.renderType?t.ReactDOM.createBlockingRoot(o).render(n,r):"hydrate"===t.renderType?t.ReactDOM.hydrate(n,o,r):t.ReactDOM.render(n,o,r)}function p(t,n){var o=t.React.createElement(t.rootComponent,n),r=e.SingleSpaContext?t.React.createElement(e.SingleSpaContext.Provider,{value:n},o):o;return t.errorBoundary&&(t.errorBoundaryClass=t.errorBoundaryClass||function(e){function t(n){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},t.displayName="SingleSpaReactErrorBoundary(".concat(n.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.render=function(){return this.state.caughtError?e.errorBoundary(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},t.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},t}(t),r=t.React.createElement(t.errorBoundaryClass,n,r)),r}e.default=function(s){if("object"!==t(s))throw new Error("single-spa-react requires a configuration object");var p=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r,{},s);if(!p.React)throw new Error("single-spa-react must be passed opts.React");if(!p.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!p.rootComponent&&!p.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(p.errorBoundary&&"function"!=typeof p.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!e.SingleSpaContext&&p.React.createContext&&(e.SingleSpaContext=p.React.createContext());var l={bootstrap:a.bind(null,p),mount:i.bind(null,p),unmount:c.bind(null,p)};return p.parcelCanUpdate&&(l.update=u.bind(null,p)),l},Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return p})),n.d(t,"mount",(function(){return l})),n.d(t,"unmount",(function(){return m}));var o=n(1);Object(o.setPublicPath)("@georgy/home-page");var r=n(0),a=n.n(r),i=n(2),c=n.n(i),u=n(3);var s=n.n(u)()({React:a.a,ReactDOM:c.a,rootComponent:function(e){return a.a.createElement("section",null,e.name," is mounted!")},errorBoundary:function(e,t,n){return null}}),p=s.bootstrap,l=s.mount,m=s.unmount}]))}}}));
//# sourceMappingURL=georgy-home-page.js.map