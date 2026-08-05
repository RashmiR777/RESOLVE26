import { useState, useEffect } from "react";

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        width: isMobile ? "calc(100% - 20px)" : "calc(100% - 40px)",
        padding: isMobile ? "12px 18px" : "15px 40px",
        margin: "20px auto",

        position: "sticky",
        top: "20px",
        zIndex: 1000,

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
          gap: isMobile ? "8px" : "12px",
        }}
      >
        <img
          src="/favicon.jpeg"
          alt="DNS Logo"
          style={{
            height: isMobile ? "36px" : "50px",
          }}
        />

        <h2
          style={{
            margin: 0,
            fontSize: isMobile ? "28px" : "50px",
            color: "#000",
          }}
        >
          DNS
        </h2>
      </div>

      {/* Links */}
      <div
        style={{
          display: "flex",
          gap: isMobile ? "14px" : "30px",
          alignItems: "center",
          fontSize: isMobile ? "15px" : "20px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="#home"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Home
        </a>

        <a
          href="#about"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          About
        </a>

        <a
          href="#timeline"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Timeline
        </a>

        <a
          href="https://q.me-qr.com/jmlr762q"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Register Now
        </a>

        <a
          href="#contact"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;