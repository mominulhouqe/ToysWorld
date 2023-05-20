import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Updated = () => {
    const viewsData = useLoaderData()
    console.log(viewsData);
    return (
        <div>
            <h2>Updated {viewsData.length}</h2>
        </div>
    );
};

export default Updated;