import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Checkout from "./components/Checkout";

export type Product = {
  sku: string;
  name: string;
  unitPrice: number;
};

export type BasketItem = {
  product: Product;
  quantity: number;
};

const currentProducts: Product[] = [
  {sku: "A", name: "Product A", unitPrice: 50},
  {sku: "B", name: "Product B", unitPrice: 30},
  {sku: "C", name: "Product A", unitPrice: 20},
  {sku: "D", name: "Product A", unitPrice: 15},
  {sku: "E", name: "Product A", unitPrice: 15},
  {sku: "F", name: "Product A", unitPrice: 15}

];


function App() {
  //set a new basket in state that can only accept BasketItems
  const [basket, configureBasket] = useState<BasketItem[]>([]);

  //add item to the basket
  const addToBasket = (product: Product) => {
    //get the previous state of the basket to allow updating
      configureBasket((prev) => {
      const existing = prev.find((item) => item.product.sku === product.sku);
      if (existing) {
        return prev.map((item) =>
          item.product.sku === product.sku
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { product, quantity: 1 }];
      }
    });
};


  return (
<div
    style={{
      maxWidth: 900,
      margin: "2rem auto",
      fontFamily: "sans-serif",
      minHeight: "80vh",
      display: "flex",
      flexDirection: "row",
      gap: "2rem",
      alignItems: "flex-start",
      justifyContent: "center",
    }}
  >
    <div style={{ flex: 2 }}>
      <h1>Shopping Basket</h1>
      <ProductList products={currentProducts} addToBasket={addToBasket} />
    </div>
    <div style={{ flex: 1 }}>
      <Checkout basket={basket} />
    </div>
  </div>
  );
}

export default App
