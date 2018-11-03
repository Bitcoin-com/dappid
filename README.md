# BDIP-2 Codec

[BITBOX](https://developer.bitcoin.com/bitbox) lib for encoding/decoding [BDIP-2](https://github.com/web3bch/BDIPs/blob/master/BDIPs/bdip-2.md#create-dapp)

## Installation

```bash
npm install dappid --save
```

## Usage

### Encode BDIP-2

```js
// require lib
let dappid = require('dappid')

// create instance
let d = new dappid()

// encode BDIP-2
d.encodeBDIP2(
  '00',
  '0000',
  '00',
  'BitcoinCashApp',
  '0eac357541b0ba572849113c5faa1d1990f6382741dc3e2f5507e3ca8346dc0e',
  'web3bch.cash',
  'Hello Bitcoin Cash'
)

// OP_RETURN 64617070 00 0000 00 426974636f696e43617368417070 0eac357541b0ba572849113c5faa1d1990f6382741dc3e2f5507e3ca8346dc0e 776562336263682e63617368 48656c6c6f20426974636f696e2043617368
```

### Decode BDIP-2

```js
d.decodeBDIP2(
  'OP_RETURN 64617070 00 0000 00 426974636f696e43617368417070 0eac357541b0ba572849113c5faa1d1990f6382741dc3e2f5507e3ca8346dc0e 776562336263682e63617368 48656c6c6f20426974636f696e2043617368'
)

// { magicNumber: '64617070',
//   txType: '00',
//   txVersion: '0000',
//   appType: '00',
//   name: 'itcoinCashApp',
//   protocolSpec: '0eac357541b0ba572849113c5faa1d1990f6382741dc3e2f5507e3ca8346dc0e',
//   url: '119,101,98,bch.cash',
//   metaData: 'ello Bitcoin Cash' }
```
