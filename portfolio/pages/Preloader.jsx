import React from 'react';
import '/styles/unique.module.css';

const Preloader = () => {

  return (
    <>
      <div className='w-full h-screen flex flex-col justify-center items-center relative bg-[#FAF9F6] dark:bg-black'>
        <div className="container">
          <div className="box">

            <div className="title text-center">
              <span className="block"></span>
              <h1 className='text-black uppercase'>Tony Bui<span></span></h1>
            </div>

            <div className="role">
              <div className="block"></div>
              <p className='text-black'>Jr. web developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Preloader;