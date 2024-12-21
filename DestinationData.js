import Mountain1 from "../assets/mharstra1.jpg";
import Mountain2 from "../assets/maharastra2.jpg";
import Mountain3 from "../assets/mharatsra3.jpg";

import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
          <p>
            Embark on this journey and witness the perfect harmony of heritage,
            nature, and urban life!
          </p>
        </div>
        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
          <img alt="img" src={this.props.img3} />
        </div>
      </div>
    );
  }
}

export default DestinationData;
