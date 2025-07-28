import React from 'react'

export default function ProfileDropDown() {
  return (
    <div>
        <select defaultValue="Account" className='sm:w-6  cursor-pointer'>
           <option value="profile" >John</option>
            <option value="My account">My account</option>
            <option value="Setting">Setting</option>
            <option value="Track order">Track Order</option>
            <option value="Sign out">Sign out</option>
        </select>
    </div>
  )
}

