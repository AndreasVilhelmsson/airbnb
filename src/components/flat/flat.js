import React, { Component } from "react";
import "./flat.css";

class Flat extends Component {
  handleClick = () => {
    //call parent method select flat
    this.props.selectFlat(this.props.flat);
  };
  render() {
    const style = { backgroundImage: `url('${this.props.flat.imageUrl}')` };
    return (
      <div className="flat" onClick={this.handleClick}>
        <div className="flat-picture" style={style} />
        <div className="flat-title">
          {this.props.flat.name}
          <div>
            {this.props.flat.price} {this.props.flat.priceCurrency}
          </div>
        </div>
      </div>
    );
  }
}

export default Flat;
