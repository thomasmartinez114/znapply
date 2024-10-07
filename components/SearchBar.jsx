'use client'; // Ensure this component is a client component

import React, { useState } from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

const SearchBar = ({ onSubmit }) => {
  const [focusArea, setFocusArea] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  const handleSubmit = e => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(focusArea); // Call parent function with input
    }
  };

  const toggleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  const handleSelection = selection => {
    setFocusArea(selection); // Update focusArea with the selected dropdown item
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <>
      <form
        onSubmit={handleSubmit} // This binds the handleSubmit function to the form submission
        className='mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center'
      >
        <div className='relative' id='dropdownButton'>
          <div
            onClick={toggleDropDown} // Use onClick in React
            className='border-solid border-gray-400 border-[1px] px-5 py-2 rounded cursor-pointer font-bold flex justify-between w-[200px] bg-white shadow-sm'
          >
            {focusArea || 'Focus Area'}{' '}
            {/* Display selected item or placeholder */}
            <IoIosArrowDropdownCircle />
          </div>

          {/* Conditionally render the dropdown based on state */}
          <div
            className={`rounded border-gray-500 bg-white p-8 absolute top-[50px] w-[400px] shadow-md ${
              isDropdownOpen ? '' : 'hidden'
            }`}
            id='dropdown'
          >
            <div
              className='cursor-pointer hover:bg-gray-300 p-4'
              onClick={() => handleSelection('Head')}
            >
              Head
            </div>
            <div
              className='cursor-pointer hover:bg-gray-300 p-4'
              onClick={() => handleSelection('Neck')}
            >
              Neck
            </div>
            <div
              className='cursor-pointer hover:bg-gray-300 p-4'
              onClick={() => handleSelection('Shoulders')}
            >
              Shoulders
            </div>
            {/* Add more items here as needed */}
          </div>
        </div>

        <button
          type='submit'
          className='md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500'
        >
          Generate
        </button>
      </form>
    </>
  );
};

export default SearchBar;
