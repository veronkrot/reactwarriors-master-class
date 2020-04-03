import React from "react";
import MovieItem from "./MovieItem";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: moviesData,
            moviesWillWatch: []
        };
    }

    removeMovie = (movie) => {
        const updateMovies = this.state.movies.filter(function (item) {
            return item.id !== movie.id;
        });
        this.setState({
            movies: updateMovies,
        });
    };

    addMovieToWillWatch = (movie) => {
        const updateMoviesWillWatch = [...this.state.moviesWillWatch];
        if (!updateMoviesWillWatch.includes(movie)) {
            updateMoviesWillWatch.push(movie);
            this.setState({
                moviesWillWatch: updateMoviesWillWatch
            });
        } else alert(`${movie.title} exists in the Will Watch list!`)

    };

    removeMovieToWillWatch = (movie) => {
        const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function (item) {
            return item.id !== movie.id;
        });
        this.setState({
            moviesWillWatch: updateMoviesWillWatch,
        });
    };

    renderMoviesWillWatch() {
        return this.state.moviesWillWatch.map(movie => (
        <li key={movie.id} className="list-group-item">
            <div className="d-flex justify-content-between">
                <p>{movie.title}</p>
                <p>{movie.vote_average}</p>
            </div>
        </li>
    ))}

    render() {
        return (<div className="container">
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            {this.state.movies.map(movie => {
                                return (
                                    <div className="col-6 mb-4" key={`col-${movie.id}`}>
                                        <MovieItem
                                            key={movie.id}
                                            movie={movie}
                                            removeMovie={this.removeMovie}
                                            addMovieToWillWatch={this.addMovieToWillWatch}
                                            removeMovieToWillWatch={this.removeMovieToWillWatch}/>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-3">
                        <p>Will Watch: {this.state.moviesWillWatch.length}</p>
                        <ul className="list-group">
                            {this.renderMoviesWillWatch()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
