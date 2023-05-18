import React from 'react';
import { useParams } from 'react-router-dom';

const ToysDetails = ({user}) => {
  const { id } = useParams();
  const {name} = user

  return (
    <div>
      <h3>Toy ID: {id}</h3>
    </div>
  );
};

export default ToysDetails;
