// swift-tools-version: 5.6

import PackageDescription

let package = Package(
    name: "MySwiftLib",
    dependencies: [
         .package(url: "https://github.com/sidepelican/WasmCallableKit.git", branch: "main"),
    ],
    targets: [
        .executableTarget(
            name: "MySwiftLib",
            dependencies: [
                "WasmCallableKit",
            ]
        ),
    ]
)
