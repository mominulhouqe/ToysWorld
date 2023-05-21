import React from 'react';
import { motion } from 'framer-motion';
const Features = () => {
    return (
        <div>

            <section className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Our Happy Customers
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                            See what our customers have to say about their toy shopping experience.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Customer Testimonial Card 1 */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-6">
                                <blockquote>
                                    <div className="text-xl text-gray-900">
                                        "My kids absolutely love the toys we bought from this website. They provide a great selection and excellent customer service."
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-base font-medium text-gray-700">- Emily Johnson</p>
                                        <p className="text-sm text-gray-500">Los Angeles, CA</p>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                        {/* Customer Testimonial Card 2 */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-6">
                                <blockquote>
                                    <div className="text-xl text-gray-900">
                                        "This website has made toy shopping so convenient. The toys are of great quality and always arrive on time."
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-base font-medium text-gray-700">- Michael Rodriguez</p>
                                        <p className="text-sm text-gray-500">Houston, TX</p>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                        {/* Customer Testimonial Card 3 */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-6">
                                <blockquote>
                                    <div className="text-xl text-gray-900">
                                        "I'm impressed with the range of educational toys available on this website. It's been a great resource for my child's development."
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-base font-medium text-gray-700">- Sarah Thompson</p>
                                        <p className="text-sm text-gray-500">New York, NY</p>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





        </div>
    );
};

export default Features;