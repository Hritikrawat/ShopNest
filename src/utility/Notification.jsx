import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Notification({ mess }) {
  useEffect(() => {
    if(mess.startsWith("Added")){toast.success(mess);}
    else {toast.info(mess)}
    
  }, [mess]);
  return (
    <>
      {/* <div className='fixed top-20 right-5 px-3 py-3 h-20 bg-amber-50 rounded-xl transition-all duration-300 ease-in-out'>  */}
      {/* {notify}s */}
      <ToastContainer autoClose="3000" />
    </>
  );
}
