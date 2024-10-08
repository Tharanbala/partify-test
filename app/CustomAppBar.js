import Link from 'next/link';
// import { useState } from 'react';
// import { useRouter } from 'next/router';

export default function CustomAppBar() {
  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1E1E1E] text-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" passHref>
            <img src="/logo.png" alt="Company Logo" className="w-32" />
        </Link>

        {/* Search Bar */}
        <div className="relative text-white">
          <input
            type="text"
            placeholder="Search..."
            className="bg-nord-gray text-white rounded-lg py-2 px-4 pl-10 focus:outline-none"
          />
        </div>

        {/* Login Button */}
        <Link href="/" passHref>
          <button className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg ml-4">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}
