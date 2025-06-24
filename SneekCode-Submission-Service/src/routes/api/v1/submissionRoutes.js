async function todoRouter(fastify,options){
    fastify.get('/',()=>{
        return "todos";

    })
}
module.exports = todoRouter;