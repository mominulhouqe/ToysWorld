import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    AOS.init();
    fetch('https://toys-server-mu.vercel.app/insertToys')
      .then(res => res.json())
      .then(data => setGallery(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='bg-gray-100'>
      <div className='container  lg:w-1/2 mx-auto'>
        <h1 className='text-5xl my-10 text-center font-bold text-orange-500'>Popular Products Gallery</h1>
        <hr />
        <p className='text-center text-gray-600 mt-6'>
          Nisl vel pretium lectus quam id leo in vitae. Eros in cursus turpis massa. Blandit massa enim nec dui nunc.
          Turpis in eu mi bibendum neque egestas. Viverra nam libero justo laoreet sit amet cursus sit.
        </p>
      </div>
      <hr className='my-16' />
      <div className="flex flex-wrap justify-center gap-2">
        {gallery.map(item => (
          <div
            key={item._id}
            className="w-full lg:w-1/3 xl:w-1/4 p-4"
            data-aos-anchor-placement="top-center"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="bg-white rounded-lg shadow-lg">
              <img src={item.img} alt={`Toy ${item._id}`} className="rounded-t-lg" />
              <div className="p-4">
                <p className="text-lg font-semibold mb-2">{item.title}</p>
                <p className="text-gray-600">Like: {item.like}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
