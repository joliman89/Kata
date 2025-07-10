import React from "react";

export type Product = {
  sku: string;
  name: string;
  unitPrice: number;
}

type ProductListData = {
  products: Product[];
}

const cardStyle: React.CSSProperties = {
   border: "1px solid #ccc",
            borderRadius: 8,
            padding: 16,
            boxShadow: "0 2px 8px rgba(224, 203, 14, 0.05)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minWidth: 140,
};

const ProductList: React.FC<ProductListData> = ({products}) => (

    <div style={{ display: "flex", gap: 16 }}>
      {products.map((product) => (
        <div key={product.sku} style={cardStyle}>
          <span>
            <strong>{product.name}</strong> - £{product.unitPrice.toFixed(2)}
          </span>
          <button style={{ marginTop: 8 }}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
)

export default ProductList;