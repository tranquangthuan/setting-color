import React from "react";

class Reset extends React.Component {
  onSettingsDefault = () => {
    let properties = { color: "red", fontSize: 15 };
    this.props.onSettingsDefault(properties);
  };

  render() {
    return (
      <button
        type="button"
        className="btn btn-primary"
        onClick={this.onSettingsDefault}
      >
        Reset
      </button>
    );
  }
}

export default Reset;
