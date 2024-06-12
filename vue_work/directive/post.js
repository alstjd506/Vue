const template= /*html*/`
<div> 
    <input v-model="post.userId" >
    <input v-model="post.title">
    <input v-model="post.body">
    <button @click="addBtn">등록</button>
</div>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>body</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in posts">
                <td v-text="post.userId"></td>
                <td v-text="post.id"></td>
                <td v-text="post.title"></td>
                <td v-text="post.body"></td>
                <td><button @click="delBtn(post.id)">삭제</button></td>
            </tr>
        </tbody>
    </table>
`
const url = 'https://jsonplaceholder.typicode.com/posts';
export default {
    template,
    data(){
        return {posts:[], post:{} }
    },
    created(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => this.posts = json)
        axios.get(url)
        .then(json => {
            console.log(json)
            this.posts = json.data
        })
    },
    methods : {
        addBtn(){
            // alert(JSON.stringify(post));
            axios.post(url, this.post)
            .then(json => this.posts.push(json.data))
        },
        delBtn(id){
            axios.delete(`${url}/${id}`)
            .then(json => {
                let data = this.posts.filter(ele => ele.id != id)
                this.posts = data;
            })
        }
    }
}