import React, {Component} from 'react';

export default class FileList extends Component {
    constructor(props) {
        super(props);

        this.state = {filenames: []};
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
        return render_file_list;
    }
}


