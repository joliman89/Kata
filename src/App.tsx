import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Checkout from "./components/Checkout";
import { currentProducts } from "./config/constants";
import type { Product, BasketItem } from "./config/constants";


function App() {
  //set a new basket in state that can only accept BasketItems
  const [basket, configureBasket] = useState<BasketItem[]>([]);

    //create new instance of the basket - empty array
    const emptyBasket = () => {
      configureBasket([]);
    };
    
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
  }

const removeFromBasket = (product: Product) => {
  configureBasket((prev) => {
    const existing = prev.find((item) => item.product.sku === product.sku);
    if (existing && existing.quantity > 1) {
      return prev.map((item) =>
        item.product.sku === product.sku
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    } else {
      // Remove the item completely if quantity is 1
      return prev.filter((item) => item.product.sku !== product.sku);
    }
  });
};

return (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "2rem",
      margin: "4rem auto",
      fontFamily: "sans-serif",
      minHeight: "80vh",
    }}
  >
    <div style={{ flex: 1 }}>
    </div>
    <div style={{ flex: 2, width: "80%"  }}>
      <h1>Shopping Basket</h1>
      <ProductList products={currentProducts} addToBasket={addToBasket} />
    </div>
    <div style={{ flex: 1, width: "20%" }}>
      <Checkout basket={basket} emptyBasket={emptyBasket} removeFromBasket={removeFromBasket} />
    </div>
  </div>
);
}

export default App
