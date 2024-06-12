/* array_map.js*/

let arr = [1,4,9,16]
let result = arr.map((x) => x*2);
console.log(result);

let userArr = [
    {userId : 1 , score : 60},
    {userId : 2 , score : 70},
    {userId : 3 , score : 80},
    {userId : 4 , score : 90},
];

let newArr = userArr.map(a => { if (a.score>=80) return {...a, grade: true};
                                else return {...a, grade: false};   
                        });
console.log(userArr);
console.log(newArr);
