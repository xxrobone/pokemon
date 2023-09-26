import { useContext } from "react"
import { AvatarContext } from "../../context/context"

import './avatar.scss'
import { AvatarContextType } from "../../utils/types/PokemonTypes"

const Avatar = () => {
    const { avatar } = useContext(AvatarContext) as AvatarContextType;
    console.log(avatar?.image)
  return (
      <div className="avatar">
          <img src={`${avatar?.image}`}></img>
    </div>
  )
}

export default Avatar