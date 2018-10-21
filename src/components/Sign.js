import React from 'react';
import {Button} from 'antd-mobile'
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
                <div style={{textAlign: 'center'}}>
                <canvas 
                onTouchStart={e => console.log('start')} 
                onTouchMove={e => console.log('move')}
                ref={this.canvas} width="300px" height="150px"></canvas>
                </div>
                <Button type="ghost" size="small" inline className="mr-10">取消</Button>
                <Button size="small" inline className="mr-10" >清除</Button>
                <Button type="primary" size="small" inline >确定</Button>
            </div>
        )
    }
}
