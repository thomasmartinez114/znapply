'use client';

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Results from './Results';

const Generator = () => {
  const [description, setDescription] = useState('');

  const handleFormSubmit = async focusArea => {
    try {
      const res = await fetch('/api/soap', {
        method: 'POST', // Ensure POST method is used
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: focusArea }), // Send input correctly
      });

      if (!res.ok) {
        console.error('Error fetching data:', res.status); // Log any error
        return;
      }

      const data = await res.json();
      // console.log('API response:', data);

      // update the states
      setDescription(data.description || 'No description received');
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

  return (
    <div className='space-y-6'>
      {/* Ensure handleFormSubmit is passed here */}
      <SearchBar onSubmit={handleFormSubmit} />
      <Results description={description} />
    </div>
  );
};

export default Generator;
