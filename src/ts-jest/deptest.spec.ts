
import { DepTestClass, DepTestInterface } from './deptest-imports';
import { InterfaceFromInterfaceOnlyModule,DUMMY } from './deptest-interface';

export function MyDecorator():MethodDecorator {
	return <T>(target,propertyKey,descriptor:TypedPropertyDescriptor<T>) => {DUMMY;}
}

export interface DepTestInlineInterface {
	endpoint?:string, // endpoint used to fetch user data from
	userId?:number, // type defines 
	permissions?:string[],
}

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
	@MyDecorator()	static test7(state:any):InterfaceFromInterfaceOnlyModule {return state.tokenData||null}
}


describe('test', () => {
	it('should work', () => { expect(true).toBe(true) });
});
