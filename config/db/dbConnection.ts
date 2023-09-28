import { prisma } from "../prisma/prisma_client";

export const dbConnection = async() => {
    try {
        await prisma.$connect();
        console.log("Database connection established successfully.");
    } catch (error) {
        await prisma.$disconnect();
        console.log("Unable to establish a database connection. Please check your connection settings. ", error);
    }
}