import React from "react";

class SizeSetting extends React.Component {
  changeSize = (size) => {
    this.props.onChangeSize(size);
  };

  render() {
    return (
      <div className="panel panel-warning border border-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Size : {this.props.fontSize}px</h3>
        </div>
        <div className="panel-body">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.changeSize(2)}
          >
            Tăng
          </button>
          &nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.changeSize(-2)}
          >
            Giảm
          </button>
        </div>
      </div>
    );
  }
}

export default SizeSetting;
