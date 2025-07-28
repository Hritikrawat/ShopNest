import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function Footer() {
  return (
    
    <div className='mt-4 px-4 py-2 flex flex-col  w-full h-auto bg-gradient-to-r bg-purple-500 text-white font-semibold'>
        
        <div className=''>
            <h5><CallIcon/>+01 782-342-324</h5>
            <h5><EmailIcon/> contactMail@ecom.in</h5>
            <InstagramIcon/> <XIcon/>  <FacebookIcon/> 
        </div>
        
        <div>
        <h3>Sec-63, Noida</h3>
        <h3>Uttar Pradesh, 201011 </h3>
        <h3>Near Electronic City Metero</h3>
        </div>
    </div>
  )
}
