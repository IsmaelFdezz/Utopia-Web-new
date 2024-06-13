import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../App";
interface ShoppingCartProps {
  onClose: () => void;
  handleRemoveProduct: (index: number) => void;
}

function ShoppingCart(props: ShoppingCartProps) {
  const { onClose, handleRemoveProduct } = props;

  const { cartItems } = useContext(DataContext);

  // Calcular el total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      if (item.product.salePrice) {
        return total + item.product.salePrice * item.quantity;
      } else {
        return total + item.product.price * item.quantity;
      }
    }, 0);
  };

  // Navegar hacia el checkout
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate("/checkout");
    onClose();
  };

  const formatCurrency = (number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(number);
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        onClick={onClose}
      ></div>
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      Carrito de compras
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={onClose}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200">
                        {cartItems.map((item, index) => (
                          <li key={index} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={item.image}
                                alt={item.product.name}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="/">{item.product.name}</a>
                                  </h3>
                                  <p className="ml-4">
                                    {item.product.salePrice
                                      ? formatCurrency(item.product.salePrice)
                                      : formatCurrency(item.product.price)}
                                  </p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  Talle: {item.size}
                                </p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">
                                  Cantidad: {item.quantity}
                                </p>
                                <div className="flex">
                                  <button
                                    onClick={() => handleRemoveProduct(index)}
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    Eliminar
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Total</p>
                    <p>{formatCurrency(calculateTotal())}</p>
                  </div>
                  <div className="mt-6 flex align-center justify-center">
                    <button
                      disabled={cartItems.length === 0}
                      onClick={handleCheckoutClick}
                      className="w-full flex items-center justify-center rounded-md border border-transparent bg-[#004080] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#005780]"
                    >
                      Finalizar compra
                    </button>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      <button
                        type="button"
                        onClick={onClose}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continuar Comprando
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
