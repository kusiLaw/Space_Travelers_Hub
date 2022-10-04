import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import logo from '../Assets/Images/planet2.png';
import Dragon from './Pages/Dragon';
import Missions from './Pages/Missions';
import style from './style/Header.module.css';

const HeaderStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 5rem',
  backgroundColor: '#fff',
  boxShadow: ' 5px 5px 5px #ddd',
};

const activeStyle = {
  color: 'darkcyan',
  borderBottom: '2px solid',
  paddingBottom: '.2rem',
};

export default function Header() {
  return (
    <>
      <header style={HeaderStyle} className={style.header}>
        <NavLink to="/">
          <div className="logo">
            <img src={logo} alt="" width={50} height={50} />
          </div>
        </NavLink>
        <NavLink to="/dragon" style={({ isActive }) => (isActive ? activeStyle : undefined)}> Dragons </NavLink>
        <NavLink to="/missions" style={({ isActive }) => (isActive ? activeStyle : undefined)}> Missions </NavLink>
      </header>
      <Routes>
        <Route path="/missions" element={<Missions />} />
        <Route path="/dragon" element={<Dragon />} />
      </Routes>
    </>
  );
}
