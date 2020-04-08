import React from 'react';

const MovieWillWatch = ({movie}) => {
        return (
            <li className="list-group-item">
                <div className="d-flex justify-content-between">
                    <p>{movie.title}</p>
                    <p>{movie.vote_average}</p>
                </div>
            </li>
        );
};

export default MovieWillWatch;
