import React, { ChangeEvent, useState, useRef, useContext } from "react";
import { ProductToAdd } from "./ProductPage";
import { useNavigate } from "react-router-dom";

import emailjs from "@emailjs/browser";
import { DataContext } from "../App";

function Checkout() {
  const { cartItems, userData, setUserData } = useContext(DataContext);

  const [localUserData, setLocalUserData] = useState(null);

  console.log(cartItems);

  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   // Obtener los datos del formulario del evento submit
  //   const formData = new FormData(e.target);
  //   const name = formData.get('name');
  //   const lastName = formData.get('lastName');
  //   const address = formData.get('address');
  //   const floor = formData.get('floor');
  //   const apartment = formData.get('apartment');
  //   const city = formData.get('city');
  //   const province = formData.get('province');
  //   const postalCode = formData.get('postalCode');
  //   const phone = formData.get('phone');
  //   const email = formData.get('email');
  //   const dni = formData.get('dni');
  //   const notes = formData.get('notes');

  //   setLocalUserData({
  //     name,
  //     lastName,
  //     address,
  //     floor,
  //     apartment,
  //     city,
  //     province,
  //     postalCode,
  //     phone,
  //     email,
  //     dni,
  //     notes,
  //   });

  //   const message = `
  //     Nombre: ${name}
  //     Apellido: ${lastName}
  //     Dirección: ${address}
  //     Piso: ${floor}
  //     Departamento: ${apartment}
  //     Localidad: ${city}
  //     Provincia: ${province}
  //     Código Postal: ${postalCode}
  //     Teléfono: ${phone}
  //     Correo Electrónico: ${email}
  //     DNI: ${dni}
  //     Notas: ${notes}

  //     Productos:
  //     ${cartItems.map(item => `Producto: ${item.product.name}, Precio: ${item.product.price}`).join('\n')}
  //   `;

  //   emailjs
  //     .sendForm('service_d347jw9', 'template_ny6uy71', form.current, {
  //       publicKey: 'WtiFUPtBL4KWWTS1s',
  //     })
  //     .then(
  //       () => {
  //         console.log('Correo electrónico enviado correctamente!');
  //         console.log(form.current)
  //         handleFinishClick()
  //         console.log(userData)
  //       },
  //       (error) => {
  //         console.error('Error al enviar el correo electrónico:', error);
  //         alert(error)
  //       }
  //     );
  // };

  // Navegar hacia el final
  const navigate = useNavigate();

  const handleFinishClick = (e) => {
    e.preventDefault();

    // Obtener los datos del formulario del evento submit
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const lastName = formData.get("lastName");
    const address = formData.get("address");
    const floor = formData.get("floor");
    const apartment = formData.get("apartment");
    const city = formData.get("city");
    const province = formData.get("province");
    const postalCode = formData.get("postalCode");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const dni = formData.get("dni");
    const notes = formData.get("notes");

    const message = `
      Nombre: ${name}
      Apellido: ${lastName}
      Dirección: ${address}
      Piso: ${floor}
      Departamento: ${apartment}
      Localidad: ${city}
      Provincia: ${province}
      Código Postal: ${postalCode}
      Teléfono: ${phone}
      Correo Electrónico: ${email}
      DNI: ${dni}
      Notas: ${notes}
      
      Productos:
      ${cartItems
        .map(
          (item) =>
            `${item.product.name}, Precio: ${item.product.price}, Cantidad: ${item.quantity}, Talle: ${item.size}`
        )
        .join("\n")}
    `;

    const localUserData = {
      name,
      lastName,
      address,
      floor,
      apartment,
      city,
      province,
      postalCode,
      phone,
      email,
      dni,
      notes,
      message,
    };

    setLocalUserData(localUserData);

    if (localUserData) {
      const userData = localUserData;

      setUserData(userData);

      console.log(userData);

      console.log(cartItems);
    } else {
      console.log("no data");
    }

    navigate("/checkout/payment");
  };

  return (
    <form
      ref={form}
      onSubmit={handleFinishClick}
      className="flex flex-col mt-[94px] p-[32px]"
    >
      <h1 className="text-2xl font-bold mb-4">Datos de contacto</h1>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Dirección de correo electronico
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="email"
          id="email"
          type="text"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nombre
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="name"
          id="name"
          type="text"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Apellidos
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="lastName"
          id="lastName"
          type="text"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Código postal
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="postalCode"
          id="postalCode"
          type="number"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Localidad
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="city"
          id="city"
          type="text"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Dirección
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="address"
          id="address"
          type="text"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {"Piso (Opcional)"}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="floor"
          id="floor"
          type="number"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {"Departamendo (Opcional)"}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="apartment"
          id="apartment"
          type="text"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          DNI o CUIL
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="dni"
          id="dni"
          type="number"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Notas
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="notes"
          id="notes"
        ></textarea>
      </div>

      <input
        type="hidden"
        name="productos"
        id="productos"
        value={JSON.stringify(cartItems)}
      />

      <button
        className="bg-[#004080] rounded-sm hover:bg-[#005780] w-full h-[42px] text-white text-lg"
        type="submit"
        value="Enviar"
      >
        Seleccionar medio de pago
      </button>
    </form>
  );
}

export default Checkout;
