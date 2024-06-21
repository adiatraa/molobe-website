// CardMovie.jsx
import React from 'react';
import { EyeIcon } from '@heroicons/react/20/solid';
import ButtonWatchNow from '../components/ButtonWatchNow.jsx';
import ButtonFavorite from './ButtonFavorite.jsx';
import styles from '../pages/Movies/Movies.module.css';

const CardMovie = ({ movie }) => {
    let { poster_path, title, release_date, popularity } = movie;
    poster_path = "https://image.tmdb.org/t/p/w500" + poster_path;

    return (
        <div className="bg-[#202020] p-6 rounded-lg">
            <div className="card flex">
                <div className="h-[210px] w-[150px] bg-white rounded-2xl overflow-hidden">
                    <img src={poster_path} alt={title} className="h-full w-full object-cover" />
                </div>
                <div className="card-content ml-8 flex-1">
                    <p className="font-bold text-xl">{title}</p>
                    <div className={styles.filmStatus}>
                        <p>{release_date}</p>
                        <p>Popularity: {popularity}</p>
                        <EyeIcon className="h-6 w-6 ml-4" />
                        <p>{popularity} viewers</p>
                    </div>
                    <div className="filmDescription w-full lg:w-[85%] mt-4">
                        <p>{movie.overview}</p>
                    </div>
                </div>
                <div className="cardButton flex justify-center items-center gap-6 mr-10">
                    <ButtonFavorite />
                    <ButtonWatchNow />
                </div>
            </div>
        </div>
    );
}

export default CardMovie;
