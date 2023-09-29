import { prisma } from "../../prisma/prisma_client";

export const findUserById = async(id: number) => {

    const user = await prisma.users.findUnique({where: {id: Number(id)},
        select: {
            id: true,
            nombre: true,
            email: true,
            todosCompleted: true,
            state: true,
            createdAt: true,
        
    }});

    return user;

}