import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/named
import { getDragons, bookDragon, cancelDragon } from '../../Redux/Dragons/Dragons';
import Dragon from '../Dragon';

export default function Dragons() {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons);

  useEffect(() => {
    if (dragons.length === 0) {
      dispatch(getDragons());
    }
  }, []);

  const handleBooking = (e) => {
    e.preventDefault();
    dispatch(bookDragon(e.target.id));
  };

  const handleCancelling = (e) => {
    e.preventDefault();
    dispatch(cancelDragon(e.target.id));
  };

  return (
    <section className="Dragons-container container-fluid d-md-block d-lg-flex gap-lg-3 mt-lg-5 mb-lg-5">
      {dragons.map((dragon) => (
        <Dragon
          key={dragon.id}
          dragon={dragon}
          id={dragon.id}
          handleBooking={handleBooking}
          handleCancelling={handleCancelling}
        />
      ))}
    </section>
  );
}
