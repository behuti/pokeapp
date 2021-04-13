import React from 'react'

const PokemonAvatar = ({data}) => {

  const {name, sprites} = data;

  return (
    <div>
      <h1>{name}</h1>
      <img src={sprites.versions['generation-v']['black-white'].animated.front_default} alt={name} />
    </div>
  )
}

export default PokemonAvatar
