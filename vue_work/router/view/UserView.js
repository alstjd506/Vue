const template = /*html*/`
    <div>
    <h1> User 페이지 </h1>
    <div>props : {{id}} </div>
    <div>param : {{this.$route.params.id}}</div>
    <div>queryId : {{this.$route.query.id}}</div>
    <div>queryUserName : {{this.$route.query.username}}</div>
    <RouterView/>
    </div>
`

export default {
    template,
    props : {
        id : String
    }
}