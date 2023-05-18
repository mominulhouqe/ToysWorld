import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    AOS.init();
    fetch('gallary.json')
      .then(res => res.json())
      .then(data => setGallery(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <div className='w-1/2 mx-auto'>
        <h1 className='text-5xl my-10 text-center font-bold'>Popular Products Gallery</h1>
        <p className=''>Nisl vel pretium lectus quam id leo in vitae. Eros in cursus turpis massa. Blandit massa enim nec dui nunc. Turpis in eu mi bibendum neque egestas. Viverra nam libero justo laoreet sit amet cursus sit.</p>
      </div>
      <hr className='my-16' />
      <div className="font-serif flex flex-wrap justify-center space-x-5 space-y-5">
        {gallery.map(item => (
          <div key={item.id} className="card bg-base-100 shadow-xl w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/5" data-aos="fade-right" data-aos-duration="800">
            <figure className="w-full">
              <img src={item.img} alt={`Toy ${item.id}`} className="rounded-lg h-auto shadow-lg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
