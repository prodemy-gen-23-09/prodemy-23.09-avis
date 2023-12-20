import React from 'react';
import CheckoutPage from './HookForm';
// import Wishlist from './Wishlist';
import Preview from './Preview';

function TestCheck() {
  return (
    <div className="flex">
      <div className="w-1/2">
        <CheckoutPage />
      </div>
      <div className="ml-8 w-1/3">
        <Preview />
      </div>
    </div>
  );
}

export default TestCheck;
