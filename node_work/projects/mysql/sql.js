const boardsql = require('./boardSql');
const todosql = require('./todoSql');
const customersql = require('./customerSql');


module.exports = {
    ...boardsql,
    ...todosql,
    ...customersql
}