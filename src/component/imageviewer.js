import React, {Component} from 'react';

export default class ImageViewer extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <h1>Hello, {this.props.name}!</h1>
        )
    }
}


