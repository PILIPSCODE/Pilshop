import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

type filter={
    filter:any,
    setedit:React.Dispatch<React.SetStateAction<string>>
}
const EditFilter = (props:filter) => {
    const router = useRouter()
    const handleonblur = async(e:React.FocusEvent<HTMLInputElement, Element>) => {
        try {
            const res = await axios.put(`/api/product/addFilters/${props.filter.id}`,{tag:e.target.value})
            if(res.status === 200){
            props.setedit("")
            router.refresh()
            toast.success("Filter edited")
            }

        } catch (error) {
            props.setedit("")
            console.log(error)
        }
        
    }

  return (
    <div>
              <input  autoFocus defaultValue={props.filter.tag}  onBlur={(e) => handleonblur(e)}/>

    </div>
  )
}

export default EditFilter