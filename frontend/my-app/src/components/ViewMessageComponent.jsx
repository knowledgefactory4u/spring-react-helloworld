import React, { Component } from 'react'
import HelloWorldService from '../services/HelloWorldService'

class ViewMessageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {message: ''};
    }

    componentDidMount() {
        HelloWorldService.getMessage().then(res => {
            this.setState({ message: res.data });
        })
    }

    render() {
        return (
            <div>
                <div> {this.state.message}</div>
            </div>
        )
    }
}

export default ViewMessageComponent