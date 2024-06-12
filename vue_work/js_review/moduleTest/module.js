export let moduleB;
export const moduleA = 'hello!!!';

// 하나의 js파일 안에는 하나의 defaul만 가능
export default function moduleC(){
    console.log("moduleC 호출")
}

// export {moduleA, moduleB}