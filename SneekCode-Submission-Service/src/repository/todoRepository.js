const fp = require('fastify-plugin');


class TodoRepository {
    
    constructor(db){
        this.db = db;
    }
    
    async getAll(){
        return this.db.todos;
    }
    
    async create(todoText){
        const todoList = this.db.todos;
        this.db.todos.push({
            text :todoText,
            id : todoList.length
        })
        return this.db.todos;
    }

    async getOne(id){
        console.log(this.db.todos)
        return this.db.todos.find(todo=> todo.id == id);
    }
    async deleteOne(id){
        const index = this.db.todos.findIndex(todo => todo.id == id);
        if (index === -1) {
            throw new Error(`Todo with id ${id} not found`);
        }
        this.db.todos.splice(index, 1); // Remove the item at the found index
        return { message: `Todo with id ${id} has been deleted` };
    }
    
    async deleteAll(){
        this.db.todos = []; // Clear all todos
        return { message: "All todos have been deleted" };
    }

}

async function todoRepository(fastify,options){
    const { db } = fastify;
    const repo = new TodoRepository(db);
    fastify.decorate('todoRepository',repo);
}


module.exports = fp(todoRepository);