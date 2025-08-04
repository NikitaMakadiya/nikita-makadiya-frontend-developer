import React from "react";

function HomeGridView({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-15  gap-7">
      {products.map((product) => (
        <div
          key={product.id}
          className={`product-card p-4 rounded shadow-xl hover:shadow-2xl transition`}
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-40 mx-auto object-contain mb-4 "
          />
          <h2 className="text-lg font-semibold mb-1 line-clamp-1">
            {product.title}
          </h2>
          <p className="text-sm mb-2 line-clamp-2">{product.description}</p>
          <p className="price font-bold text-blue-700">${product.price}</p>

          <button className="buy-btn px-6 mt-5 py-2 rounded transition">
            Shop Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default HomeGridView;
