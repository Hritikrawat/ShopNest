import { toast, Bounce } from "react-toastify"; 

export default function FailedPaymentToast() {
  toast.error("Something went worng but payment was successfull", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
 
}
