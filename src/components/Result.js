import React from "react";

class Result extends React.Component {
  setColor() {
    return {
      color: this.props.color,
      fontSize : this.props.fontSize
    };
  }
  render() {
    return (
      <div>
        <p>Color : {this.props.color}, Font-size : {this.props.fontSize}px</p>
        <div id="content" style={this.setColor()}>
          {this.props.color} = Nội dung setting
        </div>
      </div>
    );
  }
}

export default Result;
