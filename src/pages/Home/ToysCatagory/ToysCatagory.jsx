import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../../../AuthProvider/AuthProvider';


const ToysCategory = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate(); // Add this line to use the navigate function

  const {user} = useContext(AuthContext)

  useEffect(() => {
    AOS.init();
    fetch('shops.json')
      .then(res => res.json())
      .then(data => setItems(data.categories));
  }, []);

  const handleSinglePage = (toy) => {
    if (user == null) {
     swal ( "You have to log in first to view details" , )
      navigate("/login"); // Redirect to the login page
    } else {
      localStorage.setItem("SingleToys", JSON.stringify(toy));
      navigate("/singleToys");
    }
  };
  return (
    <div className="p-4 font-serif mb-4 mx-auto bg-slate-100">
      <h2 className="text-5xl my-14 font-extrabold mb-4 text-center text-orange-500">Shop by Category</h2>
      <hr className="text-warning" />
      <Tabs className="text-center">
        <TabList className="flex mb-14 align-middle justify-center text-1xl my-16">
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
                      data-aos-delay={toyIndex * 100}
                      className="bg-white p-4 rounded-2xl shadow"
                    >
                      <Link to={`/toys/${toy.id}`} className="card-link">
                        <img src={toy.picture} alt={toy.name} className="w-full h-40 object-cover mb-2" />
                        <h4 className="text-base font-semibold">{toy.name}</h4>
                        <p className="text-gray-600">Price: ${toy.price}</p>
                        <p className="text-gray-600">Rating: {toy.rating}</p>
                      </Link>
                      <Link
                        to="/details"
                        onClick={() => handleSinglePage(toy)}
                        className="btn btn-primary"
                      >
                        View Details
                      </Link>
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
