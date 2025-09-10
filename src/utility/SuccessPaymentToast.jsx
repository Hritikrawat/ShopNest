import { toast, Bounce } from "react-toastify";



export default function SuccessPaymentToast() {
  console.log("Showing toast")
  toast.success("✅ Payment Successful", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    transition: Bounce,
  });
}
  // return (
  //   <ToastContainer
  //     position="top-center"
  //     autoClose={2000}
  //     hideProgressBar={false}
  //     newestOnTop={false}
  //     closeOnClick={false}
  //     rtl={false}
  //     pauseOnFocusLoss
  //     draggable
  //     pauseOnHover
  //     theme="dark"
  //     transition={Bounce}
  //   />
  // );

