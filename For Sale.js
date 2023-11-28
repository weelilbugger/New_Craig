import React, { Component } from "react";
import electro from "./shopping/electronics.PNG";
import streaming from "./shopping/Streaming.PNG";
import hdmi from "./shopping/HDMI.PNG";
import headphones from "./shopping/Headphones.PNG";
import printer from "./shopping/Printer.PNG";
import cloths from "./shopping/cloths.PNG";
import desk from "./shopping/desk.PNG";
import dog from "./shopping/dog.PNG";
import shoe from "./shopping/shoe.PNG";
import phone from "./shopping/phone.PNG";

 
class Image extends Component {
  render() {
    return (
      <div>
        <h2>All Itmes for Sale</h2>
       <div>
        <h2>For You </h2>
        <ul classname="foryou">
            <li><img src={electro}/><p>Item for sale </p></li>
            <li><img src={streaming}/><p>Item for sale </p></li>
            <li><img src={hdmi}/><p>Item for sale </p></li>
            <li><img src={headphones}/><p>Item for sale </p></li>
            <li><img src={printer}/><p>Item for sale </p></li>
            <li><img src={phone}/><p>Item for sale </p></li>
            <li><img src={dog}/><p>Item for sale </p></li>
            <li><img src={desk}/><p>Item for sale </p></li>
            <li><img src={shoe}/><p>Item for sale </p></li>
            <li><img src={cloths}/><p>Item for sale </p></li>
        </ul>
       </div>
      </div>
    );
  }
}
 
export default Image;