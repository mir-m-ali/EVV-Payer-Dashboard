require('dotenv').config();

const BROWSERSTACK_USERNAME = process.env.BROWSERSTACK_USERNAME.replace(/"/g, '').replace('-jenkins', '');
const BROWSERSTACK_ACCESS_KEY = process.env.BROWSERSTACK_ACCESS_KEY.replace(/"/g, '');
const BROWSERSTACK_BUILD_NAME = process.env.BROWSERSTACK_BUILD_NAME ? process.env.BROWSERSTACK_BUILD_NAME.replace(/"/g, '') : 'evv-dashboard-build';

const BUILD_NAME = BROWSERSTACK_BUILD_NAME;

exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://evv-payer-dashboard.uat.4tellus.net/',
      user: BROWSERSTACK_USERNAME,
      key: BROWSERSTACK_ACCESS_KEY,
      //MicrosoftEdge//firefox//chrome
      browser: 'safari',   
      windowSize: 'maximize',
      //desiredCapabilities: {}
      
      desiredCapabilities: {
        acceptInsecureCerts: true,
        'bstack:options' : {
          "os" : "OS X",
          "osVersion" : "Monterey",
          "local" : "false",
          "seleniumVersion" : "3.14.0",          
          "buildName" : BROWSERSTACK_BUILD_NAME,
          }          
      }
    }
  },
  multiple: {
    bstack: {
        browsers: [
            {
                browser: "Safari",
                //Mentioned below are the capabilities based on JSON Wire Protocol
                desiredCapabilities: {
                    "os": "OS X",
                    "os_version": "Catalina",
                    "browser_version": "latest",
                    "project": "EVV Dashboard",
                    "build": BUILD_NAME,
                    "name": "Parallel Test Safari",
                    "browserstack.debug": "true",
                    'browserstack.networkLogs': 'true',
                },
                //For W3C-based scripts, use the following capabilties:
                /*
                desiredCapabilities: {
                 "bstack:options" : {
                   "os": "OS X",
                   "osVersion": "Catalina",
                   "projectName": "Codecept + WebdriverIO",
                   "buildName": "Parallel_Execution",
                   "sessionName": "Parallel Test Safari",
                   "debug" : "true",
                   "networkLogs" : "true",
                 },
                 "browserVersion": "latest",
                },
                */
            },

            {              
                browser: "Firefox",
                //Mentioned below are the capabilities based on JSON Wire Protocol
                desiredCapabilities: {
                    "os": "Windows",
                    "os_version": "10",
                    "browser_version": "latest",
                    "project": "EVV Dashboard",
                    "build": BUILD_NAME,
                    "name": "Parallel Test Firefox",
                    "browserstack.debug": "true",
                    'browserstack.networkLogs': 'true',
                },
                //For W3C-based scripts, use the following capabilties:
                /*
                desiredCapabilities: {
                 "bstack:options" : {
                   "os": "Windows",
                   "osVersion": "10",
                   "projectName": "Codecept + WebdriverIO",
                   "buildName": "Parallel_Execution",
                   "sessionName": "Parallel Test Firefox",
                   "debug" : "true",
                   "networkLogs" : "true",
                 },
                 "browserVersion": "latest",
                },
                */
            },
        ],
    },
},
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/**/*.feature',
    steps: './steps/*.js'
  },
  plugins: {
    autoLogin: {
      enabled: true,
      saveToFile: false,
     inject: 'loginAs',
      users: {
        Automation:{
          login: (I) => {
            I.logInWithEvvCredentials(
              process.env.AUTOMATION_ACCOUNT,
              secret(process.env.AUTOMATION_PASSWORD),
            );
          },
        },
        User:{
          login: (I) => {
            I.logInWithEvvCredentials(
              process.env.USER_ACCOUNT,
              secret(process.env.USER_PASSWORD),
            );
          },
        },
      },
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {},
    allure: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'TestRepoFirefox'
}
 