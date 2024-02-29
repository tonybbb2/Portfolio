import React from 'react';
import '/styles/unique.module.css';

const Preloader = () => {

  return (
    <>
      <div className='w-full h-screen flex flex-col justify-center items-center relative bg-black dark:bg-white'>
        <div className="container">
          <div className="box">

            <div className="title text-center">
              <span className="block"></span>
              <h1 className='text-white dark:text-white uppercase'>Tony Bui<span></span></h1>
            </div>

            <div className="role">
              <div className="block"></div>
              <p className='text-white'>Jr. web developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Preloader;