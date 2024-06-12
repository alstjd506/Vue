const template = /*html*/`
    <h1 v-if="score >= 90">A등급</h1>
    <h1 v-else-if="score >= 80">B등급</h1>
    <h1 v-else-if="score >= 70">C등급</h1>
    <h1 v-else>D등급</h1>
`

export default {
    template,
    data(){return{
        score : 90
    }},
    methods : {}
}