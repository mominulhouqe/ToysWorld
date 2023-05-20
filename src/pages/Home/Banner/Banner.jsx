import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className="carousel bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
        <div id="slide1" className="carousel-item relative max-h-96 w-full">
          <img src="https://i.ibb.co/zRwjwCF/my-img12.jpg" className="w-full rounded-xl" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            {/* Add content here */}
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative max-h-96 w-full">
          <img src="https://i.ibb.co/RH074YG/my-img11-1.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            {/* Add content here */}
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative max-h-96 w-full">
          <img src="https://i.ibb.co/bztky4M/my-img11-2.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            {/* Add content here */}
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative max-h-96 w-full">
          <img src="https://i.ibb.co/p0kgtk4/my-img13.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            {/* Add content here */}
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
