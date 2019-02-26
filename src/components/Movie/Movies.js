import React, {Component} from 'react';
import MovieList from './MovieList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as moviesActions from '../../actions/moviesActions';
import PropTypes from 'prop-types';

class Movies extends Component {

    renderData() {
        return this.props.movies[1].items;
    }

    componentDidMount() {
        this.props.moviesActions.fetchMovies();
    }
    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">
                    <div className="col-sm-12">
                        {this.props.movies.length > 0 ?
                            this.renderData()
                            :
                            <div className="">
                                No Data
                            </div>
                        }
                        <MovieList movies={this.props.movies}/>
                    </div>
                </div>
            </div>
        );
    }
}
Movies.propTypes = {
    moviesActions: PropTypes.object,
    movies: PropTypes.array
};

function mapStateToProps(state) {
    return {
        movies: state.movies
    };
}

function mapDispatchToProps(dispatch) {
    return {
        moviesActions: bindActionCreators(moviesActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movies);
