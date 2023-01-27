import React from "react";
import dynamic from 'next/dynamic';

const SplineWrapper = dynamic(import('./SplineWrapper'));

const Home =() => {
  return (
    <div className='animation'>
      <SplineWrapper />
    </div>
  )
}

export default Home;