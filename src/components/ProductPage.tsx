/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";

import shirtImage from "../assets/white-shirt-floor-4-3.jpg";
import greyHoodieImage from "../assets/hoodie-grey.jpg";
import whiteHoodieImage from "../assets/hoodie-white.jpg";

import InputNumber from "./inputs/InputNumber";
import { Product } from "../App";

export type ProductToAdd = {
  product: Product,
  quantity: number,
  size: string,
  image: string
}

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

  console.log(selectedSize)
  
  // Cantidad
  const [quantity, setQuantity] = useState(1);

  // Imagen
  let productImage: string;
  if (product.id === "1") {
    productImage = shirtImage;
  } else if (product.id === "2") {
    productImage = greyHoodieImage;
  } else {
    productImage = whiteHoodieImage;
  }

  // Agregar al carrito
  const handleAddToCart = () => {
    const productToAdd = {
      product,
      quantity,
      size: selectedSize,
      image: productImage
    };
    console.log(productToAdd);
    addToCart(productToAdd);
  };

  return (
    <div className="flex flex-col gap-[32px] items-center container mt-[94px] p-[8px]">
      <div className="flex flex-col justify-between lg:flex-row gap-[32px] lg:ml-[130px]">
        <img src={productImage} alt={product.name} className="lg:w-[600px]" />

        <section className="w-full flex flex-col gap-[32px]">
          <div>
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold">${product.price}</p>
          </div>

          <div className="flex flex-col gap-[8px]">
            <p>Talle</p>
            <div className="flex flex-row gap-[16px]">
              { sizes.map((size) => (
                <label key={size} className="flex items-center">
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={selectedSize === size}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`cursor-pointer border border-gray-200 w-[40px] h-[40px] flex items-center justify-center ${selectedSize === size ? 'bg-gray-50 !border-black' : ''}`}>
                    {size}
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-row gap-[16px] items-center">
            <InputNumber value={quantity} onChange={setQuantity}/>

            <button
              onClick={handleAddToCart}
              className="bg-[#004080] rounded-sm hover:bg-[#005780] w-full h-[42px] text-white text-lg"
            >
              Añadir al carrito
            </button>
          </div>

          <div className="w-full">
            <ul className="list-disc">
              {product.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductPage;
