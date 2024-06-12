/*
함수 매개변수에 rest 연산자 
*/

function total(num, ...arr) {
    let result = num;
    // 합계 계산
   
    // arr.forEach(ele => {
    //     result += ele;
    // });
    
    // for(n of arr) {
    //     result += n; 
    // }

    // for(let i=0; i< arr.length; i++){
    //     result += arr[i]
    // };

    // for ( idx in arr ) {
    //     result += arr[idx]
    // }

    //reduce
    result = arr.reduce( (acc, ele) => acc+ele , num)

    console.log('합계 =', result);
}

total(10)
total(10,20)
total(10,20,30)
