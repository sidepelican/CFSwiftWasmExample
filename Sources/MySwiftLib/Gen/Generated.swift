import Foundation



private struct greetingArguments: Decodable {
    var _0: String
}

private func makeFunctionList<T: WasmExports>(wasmExports: T.Type) -> [(Data) throws -> Data] {
    let decoder = JSONDecoder()
    let encoder = JSONEncoder()
    var ret: [(Data) throws -> Data] = []
    ret.append { (arg: Data) in
        let a = try decoder.decode(greetingArguments.self, from: arg)
        let b = T.greeting(
            name: a._0
        )
        return try encoder.encode(b)
    }
    return ret
}

extension WasmExports {
    static var functionList: [(Data) throws -> Data] {
        makeFunctionList(wasmExports: Self.self)
    }
}