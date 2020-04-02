import React from "react";

class MovieItem extends React.Component {
    constructor() {
        super();
        this.state = {
            willWatch: false
        };
    }

    render() {
        const {movie, removeMovie, addMovieToWillWatch, removeMovieToWillWatch} = this.props;
        let willWatch = this.state.willWatch;
        return (
            <div className="card">
                <img
                    className="card-img-top"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
                    movie.poster_path}`}
                    alt=""
                />
                <div className="card-body">
                    <h6 className="card-title">{movie.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Rating: {movie.vote_average}</p>
                            <button
                                type="button"
                                className={willWatch ? "btn btn-success" : "btn btn-info"}
                                onClick={() => {
                                    this.setState({
                                        willWatch: !willWatch
                                    });
                                    if (!willWatch) {
                                        addMovieToWillWatch(movie);
                                    } else {
                                        removeMovieToWillWatch(movie);
                                    }
                                }}>
                                {willWatch ? "Remove Will Watch" : "Will Watch"}
                            </button>
                    </div>
                    <button onClick={removeMovie.bind(null, movie)}
                            type="button"
                            className="btn btn-secondary">
                        Delete movie
                    </button>
                </div>
            </div>
        )
    }
}

export default MovieItem;
