import React from 'react';

export class ShowSVG extends React.Component {
    divRef = React.createRef();

    showSVG(){
        let div = this.divRef.current;
        if(div){
            
            div.innerHTML = this.props.svg;
        }
    }

    componentDidMount(){
        this.showSVG();
    }

    render(){
        return(
            <div ref={this.divRef}></div>
        )
    }
}


