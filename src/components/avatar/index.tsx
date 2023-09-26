import { useEffect, useContext } from 'react';
import './avatar.scss';
import { AvatarContextType } from '../../utils/types/PokemonTypes';
import { AvatarContext } from '../../context/context';

const Avatar = () => {
  const { avatar, setAvatar } = useContext(AvatarContext) as AvatarContextType;

  // Retrieve the saved avatar.image from local storage when the component mounts
  useEffect(() => {
    const savedImage = localStorage.getItem('avatarImage');
    if (savedImage) {
      setAvatar({ name: '', image: savedImage, types: [] });
    }
  }, [setAvatar]);

  // Update local storage whenever the avatar.image changes
  useEffect(() => {
    if (avatar?.image) {
      localStorage.setItem('avatarImage', avatar.image);
    }
  }, [avatar]);

  return (
    <div className='avatar'>
      <img src={avatar?.image} alt='Avatar' />
    </div>
  );
};

export default Avatar;
