import React, { useState, useEffect } from 'react';

const ProductCard = ({ product,key }) => {
  const [hovered, setHovered] = useState(false);
  
 
  useEffect(() => {
    let timeout;
    if (!hovered) {
      timeout = setTimeout(() => setHovered(false), 300);
    }
    return () => clearTimeout(timeout);
  }, [hovered]);

  return (
    <div
      key={key}
      className={`max-w-sm mx-auto overflow-hidden shadow-lg transform ${
        hovered ? 'scale-105' : ''
      } transition-transform duration-300 ease-in-out`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {product.images && <img
        className="w-full h-48 object-cover object-center"
        src={product.images[0]}
        alt={product.title}
      />}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {product.category}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          ${product.price}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
