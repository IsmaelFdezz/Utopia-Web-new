import { useContext } from "react";
import { DataContext } from "../App";
import { useLocation } from "react-router-dom";

function OrderRecieved() {
  const { cartItems } = useContext(DataContext);

  const location = useLocation();
    const orderNumber = location.state.orderNumber;

  // Calcular el total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  };

  return (
    <div className="mt-[94px] p-[32px]">
      <h1 className="font-bold text-xl mb-4">Pedido Confirmado</h1>
      <span>
        <p className="text-xl">Total:</p>
        <p className="font-bold mb-4 text-xl">${calculateTotal().toFixed(2)}</p>
      </span>

      <span>
        <p className="text-xl">Número de pedido:</p>
        <p className="font-bold mb-4 text-xl">#{orderNumber}</p>
      </span>

      <span>
        <p className="mb-4">
          Por favor realizar la transferencia del total a la siguiente
          dirección:
        </p>
        <p className="mb-2">
          <span className="font-bold">ALIAS </span>
          <br />
          utopia.stw
        </p>
        <p className="mb-2">
          <span className="font-bold">
            CUIT/CUIL
            <br />
          </span>
          27-22660889-9
        </p>
        <p className="mb-2">
          <span className="font-bold">
            CVU
            <br />
          </span>
          0070233330004038435662
        </p>
      </span>

      <p className="mt-4">
        Una vez realizada la transferencia, enviar el comprobante a nuestro
        instagram <span className="font-bold">@utopia.stw</span> indicando el
        numero de pedido para coordinar la entrega.
      </p>

      <p className="mt-4">Muchas gracias por tu compra!</p>
    </div>
  );
}

export default OrderRecieved;
