import React, { useContext, useState } from "react";
import { DataContext } from "../App";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

function Payment() {
  const { cartItems, userData, setUserData } = useContext(DataContext);

  const [showButton, setShowButton] = useState(false);
  
  console.log(userData.message);

  // Calcular el total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  };

  // Generar numero de pedido
  const orderNumber = Math.floor(Math.random() * 9000) + 1000;

  const handleDeposit = () => {
    setShowButton(!showButton);
  };

  const navigate = useNavigate();

  const sendEmail = () => {

    const serviceId = "service_d347jw9";
    const templateId = "template_i1vgf2o";
    const publicKey = "WtiFUPtBL4KWWTS1s";

    const templateParams = {
      from_name: `Numero de pedido: ${orderNumber}`,
      message: userData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
        console.log("Email sent successfully", response.status, response.text);
      },
      (error) => {
        console.log("Error sending email", error);
      }
    );
  };

  const handleButton = () => {
    sendEmail();
    navigate("/checkout/order-recieved", { state: { orderNumber: orderNumber } });
  };

  return (
    <div className="flex flex-col gap-[32px] align-center mt-[94px] p-[32px]">
      <h1 className="text-xl font-bold">Seleccionar medio de pago</h1>

      <div
        onClick={handleDeposit}
        className="flex flex-col width-[800px] shadow-md p-2 cursor-pointer"
      >
        <h3 className="font-bold">Transferencia</h3>
        <p>Se proporcionaran los datos para realizar la transferencia. El pedido no se procesara hasta haber recibido el importe.</p>
      </div>

      {showButton && (
        <div>
          <p className="font-bold mb-2">
            Se realizara el pedido de los siguientes productos:
          </p>
          {cartItems.map((item) => (
            <p className="mb-4">
              <span>{item.product.name}</span>
              <br />
              <span>Precio: ${item.product.price}</span>
              <br />
              <span>Talle: {item.size}</span>
              <br />
              <span>Cantidad: {item.quantity}</span>
            </p>
          ))}
          <p className="text-xl">Total:</p>
          <p className="font-bold mb-4 text-xl">
            ${calculateTotal().toFixed(2)}
          </p>
          <button onClick={handleButton} className="bg-[#004080] rounded-sm hover:bg-[#005780] w-full h-[42px] text-white text-lg">
            Confirmar pedido
          </button>
        </div>
      )}
    </div>
  );
}

export default Payment;
