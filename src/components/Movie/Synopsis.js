import React from 'react';
import PropTypes from 'prop-types';

class Synopsis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary float-right" onClick={() => this.setState({
                    isVisible: !this.state.isVisible
                })}> Show more
                </button>
                <br/>
                <br/>
                {this.state.isVisible ? this.props.description.synopsis : null}
            </div>
        );
    }
}

export default Synopsis;

Synopsis.propTypes = {
    sypnosis: PropTypes.object,
    description: PropTypes.object,
    id: PropTypes.string,
};