module.exports = {
    // todoList : 'select * from todos order by no desc limit ? , 10',
    todoList : 'select * from todos',
    todoGet : 'select * from todos where no = ?',
    todoInsert : "insert into todos set ?",
    todoUpdate : 'update todos set ? where no = ?',
    todoDelete : 'delete from todos where no = ?'
}