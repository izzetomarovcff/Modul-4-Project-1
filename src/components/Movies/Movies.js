import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import { connect } from "react-redux";
class Movies extends Component {
    render() {
        return (
            <ul className="movies">
                {this.props.movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} />
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        listMovies: state.listMovies,
    };
};

export default connect(mapStateToProps)(Movies);