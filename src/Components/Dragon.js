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
  textAlign: 'justify',
};

const badge = {
  float: 'right',
  backgroundColor: 'orangered',
  borderRadius: '0rem 1.5rem 0rem 1.5rem',
  padding: '0.2rem .5rem',
};

const reservation = {
  backgroundColor: 'darkcyan',
  border: 'none',
};

export default function Dragon({ dragon }) {
  const {
    designation, type, image, description, reserved,
  } = dragon;
  return (
    <article className="rounded p-3" style={card}>
      <h1 className="" style={h}>
        {designation}
        <span className="fs-6">
          {reserved && (<span style={badge} className="badge badge-danger"> Reseved</span>)}
        </span>
      </h1>
      <img src={image} alt={designation} width={250} height={250} />
      <p style={p}>{type}</p>
      <p style={p1}>{description}</p>
      <div>
        {reserved && (<span className="btn btn-secondary">Cancel Reservation</span>)}
        {!reserved && (<span className="btn btn-success " style={reservation}>Make Reservation</span>)}
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
