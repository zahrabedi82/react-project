import React from "react";
import "./Signup.css";
import Crypto from "../../assets/trade.png";
const Signup = () => {
  return (
    <div className="signup">
      <div className="container">
        <div className="left">
          <img src={Crypto} alt=" " />
        </div>
        <div className="right">
          <h2>Earn passive income with crypto.</h2>
          <p>Earn up to 12% annual rewards on 30+ digital assets</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Lean More</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
