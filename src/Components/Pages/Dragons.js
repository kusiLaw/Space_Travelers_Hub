import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragons } from '../../Redux/Dragons/Dragons';
import Dragon from '../Dragon';

export default function Dragons() {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons);

  useEffect(() => {
    if (dragons.length === 0) {
      dispatch(getDragons());
    }
  }, []);

  return (
    <section className="Dragons-container container-fluid d-md-block d-lg-flex mt-5 gap-3 ">
      {dragons.map((dragon) => (
        <Dragon key={dragon.id} dragon={dragon} />
      ))}
    </section>
  );
}
