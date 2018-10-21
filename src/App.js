import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getSVG } from "./http";
import { ShowSVG } from "./components/ShowSVG";
import html2canvas from "html2canvas";
import { Sign } from "./components/Sign";
import { ShowImg } from "./components/ShowImg";
import { replace, maps } from "./model/SvgMap";
import { Modal } from "antd-mobile";
import 'antd-mobile/dist/antd-mobile.css'

window['html2canvas'] = html2canvas;

const urls = ["a1.svg", "a2.svg", "a3.svg"].map(
  u => `${process.env.PUBLIC_URL}/svg/${u}`
);
class App extends Component {
  state = {
    files: [],
    sign: '',
    showModal: true
  };

  async componentDidMount() {
    let reqs = urls.map(getSVG);

    reqs.forEach(async (req, i) => {
      let svg = await req;
      svg = replace(svg, maps[i]);
      this.setSVG(svg, i);
    });
  }
  setSVG(svg, i) {
    // svg = svg.replace(/>(#)(?=<\/tspan>)/gi, )
    this.setState(({ files }) => {
      let f = files.slice();
      f[i] = svg;
      return { files: f };
    });
  }

  render() {
    return (
      <div id="pages">
        {/* {this.state.files.map((f, i) => (
          <ShowSVG key={i} svg={f} />
        ))} */}
        {
          // this.state.files.slice(0, -1).map((f, i) => <ShowImg key={i} svg={f}></ShowImg>)
        }
        {/* <img src={urls[0]}></img>
        <img src={urls[1]}></img> */}
        {/* {this.state.files[2] && <ShowSVG signData={this.state.sign} svg={this.state.files[2]} onClick={() => this.setState({showModal: true})}></ShowSVG>} */}
        {/* <object type="image/svg+xml" data={urls[2]} id="svg-object"></object> */}
        <Modal 
          animationType="up"
          title="签名"
          className="modal-wrapper"
          visible={this.state.showModal} transparent maskClosable onClose={e => this.setState({showModal: false})}>

          <Sign ></Sign>
        </Modal>
      </div>
    );
  }
}

export default App;
