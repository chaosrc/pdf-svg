import React from 'react';

export class ShowImg extends React.Component{
    state = {
        url: ''
    }
    componentDidMount(){
        let svg = this.props.svg;
        let url = `data:image/svg+xml;utf8,${svg}`;
        this.setState({url});
    }

    render(){
        return (<img src={this.state.url}></img>)
    }
}