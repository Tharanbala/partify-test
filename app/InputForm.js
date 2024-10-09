"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import dataset from '../public/dataset.json';
import CarModel from "./CarModel"

const years = [...new Set(dataset.map(item => item.Year))];
const makes = [...new Set(dataset.map(item => item.Make))];
const models = [...new Set(dataset.map(item => item.Model))];
const products = [...new Set(dataset.map(item => item['Product Type']))];

export default function MainPage() {
  const [formData, setFormData] = useState({
    year: '',
    make: '',
    model: '',
    product: '',
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.year && formData.make && formData.model && formData.product) {
      const matchedData = dataset.find(item => 
        item.Year.toString().trim() === formData.year.toString().trim() &&
        item.Make.toString().trim().toLowerCase() === formData.make.toString().trim().toLowerCase() &&
        item.Model.toString().trim().toLowerCase() === formData.model.toString().trim().toLowerCase() &&
        item['Product Type'].toString().trim().toLowerCase() === formData.product.toString().trim().toLowerCase()
      );

      console.log(matchedData)

      if (matchedData) {
        router.push(matchedData.URL);
      } else {
        alert('No matching product found!');
      }
    }
    else {
      alert('No value selected')
    }

    
  };

  return (
    <div className="h-screen bg-nord-gray grid grid-cols-2">
       <div className="flex flex-col justify-start items-center">
            <div className="text-black text-3xl absolute m-28">
                <p><strong>Partify</strong> is North America leading automotive parts provider. After being in the automotive industry for over 11 years, Partify has mastered the art of painted and unpainted auto parts.</p>
            </div>
            <div className="w-full flex justify-center ">
                <CarModel/>
            </div>
      </div>
      {/* Form Content */}
      <div className="flex flex-col justify-center items-center bg-opacity-10 h-full p-10">
        <h1 className="text-4xl mt-6 ml-20 font-bold text-black mb-8">
          Find Your Part
        </h1>
        <form onSubmit={handleSubmit} className="ml-20 max-w-lg bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
          {/* Year */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Select Year</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4"
            >
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Make */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Select Make</label>
            <select
              name="make"
              value={formData.make}
              onChange={handleInputChange}
              className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4"
            >
              <option value="">Select Make</option>
              {makes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>

          {/* Model */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Select Model</label>
            <select
              name="model"
              value={formData.model}
              onChange={handleInputChange}
              className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4"
            >
              <option value="">Select Model</option>
              {models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          {/* Product Type */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Select Product</label>
            <select
              name="product"
              value={formData.product}
              onChange={handleInputChange}
              className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4"
            >
              <option value="">Select Product</option>
              {products.map((product) => (
                <option key={product} value={product}>
                  {product}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-primary text-white font-bold py-3 px-6 rounded-lg w-full hover:bg-blue-700"
          >
            Find My Part
          </button>
        </form>
      </div>
    </div>
  );
}
