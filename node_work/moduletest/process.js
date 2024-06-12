// import process from 'process';
const process = require('process');
const os = require('os');

process.on('beforeExit', (code)=> {

    console.log('2. 종료 직전', code)
})

process.on('exit', (code)=> {
    console.log('3. 종료 될 때',code)
})

console.log('1. 첫번째 메시지');
console.log(process.env);
console.log('hostname', os.hostname());
console.log('type', os.type());
console.log('homedir', os.homedir());

//end
console.log('유저이름', process.env.USERNAME)