const fs = require('fs');
const {spawn} = require('child_process');
const { exec } = require('child_process');

let args = process.argv;

let isRunOnBstack = args[2].split('=')[1] === 'bstack';

let configFile = isRunOnBstack ? 'codecept.conf.bstack.js' : 'codecept.conf.js';
let userArgPresent = !!args[3]?.startsWith('u');
let passArgPresent = !!args[4]?.startsWith('p');
let tagsArgPresent = !!args[5]?.startsWith('tag');
let bstackUserArgPresent = !!process.env.BROWSERSTACK_USERNAME || !!args[6]?.startsWith('bstack_user'); 
let bstackPasswordArgPresent = !!process.env.BROWSERSTACK_ACCESS_KEY || !!args[7]?.startsWith('bstack_pass');

if (!userArgPresent || !passArgPresent || !tagsArgPresent) {
    console.log(args, userArgPresent, passArgPresent, tagsArgPresent);
    console.log('Incorrect command usage. Exiting...');
    process.exit(-1);
}

if (isRunOnBstack && (!bstackUserArgPresent || !bstackPasswordArgPresent)) {
    console.log('BrowserStack username/password must be provided. Exiting...');
    process.exit(-1);
}

process.env.USERNAME = args[3].split('=')[1];
process.env.PASSWORD = args[4].split('=')[1];

if (isRunOnBstack) {
    if (!process.env.BROWSERSTACK_USERNAME)
        process.env.BROWSERSTACK_USERNAME = args[6].split('=')[1];
    
    if (!process.env.BROWSERSTACK_ACCESS_KEY)
        process.env.BROWSERSTACK_ACCESS_KEY = args[7].split('=')[1];
}

const tags = args[5].split('=')[1].replace(/"/, '');

let netstatCmd = 'netstat -ano | findstr :4444';
let taskkillCmd = 'taskkill /F /PID ';

// sometimes the process using port 4444 isn't killed after test completion - this takes of that
exec(netstatCmd, (err, stdout, stderr) => {
    if (err) {
        //console.log(`Error: ${err}`);
        console.log('port 4444 should be available to use.');
        return;
    }
    stdout = stdout.trim();    
    exec(taskkillCmd + stdout.split(' ').pop(), (err, stdout, stderr) => {
        console.log('port 4444 should be available to use.');
    });
});


const cmdArgs = ['codeceptjs', 'run', '--steps', '-c', configFile, '--grep', `${tags}`, '--plugins', 'allure'];
const testLauncher = spawn('npx.cmd', cmdArgs, {stdio: 'inherit'});


/* // the following three will be gone because of the stdio: 'inherit' option
testLauncher.stdout.on('data', data => process.stdout.write(data));
testLauncher.stderr.setEncoding('ascii');
testLauncher.stderr.on('data', data => process.stderr.write(data));
*/

//testLauncher.on('close', code => console.log(`Test run complete. Exit code ${code}`));