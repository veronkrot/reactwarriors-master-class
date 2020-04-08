import React from "react";

class MovieItem extends React.Component {
    constructor() {
        super();
        this.state = {
            willWatch: false
        };
    }

    render() {
        const {movie: data, addMovieToWillWatch, deleteMovieFromWillWatch} = this.props;
        let willWatch = this.state.willWatch;

        const getImgSrc = () => {
            if (data.backdrop_path === null ||
                data.poster_path === null) {
                return "https://simrussia.com/wp-content/uploads/2018/04/no-image.jpg"
            } else {
                return `https://image.tmdb.org/t/p/w500${data.backdrop_path ||
                data.poster_path}`
            }
        };

        return (
            <div className="card">
                <img
                    className="card-img-top"
                    src={getImgSrc()}
                    alt=""
                />
                <div className="card-body">
                    <h6 className="card-title">{data.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Rating: {data.vote_average}</p>
                            <button
                                id={data.id}
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
                </div>
            </div>
        )
    }
}

export default MovieItem;
