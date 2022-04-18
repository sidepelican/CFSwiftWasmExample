import Foundation

protocol WasmExports {
    static func greeting(name: String) -> String
}
