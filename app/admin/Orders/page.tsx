import Orders from '@/Feature/components/Profile/Store/admin/Order/Orders'
import Order from '@/app/actions/transactions/Orders'
import getUserC from "@/app/actions/getCurrentUser"
import React from 'react'

const page = async() => {
  const Orderan = await Order()
  const YourAcc = await getUserC()


  const initialState = Orderan?.filter(el => el.OrderItems.some(el => el.UserStoreids === YourAcc?.usersStore?.id ))
 

  return (
    <div className='p-10'>
        <Orders intialState={initialState} userStoreids={YourAcc?.usersStore?.id}/>
    </div>
  )
}

export default page