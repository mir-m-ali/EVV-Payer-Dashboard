const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  //tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://evv-payer-dashboard.uat.4tellus.net/', //'https://www.google.com',
      browser: 'chrome',
      windowSize: 'maximize',
      desiredCapabilities: {
        acceptInsecureCerts: true,
        //excludeSwitches: ['enable-automation'],
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  gherkin: {
    features: './features/**/*.feature',
    steps: './steps/*.js'
  },
  name: 'evv-payer-dashboard',
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  }
}