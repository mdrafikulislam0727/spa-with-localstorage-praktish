import React from 'react';

const SingleCart = ({movie,handelWatchTime}) => {
    return (
        <div className="movie-card text-center w-100 m-auto col-md-6">
                    <div className="movie-poster w-75 m-auto">
                        <img className='w-50' src={movie.poster} alt="" />
                        <h3>{movie.movieName}</h3>
                        <p>{movie.description}</p>
                        <div className="timeAndRating d-flex justify-content-around">
                            <p>Watch Time:{movie.watchTime}</p>
                            <p>Rating:{movie.imdbRating}</p>
                        </div>
                        <button onClick={()=>handelWatchTime(movie.watchTime)} className='btn btn-info w-75'>Book Now</button>
                    </div>
                </div>
    );
};

export default SingleCart;