const template = /*html*/`
<select class="form-control mb-3" v-model="selValue" @change="changeSelect">
    <option  value="">도시선택</option>
    <option  v-for="city in cities" v-bind:value="city.value">{{city.text}}</option>
</select>
<input @keyup.enter="doSometing" v-model="firstName">
<input @click.ctrl.alt.shift="doSometing" v-model="lastName">
<div>watch : {{fullName}}</div> 
<div>computed : {{computedFullName}}</div> 


`

export default {
    template,
    data(){return{
        selValue : '02',
        cities : [{value:'02', text:'서울'},
                {value:'21', text:'부산'},
                {value:'064', text:'제주'}],
        firstName : '진형',
        lastName : '김',
        fullName : ''
    }},
    computed : {
        computedFullName(){
            return this.firstName + '' + this.lastName
        }
    },
    watch : {
        firstName(){this.fullName = this.firstName + '' + this.lastName},
        lastName(){this.fullName = this.firstName + '' + this.lastName}
    },
    methods : {
        changeSelect(){
            const result = this.cities.find(ele => this.selValue == ele.value )
            alert(result.text)
        },
        doSometing(){
            alert('엔터누름')
        }
        

    }
}