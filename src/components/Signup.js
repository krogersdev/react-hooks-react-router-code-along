import React from "react";

function Signup() {
  return (
    <form>
      <h1>Create an Account</h1>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" />

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>

      <div>
        <label htmlFor="type">Account Type</label>
        <select id="accountType">
          <option value="free">Free</option>
          <option value="normal">Normal</option>
          <option value="pro">Pro</option>
        </select>
      </div>

      <div>
        <label>
          Get Our Newsletter!
          <input type="checkbox" id="newsletter" />
        </label>
      </div>
      <input type="submit" value="Sign Up" />
    </form>
  );
}

export default Signup;
