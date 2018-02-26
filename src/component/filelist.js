import React, {Component} from 'react';
import {render} from 'react-dom';

export default class FileList extends Component {
    constructor(props) {
        super(props);

        this.state = {filenames: []};
    }

    conponentDidMount() {
    }

    on_change(new_file_list) {
        this.setState({filenames: new_file_list});
    }

    render() {
        let render_file_list = null;
        if (this.state.filenames.length !== 0) {
            render_file_list = Array.prototype.slice.call(this.state.filenames).map((name, index) =>
                <li key={index}>
                    {index} : {name}
                </li>);
        }
        return (
            <div>
                {render_file_list}
            </div>
        );
    }
}