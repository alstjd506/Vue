const template = /*html*/`
<div>
    userId<input v-model="todo.userId">
    title<input v-model="todo.title">
    completed<input type="checkbox" v-model="todo.completed">
    <button @click="addBtn">등록</button>
</div>
<div>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>completed</th>
                <th>삭제</th>
                <th>수정</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(todo, i) in todos" >
                <td v-text="todo.userId"></td>
                <td v-text="todo.id"></td>
                <td v-text="todo.title"></td>
                <td><input type="checkbox" v-model="todo.completed" :disabled="!isDisabled[i]"></td>
                <td><button @click="delBtn(todo.id)">삭제</button></td>
                <td>
                    <button v-if="!isDisabled[i]" @click="fEditBtn(i)">수정</button>
                    <button v-else @click="LEditBtn(i, todo)">수정완료</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
`
const url = 'https://jsonplaceholder.typicode.com/todos'
export default {
    template,
    data() {
        return {
            todos: [], 
            isDisabled: [],
            todo: { userId: '', title: '', completed: false }
        }
    },
    created() {
        axios(url)
            .then(result => {
                this.todos = result.data;
                this.todos.forEach(() => this.isDisabled.push(false));
            });
    },
    methods: {
        addBtn() {
            axios.post(url, this.todo)
                .then(result => {
                    this.todos.push(result.data);
                    this.todo = {
                        userId: '',
                        title: '',
                        completed: false
                    };
                    this.isDisabled.push(false);
                });
        },
        delBtn(id) {
            axios.delete(`${url}/${id}`)
                .then(result => {
                    this.todos = this.todos.filter(ele => ele.id != id);
                });
        },
        fEditBtn(i) {
            this.isDisabled[i] = !this.isDisabled[i];
        },
        LEditBtn(i, todo) {
            axios.put(`${url}/${todo.id}`, todo)
            .then(result => {
                this.todos[i] = result.data;
                this.isDisabled[i] = !this.isDisabled[i];
            })
        }
    }
}