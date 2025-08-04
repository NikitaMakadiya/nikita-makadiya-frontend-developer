import React from "react";

const HomeListView = ({ products }) => {
  return (
    <div className="flex flex-col items-center gap-6 mt-15">
      {products.map((product) => (
        <div
          key={product.id}
          className={`product-card p-4 rounded shadow-md hover:shadow-xl transition w-full md:w-2/3`}
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-40 mx-auto object-contain mb-4"
          />
          <h2 className="text-lg font-semibold mb-1 line-clamp-1">
            {product.title}
          </h2>
          <p className="text-sm mb-2 line-clamp-2">{product.description}</p>
          <p className="price font-bold text-primary">${product.price}</p>

          <button className="buy-btn px-4 py-2 rounded mt-4 transition">
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomeListView;
