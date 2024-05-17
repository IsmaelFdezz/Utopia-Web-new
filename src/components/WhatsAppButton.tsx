import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function WhatsAppButton() {
  // Número de teléfono al que se redirigirá el chat de WhatsApp
  const phoneNumber = "+5493415553519";

  // Generar el enlace de WhatsApp
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-4 right-4 bg-green-400 rounded-full w-12 h-12 flex items-center justify-center !shadow-lg">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="text-white !text-4xl" />
      </a>
    </div>
  );
}

export default WhatsAppButton;
