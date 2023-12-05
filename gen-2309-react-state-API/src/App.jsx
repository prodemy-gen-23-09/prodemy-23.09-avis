import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Products } from "./components/product";
import productData from './components/content';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/Sidebar';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';

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
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/product/:id" element={ <ProductDetail /> } />
          <Route path="/" element={ <ProductList /> } />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
