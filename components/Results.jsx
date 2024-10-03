import React from 'react';

const Results = ({ description }) => {
  return (
    <>
      <div className='container mx-auto'>
        <p className='text-lg'>{description}</p>
      </div>
    </>
  );
};

export default Results;
