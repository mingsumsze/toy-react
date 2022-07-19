import { defineConfig } from 'vite'

// Command: dev/serve or build
// Load environment variable? process.env
// Async?
export default defineConfig(({ command, mode }) => {
  // if (command === 'dev') {
  //   // dev specific config
  // } else {
  //   // command === 'build'
  //   return {
  //     // build specific config
  //   }
  // }
  return {
    // See how to work with CSS modules
    // https://github.com/madyankin/postcss-modules
    // https://www.youtube.com/watch?v=Sgcfiow4fVQ
    // css: {
    //   modules: {
    //     localsConvention: 'camelCase'
    //   }
    // }
  }
})