import React from "react";
import "./bootstarapstyles.css";
import brands from "../images/brands.jpg";
import plain from "../images/plain.jpg";
import action from "../images/action.png";
import analysis from "../images/analysis.png";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

const Bootstrapdesign = () => {
  return (
    <div className="mainpage">
      <div className="header">
        <div className="imagestyles">
          {/* <img
            src={brands}
            alt="brands"
            style={{
              height: "42px",
              width: "104px",
              borderRadius: "30px",
            }}
          /> */}
          <DensityMediumIcon />
        </div>
        <div className="navbar">
          <a href="#">HOME</a>
          <a href="#">CONTACT</a>
          <a href="#">COMMUNITY</a>
          <a href="#">LEARN</a>
          <a href="#">CONTACT</a>
        </div>
        <div className="logout-styles">LOG OUT</div>
      </div>
      <div className="img2styles">
        <img
          src={plain}
          alt="plain"
          style={{
            height: "500px",
            width: "100%",
          }}
        />
        <div className="image-over-text-styles">
          <div className="textstyles">
            THAT HORIZON MIGHT BE CLOSER THAN YOU THINK
          </div>
          <div className="paragraphstyles1">
            we will help yougetthere by helping to manage money
          </div>
          <div className="buttonstyles1">
            <button className="button-styles2">Sign Up Free</button>
          </div>
        </div>
      </div>
      <div className="footer1">
        <div className="card1">
          <div>BUDGETS? YOUR BETCHA</div>
          <div>
            Below, we have made <br />
            an exciting Paragraph writing MCQs quiz for you
          </div>
          <div>
            <img
              src={action}
              alt="plain"
              style={{
                height: "50px",
                width: "50px",
              }}
            />
          </div>
        </div>
        <div className="card1">
          <div>ALL-IN-ONE?DOWN</div>
          <div>
            Below, we have made <br />
            an exciting Paragraph writing MCQs quiz for you
          </div>
          <div>
            <img
              src={analysis}
              alt="plain"
              style={{
                height: "50px",
                width: "50px",
              }}
            />
          </div>
        </div>
        <div className="card1">
          <div>CREDITED?CHECKED</div>
          <div>
            Below, we have made <br />
            an exciting Paragraph writing MCQs quiz for you
          </div>
          <div>
            <img
              src={action}
              alt="plain"
              style={{
                height: "50px",
                width: "50px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bootstrapdesign;
