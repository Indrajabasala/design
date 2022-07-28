import React from "react";
import design3styles from "./design3styles.css";
import stethoscope from "../images/stethoscope.jpg";

const Design3 = () => {
  return (
    <>
      <div>
        <div className="background">
          <div>
            <div className="imgstyles">
              <img
                src={stethoscope}
                alt="stethoscope"
                style={{ height: "100vh", width: "700px" }}
              />
              <div className="image-over-texts">hhhhhhhh</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Design3;
