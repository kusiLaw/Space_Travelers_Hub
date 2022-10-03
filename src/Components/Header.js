import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/Images/planet2.png';

const HeaderStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 5rem',
  backgroundColor: '#fff',
  boxShadow: ' 5px 5px 5px #ddd',
};

export default function Header() {
  return (
    <header style={HeaderStyle}>
      <NavLink to="/">
        <div className="logo">
          <img src={logo} alt="" width={50} height={50} />
        </div>
      </NavLink>
    </header>
  );
}
