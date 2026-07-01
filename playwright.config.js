// Import Playwright configuration helper
import { defineConfig } from '@playwright/test';

// Export configuration
export default defineConfig({

  // Folder where tests are located
  testDir: './tests',

  // Maximum time for each test (0 = unlimited)
  timeout: 30000,

  // Run tests sequentially (not parallel inside files)
  fullyParallel: true,

  // Prevent committing test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests
  // CI = 2 retries, Local = 0 retries
  retries: process.env.CI ? 2 : 0,

  // Number of parallel workers
  // 1 = single thread execution
  workers: 1,

  // Reporters configuration
  // list -> console output
  // html -> Playwright built-in HTML report
  // allure-playwright -> Allure report generation
  reporter: [
    ['list'],              // Shows step-by-step logs in terminal
    ['html'],              // Generates Playwright HTML report
    ['allure-playwright']  // Enables Allure reporting
  ],

  // Shared settings for all test projects
  use: {

    // Run browser in headed mode (UI visible)
    headless: false,

    // Set browser window size
    viewport: { width: 1366, height: 768 },

    // Collect trace only for failed tests
    // Useful for debugging failures
    trace: 'retain-on-failure',

    // Take screenshot only when test fails
    screenshot: 'only-on-failure',

    // Record video only for failed tests
    video: 'retain-on-failure',
  },

  // Define different browser environments
  projects: [
    {
      // Name shown in reports
      name: 'chromium',

      // Browser-specific settings
      use: {

        // Use Chromium browser (Chrome/Edge engine)
        browserName: 'chromium',

        // Browser launch options
        launchOptions: {

          // Slow down execution (in milliseconds)
          // Helps to visually see each step
          slowMo: 500,

          // Additional browser arguments
          args: [

            // Start browser maximized
            '--start-maximized',

            // Explicit window size
            '--window-size=1366,768'
          ]
        }
      },

      // Run only files ending with .spec.js
      testMatch: /.*\.spec\.js/,
    }
  ],
});
