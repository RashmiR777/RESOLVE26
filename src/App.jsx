import Navbar from "./components/Navibar";
import "./App.css";
import { Link } from "react-router-dom";
import resolveLogo from "./assets/Resolve'26.png";
import resolveposter from "./assets/resolve'26-poster.jpeg";
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
            {/*im going to comment this link to the website btw jsx comments are so weird*/}
            <a className="btn btn-primary" href="https://q.me-qr.com/jmlr762q" target="_blank" rel="noopener noreferrer">
Register Now </a>

            {/*<Link className="btn btn-primary" to="/register">
              Register Now
            </Link>*/}

            <a className="btn btn-secondary" href="#about">
              Learn More
            </a>
          </div>
        </div>
      </main>


      <section id="about" className="section">
  <h2>About RESOLVE</h2>
  
  
  <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
    
    <img 
      src={resolveposter} 
      alt="RESOLVE '26 Poster" 
      className="resolve-poster" 
      width="250" 
      height="350"
      style={{ display: "block", flexShrink: 0 }} 
    />
    
    <div style={{ textAlign: "left", fontSize: "30px" }}>
      <p>
        {" "}
  <span style={{
    color: "#7a3ddb",
    fontWeight: "700",
    fontSize: "36px",
    textShadow: "0 0 6px rgba(255, 255, 255, 0.8), 0 0 12px rgba(255, 255, 255, 0.45), 0 0 20px rgba(255, 255, 255, 0.25)"
  }}>DNS</span> invites students from across the nation to participate in <span style={{
    color: "#7a3ddb",
    fontWeight: "700",
    fontSize: "36px",
    textShadow: "0 0 6px rgba(255, 255, 255, 0.8), 0 0 12px rgba(255, 255, 255, 0.45), 0 0 20px rgba(255, 255, 255, 0.25)"
  }}>RESOLVE'26</span> Game Jam that will test students' game development skills.</p>
      <p>Build innovative games, play with a team, and compete for top prizes at the campus game jam.</p>
    </div>

  </div>
</section>



      <section id="timeline" className="section timeline-section">
        <h2>Event Timeline</h2>

        <div className="timeline-visual">
          <div className="timeline-row timeline-day-row">
            <div className="timeline-side" />
            <div className="timeline-day-card">
              <span>31</span>
              <p>August 2026</p>
            </div>
            <div className="timeline-side" />
          </div>

          <div className="timeline-row timeline-item-row right">
            <div className="timeline-side" />
            <div className="timeline-marker" />
            <div className="timeline-card">
              <p>9:00AM • Launch & Mentoring</p>
            </div>
          </div>

          <div className="timeline-row timeline-item-row left">
            <div className="timeline-card">
              <p>11:00AM - 2:00PM • Mentoring Sessions Start</p>
            </div>
            <div className="timeline-marker" />
            <div className="timeline-side" />
          </div>

          <div className="timeline-row timeline-item-row right">
            <div className="timeline-side" />
            <div className="timeline-marker" />
            <div className="timeline-card">
              <p>2:00PM - 5:00PM • Day 1 game development</p>
            </div>
          </div>

          <div className="timeline-row timeline-item-row left">
            <div className="timeline-card">
              <p>5:00PM • First Round</p>
            </div>
            <div className="timeline-marker" />
            <div className="timeline-side" />
          </div>

          <div className="timeline-row timeline-day-row">
            <div className="timeline-side" />
            <div className="timeline-day-card">
              <span>1</span>
              <p>September 2026</p>
            </div>
            <div className="timeline-side" />
          </div>

          <div className="timeline-row timeline-item-row right">
            <div className="timeline-side" />
            <div className="timeline-marker" />
            <div className="timeline-card">
              <p>8:00AM • Competition starts for both pass 1 and pass 2</p>
            </div>
          </div>

          <div className="timeline-row timeline-item-row left">
            <div className="timeline-card">
              <p>1:00PM • Final round submission and voting starts</p>
            </div>
            <div className="timeline-marker" />
            <div className="timeline-side" />
          </div>

          <div className="timeline-row timeline-item-row right">
            <div className="timeline-side" />
            <div className="timeline-marker" />
            <div className="timeline-card">
              <p>2:30PM • Valedictory starts</p>
            </div>
          </div>
        </div>
      </section>


      <section id="register" className="section section-register">
        <h2 style={{marginBottom: "20px" }}>Registration</h2>

        <p style={{ fontSize: "20px", textAlign: "center" }}>
          First round registration is free.
          </p><p style={{ fontSize: "20px", textAlign: "center" }}>
          Grab your team of 3 and jump into
          the pixel jam.
          </p><p style={{  fontSize: "20px", textAlign: "center"}}>
          Game passes required only for team that pregresses to the second round. 
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
{/*im going to comment this link to the website btw jsx comments are so weird*/}
<a className="btn btn-primary" href="https://q.me-qr.com/jmlr762q" target="_blank" rel="noopener noreferrer">
Register Now </a>

  {/*<Link className="btn btn-primary" to="/register">
  Register Now
</Link>*/}

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