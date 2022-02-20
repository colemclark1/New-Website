import React from "react";

const PictureRow = () => {
  return (
    <div className="container row picture-row">
      <div className="col-2">
        <span class="helper"></span>
        <img className="img-fluid" src={require("../images/Me.jpeg")} />
      </div>
      <div className="col-2">
        <span class="helper"></span>
        <img className="img-fluid" src={require("../images/Swim.jpg")} />
      </div>
      <div className="col-2">
        <span class="helper"></span>
        <img className="img-fluid" src={require("../images/ATV.JPG")} />
      </div>
      <div className="col-2 justify-content-center">
        <span class="helper"></span>
        <img className="img-fluid" src={require("../images/pond.jpg")} />
      </div>
      <div className="col-2">
        <span class="helper"></span>
        <img className="img-fluid" src={require("../images/Utah_2.jpg")} />
      </div>
      <div className="col-2">
        <span class="helper"></span>
        <img className="img-fluid" src={require("../images/snuba.jpg")} />
      </div>
    </div>
  );
};

export default PictureRow;
