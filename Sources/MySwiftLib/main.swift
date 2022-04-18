import WasmCallableKit

struct Lib: WasmExports {
    static func greeting(name: String) -> String {
        "Hello, \(name) from Swift"
    }
}

WasmCallableKit.setFunctionList(Lib.functionList)
