import React from 'react';

const Results = ({ description, tags }) => {
  return (
    <>
      <div className='description w-full px-4 py-3 rounded-lg border bg-white text-gray-800'>
        <p>{description || 'No description available'}</p>
        <p>{tags || 'No tags available'}</p>
      </div>
    </>
  );
};

export default Results;
