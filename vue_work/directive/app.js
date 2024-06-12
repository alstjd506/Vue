import headers from './header.js'
import footers from './footer.js'
import router  from "./router.js"

const {createApp} = Vue;
const template = /*html*/`
            <div> 
                <headers/>
                <RouterView/>
             </div>
` 
//vue 인스턴스 생성


const component = { 
    template, //필드명과 변수명이 같으면 생략 가능(template : template)
    name : "모듈연습", //생략가능
    components : {headers, footers},
    data(){ return { name: '홍길동', msg : '안녕하세요!!!!'} },
    methods : {},
    created(){},
    mounted(){},
    computed : {}

}

createApp(component)
.use(router)
.mount("#app");