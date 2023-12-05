import React, { useState } from 'react';

export default function SortButton({ onClick }) {
  const [sortDirection, setSortDirection] = useState('');

  const handleSortClick = () => {
    onClick(sortDirection === 'asc' ? 'desc' : 'asc');
    setSortDirection(prevDirection => (prevDirection === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <button onClick={handleSortClick} className='bg-blue-300 text-white mt-4 px-4 py-2 w-40 rounded-md'>
      Sort by Date {sortDirection === 'asc' ? '↑' : '↓'}
    </button>
  );
}
