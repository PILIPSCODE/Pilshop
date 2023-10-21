import AddProduct from '@/Feature/components/Profile/Store/admin/AddProduct'
import React from 'react'
import UseCurr from '@/app/actions/getCurrentUser'

const page = async({params}:{params:{actions:string}}) => {
    const getuserCur = await UseCurr()
    if(params.actions === "addProduct"){

        return (
          <div className='flex justify-center'><AddProduct userCurrent={getuserCur?.usersStore}/></div>
        )
    }
}

export default page