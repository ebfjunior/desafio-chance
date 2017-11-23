import React from "react";

export default () => (
  <div className="row logo-user-screen">
    <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
      <div className="row">
        <div className="col-xs-12">
          <img src={require("../../images/chance_logo.svg")} />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <h3>
            <b className="chance-red-text">BUG REPORT</b>
          </h3>
        </div>
      </div>
    </div>
  </div>
);
