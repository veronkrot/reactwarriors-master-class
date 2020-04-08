import React from "react";
import {API_URL, API_KEY_3} from "./../utils/api"
import MovieItem from "./MovieItem";
import MovieTabs from "./MovieTabs";
import MovieWillWatch from "./MovieWillWatch";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            moviesWillWatch: [],
            sort_by: "popularity.desc",
        };
    }

    componentDidMount() {
        fetch(
            `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`
        )
            .then((response) => {
            return response.json()
        }).then((data) => {
            this.setState({
                movies: data.results
            })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.sort_by !== this.state.sort_by){
            this.componentDidMount()
        }
    }

    addMovieToWillWatch = (movie) => {
        const updateMoviesWillWatch = [...this.state.moviesWillWatch];
            updateMoviesWillWatch.push(movie);
            this.setState({
                moviesWillWatch: updateMoviesWillWatch
            });
    };

    deleteMovieFromWillWatch = (movie) => {
        const updateMoviesWillWatch = this.state.moviesWillWatch.filter(
            item => item.id !== movie.id
        );

        this.setState({
            moviesWillWatch: updateMoviesWillWatch
        });
    };

    renderMoviesWillWatch = () => {
        return this.state.moviesWillWatch.map(movie => (
            <MovieWillWatch
                movie={movie}
                key={movie.id}
            />
        ))
    };

    updateSortBy = value => {
        this.setState({
            sort_by: value
        });
    };

    render() {
        return (<div className="container mt-6">
                <div className="row">
                    <div className="col-9">
                        <div className="row mb-4">
                            <div className="col-12">
                                <MovieTabs sort_by={this.state.sort_by}
                                           updateSortBy={this.updateSortBy}
                                />
                            </div>
                        </div>
                        <div className="row">
                            {this.state.movies.map(movie => {
                                return (
                                    <div className="col-6 mb-4" key={`col-${movie.id}`}>
                                        <MovieItem
                                            key={`${movie.id}M`}
                                            movie={movie}
                                            addMovieToWillWatch={this.addMovieToWillWatch}
                                            deleteMovieFromWillWatch={this.deleteMovieFromWillWatch}/>
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
