const express = require('express');
const cookieParser = require('cookie-parser');
const boardRouter = require('./routes/board.js');
const customerRouter = require('./routes/customer.js');
const fileRouter = require('./routes/file.js');
const todoRouter = require('./routes/todo.js');
const app = express();
const port = 3000;
const cors = require('cors');
const morgan = require('morgan');

app.use(morgan(':date :method :url :status'));
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(express.json());


const requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next()
}
app.use(requestTime)
  
app.use("/file", fileRouter);
app.use("/board", boardRouter);
app.use("/customer", customerRouter);
app.use("/todo", todoRouter);

//method      path      handler
app.get(      "/",      (req,res) =>{
    console.log(req.cookies.modalYn);
    res.send('Hello World~~~!!')
})

app.get("/post", (req,res) =>{
    res.send('Hello World!')
})

// app.get("/a/", (req,res) =>{
//     res.send('a가 포함')
// })

app.get("/^insert/", (req,res) =>{
    res.send('insert로 시작하는')
})

const ex0 = function(req,res,next) {
    console.log('첫번째 콜백');
    next();
}
const ex1 = function(req,res,next) {
    console.log('두번째 콜백');
    next();
}
const ex2 = function(req,res,next) {
    res.send('세번째 콜백');
}
app.get('/examples', [ex0,ex1,ex2]);

app.listen(port, ()=>{
    console.log(`http://127.0.0.1:${port} 서버 실행`);
})