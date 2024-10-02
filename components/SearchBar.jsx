'use client'; // Ensure this component is a client component

import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [focusArea, setFocusArea] = useState('');

  const handleSubmit = e => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('Form is being submitted'); // Log to confirm form submission

    if (onSubmit) {
      console.log('Calling onSubmit with focusArea:', focusArea); // Log the input being sent
      onSubmit(focusArea); // Call parent function with input
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit} // This binds the handleSubmit function to the form submission
        className='mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center'
      >
        <div className='w-full md:w-4/5 md:pr-2 mb-4 md:mb-0'>
          <label htmlFor='focus-area' className='sr-only'>
            Enter Focus Areas
          </label>
          <input
            type='text'
            id='focus-area'
            value={focusArea}
            onChange={e => {
              console.log('Input changed to:', e.target.value); // Log the input value
              setFocusArea(e.target.value); // Update state on input change
            }}
            placeholder='Enter Focus Area(s)'
            className='w-full px-4 py-3 rounded-lg border bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500'
          />
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
