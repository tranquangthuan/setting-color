import React from "react";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.color);
    this.state = {
      colors: ["red", "blue", "green"],
    };
  }

  showColor(color) {
    return { backgroundColor: color };
  }

  setActiveColor(color) {
    this.props.onReciveColor(color);
  }

  render() {
    let eleColors = this.state.colors.map((color, index) => {
      return (
        <span
          key={index}
          style={this.showColor(color)}
          className={this.props.color === color ? "active" : ""}
          onClick={() => this.setActiveColor(color)}
        >
          {color}
        </span>
      );
    });

    return (
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h3 className="panel-title">Color Picker</h3>
        </div>
        <div className="panel-body">{eleColors}</div>
      </div>
    );
  }
}

export default ColorPicker;
