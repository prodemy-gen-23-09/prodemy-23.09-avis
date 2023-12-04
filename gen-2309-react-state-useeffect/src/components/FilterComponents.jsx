import React, { useState } from 'react';

export default function FilterComponents({ onPriceFilter, onDateFilter }) {
  const [sortDirection, setSortDirection] = useState('asc');

  const handlePriceFilterClick = () => {
    onPriceFilter(100, 500, sortDirection === 'asc' ? 'desc' : 'asc');
    setSortDirection(prevDirection => (prevDirection === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <div>
      <button onClick={handlePriceFilterClick} className='bg-yellow-300 text-white px-4 py-2 w-40 rounded-md'>
        Sort By Price {sortDirection === 'asc' ? '↑' : '↓'}
      </button>
    </div>
  );
}
