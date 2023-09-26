import { FC } from 'react';

// styles
import './about.scss';

const About: FC = () => {
  return (
    <div className='about'>
      <h3>Project at cme</h3>
      <p>Typescript, react/vite, useContext, pokeman api</p>
      <a href="'https://pokeapi.co/api/v2/'">Pokemon api</a>
    </div>
  );
};

export default About;
