Topics to cover
- Vite
- React
- Formik
- HTML & CSS
- PNPM
- Styled component
- Javascript

Resource
- Vite official docs
- [Modern JS tutorial](https://javascript.info/)
- React official docs
- Styled component official docs
- [MDN Javscript Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

## Vite
Overview
- Use ES modules (ESM) for dev server
  - As oppose to the conventional approach of bundling on every change in source code / dependency
    - Slow even with hot module replacement (HMR)
  - Use route-based code splitting and serve source code over ESM (HMR is performed over native ESM)
  - Dependency pre-bundling with esbuild (to convert e.g. CommonJS to ESM & for performance benefits)
    - Stored in `node_modules/.vite`
    - Cache dependency module network requests to further improve performance (cache common subdependencies)
- Use rollup to bundle for production
  - Native ESM is inefficient for production due to addition network round trips caused by nested imports
  - Tree-shaking + lazy-loading + common chunk splitting (for better caching)
- Inspired by snowpack (native ESM)
- Extends rollup plugin API. See [Awesome Rollup](https://github.com/rollup/awesome) & [Awesome Vite](https://github.com/vitejs/awesome-vite)

Features
- Multi-page support ootb
- NPM dependency resolving ootb. Support of bare module import e.g. `import 'dep'` instead of `import './dep'` (relative to `node_modules`)
- Typescript support ootb (use esbuild to transpile. No type checking)
- JSX, TSX support ootb (use esbuild to transpile)
- CSS import inside JS files: inject `<style>` tag with HMR support
- CSS modules support ootb
- PostCSS support ootb
- JSON support ootb (direct import & parsing & named import)
- Web assembly support ootb (direct import & initiate wasm instances)
- Web worker support ootb (direct import & initiate workers)

Build optimisations
- CSS code-splitting: only load required CSS
- Async chunk loading optimisation: fetch subdependencies with the dependency itself in parallel regardless of import depth to eliminate network round trips
- See also: rollup

## PNPM
- With NPM or Yarn, subdependencies are not shared. Multiple copies of common subdependencies are stored
- Non-flat `node_modules` directory

## Javascript
- Specification: ECMAScript
- Javascript engine / virtual machine / compiler e.g. V8 (chrome), SpiderMonkey (firefox) - implements ECMAScript ; compile JS into machine code on the fly
- Javascript runtime / environment e.g. node (which uses V8)
- Node: V8 with modules for supporting reading/writing files, network requests, etc
- In-browser: whatever engine + HTML dom, CSS, events, network requests, cookies, local storage
- Same origin policy (only present in in-browser JS env): to protect user's safety: JS from one page may not access another page from a different domain (the one serving the current page), protocol or port (the same computer). Both pages must agree for data exchange (by containing some JS code)
- `"use strict";`: abandon backward compatibility to older JS and enable use of newer language features
  - Advance language features such as OOP with disable strict mode automatically

### Load JS (Browser)
- With `<script type="text/javascript" src="./script.js">` tag
  - `type=text/javascript` is by-default
- External script file is more efficient: enable script to be cached by the CDN

### Variable Declaration
- `let` & `const`: good practice
- `var`: no block scope (either function or global scope, ignore e.g. if scope). Tolerate re-declaration. Declaration is hoisted to the top of function (but not assignment).

```javascript
function myfunc() {
  console.log(a);
  var a = "hello";
}
// is same as
function myfunc() {
  var a;
  console.log(a);
  a = "hello";
}
```

### Global Object
- For node: `global`
- For browser: `window`
- `globalThis` as standardised name for global obj
- In browser env, `var` and `function` declaration (not function expression) become property of global env
- Use for polyfills to test if certain language feature exists

```javascript
if (!window.Promise) {
  // ...
}
```

#### Browser Built-in
- Modal (blocking) interaction (block JS script until return): `alert`, `confirm` (yes or no), `prompt` (ask for user input). Appearance of the modal window determined by browser

```js
let a = prompt('some text', 10);
alert(a);

let b = confirm('some text', 10);
alert(b);
```

### Types
- `object` (all others are non-primitives)
- `null`
- `undefined`
- `number`
- `bigint`
- `boolean`
- `string`
- symbol (for object property key)
- Check type using `typeof` operator
- Primitive types have object wrapper to provide extra properties such as `.length` and `.toUpperCase()` for `string` (obj wrapper is created and the property is invoked and the obj is discarded immediately afterwards)

#### Casting
- Wrap with primitive object e.g. `Number()`, `Boolean()` and `String()`
- Number conversion: `undefined` -> `NaN`, `null` -> `0`, `true` -> `1`, `false` -> `0`
- Boolean conversion: `""`, `null`, `undefined`, `0` -> `false` (note that `"0"` is `true`)
- All types except symbol are implicitly converted to string when: `console.log()`, `alert()`, or `obj[val]`, etc

### Lexical Environment
- Every scope has its own lexical environment, which stores all local variables (as properties of a special internal obj - environment record), `this`, and ref to outer lexical env
- Hoisting: `var` and `function` declarations are initialised before the execution reaches that line
- Closure: outer lexical environment is always "remembered" and therefore behave like static variables
  - All functions in JS are closures
- Lexical environments are garbage collected (like objects) when they become unreachable

### Operator & Destructuring Assignment
- All operators return a value, including `=` (assignment)
- `,` operator can be used to chain statements
- Strict equality operator `===`, `!==` that return `false` if types are different
- Nullish coalescing `??`
- Optional chaining
  - With object property `?.`: return `undefined` when the predecessor is `undefined`/`null`
  - With object property (expr) `?.[]`
  - With object method `?.()`
- Rest operator `...`
- Spread operator `...`: for getting an iterable into a list of parameters (spreading the iterable)
- Destructuring assignment: similar to C++'s structural binding
  - Can be nested

```javascript
let result = (a !== null && a !== undefined) ? a : b
// same as
let result.= a ?? b
```

```js
// Instead of:
user.address && user.address.street && user.address.street.name;

// Do:
user?.address?.street;
delete user?.address?.street;

user.somefunc?.();  // no error even if somefunc doesn't exist
```

```js
/* Array destructuring */
let [var1="default value", var2=somefunc(), ...rest] = myarr;
// somefunc() is evaluated only if var2 is not provided inside myarr

/* Object destructuring */
let {prop1="default value", prop2:var2 = somefunc(), prop3:var3, ...rest} = myobj;
// assign prop2 and prop3 new names
```

### Loop
- `for...of`: for iterating iterable
- `for...in`: for iterating object properties key (`Object.keys()` behind the scene)
- `for`
- `while`
- `do...while`
- label, `continue` and `break`

```js
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 2) break outer;
  }
}
```

### Switch
- Equality check is strict (type must match)

```js
switch (arg) {
  case '0':
  case '1':
    // ...
    break;
  case '2':
    // ...
    break;
  default:
    // ...
}
```

### Object and OOP
- Key-value pair
- Delete property using `delete obj.property1`
- Dot access `obj.` vs square bracket access `obj[]` - allow expression
- Computed property `[someexpr]: val` vs `somestr: val`
- Check property existence using `property in obj`
- Clone object using `Object.assign`, spread syntax `newobj = {...obj}` or `for...in` to copy over all properties
- Value of `this` is the object “before dot”, the one used to call the method
  - Calling without an object: `this === undefined`
  - In other programming lang `this` is always bound to the obj, whereas in JS `this` is free and is runtime evaluated
  - Arrow function (method) has no `this` (uses `this` from the outer scope)
  - To allow method chaining, return `this` in the methods
- Object key might either be of primitive type string or symbol
- `Object.keys()`, `Object.values()`, `Object.entries()`: return array (or 2D array)
- `obj.keys()`, `obj.values()`, `obj.entries()`: return iterable
- Data structures: array, map, set, weakmap, weakset, etc

```javascript
let entity = {
  field1: "",
  [computed_property]: "",
  method1() {
    // ...
  },
  method2: function() {
    // ...
  },

  method3: () => {
    // ...
    // "this" is undefined
  }
}
```

#### Property Flags & Descriptors

#### Garbage Collection
- Unreachable objects are automatically garbage collected
- Set usused obj ref to `null`
- By the mark-and-sweep algorithm (mark the root and visit all reachable ref from there and mark them and so on)

#### Constructor Function & `new`
When `new` is called on a constructor function:
1. A new empty object `{}` is created and assigned to `this`.
2. The function body executes and add new properties to `this` (`{}`).
3. Return `this`

- Purpose of constructor: reusable object creation code

```js
function User(name) {
   // this = {};  (implicitly)

   // Optional: detect if function is called in constructor mode
   // If not, re-call the function with "new"
   if (!new.target) { // if function is ran without "new"
    return new User(name);
  }

  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
  // Can optionally return another object instead of "this"
  // Returning primitive or nothing (return;) will be returning "this" instead
  return {};
}

let user = new User("Jack");
let user = User("Jack");  // also work

// Option2: create a function and immediately call it with new
let user = new function() {
  this.name = "John";
  this.isAdmin = false;
};
```

#### Symbol Type
- A unique identifier. Symbols are always unique
- Use symbol as object key to prevent accidental override of existing properties, or to define hidden properties on the object (symbols are skipped in `for...in` loop)
  - `Object.assign()` will copy over the symbol properties however
- Symbol doesn't auto convert to string. Use `id.toString()` to explicitly cast
- `id.description` to return the description string
- Use global symbol registry for symbol reuse
- System symbols: use by JS internally for defining various object methods, which are accessible with `Symbol.*`. Examples:
  - `Symbol.hasInstance`
  - `Symbol.iterator` for iterable
  - `Symbol.toPrimitive` for obj -> primitive conversion (implicit when an obj is passed to an operator such as `+` or `>` or `alert()` or `console.log()`)

```js
let id = Symbol("some description");
```

```js
// Read from the global symbol registry (like a key-value pair for symbols)
let id = Symbol.for("id"); // if the symbol did not exist, create the symbol

// Read again
let idAgain = Symbol.for("id");

alert( id === idAgain ); // true
```

##### Object Type Conversion
Procedure:
- Call `obj[Symbol.toPrimitive](hint)`, if exist
- Otherwise if hint is `"string"`: try calling `obj.toString()` then `obj.valueOf()`
- Otherwise if hint is `"number"` or `"default"`: try calling `obj.valueOf()` then `obj.toString()`

```js
let user = {
  [Symbol.toPrimitive](hint) {
    // Must return a primitive value
    // hint = either "string", "number" or "default"
  }

  /* In case the above is not supplied */

   // for hint="string"
  toString() {  // default implementation return "[object Object]"
    // ...
  },

  // for hint="number" or "default"
  valueOf() {. // default implementation return the obj itself
    // ...
  }
};
```

### Function
- Function is an object. Properties are associate with an obj e.g. `myfunc.name`
- Function properties can be used to create `static` variables (to replace closures)
- Named function expression: e.g. `let func_a = function func_b() {}`. Function is `func_b` internally but `func_a` externally
- `Function`: the function factory object e.g. `let myfunc = new Function('a', 'b', 'return a+b');`
  - Function is created at runtime instead by parsing a string
- Function declaration: hoisted
- Arrow function `(arg1, arg2) => {}`
  - Arrow function (method) has no `this`

```javascript
// Instead of storing in its outer lexical environment (closure)
// Difference: only nested functions can access the property
function makeCounter() {
  // let count = 0
  counter.count = 0;

  function counter() {
    // return count++;
    return counter.count++;
  };
  return counter;
}

let counter = makeCounter();
alert( counter() ); // 0
alert( counter() ); // 1
```

### JSDoc
- [JSDoc](https://en.wikipedia.org/wiki/JSDoc)

```js
/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
function pow(x, n) {
  ...
}
```

### JSON
- `JSON.stringify` to convert objects to JSON (serialisation)
- `JSON.parse` to convert JSON to object (de-serialisation)
- Data types:
  - Objects `{ ... }`
  - Arrays `[ ... ]`
  - Primitives:
    - strings,
    - numbers,
    - true/false
    - null
  - Symbol properties, methods, properties with `undefined` are not serialised

## React
- JSX expressions are compiled (by Babel or Typescript compiler. Both are transpilers that can also transpile ES6+ to older ES) into JS functions (`React.createElement()`) and evaluate to JS objects
- React element (an UI component) is immutable
- React component: a reusable unit. Either function or class
- ReactDOM: virtual DOM. React implements a diff-ing algorithm that calculuates the necessary updates needed to bring current DOM state to the new DOM state (reconciliation)
- Props (properties) are read-only
- States are local to the component only. But can be passed down to child as props (Top-down data flow)
- Controlled component: making React state the single source of truth (over HTML form elements e.g. `<input>`)
- Composition (specialise component using props) is recommended over inheritance (of class component)

Pseudo react element
```jsx
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```