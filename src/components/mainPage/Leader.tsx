import BeginButton from "./BeginButton";
import arrow from "../../images/arrow.png";
import { useEffect, useState } from "react";

function Leader() {
  let windowSize = window.innerWidth;

  return (
    <div className="leader">
      <div className="text">
        <p className="h1">ПУТЕШЕСТВИЕ</p>
        <p className="h3">на красную планету</p>
      </div>
      {windowSize > 992 ? (
        <div className="leader-block">
          <BeginButton />
          <img src={arrow} alt="arrow to begin travel" className="img-arrow" />
        </div>
      ) : null}
    </div>
  );
}

export default Leader;
