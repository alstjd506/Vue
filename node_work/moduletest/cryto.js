//암호화
const { rejects } = require('assert');
const crypto = require('crypto');
const { resolve } = require('path');

const createSalt = ()=> {
    return new Promise((resolve, rejects) => {
        crypto.randomBytes(64, (err, buf) => {
            if(err) rejects(err);
            resolve(buf.toString('base64'));
        })
    });
}

const plainPassword = 'pw1234';
const createCryptoPassword = async(plainPassword) => {
    const salt = await createSalt();
    return new Promise((resolve,rejects) =>{
        crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
            if(err) rejects(err);
            resolve({password: key.toString("base64"),salt})
        })
    })
}

createCryptoPassword('pw1234')
.then(result => console.log(result))

const pw = crypto.createHash('sha512').update('pw1234').digest('base64');
// console.log(pw)