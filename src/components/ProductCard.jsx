import React from "react";

const ProductCard = ({ product, onAddCartChange, cartProducts }) => {
  let addedToCart;
  if (cartProducts.length > 0) {
    addedToCart = cartProducts.some((cartProduct) => cartProduct.slug === product.slug);
  }

  return (
    <div className="group p-5 transition-scale duration-500 hover:cursor-pointer hover:scale-105 hover:shadow-lg border rounded-lg">
      <img src={product.image} alt={product.brand} className="mx-auto" />

      <div className="flex flex-col gap-4">
        <h3 className="text-[#338aff] font-bold product-title">
          {product.name}
        </h3>

        <p className="font-bold text-2xl">{`$ ${product.price}`}</p>

        <p className="text-gray-500">{product.description}</p>
      </div>

      <button
        className="mt-5 mx-auto hidden text-white bg-[#17a2b8] text-center  sm:px-10 px-5  py-2 group-hover:block rounded-md"
        onClick={() => onAddCartChange(product)}
      >
        {addedToCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
