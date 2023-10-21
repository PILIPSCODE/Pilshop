import React, { SetStateAction } from 'react'
type filterowner = {
    setfilterOwner:React.Dispatch<SetStateAction<string>>,
    filterStore:any
}
const FilterOwner = (props:filterowner) => {
  return (
    <div className={`w-11/12 mt-2 flex gap-2 ${props.filterStore.ownerTags.length === 0?"hidden" : ""}`} data-theme="wireframe">
        {
            props.filterStore.ownerTags.map((e:any,index:any) => (

                <button key={index} onClick={() => props.setfilterOwner(e.tag)} className='btn p-3'>{e.tag}</button>
            ))
        }
         <button  onClick={() => props.setfilterOwner("")} className='btn p-3'>reset</button>
    </div>
  )
}

export default FilterOwner