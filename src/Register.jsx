import "./Register.css";

function Register() {
  return (
    <div className="register-page">
      <div className="register-box">
        <h1>Register for RESOLVE '26</h1>

        <form className="register-form">
          <input type="text" placeholder="Team Name" />
          <input type="text" placeholder="Team Leader Name" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />
          <input type="text" placeholder="College Name" />
          <input type="text" placeholder="Member 2 Name" />
          <input type="text" placeholder="Member 3 Name" />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;