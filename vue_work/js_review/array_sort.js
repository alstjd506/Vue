/* array_sort.js*/

let frult = ['banana', '오렌지','망고','apple'];
//frult.sort( (a,b) => b.length - a.length);
frult.sort( (a,b) => {
    if(a>b) return -1;
    else if (a ==b) return 0;
    else return 1;
});

console.log(frult);

//객체 배열 정렬
let arrEmp = [
    {empName : 'scott' , dept : '개발', hireDate : '2019-11-01', score : 90 },
    {empName : 'hong' , dept : '기획', hireDate : '2018-11-01', score : 95 },
    {empName : 'choi' , dept : '인사', hireDate : '2017-11-01',score : 100 }
]
//이름순으로 비교
// arrEmp.sort( (a,b) => {
//     if(a.empName> b.empName) return 1;
//     else if (a.empName == b.empName) return 0;
//     else return -1;
// })

//성적순으로 비교
arrEmp.sort( (a,b) => {
    if(a.score> b.score) return -1;
    else if (a.score == b.score) return 0;
    else return 1;
})
console.log(arrEmp);

//필터
let result = arrEmp.filter( ele => ele.score >= 95);
console.log('성적이 95 이상',result);

//find
let findResult = arrEmp.find( ele => ele.score >= 95);
console.log('성적이 95 이상',findResult);

