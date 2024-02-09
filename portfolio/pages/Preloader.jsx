import React from 'react';
import '/styles/unique.module.css';

const Preloader = () => {
  return (
    <> 
      <div className='w-full h-full bg-red'>
          <div className='loading'>test</div>
          <div className='loading'>test</div>
          <div className='loading'>test</div>
      </div>
    </>
  )
}

export default Preloader;