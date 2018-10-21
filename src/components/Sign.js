import React from 'react';
import {Button} from 'antd-mobile'
export class Sign extends React.Component{
    canvas = React.createRef();

    position = {}

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

    drawLine = (from, to) => {
        let ele = this.getCanvas()
        let eleRect = ele.getBoundingClientRect()
        let eleX = eleRect.x;
        let eleY = eleRect.y;

        let ctx = ele.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(from.x - eleX, from.y - eleY);
        ctx.lineTo(to.x - eleX, to.y - eleY);
        ctx.stroke();
    }
    /**
     * @param {TouchEvent} e
     */
    handleTouchStart = (e) => {
        e.preventDefault()
        console.log(e.touches);
        let touch = e.touches[0];
        this.setPosition(touch);
    }
    /**
     * @param {TouchEvent} e
     */
    handleTouchMove = (e) => {
        // console.log(e.touches);
        e.preventDefault()
        let touch = e.touches[0];
        let x = touch.pageX;
        let y = touch.pageY;
        this.drawLine(this.position, {x,y});
        this.setPosition(touch);
    }
    /**
     * @param {TouchEvent} e
     */
    handleTouchEnd = (e) => {

    }
    setPosition(touch){
        this.position = {
            x: touch.pageX,
            y: touch.pageY,
        }
    }
    render(){
        return (
            <div> 
                <div style={{textAlign: 'center'}} onTouchStart={this.handleTouchStart} 
                onTouchMove={this.handleTouchMove}>
                <canvas 
                className="sign-canvas"
                // onTouchStart={this.handleTouchStart} 
                // onTouchMove={this.handleTouchMove}
                ref={this.canvas} width="300px" height="150px"></canvas>
                </div>
                <Button type="ghost" size="small" inline className="mr-10">取消</Button>
                <Button size="small" inline className="mr-10" >清除</Button>
                <Button type="primary" size="small" inline >确定</Button>
            </div>
        )
    }
}
