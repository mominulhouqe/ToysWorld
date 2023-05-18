import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ToysCategory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    AOS.init();
    fetch('shops.json')
      .then(res => res.json())
      .then(data => setItems(data.categories));
  }, []);

  return (
    <div className="p-4 font-serif mb-4  mx-auto bg-slate-100">
      <h2 className="text-5xl my-14 font-extrabold mb-4 text-center  text-orange-500'">Shop by Category</h2>
      <hr className='text-warning' />
      <Tabs className="text-center">
        <TabList className="flex mb-14 align-middle justify-center text-1xl my-16 ">
          {items.map((category, index) => (
            <Tab
              key={index}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded cursor-pointer mr-2"
            >
              {category.name}
            </Tab>
          ))}
        </TabList>

        {items.map((category, index) => (
          <TabPanel key={index}>
            {category.subCategories.map((subCategory, subIndex) => (
              <div key={subIndex}>
                <h3 className="text-lg font-semibold mt-4 mb-2">{subCategory.name}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                  {subCategory.toys.map((toy, toyIndex) => (
                    <div
                      key={toyIndex}
                      data-aos="fade-left"
                      data-aos-delay={toyIndex * 100} // Add delay for each card animation
                      className="bg-white p-4 rounded-2xl shadow"
                    >
                      <img src={toy.picture} alt={toy.name} className="w-full h-40 object-cover mb-2" />
                      <h4 className="text-base font-semibold">{toy.name}</h4>
                      <p className="text-gray-600">Price: ${toy.price}</p>
                      <p className="text-gray-600">Rating: {toy.rating}</p>
                      <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ToysCategory;
