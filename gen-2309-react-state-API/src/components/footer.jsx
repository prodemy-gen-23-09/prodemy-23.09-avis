import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="flex justify-around max-w-4xl mx-auto">
        <div className="flex flex-col items-start">
          <p className="text-lg font-semibold">Contact Us:</p>
          <ul className="mt-4">
            <li>Email: AyoSHOP@example.com</li>
            <li>Phone: 123-456-7890</li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-lg font-semibold">Follow Us:</p>
          <ul className="mt-4">
            <li><a href="https://twitter.com/example" className="hover:text-blue-400">Twitter</a></li>
            <li><a href="https://facebook.com/example" className="hover:text-blue-400">Facebook</a></li>
          
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-lg font-semibold">News and Info:</p>
          <ul className="mt-4">
            <li><a href="https://twitter.com/example" className="hover:text-blue-400">Press Release</a></li>
            <li><a href="https://facebook.com/example" className="hover:text-blue-400">About AyoSHOP</a></li>
            <li><a href="https://facebook.com/example" className="hover:text-blue-400">Product Support</a></li>
            <li><a href="https://facebook.com/example" className="hover:text-blue-400">Newsletter SignUp</a></li>
            <li><a href="https://facebook.com/example" className="hover:text-blue-400">Registration</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <p className="text-lg font-semibold">Other Sites:</p>
          <ul className="mt-4">
            <li><a href="https://twitter.com/example" className="hover:text-blue-400">AyoRIDE</a></li>
            <li><a href="https://facebook.com/example" className="hover:text-blue-400">AyoFOOD</a></li>
            <li><a href="https://facebook.com/example" className="hover:text-blue-400">Geek and Geek</a></li>
            <li><a href="https://facebook.com/example" className="hover:text-blue-400">Traveloka</a></li>
            <li><a href="https://facebook.com/example" className="hover:text-blue-400">Shopee</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
