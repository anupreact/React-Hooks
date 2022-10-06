import React from "react";
import "./form.css";
const NeumorphForm = () => {
  return (
      <>
      
    <div class="content">
      <div class="text">Log in</div>
      <form action="#">
        <div class="field">
          <span class="fas fa-user"></span>
          <input type="text" required />
          <label>Email or Phone</label>
        </div>
        <div class="field">
          <span class="fas fa-lock"></span>
          <input type="password" required />
          <label>Password</label>
        </div>
        <div class="forgot-pass">
          <a href="#">Forgot Password ?</a>
        </div>
        <button className="signIn">sign in</button>

        <div className="btn-container">
          <button href="#" className="social"> Facebook</button>
          <button href="#" className="social"> Google</button>
        </div>
        <div class="signup">
          Not a member ? <a href="#"> signup now</a>
        </div>
      </form>
     
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  );
};

export default NeumorphForm;
