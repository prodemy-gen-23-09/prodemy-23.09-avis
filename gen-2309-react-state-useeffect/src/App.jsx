import React, { useState, useEffect } from 'react';
import { Products } from "./components/product";
import productData from './components/content';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/Sidebar';


export default function App() {
  const [filteredData, setFilteredData] = useState(productData);
  const [productsToShow, setProductsToShow] = useState(productData);
  const [sortDirection, setSortDirection] = useState('');

  useEffect(() => {
    setProductsToShow(filteredData);
  }, [filteredData]);

  const handleSortByDate = (direction) => {
    let sorted = [...productsToShow];
    sorted.sort((a, b) => {
      if (direction === 'asc') {
        return a.releaseDate - b.releaseDate;
      } else {
        return b.releaseDate - a.releaseDate;
      }
    });
    setProductsToShow(sorted);
    setSortDirection(direction);
  };

  const handlePriceFilter = (minPrice, maxPrice, sortDirection) => {
    const filtered = productData.filter(product => product.price >= minPrice && product.price <= maxPrice);
    if (sortDirection === 'desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortDirection === 'asc') {
      filtered.sort((a, b) => a.price - b.price);
    }
    setFilteredData(filtered);
  };
  

  const handleDateFilter = (year) => {
    const filtered = productData.filter(product => new Date(product.releaseDate).getFullYear() >= year);
    setFilteredData(filtered);
  };

  return (
    <div className='App'>
      <Header />
      <div className='BodyGrid'>
        <div className='Body flex flex-wrap px-24 py-3'>
        <div className="flex flex-col space-y-2">
         <Sidebar onPriceFilter={handlePriceFilter} onDateFilter={handleDateFilter} onSortByDate={handleSortByDate} />

          <div className="grid grid-cols-5 gap-9 w-full">
            {productsToShow.map(content => (
              <Products
                key={content.id}
                image={content.image}
                name={content.name}
                price={content.price}
                totalSales={content.totalSales}
                timeLeft={content.timeLeft}
                rating={content.rating}
                releaseDate={content.releaseDate}
              />
            ))}
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
