import { FC } from 'react';
import './home.scss';
import Pokemon from '../../components/Pokemon';

const Home: FC = () => {
    return <div className='home'>
      <Pokemon />
  </div>;
};

export default Home;
