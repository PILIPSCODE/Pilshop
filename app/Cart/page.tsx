import ProductinCart from "@/Feature/components/ecommers/Cart/ProductinCart"
import { FaCartPlus } from "react-icons/fa"
import GetCurrentUser from "../actions/getCurrentUser"
import orderIds from "../actions/transactions/orderidsgenerate"
const Cart = async() => {

  const User = await GetCurrentUser()
  const orderId= await orderIds()
  console.log(orderId)
  return (
    <div data-theme="cupcake" className="h-screen overflow-y-scroll  font-poppins " >
      <div className="max-lg:hidden absolute top-3 left-3 flex gap-2 items-center text-4xl bg-white p-2">
        <FaCartPlus/>
        <h1>Cart</h1>
      </div>
     <ProductinCart orderId={String(orderId?.id)} email={User?.email}/>
    </div>
  )
}

export default Cart