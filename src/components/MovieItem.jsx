import React from "react";

class MovieItem extends React.Component {
    constructor() {
        super();
        this.state = {
            willWatch: false
        };
    }

    render() {
        const {movie: data, deleteMovie, addMovieToWillWatch, deleteMovieFromWillWatch} = this.props;
        let willWatch = this.state.willWatch;
        return (
            <div className="card">
                <img
                    className="card-img-top"
                    src={`https://image.tmdb.org/t/p/w500${data.backdrop_path ||
                    data.poster_path}`}
                    alt=""
                />
                <div className="card-body">
                    <h6 className="card-title">{data.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Rating: {data.vote_average}</p>
                            <button
                                type="button"
                                className={willWatch ? "btn btn-success" : "btn btn-info"}
                                onClick={() => {
                                    this.setState({
                                        willWatch: !willWatch
                                    });
                                    if (!willWatch) {
                                        addMovieToWillWatch(data);
                                    } else {
                                        deleteMovieFromWillWatch(data);
                                    }
                                }}>
                                {willWatch ? "Remove Will Watch" : "Will Watch"}
                            </button>
                    </div>
                    <button onClick={() => {
                        deleteMovie(data)
                    }}
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
