Topics to cover
- Vite
- React
- HTML & CSS
- PNPM
- Styled component
- Javascript

Resource
- Vite official docs
- [Modern JS tutorial](https://javascript.info/)
- React official docs
- Styled component official docs

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

## React

- JSX expressions are compiled (by Babel or Typescript compiler. Both are transpilers that can also transpile ES6+ to older ES) into JS functions (`React.createElement()`) and evaluate to JS objects
- React element (an UI component) is immutable
- React component: a reusable unit. Either function or class
- ReactDOM: virtual DOM. React implements a diff-ing algorithm that calculuates the necessary updates needed to bring current DOM state to the new DOM state (reconciliation)
- Props (properties) are read-only
- States are local to the component only. But can be passed down to child as props (Top-down data flow)

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