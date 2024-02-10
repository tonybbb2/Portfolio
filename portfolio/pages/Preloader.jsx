import React from 'react';
import '/styles/unique.module.css';

const Preloader = () => {
  return (
    <> 
      <div className='w-full h-screen flex flex-col justify-center items-center relative'>
        <div className='loading'></div>
        <div className='loading'></div>
        <div className='loading'></div>
      </div>
    </>
  )
}

export default Preloader;