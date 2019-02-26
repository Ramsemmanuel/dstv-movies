import React, { Component } from 'react';
import Header from './Header';
import Movies from './Movie/Movies';
class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'Top 5 Movies'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <div className="mt-5">
                    <Movies />
                </div>
            </div>
        );
    }
}

export default App;