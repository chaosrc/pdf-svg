import React from 'react';

export class Sign extends React.Component{
    canvas = React.createRef();

    componentDidMount(){
        let ctx = this.getCanvas().getContext('2d');
        ctx.fillStyle = 'red';
        ctx.fillRect(0,0, 10, 10);
    }
    /**
     * @returns {HTMLCanvasElement}
     */
    getCanvas(){
        return this.canvas.current;
    }

    render(){
        return (
            <div>
                <canvas 
                onTouchStart={e => console.log('start')} 
                onTouchMove={e => console.log('move')}
                ref={this.canvas} width="200px" height="100px"></canvas>
            </div>
        )
    }
}
