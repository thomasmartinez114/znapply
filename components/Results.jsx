import React from 'react';

const Results = ({ description }) => {
  return (
    <>
      <div className='description w-full px-4 py-3 rounded-lg border bg-white text-gray-800'>
        <p>{description || 'No description available'}</p>
      </div>
    </>
  );
};

export default Results;
