import React from 'react'
import getSS  from "@/app/actions/getCurrentUser"
import Navbar from '@/Feature/components/ecommers/Landing/NavBar'
import Badge from '@/Feature/components/ecommers/Landing/Badge'





async function layout({children} : {children:React.ReactNode}) {
const session = await getSS()
  return (
    <div  data-theme="pastel" className="h-screen overflow-x-hidden">
      <Navbar session={session} />
      <Badge setProfile='Untuk Anda'/>
        {children}
    </div>
  )
}

export default layout