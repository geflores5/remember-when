import React from 'react';
import { Link } from 'react-router-dom';

const Memory = ({ id, timelineID, title, date, description, location, imageUrl }) => (
  <div>
    <Link to={{
      pathname: `/view_memory/${id}`,
      id,
      timelineID,
      title,
      date,
      description,
      location,
      imageUrl
    }}>
      <h3>{title}</h3>
    </Link>
    <p>{description}</p>
  </div>
);

export default Memory;
