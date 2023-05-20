import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <div>
      <div className='bg-gradient-to-r container mx-auto from-pink-500 to-purple-500 py-16 px-8'>
        <div className='container mx-auto'>
          <h2 className='text-4xl text-white font-bold text-center mb-8'>Explore Our Toy Collection</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <motion.div
              className='bg-white rounded-lg shadow-lg p-6'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <img src='/images/toy1.jpg' alt='Toy' className='rounded-lg mb-4' />
              <h3 className='text-xl text-gray-800 font-semibold mb-2'>Educational Toys</h3>
              <p className='text-gray-600'>Engage your child's curiosity and learning with our educational toy collection.</p>
            </motion.div>
            <motion.div
              className='bg-white rounded-lg shadow-lg p-6'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <img src='/images/toy2.jpg' alt='Toy' className='rounded-lg mb-4' />
              <h3 className='text-xl text-gray-800 font-semibold mb-2'>STEM Toys</h3>
              <p className='text-gray-600'>Spark creativity and critical thinking skills with our wide range of STEM toys.</p>
            </motion.div>
            <motion.div
              className='bg-white rounded-lg shadow-lg p-6'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <img src='/images/toy3.jpg' alt='Toy' className='rounded-lg mb-4' />
              <h3 className='text-xl text-gray-800 font-semibold mb-2'>Building Blocks</h3>
              <p className='text-gray-600'>Encourage imagination and motor skills development with our building block sets.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
