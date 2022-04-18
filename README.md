# SwiftWasm on Cloud Functions for Firebase

## Setup

- Install SwiftWasm
    - https://book.swiftwasm.org/getting-started/setup.html
- Install Firebase CLI
    - https://firebase.google.com/docs/cli

## Run

```
$ cd functions
$ npm install
$ npm run serve
```

## Codegen

Generate Swift <=> TypeScript bridging code using [WasmCallableKit](https://github.com/sidepelican/WasmCallableKit).

```
$ git clone https://github.com/sidepelican/WasmCallableKit.git
$ cd WasmCallableKit/Codegen
$ swift run Codegen <path to this repo>/Sources/MySwiftLib/WasmExports.swift --swift_out <path to this repo>/Sources/MySwiftLib/Gen --ts_out <path to this repo>/functions/src/Gen
```
