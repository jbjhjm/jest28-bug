## Update: Issue resolved!

Take a look at latest commit, with "jest-preset-angular": "12.2.4" and angular 15.1+ all test cases are passing fine again!

## Initial issue

Run `npm i`, then use these commands:

- `npm run ts-jest-without-nx` - expected to work fine
- `npm run ngdevkit-without-nx` - expected to error
- `npm run ts-jest-with-nx` - expected to work fine
- `npm run ngdevkit-with-nx` - expected to error
 
## Test Suite

Expected: `ReferenceError: deptest_interface_1 is not defined` 
on `@MyDecorator()  static test7(state:any):InterfaceFromInterfaceOnlyModule`

The testfile itself proves that 
- only when decorating a method with an interface
- and nothing else is being imported (+used) from there
... the error will appear.

```ts
class X {
	// All fine ->
	static noDecorator1(state:any):DepTestInterface {return state.tokenData||null}
	static noDecorator2(state:any):InterfaceFromInterfaceOnlyModule {return state.tokenData||null}
	@MyDecorator()	static test2(state:any):number {return state.tokenData?.userId||null}
	@MyDecorator()	static test3(state:any):DepTestInlineInterface {return state.tokenData||null}
	// from imported module, still fine! ->
	@MyDecorator()	static test4(state:any):DepTestClass {return state.tokenData||null}
	@MyDecorator()	static test5(state:any):DepTestInterface {return state.tokenData||null}
	// errors ->
	@MyDecorator()	static test6(state:any):InterfaceFromInterfaceOnlyModule {return state.tokenData||null}
}
```
