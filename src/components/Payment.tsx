import React, { useContext, useState } from "react";
import { DataContext } from "../App";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import RefreshIcon from '@mui/icons-material/Refresh';

function Payment() {
  initMercadoPago("TEST-138cd46e-a93c-42ac-80b5-1330161e947b", {
    locale: "es-AR",
  });

  const { cartItems, userData } = useContext(DataContext);

  const [loading, setLoading] = useState(false);

  const [showButton, setShowButton] = useState(null);

  const [preferenceId, setPreferenceId] = useState(null);

  console.log(userData.message);

  // Calcular el total
  const calculateTotal = () => {
    return cartItems.reduce((total: number, item: any) => {
      return total + item.product.price * item.quantity;
    }, 0);
  };

  // Generar numero de pedido
  const orderNumber = Math.floor(Math.random() * 9000) + 1000;

  const handlePayment = (method: string) => {
    if (showButton === method) {
      setShowButton(null);
    } else {
      setShowButton(method);
    }
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

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        setLoading(false);
        console.log("Email sent successfully", response.status, response.text);
      },
      (error) => {
        console.log("Error sending email", error);
      }
    );
  };

  const handleButton = (method: string) => {
    setLoading(true);
    if (method === "deposit") {
      sendEmail();
      navigate("/checkout/order-recieved", {
        state: { orderNumber: orderNumber },
      });
    } else if (method === "mercadopago") {
      handleMp();
    }
  };

  const createPreference = async () => {
    try {
      const idempotencyKey = uuidv4();
      console.log(idempotencyKey);

      const response = await axios.post(
        "https://utopia-web-server.onrender.com/create_preference",
        {
          title: "Utopia Stw.",
          quantity: 1,
          unit_price: calculateTotal(),
        },
        {
          headers: {
            "X-Idempotency-Key": idempotencyKey,
          },
        }
      );

      const { id } = response.data;
      sendEmail();
      setLoading(false);
      return id;
    } catch (error) {
      console.error(error);
    }
  };

  const handleMp = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <div className="flex flex-col gap-[32px] align-center mt-[94px] p-[32px]">
      <h1 className="text-xl font-bold">Seleccionar medio de pago</h1>

      {/* Transferencia */}
      <div
        onClick={() => handlePayment("deposit")}
        className="flex flex-col width-[800px] shadow-md p-2 cursor-pointer"
      >
        <h3 className="font-bold">Transferencia</h3>
        <p>
          Se proporcionaran los datos para realizar la transferencia. El pedido
          no se procesara hasta haber recibido el importe.
        </p>
      </div>

      {showButton === "deposit" && (
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
          <button
            onClick={() => handleButton("deposit")}
            className="bg-[#004080] rounded-sm hover:bg-[#005780] w-full h-[42px] text-white text-lg"
          >
            {loading && (
              <RefreshIcon className="animate-spin"/>
            )}
            Confirmar pedido
          </button>
        </div>
      )}

      {/* Mercado Pago */}
      {/* <div
        onClick={() => handlePayment("mercadopago")}
        className="flex flex-col width-[800px] shadow-md p-2 cursor-pointer"
      >
        <h3 className="font-bold">Mercado Pago</h3>
        <p>
          Al clickear en el boton "Confirmar pedido" se abrirá un link de pago
          en el que te permitira abonar con tarjetas de credito, debito,
          efectivo o dinero en cuenta.
        </p>
      </div> */}

      {showButton === "mercadopago" && (
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
          <button
            onClick={() => handleButton("mercadopago")}
            className="flex justify-center items-center bg-[#004080] rounded-sm hover:bg-[#005780] w-full h-[42px] text-white text-lg"
          >
            {loading && (
              <RefreshIcon className="animate-spin"/>
            )}
            Confirmar pedido
          </button>
          {preferenceId && (
            <Wallet
              initialization={{ preferenceId: preferenceId }}
              customization={{ texts: { valueProp: "smart_option" } }}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Payment;
