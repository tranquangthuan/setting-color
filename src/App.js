import React from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";
import Reset from "./components/Reset";
import Result from "./components/Result";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 15,
    };
  }

  onSetColor = (params) => {
    this.setState({
      color: params,
    });
  };

  onChangeSize = (params) => {
    if (
      this.state.fontSize + params >= 8 &&
      this.state.fontSize + params <= 36
    ) {
      this.setState({
        fontSize: this.state.fontSize + params,
      });
    }
  };

  onSettingsDefault = (params) => {
    console.log("onSettingsDefault " + params.color);
    if (params !== null && params !== "undefined") {
      this.setState({
        color: params.color,
        fontSize: params.fontSize,
      });
    }
  };

  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <ColorPicker
              color={this.state.color}
              onReciveColor={this.onSetColor}
            />
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting
              fontSize={this.state.fontSize}
              onChangeSize={this.onChangeSize}
            />
            <Reset onSettingsDefault={this.onSettingsDefault} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Result color={this.state.color} fontSize={this.state.fontSize} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
