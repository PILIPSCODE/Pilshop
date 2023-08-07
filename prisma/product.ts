import { PrismaClient, product } from '@prisma/client'

const prisma = new PrismaClient()




export const AddProduct = async(products:product) => {
  
  const product = await prisma.product.create({
    data:{
      ProductName:String(products.ProductName),
      Price:Number(products.Price),
      img:String(products.img),
      Tag:String(products.Tag),
      stock:Number(products.stock),
      isChecked:Boolean(products.isChecked),
      Rate:5,
      Description:String(products.Description),
      users:{
        connect:{
          id:String(products.userIds)
        }
      }
    },
    })
    
    return product
  }
  
  export const GetProduct = async() => {
   const products = await prisma.product.findMany()
    return products
  }
export const DeleteProduct = async(id:string) => {
   const product = await prisma.product.delete({
    where: {
       id:id,
      },
   })
    return product
  }
  export const UpdateProduct = async (id:string,updtproduct:product) => {
    const update = await prisma.product.update({
      where:{
        id:id
      },
      data:{
        ProductName:String(updtproduct.ProductName),
        Price:Number(updtproduct.Price),
        Tag:String(updtproduct.Tag),
        stock:Number(updtproduct.stock),
        isChecked:Boolean(updtproduct.isChecked),
      }
    })
    return update
  }