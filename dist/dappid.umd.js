(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.dappid = factory());
}(this, (function () { 'use strict';

  // Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
  // import "core-js/fn/array.find"
  // ...
  var DAppID = /** @class */ (function () {
      function DAppID() {
          console.log('dont fear the reaper. baby im your man');
      }
      return DAppID;
  }());

  return DAppID;

})));
//# sourceMappingURL=dappid.umd.js.map
