import Navbar from "./components/Navibar";
import "./App.css";
import { Link } from "react-router-dom";
import resolveLogo from "./assets/Resolve'26.png";
function App() {
  return (
    <>
      <Navbar />

      <main id="home" className="hero">
        <div className="hero-panel">
          <p className="eyebrow">2-Day National Game Jam</p>

          <img
  src={resolveLogo}
  alt="RESOLVE '26"
  className="resolve-logo"
/>
          <p className="hero-copy">
            SRM Institute of Science and Technology • Vadapalani Campus
          </p>

          <div className="hero-meta">
            <div className="meta-pill">Aug 31 - Sep 1</div>
            <div className="meta-pill">Vadapalani, Chennai</div>
            <div className="meta-pill meta-pill-free">FREE</div>
          </div>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/register">
              Register Now
            </Link>

            <a className="btn btn-secondary" href="#about">
              Learn More
            </a>
          </div>
        </div>
      </main>


      <section id="about" className="section">
        <h2>About RESOLVE</h2>
        <p>
          Build innovative games, play with a team, and compete for top prizes
          at the campus game jam.
        </p>
      </section>


      <section id="timeline" className="section section-grid">
        <h2>Event Timeline</h2>

        <div className="grid">
          <div className="card">
            <h3>Day 1</h3>
            <p>Aug 31 • 9AM Launch & Mentoring</p>
          </div>

          <div className="card">
            <h3>Day 2</h3>
            <p>Sep 1 • 8AM Jam & 1PM Submissions</p>
          </div>
        </div>
      </section>


      <section id="register" className="section section-register">
        <h2>Registration</h2>

        <p>
          First round registration is free. Grab your team of 3 and jump into
          the pixel jam.
        </p>

        <div className="register-grid">
          <div className="card">
            <h3>Full Pass</h3>
            <p>Team of 3 • ₹800</p>
          </div>

          <div className="card">
            <h3>Competition Pass</h3>
            <p>Team of 3 • ₹600</p>
          </div>
        </div>
      </section>


      <footer id="contact" className="footer">
  <h2>Ready to Join?</h2>

  <Link className="btn btn-primary" to="/register">
  Register Now
</Link>

  <div className="footer-contact">
    <div className="footer-box">
      <p>
        <strong>Faculty Coordinator</strong>
        <br />
        Dr. Sridevi Sridhar
      </p>
    </div>

    <div className="footer-box">
      <p>
        <strong>Student Coordinators</strong>
        <br />
        Netrang Davey • 99406 88427
        <br />
        Shravan Chumble • 78238 44791
      </p>
    </div>
  </div>
</footer>
    </>
  );
}

export default App;