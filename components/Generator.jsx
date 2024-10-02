'use client';

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Results from './Results';

const Generator = () => {
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

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
      console.log('API response:', data);
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

  return (
    <div>
      {/* Ensure handleFormSubmit is passed here */}
      <SearchBar onSubmit={handleFormSubmit} />
      <Results description={description} tags={tags} />
    </div>
  );
};

export default Generator;
