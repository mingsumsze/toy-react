import { defineConfig } from 'vite'

// Command: dev/serve or build
// Load environment variable? process.env
// Async?
export default defineConfig(({ command, mode }) => {
  if (command === 'dev') {
    return {
      // dev specific config
    }
  } else {
    // command === 'build'
    return {
      // build specific config
    }
  }
})