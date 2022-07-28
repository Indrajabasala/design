import React from "react";
import design2styles from "./design2styles.css";
import ClearIcon from "@mui/icons-material/Clear";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";

const Design2 = () => {
  return (
    <div>
      <div className="mainPage">
        <div className="card1">
          <div className="iconstyles">
            <ClearIcon />
          </div>
          <div className="header">Your Privacy Settings</div>
          <div className="contentheader">
            <div className="content1">
              <h4>Data Storage</h4>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
            <div className="content1">
              <h4>Personalised Data</h4>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
            <div className="content1">
              <h4>Personalised Ads</h4>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design2;
