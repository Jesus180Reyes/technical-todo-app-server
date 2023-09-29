import { prisma } from "../../prisma/prisma_client";

export const findStatusById = async(id: number) => {

    const isTodoExists = await prisma.todos.findUnique({
        where: {
            id: id,
        },
        
    });
    return isTodoExists;

}