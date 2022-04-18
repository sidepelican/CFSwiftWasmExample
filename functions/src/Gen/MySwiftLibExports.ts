type PartialSwiftRuntime = {
  callSwiftFunction(functionID: number, argument: any): any
}

export type MySwiftLibExports = {
  greeting: (name: string) => string,
};

export const bindMySwiftLib = (swift: PartialSwiftRuntime): MySwiftLibExports => {
  return {
    greeting: (name: string): string => swift.callSwiftFunction(0, {
      _0: name,
    }),
  };
};