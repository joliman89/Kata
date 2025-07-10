import React from "react";
import "../styles/common.css";

export type Product = {
  sku: string;
  name: string;
  unitPrice: number;
}

type ProductListData = {
  products: Product[];
  addToBasket: (product: Product) => void;
}


const ProductList: React.FC<ProductListData> = ({products, addToBasket }) => (

    <div style={{ display: "flex", gap: 16 }}>
      {products.map((product) => (
        <div key={product.sku} className="card">
          <span>
            <strong>{product.name}</strong> - £{product.unitPrice.toFixed(2)}
          </span>
          <button style={{ marginLeft: 8 }} onClick={() => addToBasket(product)}>
            Add to Basket
          </button>
        </div>
      ))}
    </div>
)

export default ProductList;