import { prisma } from "../../prisma/prisma_client";

export const editTodoByStatus = async(status:string,id:number) => {
    // * STATUS = {pending, inProgress, done}
  const todo =   await prisma.todos.update({
        where: {
            id: id
        },
        data: {
            status: status,
                
        },
    });

return todo;
}