import { useState } from "react";
import "../styles/LoginForm.scss";
const LoginForm = () => {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(prev => !prev);
  };
  return (
    <div className="login-container">
      <button className="btn" onClick={toggleForm}>
        {showForm ? "Close" : "Login"}
      </button>
      {showForm && (
        <form className="login-form">
          <h2>Login</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};
export default LoginForm;
