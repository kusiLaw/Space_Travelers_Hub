import React from 'react';
import PropTypes from 'prop-types';

export default function Dragon({ dragon }) {
  const {
    designation, type, image, description, reserved,
  } = dragon;
  return (
    <article className="bg-dark text-light  rounded p-3">
      <h1 className="">{designation}</h1>
      <img src={image} alt={designation} width={250} height={250} />
      <p>{description}</p>
      <p>{type}</p>
      <p>
        {reserved ? <span className="bagde badge-success bg-success"> Reseved</span> : <span className="badge badge-danger bg-danger"> Not Reserved</span>}
      </p>
    </article>
  );
}

Dragon.propTypes = {
  dragon: PropTypes.shape({
    designation: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};
