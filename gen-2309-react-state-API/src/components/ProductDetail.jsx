import { useParams } from 'react-router-dom';
import productData from './content';
import { useState } from 'react';

function ProductDetail() {
  const { id } = useParams();
  const product = productData.find(p => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuy = () => {
    alert(`You have purchased ${quantity} unit(s) of ${product.name}.`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6 sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-full hover:scale-150 transition-transform duration-500" />
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">{product.name}</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">{product.productType}</p>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p>Description: {product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating}</p>
                <p>Time Left: {product.timeLeft} days</p>
                <p>Total Sales: {product.totalSales} sold</p>
                <p>Release Date: {product.releaseDate}</p>
                <div className="flex items-center space-x-2">
                  <button onClick={handleDecrease} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                    -
                  </button>
                  <span>{quantity}</span>
                  <button onClick={handleIncrease} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                    +
                  </button>
                </div>
                <button onClick={handleBuy} className="w-full py-3 mt-10 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
