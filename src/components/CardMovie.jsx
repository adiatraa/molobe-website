// CardMovie.jsx
import React from 'react';
import { EyeIcon } from '@heroicons/react/20/solid';
import ButtonWatchNow from '../components/ButtonWatchNow.jsx';
import ButtonWatchlist from '../components/ButtonWatchlist.jsx';
import styles from '../pages/Movies/Movies.module.css';

const CardMovie = ({ movie }) => {
    return (
        <div className="bg-[#202020] p-6 rounded-lg">
            <div className="card flex">
                <div className="h-[210px] w-[150px] bg-white rounded-2xl overflow-hidden">
                    <img src={movie.imageUrl} alt={movie.title} className="h-full w-full object-cover" />
                </div>
                <div className="card-content ml-8 flex-1">
                    <p className="font-bold text-xl">{movie.title}</p>
                    <div className={styles.filmStatus}>
                        <p>{movie.year}</p>
                        <p>{movie.country}</p>
                        <p>{movie.duration}</p>
                        <EyeIcon className="h-6 w-6 ml-4" />
                        <p>{movie.viewers} viewers</p>
                    </div>
                    <div className="filmDescription w-full lg:w-[85%] mt-4">
                        <p>{movie.description}</p>
                    </div>
                    <div className={styles.filmGenre}>
                        <p>{movie.genre}</p>
                    </div>
                </div>
                <div className="cardButton flex justify-center items-center gap-6 mr-10">
                    <ButtonWatchlist />
                    <ButtonWatchNow />
                </div>
            </div>
        </div>
    );
}

export default CardMovie;
