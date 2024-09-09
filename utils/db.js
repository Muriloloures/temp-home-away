import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

const globalForPrisma = globalThis

globalForPrisma.prisma = globalForPrisma.prisma || prismaClientSingleton()

const prisma = globalForPrisma.prisma

export default prisma

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
