import Navbar from "./components/Navibar";
import "./App.css";
import { Link } from "react-router-dom";
import resolveLogo from "./assets/Resolve'26.png";
import resolveposter from "./assets/resolve'26-poster.jpeg";

function App() {
  const registerUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSdCuOLkGm009WvSVem5CyNPh8PbniCZnAJv8BXdmm2Wg1PjjQ/viewform";

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
            <a className="btn btn-primary" href={registerUrl} target="_blank" rel="noopener noreferrer">
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
  <h2 style={{marginBottom: 10}}>About RESOLVE</h2>
  
  
  <div className="about-content">
    
    <img 
      src={resolveposter} 
      alt="RESOLVE '26 Poster" 
      className="resolve-poster" 
      width="250" 
      height="350"
      style={{ display: "block", flexShrink: 0 }} 
    />
    
    <div className="about-text">
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
              <p>Aug</p><p>2026</p>
            </div>
            <div className="timeline-side" />
          </div>

          <div className="timeline-row timeline-item-row right">
            <div className="timeline-side" />
            <div className="timeline-marker" />
            <div className="timeline-card">
              <div className="timeline-content">
                <strong>9:00 AM</strong>
                <span>Launch & Mentoring</span>
              </div>
            </div>
          </div>

          <div className="timeline-row timeline-item-row left">
            <div className="timeline-card">
              <div className="timeline-content">
                <strong>11:00 AM – 2:00 PM</strong>
                <span>Mentoring Sessions Start</span>
              </div>
            </div>
            <div className="timeline-marker" />
            <div className="timeline-side" />
          </div>

          <div className="timeline-row timeline-item-row right">
            <div className="timeline-side" />
            <div className="timeline-marker" />
            <div className="timeline-card">
              <div className="timeline-content">
                <strong>2:00 PM – 5:00 PM</strong>
                <span>Day 1 Game Development</span>
              </div>
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
              <span>01</span>
              <p>Sep</p> <p>2026</p>
            </div>
            <div className="timeline-side" />
          </div>

          <div className="timeline-row timeline-item-row right">
            <div className="timeline-side" />
            <div className="timeline-marker" />
            <div className="timeline-card">
              <p>8:00AM • Competition starts for pass 1 & pass 2</p>
            </div>
          </div>

          <div className="timeline-row timeline-item-row left">
            <div className="timeline-card">
              <p>1:00PM • 1st round submission & voting starts</p>
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
<a className="btn btn-primary" href={registerUrl} target="_blank" rel="noopener noreferrer">
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
        <br/>
        Dr. Daniel
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