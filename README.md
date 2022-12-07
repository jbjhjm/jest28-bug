Run `npm i`, then use these commands:

- `npm run ts-jest-without-nx` - expected to work fine
- `npm run ngdevkit-without-nx` - expected to error on `@MyDecorator()  static test7(state:any):InterfaceFromInterfaceOnlyModule`
- `npm run ts-jest-with-nx` - expected to work fine
- `npm run ngdevkit-with-nx` - expected to error on `@MyDecorator()  static test7(state:any):InterfaceFromInterfaceOnlyModule`
 
