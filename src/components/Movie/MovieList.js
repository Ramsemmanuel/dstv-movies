import PropTypes from 'prop-types';
import React, {} from 'react';
import MovieCard from './MovieCard';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
    }

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0, 20)});
    }

    render() {
        let FilteredMovies = this.props.movies.filter((movie) => {
            return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });
        console.log('star wars', FilteredMovies);
        return (
            <div className="filter-list">
                <form>
                    <fieldset className="form-group">
                        <input type="text"
                            className="form-control form-control-lg" placeholder="Search"
                            value={this.state.search} onChange={this.updateSearch.bind(this)}/>
                    </fieldset>
                </form>
                <br/>
                <br/>
            </div>

        );
    }
}

Filter.propTypes = {
    movies: PropTypes.array
};

const getMovies = (movies) => {
    return (
        <div>
            <Filter movies={movies} onTextChange={text => this.setState({filteredString: text})}/>
            <div className='card-deck'>
                {
                    movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
                }
            </div>
        </div>
    );
};

const MovieList = (props) => (
    <div>
        {getMovies(props.movies)}
    </div>
);

MovieList.defaultProps = {
    movies: []
};

MovieList.propTypes = {
    movies: PropTypes.array
};
export default MovieList;