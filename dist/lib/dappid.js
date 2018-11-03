"use strict";
// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
Object.defineProperty(exports, "__esModule", { value: true });
var BITBOXCli = require('bitbox-sdk/lib/bitbox-sdk').default;
var BITBOX = new BITBOXCli();
var DAppID = /** @class */ (function () {
    function DAppID() {
    }
    DAppID.prototype.encodeBDIP2 = function (txType, txVersion, appType, name, protocolSpec, url, metaData) {
        var script = [
            BITBOX.Script.opcodes.OP_RETURN,
            // hardcoded magic number. 4 bytes
            Buffer.from('64617070', 'hex'),
            // txType. 1 byte
            Buffer.from(txType, 'hex'),
            // txVersion. 2 bytes
            Buffer.from(txVersion, 'hex'),
            // appType. 1 byte
            Buffer.from(appType, 'hex'),
            // name. 14 bytes
            Buffer.from(name, 'ascii'),
            // protocolSpec. 32 bytes
            Buffer.from(protocolSpec, 'hex'),
            // url. 12 bytes
            Buffer.from(url, 'ascii'),
            // meta data. 18 bytes
            Buffer.from(metaData, 'ascii')
        ];
        return BITBOX.Script.toASM(BITBOX.Script.encode(script));
    };
    DAppID.prototype.decodeBDIP2 = function (dappid) {
        var split = dappid.split(' ');
        return {
            magicNumber: split[1],
            txType: split[2],
            txVersion: split[3],
            appType: split[4],
            name: BITBOX.Script.decode(Buffer.from(split[5], 'hex')).toString('ascii'),
            protocolSpec: split[6],
            url: BITBOX.Script.decode(Buffer.from(split[7], 'hex')).toString('ascii'),
            metaData: BITBOX.Script.decode(Buffer.from(split[8], 'hex')).toString('ascii')
        };
    };
    return DAppID;
}());
exports.default = DAppID;
//# sourceMappingURL=dappid.js.map