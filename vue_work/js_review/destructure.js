/*
destructure.js
객체 구조 분해
*/
//객체 구조분해
let emp = {empName : 'scott' , dept : '개발', hireDate : '2019-11-01' }
// let empName = emp.empName;
let {empName, dept} = emp
console.log(empName, dept);

//객체 복사
let emp1 = {...emp}; //필드 추가 가능
emp.empName ='kim';
console.log(emp1.empName, emp.empName);


//배열 구조분해
let arr = ['a', 'b', 'c']
let [first, second] = arr;
console.log(first, second) 