import prisma from '@/app/libs/prismadb'


export default async function Getproductbyid (id:string){
    try {
        const products = await prisma.product.findFirst({
            where:{
                ProductName:id
            },
        })

        return products
    } catch (error) {
        return null
    }
}