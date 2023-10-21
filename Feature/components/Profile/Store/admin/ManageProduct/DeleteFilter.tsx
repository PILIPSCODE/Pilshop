import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-hot-toast'
import { FaTrash } from 'react-icons/fa'

const DeleteFilter = (props:{ filter:any}) => {
    const router = useRouter()
    const handleDelete = async() => {
        const res = await axios.delete(`/api/product/addFilters/${props.filter.id}`)
        if(res.status === 200){
            toast.success("Delete successfully")
            router.refresh()
        }
    }
  return (
    <div>
        <FaTrash onClick={handleDelete}/>
    </div>
  )
}

export default DeleteFilter