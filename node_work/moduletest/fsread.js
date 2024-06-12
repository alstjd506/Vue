const fs = require('fs');

//비동기
fs.readFile('./process.js','utf-8', (err,data)=>{
    if(err){
        throw err;
    }
    //console.log(data)
})
console.log("1, start")

//동기
let text = fs.readFileSync('./process.js','utf-8');
//console.log(text)

//파일출력
let data = '파일 쓰기 테스트'
fs.writeFile('./temp.txt', data, 'utf-8', (err)=>{
    if(err) console.log(err);
})
//동기식
data='파일 쓰기 테스트 동기식'
fs.writeFileSync('./temp2.txt', data, 'utf-8');
