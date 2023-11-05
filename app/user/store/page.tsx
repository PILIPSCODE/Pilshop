import Storeauth from '@/Feature/components/auth/storeauth'
import React from 'react'
import getUserC from "@/app/actions/getCurrentUser"

const page = async() => {
    const YourAcc = await getUserC()
  return (
    <div data-theme="dark">
        <Storeauth acc={YourAcc}/>
    </div>
  )
}

export default page