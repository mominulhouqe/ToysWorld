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
        <h1 className='text-5xl my-10 text-center font-bold text-orange-500'>Popular Products Gallery</h1> <hr />
        <p className=''>Nisl vel pretium lectus quam id leo in vitae. Eros in cursus turpis massa. Blandit massa enim nec dui nunc. Turpis in eu mi bibendum neque egestas. Viverra nam libero justo laoreet sit amet cursus sit.</p>
      </div>
      <hr className='my-16' />
      <div className="font-serif flex flex-wrap justify-center space-x-5 space-y-5">
        {gallery.map(item => (
          <div key={item.id} className="bg-base-100 shadow-xl w-full lg:w-1/4 md:w-1/3" data-aos="fade-right" data-aos-duration="800">
            <figure className="w-full">
              <img src={item.img} alt={`Toy ${item.id}`} className="rounded-lg h-96 w-full shadow-lg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>Rating: {item.rating}</p>
              <p>Like: {item.like}</p>
        
              <div className="card-actions justify-end">
                <button className="btn btn-primary">order now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
