import React from 'react';
import PropTypes from 'prop-types';

const card = {
  boxShadow: ' 1px 2px 10px #ddd',
};

const h = {
  color: 'darkcyan',
  fontSize: '2em',
};

const p = {
  color: 'orangered',
  marginTop: '10px',
  fontSize: '1.4em',
};

const p1 = {
  TextAlign: 'justify',
};

export default function Dragon({ dragon }) {
  const {
    designation, type, image, description, reserved,
  } = dragon;
  return (
    <article className="rounded p-3" style={card}>
      <h1 className="" style={h}>{designation}</h1>
      <img src={image} alt={designation} width={250} height={250} />
      <p style={p}>{type}</p>
      <p style={p1}>{description}</p>
      <div>
        {reserved && (
        <>
          <span className="btn btn-success">Cancel Reservation</span>
          <span className="bagde badge-success bg-success"> Reseved</span>
        </>
        )}
        {!reserved && (
        <>
          <span className="btn btn-success">Make Reservation</span>
        </>
        )}
      </div>
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
