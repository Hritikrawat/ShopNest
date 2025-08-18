import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  return (
    <footer className="mt-6 px-8 py-6 w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start text-center md:text-left">

        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <CallIcon fontSize="small" /> +01 782-342-324
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <EmailIcon fontSize="small" /> contactMail@ecom.in
          </p>
        </div>

        {/* Social Media Section */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-4 text-white">
            <InstagramIcon className="cursor-pointer hover:text-pink-300 transition" />
            <XIcon className="cursor-pointer hover:text-gray-300 transition" />
            <FacebookIcon className="cursor-pointer hover:text-blue-300 transition" />
          </div>
        </div>

        {/* Address Section */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Our Office</h4>
          <p>Sec-63, Noida</p>
          <p>Uttar Pradesh, 201011</p>
          <p>Near Electronic City Metro</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-6 pt-4 text-sm text-center text-white/80">
        © {new Date().getFullYear()} Ecom.in — All Rights Reserved
      </div>
    </footer>
  );
}
