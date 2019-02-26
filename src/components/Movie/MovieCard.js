import React from 'react';
import PropTypes from 'prop-types';
import Synopsis from './Synopsis';

const MovieCard = (props) => (
    <div className="movie-card">
        <div className="card mb-4">
            <Synopsis description={props.movie}/>
            <img className="card-img-top img-fluid" src={props.movie.imageUrl} alt=""/>
            <div className="card-footer">
                <div className="clearfix">
                    <div className="float-left">
                        {props.movie.releaseDate}
                    </div>
                    <div className="card-footer-badge float-right badge badge-primary badge-pill">Ranking
                        : {props.movie.rank}</div>
                </div>
            </div>
        </div>
    </div>
);

MovieCard.defaultProps = {
    movie: {}
};

MovieCard.propTypes = {
    movie: PropTypes.object
};
export default MovieCard;