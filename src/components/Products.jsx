import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products, onAddCartChange, cartProducts }) => {
  return (
    <section className="w-full flex flex-col gap-5">
      <div className="flex justify-end py-2 px-3 border shadow-lg">
        <div className="flex items-center gap-2">
          <p className="">Change Layout:</p>

          <div className="p-1 flex items-center gap-1 border-2 border-[#808080]">
            <span className="w-2 h-2 bg-[#1e90ff]"></span>
            <span className="w-2 h-2 bg-[#1e90ff]"></span>
            <span className="w-2 h-2 bg-[#1e90ff]"></span>
          </div>

          <div className="p-1 flex items-center gap-1 border-2 border-[#808080]">
            <span className="w-2 h-2 bg-[#808080]"></span>
            <span className="w-2 h-2 bg-[#808080]"></span>
            <span className="w-2 h-2 bg-[#808080]"></span>
            <span className="w-2 h-2 bg-[#808080]"></span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {products.map((product) => (
          <ProductCard product={product} onAddCartChange={onAddCartChange} cartProducts = {cartProducts} />
        ))}
      </div>
    </section>
  );
};

export default Products;
