import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ToysCatagory = () => {


    const categories = [
        {
            name: 'Math Toys',
            subCategories: [
                {
                    name: 'Subcategory 1',
                    toys: [
                        {
                            picture: 'toy1.jpg',
                            name: 'Toy 1',
                            price: 9.99,
                            rating: 4.5,
                        },
                        {
                            picture: 'toy2.jpg',
                            name: 'Toy 2',
                            price: 14.99,
                            rating: 3.8,
                        },
                    ],
                },
                {
                    name: 'Subcategory 2',
                    toys: [
                        // Toys for Subcategory 2
                    ],
                },
            ],
        },
        {
            name: 'Language Toys',
            subCategories: [
                // Subcategories and toys for Language Toys category
            ],
        },
        {
            name: 'Engineering Toys',
            subCategories: [
                // Subcategories and toys for Engineering Toys category
            ],
        },
    ];


    return (
        <div>
            <div>
                <h2>Shop by Category</h2>
                <Tabs>
                    <TabList>
                        {categories.map((category, index) => (
                            <Tab key={index}>{category.name}</Tab>
                        ))}
                    </TabList>

                    {categories.map((category, index) => (
                        <TabPanel key={index}>
                            {category.subCategories.map((subCategory, subIndex) => (
                                <div key={subIndex}>
                                    <h3>{subCategory.name}</h3>
                                    <div className="toys-container">
                                        {subCategory.toys.map((toy, toyIndex) => (
                                            <div key={toyIndex} className="toy-item">
                                                <img src={toy.picture} alt={toy.name} />
                                                <h4>{toy.name}</h4>
                                                <p>Price: ${toy.price}</p>
                                                <p>Rating: {toy.rating}</p>
                                                <button>View Details</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </div>
    );
};

export default ToysCatagory;