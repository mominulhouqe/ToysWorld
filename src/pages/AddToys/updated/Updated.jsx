import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Updated = () => {
 
    const loader = useLoaderData()
    console.log(loader);
    return (
        <div>
          data {loader.length}
        
        </div>
    );
};

export default Updated;