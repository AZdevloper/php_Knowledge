import React from "react";
import ImageLogo from "../../assets/logo.png";

function Logo() {
  return (
    <div 
      className=""
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage:` url(${ImageLogo})`,
        width: "40px",
        height: "40px",
        position:"absolute",
        top:10
      }}
    ></div>
  );
}

export default Logo;
