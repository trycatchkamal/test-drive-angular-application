import { defineConfig } from 'cypress'

export default defineConfig({

  e2e: {
    'baseUrl': 'http://localhost:4200',
    supportFile: false,
    video:false,
    screenshotOnRunFailure:false,
    videoUploadOnPasses:false
  },


})
