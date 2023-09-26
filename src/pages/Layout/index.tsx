import { FC } from 'react';
import Header from '../../components/Header';
import { Outlet, NavLink } from 'react-router-dom';

import '../../App.scss'

const Layout: FC = () => {
  return (
    <body>
      <Header />
      <ul className='menu'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </ul>
      <div className='container'>
        <div className='main_content'>
          <Outlet />
        </div>
      </div>
    </body>
  );
};

export default Layout;
