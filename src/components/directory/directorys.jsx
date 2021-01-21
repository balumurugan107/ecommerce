import React from "react";
import shopMen from "./../../assets/menShop.jpeg";
import womenShop from "./../../assets/womenShop.jpg";
import "./mydirectory.scss";

function Directory(){

  return(
    <div className="directory">
      <div className="warp">
      <div
        className="item"
     style={{
        backgroundImage: 'url("https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/C2981F454DA84FECA47F52C385AD20D6/203357554_9212_C2981F454DA84FECA47F52C385AD20D6.jpg")',
      }}>
      <a>shop women</a>
    </div>
      <div
        className="item"
        style={{
          backgroundImage: 'url("https://img.mensxp.com/media/content/2020/Feb/hairstyle-hacks-to-cover-male-pattern-baldness-500-4_5e3e92677970c.jpeg")',
        }}><a>shop men</a>
      </div>
    </div>
    </div>
  );
}

export default Directory;
