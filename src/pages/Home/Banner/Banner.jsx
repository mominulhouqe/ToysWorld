import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel  " >
                <div id="slide1" className="carousel-item relative max-h-96  w-full ">
                    <img src="https://i.ibb.co/zRwjwCF/my-img12.jpg" className="w-full  rounded-xl" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                        {/* <div className="absolute rounded-xl  flex items-center h-full right-0 top-0 ">
                            <div className='font-mono space-y-7 pl-12 w-1/2'>
                                <h2 className='text-2xl font-extrabold'>A Big Fun for Kids !</h2>
                                <h2 className='text-6xl text-red-600 font-bold'>A World To Explore</h2>

                                <p className='text-white font-bold'>Active toys for smart and active kids, Bring fun and non-stop learning for your little ones.</p>
                                <div>
                                    <button className="btn btn-primary mr-5">Discover More</button>
                                    <button className="btn btn-outline btn-secondary">Latest Project</button>
                                </div>
                            </div>
                        </div> */}


                        <a href="#slide4" className="btn btn-circle">❮</a>


                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative max-h-96  w-full">
                    <img src="https://i.ibb.co/RH074YG/my-img11-1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                        {/* <div className="absolute rounded-xl  flex items-center h-full right-0 top-0 ">
                            <div className='font-mono space-y-7 pl-12 w-1/2'>
                                <h2 className='text-2xl font-extrabold'>A Big Fun for Kids !</h2>
                                <h2 className='text-6xl text-red-600 font-bold'>A World To Explore</h2>

                                <p className='text-white font-bold'>Active toys for smart and active kids, Bring fun and non-stop learning for your little ones.</p>
                                <div>
                                    <button className="btn btn-primary mr-5">Discover More</button>
                                    <button className="btn btn-outline btn-secondary">Latest Project</button>
                                </div>
                            </div>
                        </div> */}

                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative max-h-96  w-full">
                    <img src="https://i.ibb.co/bztky4M/my-img11-2.jpg" className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                        {/* <div className="absolute rounded-xl  flex items-center h-full right-0 top-0 ">
                            <div className='font-mono space-y-7 pl-12 w-1/2'>
                                <h2 className='text-2xl font-extrabold'>A Big Fun for Kids !</h2>
                                <h2 className='text-6xl text-red-600 font-bold'>A World To Explore</h2>

                                <p className='text-white font-bold'>Active toys for smart and active kids, Bring fun and non-stop learning for your little ones.</p>
                                <div>
                                    <button className="btn btn-primary mr-5">Discover More</button>
                                    <button className="btn btn-outline btn-secondary">Latest Project</button>
                                </div>
                            </div>
                        </div> */}

                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative max-h-96  w-full">
                    <img src="https://i.ibb.co/p0kgtk4/my-img13.jpg" className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        {/* <div className="absolute rounded-xl  flex items-center h-full right-0 top-0 ">
                            <div className='font-mono space-y-7 pl-12 w-1/2'>
                                <h2 className='text-2xl font-extrabold'>A Big Fun for Kids !</h2>
                                <h2 className='text-6xl text-red-600 font-bold'>A World To Explore</h2>

                                <p className='text-white font-bold'>Active toys for smart and active kids, Bring fun and non-stop learning for your little ones.</p>
                                <div>
                                    <button className="btn btn-primary mr-5">Read More</button>
                                    
                                </div>
                            </div>
                        </div> */}

                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;



















/* 

 <div className="carousel w-full" >
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1551524612-4b158646bc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=945&q=80" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1479740030693-66ad10f3a7b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1459257831348-f0cdd359235f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>


*/