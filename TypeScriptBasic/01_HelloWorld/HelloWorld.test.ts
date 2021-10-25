import HelloWorld from './HelloWorld';

test('[TypeScriptBasic/01_HelloWorld] Hello world!', () => {
  expect(typeof HelloWorld() === 'string').toBe(true);
});