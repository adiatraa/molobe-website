import React, { useState, useEffect } from 'react';
import { HeartIcon } from '@heroicons/react/20/solid'

const ButtonFavorite = ({ movie }) => {
  const [loved, setLoved] = useState(false);

  useEffect(() =>{
    const favoriteList = JSON.parse(localStorage.getItem('favoriteList')) || [];
    const isFavorite = favoriteList.some((favMovie) => favMovie.id == movie.id);
    setLoved(isFavorite);
  }, [movie.id]);

  const handleFavorite = () => {
    let favoriteList = JSON.parse(localStorage.getItem('favoriteList')) || [];
    if(loved){
      favoriteList = favoriteList.filter((favMovie) => favMovie.id !== movie.id);
    } else {
      favoriteList.push(movie);
    }
    localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
    setLoved(!loved);
  }

  return (
    <button
      onClick={handleFavorite}
      className={`bg-white/0 border-2 p-[0.75rem] border-white/20 h-14 w-14 rounded-[16px] transition duration-300 ease-in-out transform ${
        loved ? 'text-red-500 scale-110' : 'text-white scale-100'
      }`}
    >
      <HeartIcon className={`w-7 h-7 ${loved ? 'fill-current' : ''}`} />
    </button>
  );
};

export default ButtonFavorite;