import * as functions from "firebase-functions";
import { WASI } from "@wasmer/wasi";
import { argv, env } from 'process';
import { SwiftRuntime } from "./Gen/SwiftRuntime";
import { bindMySwiftLib} from "./Gen/MySwiftLibExports";
import * as fs from "fs";
import * as path from "path";

const loadSwift = () => {
  const wasi = new WASI({
    args: argv,
    env,
  });
  const swift = new SwiftRuntime();
  const wasmPath = path.join(__dirname, 'Gen/MySwiftLib.wasm');
  const module = new WebAssembly.Module(fs.readFileSync(wasmPath));
  const instance = new WebAssembly.Instance(module, {
    ...wasi.getImports(module),
    ...swift.callableKitImports,
  });
  swift.setInstance(instance);
  wasi.start(instance);
  return bindMySwiftLib(swift);
};
const swift = loadSwift();

export const greeting = functions.https.onRequest(async (request, response) => {
  const name = request.query["name"] as string ?? "world";
  response.send(swift.greeting(name));
});
