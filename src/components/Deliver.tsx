import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";
import { useNavigate } from "react-router-dom";

export function Deliver() {
  const [loading, setLoading] = useState(false);

  const { userData, setUserData, cartItems } = useContext(DataContext);

  const [deliverMethod, setDeliverMethod] = useState(null);

  const productTotal = cartItems.reduce((total: number, item: any) => {
    return total + item.product.price * item.quantity;
  }, 0);

  const navigate = useNavigate();

  // Boton de confirmar
  useEffect(() => {
    if (deliverMethod !== null) {
      // Realizar operaciones después de que deliverMethod se actualice
      const localUserData = { ...userData, deliverMethod: deliverMethod };
      setUserData(localUserData);
      console.log(localUserData);
      navigate("/checkout/payment", {
        state: { productTotal: productTotal },
      });
    }
  }, [deliverMethod, navigate, setUserData, userData]);

  const handleButton = (method) => {
    setLoading(true);
    setDeliverMethod(method);
  };

  return (
    <div className="flex flex-col gap-[32px] align-center mt-[94px] p-[32px]">
      <h1 className="text-xl font-bold">Seleccionar metodo de entrega</h1>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            <h3 className="font-bold">Envio a domicilio (Rosario)</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>
              <p className="font-bold mb-2">
                Cadeteria de confianza. Dentro de las 24hs hábiles
              </p>

              {productTotal >= 50000 ? (
                <p className="text-xl mb-4">Gratis!</p>
              ) : (
                <p className="text-xl mb-4">$1800</p>
              )}

              <button
                onClick={() => handleButton("delivery")}
                className="bg-[#004080] rounded-sm hover:bg-[#005780] w-full h-[42px] text-white text-lg"
              >
                {loading && <RefreshIcon className="animate-spin" />}
                Seleccionar
              </button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            <h3 className="font-bold">Retiro pick up</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>
              <p className="font-bold mb-2">
                Retiro en españa 961 (Rosario zona centro)
              </p>
              <p className="text-xl mb-4">Gratis</p>
              <button
                onClick={() => handleButton("pickup")}
                className="bg-[#004080] rounded-sm hover:bg-[#005780] w-full h-[42px] text-white text-lg"
              >
                {loading && <RefreshIcon className="animate-spin" />}
                Seleccionar
              </button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
