import React from 'react'
import Carousel from '../components/Carousel/Carousel';

function Home() {
  return (
    <div>
      <Carousel autoSlide={true} duration={10000} />
    </div>
  );
}

export default Home
