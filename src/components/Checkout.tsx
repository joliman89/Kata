import React from "react";
import type { Product } from "./ProductList";

type CheckoutItem = {
  product: Product;
  quantity: number;
};

type CheckoutList = {
  checkout: CheckoutItem[];
};

const Checkout: React.FC<CheckoutList> = ({ checkout }) => {

  return (
    <div style={{ marginTop: 32 }}>
      <h2>Checkout</h2>    
          <ul>
            {checkout.map((item) => (
              <li key={item.product.sku}>
                {item.product.name} x {item.quantity} = ${(
                  item.product.unitPrice * item.quantity
                ).toFixed(2)}
              </li>
            ))}
          </ul>
    </div>
  );
};

export default Checkout;
