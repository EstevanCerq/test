import React, { Fragment } from "react";
import "./accueil.css";

function Accueil() {
  return (
    <Fragment>
      <div className="masthead">
        <div className="container">
          <div className="masthead-heading">PrideOn</div>
          <div className="masthead-subheading">
            Le site de la sneaker{" "}
            <span
              className="txt-rotate"
              data-period="2100"
              data-rotate='[ "au meilleur prix !", "de qualité !", "100 % authentique" ]'
            ></span>
          </div>
          <a href="#quisommesnous" className="button js-scrollTo">
            <div className="scroll-downs">
              <div className="mousey">
                <div className="scroller"></div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default Accueil;
