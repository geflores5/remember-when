import React from 'react';
import { Link } from 'react-router-dom';

const Timeline = ({ title, description, id }) => (
  <div>
    <Link to={{
      pathname: `/view_timeline/${id}`,
      title,
      description,
      id
    }}>
      <h3>{title}</h3>
    </Link>
    <p>{description}</p>
  </div>
);

export default Timeline;
