import React from 'react'
import { FaBell } from 'react-icons/fa'

const Notification = () => {
  return (
    <div>
        <div className="drawer drawer-end z-50">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button text-black"><FaBell size={25} /></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <h1 className='text-xl'>Notification</h1>
      
    </ul>
  </div>
</div>
    </div>
  )
}

export default Notification