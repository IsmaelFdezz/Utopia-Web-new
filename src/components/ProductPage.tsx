/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";
import Carousel from "./Carousel";

import useEmblaCarousel from "embla-carousel-react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Images
import shirtImage from "../assets/white-shirt-floor-4-3.jpg";
import shirtImage2 from "../assets/foto web remera.jpeg";

import greyHoodieImage from "../assets/hoodie-grey.jpg";
import greyHoodieImage2 from "../assets/foto buzo girs.jpeg";

import whiteHoodieImage from "../assets/hoodie-white.jpg";
import whiteHoodieImage2 from "../assets/fotos web buzo blanco.jpeg";

import talles1 from "../assets/talles-1.jpg";
import talles2 from "../assets/talles-2.jpg";

import InputNumber from "./inputs/InputNumber";
import { Product } from "../App";
import Typography from "@mui/material/Typography";

export type ProductToAdd = {
  product: Product;
  quantity: number;
  size: string;
  image: string;
};

type AddToCartFunction = (productToAdd: ProductToAdd) => void;

function ProductPage({ addToCart }: { addToCart: AddToCartFunction }) {
  // Producto
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  // Talles
  const sizes = product.sizes || [];
  const [selectedSize, setSelectedSize] = useState("1");
  let sizeGuideImg: string;

  console.log(selectedSize);

  // Cantidad
  const [quantity, setQuantity] = useState(1);

  // Imagen
  let productImage: string;
  let productImage2: string;

  if (product.id === "1") {
    productImage = shirtImage;
    productImage2 = shirtImage2;
    sizeGuideImg = talles1;
    
  } else if (product.id === "2") {
    productImage = greyHoodieImage;
    productImage2 = greyHoodieImage2;
    sizeGuideImg = talles2;
  } else {
    productImage = whiteHoodieImage;
    productImage2 = whiteHoodieImage2;
    sizeGuideImg = talles2
  }

  // Agregar al carrito
  const handleAddToCart = () => {
    const productToAdd = {
      product,
      quantity,
      size: selectedSize,
      image: productImage,
    };
    console.log(productToAdd);
    addToCart(productToAdd);
  };

  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="flex flex-col gap-[32px] items-center mt-[94px] py-[8px]">
      <div className="flex flex-col justify-between lg:flex-row gap-[32px]">
        {/* Images in mobile */}
        <div className="embla max-w-[600px]" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide max-w-[600px]">
              <img src={productImage} alt={product.name} />
            </div>
            <div className="embla__slide max-w-[600px]">
              <img src={productImage2} alt={product.name} />
            </div>
          </div>
        </div>

        <section className="w-full px-[8px] flex flex-col gap-[24px]">
          <div>
            <h1 className="text-2xl">{product.name}</h1>
            <p className="text-2xl mt-2">${product.price}</p>
          </div>

          <div className="flex flex-col gap-[8px]">
            <p className="text-l">Talle</p>
            <div className="flex flex-row gap-[16px]">
              {sizes.map((size) => (
                <label key={size} className="flex items-center">
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={selectedSize === size}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="sr-only"
                  />
                  <div
                    className={`cursor-pointer border border-gray-200 w-[38px] h-[38px] flex items-center justify-center ${
                      selectedSize === size ? "bg-gray-50 !border-gray-500" : ""
                    }`}
                  >
                    {size}
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-row gap-[16px] items-center">
            <InputNumber value={quantity} onChange={setQuantity} />

            <button
              onClick={handleAddToCart}
              className="bg-[#004080] rounded-sm hover:bg-[#005780] w-full h-[42px] text-white text-lg"
            >
              Añadir al carrito
            </button>
          </div>

          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>Detalles</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {product.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>Guia de talles</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="flex justify-center">
                  <img style={{width: '200px'}} src={sizeGuideImg} alt="Guia de talles" />
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </section>
      </div>
      <Carousel></Carousel>
    </div>
  );
}

export default ProductPage;
