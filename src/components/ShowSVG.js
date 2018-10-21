import React from 'react';

function createSignPlaceholder(id, height, width){
    let g = `
        <g>
            <rect width="100%" height="100%" fill="white" stroke="red" stroke-width="5" stroke-dasharray="5"></rect>
            <text text-anchor="middle"  x="50%" y="50%" alignment-baseline="middle" fill="red" >签名</text>
        </g>
    `
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
    svg.setAttribute('id', id);
    // svg.setAttribute('viewBox', `0 0 `)
    svg.innerHTML = g;
    return svg
}

export class ShowSVG extends React.Component {
    divRef = React.createRef();
    signEle;

    showSVG(){
        let div = this.divRef.current;
        if(div){
            div.innerHTML = this.props.svg;
        }
    }
    getSignEle(){
        let div = this.divRef.current;
        [...div.querySelectorAll('text tspan')].forEach(s => {
            if(s.textContent === 'sign'){
                this.signEle = s;
                this.signEle.textContent = '';
            }
        })
    }

    addPlacehoder(){
        let svg = createSignPlaceholder('mysign', '30', '60');
        svg.setAttribute('x', this.signEle.getAttribute('x'));
        svg.setAttribute('y', parseFloat(this.signEle.getAttribute('y'))-15);
        this.divRef.current.children[0].appendChild(svg);
    }
    removePlaceholder(){
        this.divRef.current.querySelector('#mysign').innerHTML = '';
    }

    componentDidMount(){
        this.showSVG();
        this.getSignEle();
        this.addPlacehoder();
    }

    render(){
        return(
            <div ref={this.divRef} className="svg-container"></div>
        )
    }
}


