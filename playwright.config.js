module.exports = {
    testDir: './tests', // Directory where your test files are located
    timeout: 30000, // Set global timeout for tests
    use: {
      baseURL: 'https://brella-react-git-temp-qa-form-brella.vercel.app/', // Base URL for your tests (can be overridden in tests)
      browserName: 'chromium', // Use Chromium by default (can be 'firefox' or 'webkit')
      trace: "retain-on-failure",
      video: "retain-on-failure",
      screenshot: "only-on-failure",
    },
    // Add other configurations if needed
    reporter: [
      ["line"],
      [
        "allure-playwright",
        {
          detail: true,
          outputFolder: "allure-results",
          suiteTitle: true,
          categories: [
            {
              name: "Outdated tests",
              messageRegex: ".*FileNotFound.*",
            },
          ],
          environmentInfo: {
            // Environment: ENV.ENV_NAME,
            // "Company Tested": ENV.COMPANY,
            // "Site Url": ENV.BASE_URL,
            // "Number of Runners": ENV.MAX_PARALLEL_THREADS,
            // "Timeout for Operations": ENV.TIMEOUT,
           },
         },
       ],
     ],
   
     outputDir: `artifacts/others/`, // Folder for test artifacts such as screenshots, videos, traces, etc.
   };