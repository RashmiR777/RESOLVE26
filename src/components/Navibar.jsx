import { useState, useEffect } from "react";

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      // Close menu when switching to desktop
      if (!mobile) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "600",
    transition: "0.3s",
  };

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          width: "calc(100% - 40px)",
          padding: "15px 40px",
          margin: "20px auto",

          position: "sticky",
          top: "20px",
          zIndex: "1000",

          backgroundColor: "rgba(173, 80, 255, 0.35)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",

          border: "4px solid rgba(255,255,255,0.8)",

          boxShadow: `
            4px 4px 0 rgba(40,0,70,0.9),
            8px 8px 0 rgba(20,0,40,0.5)
          `,

          color: "black",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <img
            src="/favicon.jpeg"
            alt="DNS Logo"
            style={{
              height: isMobile ? "40px" : "50px",
            }}
          />

          <h2
            style={{
              margin: 0,
              fontSize: isMobile ? "34px" : "50px",
              color: "#000",
            }}
          >
            DNS
          </h2>
        </div>

        {/* Desktop Navbar */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
              fontSize: "20px",
            }}
          >
            <a href="#home" style={linkStyle}>
              Home
            </a>

            <a href="#about" style={linkStyle}>
              About
            </a>

            <a href="#timeline" style={linkStyle}>
              Timeline
            </a>

            <a
              href="https://q.me-qr.com/jmlr762q"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Register Now
            </a>

            <a href="#contact" style={linkStyle}>
              Contact
            </a>
          </div>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "34px",
              cursor: "pointer",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        )}
      </nav>

      {/* Mobile Dropdown */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "sticky",
            top: "100px",
            zIndex: "999",

            width: "calc(100% - 40px)",
            margin: "-10px auto 20px",

            background: "rgba(173,80,255,0.35)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",

            border: "4px solid rgba(255,255,255,0.8)",

            boxShadow: `
              4px 4px 0 rgba(40,0,70,0.9),
              8px 8px 0 rgba(20,0,40,0.5)
            `,

            display: "flex",
            flexDirection: "column",
          }}
        >
          <a
            href="#home"
            style={{
              ...linkStyle,
              padding: "18px",
              borderBottom: "2px solid rgba(255,255,255,.2)",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="#about"
            style={{
              ...linkStyle,
              padding: "18px",
              borderBottom: "2px solid rgba(255,255,255,.2)",
            }}
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#timeline"
            style={{
              ...linkStyle,
              padding: "18px",
              borderBottom: "2px solid rgba(255,255,255,.2)",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Timeline
          </a>

          <a
            href="https://q.me-qr.com/jmlr762q"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...linkStyle,
              padding: "18px",
              borderBottom: "2px solid rgba(255,255,255,.2)",
            }}
          >
            Register Now
          </a>

          <a
            href="#contact"
            style={{
              ...linkStyle,
              padding: "18px",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
}

export default Navbar;