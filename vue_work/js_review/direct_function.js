//함수 선언 후 실행해야함
function print(){
    console.log('즉시 실행');
}

//즉시 실행
(function print(msg){
    console.log(msg);
})('실행');
