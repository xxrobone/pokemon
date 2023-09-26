import React, { FC } from 'react';
import Header from '../../components/Header';
import { Outlet, NavLink } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <div>
      <Header />
      <ul className='menu'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/pokemon'>Pokemon</NavLink>
      </ul>
      <div className='container'>
        <div className='sidebar'></div>
        <div className='main_content'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
