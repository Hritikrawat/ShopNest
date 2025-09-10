import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { createOrder, updateOrder } from "./Url";
import Navbar from "./Navbar";
import CartContext, { useCart } from "../context/CartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import SuccessPaymentToast from "../utility/SuccessPaymentToast";
import FailedPaymentToast from "../utility/FailedPaymentToast";

export default function Cart() {
  const { item } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const { toggle, increaseQuantity, decreaseQuantity,clearCart } = useCart();

  const [totalAmount, settoalAmount] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    settoalAmount(
      item.reduce((amount, e) => amount + e.quantity * e.price, 0).toFixed(2)
    );
  }, [item]);

  const handleCreateOrder = async () => {
    const data = {
      amount: totalAmount,
      order_info: "",
    };

    try {
      const res = await createOrder(data);
      console.log(res.data);
      if (res.data.status === "created") {
        const options = {
          key: "rzp_test_R8p1AvFUr2L8b1",
          amount: res.data.amount,
          currency: res.data.currency,
          name: "ShawpStop",
          description: "Order Payment",
          order_id: res.data.id,
          image:
            "https://thumbs.dreamstime.com/b/business-letter-icon-lgoo-template-business-letter-icon-lgoo-template-124386672.jpg",

          handler: async function (response) {
            console.log("Updating Payment_Id ");
            const res = await updateOrder({
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              status: "paid",
              products: item.map((e) => ({
                id: e.id,
                title: e.title,
                quantity: e.quantity,
                price: e.price,
              })),
            });
            console.log("Payment Updated");
            if (res.data === "Payment Successfull") {
              SuccessPaymentToast();
              clearCart()
              setTimeout(() => {
                navigate("/Orders");
              }, 1500);
            } else FailedPaymentToast();
          },

          prefill: {
            name: "Ritik",
            email: "gaurav.kumar@example.com",
            contact: "",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };

        var rzp = new Razorpay(options);

        rzp.on("payment.failed", function (response) {
          console.log(response.error.code);
          console.log(response.error.description);
          alert("PaymentFailed");
        });

        rzp.open();
      }
    } catch (error) {
      console.log("something fata", error);
    }
  };

  return (
    <>
      <Navbar />

      {item.length === 0 ? (
        // Empty Cart Message
        <div className="flex flex-col items-center justify-center w-full h-[500px] text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty cart"
            className="w-28 h-28 mb-6 opacity-70"
          />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-6">
            Add some products to your cart to proceed with checkout.
          </p>
          <Button
            variant="contained"
            onClick={() => navigate("/home")}
            sx={{
              background: "#3399cc",
              color: "white",
              padding: "0.6rem 2rem",
              fontWeight: "bold",
              borderRadius: "0.75rem",
            }}
          >
            Continue Shopping
          </Button>
        </div>
      ) : (
        // Normal Cart Layout
        <div className="flex flex-col lg:flex-row w-full p-4 md:p-10 lg:p-20 gap-4">
          {/* Purchased Items */}
          <div className="w-full lg:w-2/3 space-y-2 h-[600px] overflow-y-auto pr-2">
            {/* Header Row */}
            <div className="px-6 py-3 w-full flex justify-between items-center font-semibold bg-gray-100 rounded-md">
              <div className="w-2/6">Product</div>
              <div className="w-2/6">Details</div>
              <div className="w-1/6 text-center">Quantity</div>
              <div className="w-1/6 text-right">Price</div>
            </div>

            {/* generating div for item  */}
            {item.map((e) => (
              <div
                className="flex flex-col sm:flex-row items-center justify-between h-38 px-4 mb-4 rounded-xl shadow-xl bg-amber-50 "
                key={e.id}
              >
                {/* Image */}
                <div className="flex-[1] ">
                  <img
                    src={e.thumbnail}
                    alt={e.title}
                    className="w-24 h-24 object-contain"
                  />
                </div>

                {/* details */}
                <div className="w-[40%] overflow-hidden line-clamp-4">
                  {e.title}
                  <br />
                  {e.tags?.[0] || " "}
                  <br />
                  {e.stock > 40 ? (
                    <span className="text-green-400 font-semibold">
                      In-stock
                    </span>
                  ) : (
                    <span className="text-red-400 font-semibold">
                      out-of-stock
                    </span>
                  )}
                </div>

                {/* Quantity */}
                <div className="flex items-center w-[20%]">
                  <div>
                    <button onClick={() => increaseQuantity(e.id)}>
                      <AddIcon />
                    </button>
                    {e.quantity}
                    <button onClick={() => decreaseQuantity(e.id)}>
                      <RemoveIcon />
                    </button>
                  </div>
                </div>

                {/* price */}
                <div className="w-[10%]">{e.price}</div>
              </div>
            ))}
          </div>

          {/* Billing */}
          <div className="w-full md:w-1/3 bg-gradient-to-r from-purple-500 to-indigo-700 opacity-90 text-white rounded-2xl shadow-xl p-10">
            {/* Left Section */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-lg md:text-xl font-semibold ">
                  Total Amount
                </h1>
                <p className="text-sm opacity-80">(Inclusive of all taxes)</p>
              </div>

              {/* Right Section */}
              <p className="text-2xl md:text-3xl font-bold">
                {totalAmount > 0 ? totalAmount : "-"}
              </p>
            </div>

            {totalAmount > 0 ? (
              <Button
                variant="contained"
                sx={{
                  marginTop: "1rem",
                  background: "white",
                  color: "black",
                  padding: "0.6rem 2rem",
                  width: "100%",
                  fontWeight: "bold",
                }}
                onClick={handleCreateOrder}
              >
                PAY
              </Button>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
