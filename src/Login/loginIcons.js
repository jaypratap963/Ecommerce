import { useCallback } from "react";
import "./loginIcon.css";

const FrameComponent = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "sign up OTP" to the project
  }, []);

  const onGroupIconClick = useCallback(() => {
    // Please sync "loading" to the project
  }, []);

  const onGroupIcon1Click = useCallback(() => {
    // Please sync "loading" to the project
  }, []);

  return (
    <div className="frame-parent">
      <div className="frame-group">
        <div className="rectangle-parent" onClick={onGroupContainerClick}>
          <div className="frame-child" />
          <div className="wrapper">
            <div className="div">+91</div>
          </div>
          <img className="frame-item" alt="" src="/vector-11.svg" />
          <input
            className="frame-inner"
            placeholder="Enter Mobile Number"
            type="text"
          />
        </div>
        <div className="or">
          <div className="youll-receive-4-digit">
            You’ll receive 4-digit code to verify the number
          </div>
        </div>
      </div>
      <div className="frame-wrapper">
        <div className="frame-container">
          
          <div className="or1">------------------ Or ------------------</div>
         
        </div>
      </div>
      <div className="button-wrapper">
        <div className="button">
          <div className="login-with-social">Login with Social Media</div>
          <div className="button-inner">
            <div className="group-parent">
              <div
                className="group-icon"
                onClick={onGroupIconClick}
              >f</div>
              <div
                className="group-icon1"
                onClick={onGroupIcon1Click}
              >G</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
