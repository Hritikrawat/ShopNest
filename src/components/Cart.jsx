import React, { useContext, useEffect, useState } from "react";
import { createOrder } from "./Url";
import Navbar from "./Navbar";
import CartContext, { useCart } from "../context/CartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import { Fade } from "@mui/material";

export default function Cart() {
  const { item } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const { toggle, increaseQuantity, decreaseQuantity } = useCart();

  const [totalAmount, settoalAmount] = useState();

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

      //Need to learn to load scopt of razor pay and then initiate teh transaction
      const res = await createOrder(data);
      console.log(res.data);
      if (res.data.status === "created") {
        const options = {
          key: "rzp_test_R8p1AvFUr2L8b1",
          amount: res.amount, // in paise
          currency: res.currency,
          name: "Your Company",
          description: "Order Payment",
          order_id: res.orderId, // use the returned orderId
          handler: async function (response) {
            // 3. Send payment details to backend for verification
            await axios.post("/payment/verify", response);
            alert("Payment Successful!");
          },
          prefill: {
            name: "Customer Name",
            email: "customer@example.com",
            contact: "9999999999",
          },
          theme: {
            color: "#3399cc",
          },
        };

        // 4. Open Razorpay checkout
        const rzp = new window.Razorpay(options);
        rzp.open();
      }
    } catch (error) {
      console.log("something fata", error);
    }
  };

  // const [totalAmount,settoalAmount]= useState();
  return (
    <>
      <Navbar />

      <div className="flex flex-col lg:flex-row w-full p-4 md:p-10 lg:p-20 gap-4">
        {/* Purchased Items */}
        <div className="w-full lg:w-2/3  space-y-2 h-[600px] overflow-y-auto pr-2">
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
              className="flex  flex-col sm:flex-row items-center justify-between h-38 px-4 mb-4 rounded-xl shadow-xl bg-amber-50 "
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
                  <span className="text-green-400 font-semibold">In-stock</span>
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

        {/* Billing  */}
        <div className=" w-full md:w-1/3 bg-gradient-to-r from-purple-500 to-indigo-700 opacity-90 text-white rounded-2xl shadow-xl p-10">
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

      {/* <UnderConstruction/> */}
    </>
  );
}
