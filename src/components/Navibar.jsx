import { Link } from "react-router-dom";

function Navbar() {
  return (
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
        zIndex: 1000,

        backgroundColor: "rgba(173, 80, 255, 0.35)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",

        borderRadius: "0",

        border: "4px solid rgba(255,255,255,0.8)",

        boxShadow: `
4px 4px 0 rgba(40,0,70,0.9),
8px 8px 0 rgba(20,0,40,0.5)
`,
        color: "black",
      }}
    >
      
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
          style={{ height: "50px" }}
        />

        <h2
          style={{
            margin: 0,
            fontSize: "50px",
            color: "#000",
          }}
        >
          DNS
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
          fontSize:"20px",
        }}
      >
        <a
          href="#home"
          style={{
            color: "#000",
            textDecoration: "none",
            fontWeight: "600",
            transition: "0.3s",
          }}
        >
          Home
        </a>

        <a
          href="#about"
          style={{
            color: "#000",
            textDecoration: "none",
            fontWeight: "600",
            transition: "0.3s",
          }}
        >
          About
        </a>

        <a
          href="#timeline"
          style={{
            color: "#000",
            textDecoration: "none",
            fontWeight: "600",
            transition: "0.3s",
          }}
        >
          Timeline
        </a>

        

        <Link
          to="/register"
          style={{
            color: "#000",
            textDecoration: "none",
            fontWeight: "600",
            transition: "0.3s",
          }}
        >
          Register
        </Link>

        <a
          href="#contact"
          style={{
            color: "#000",
            textDecoration: "none",
            fontWeight: "600",
            transition: "0.3s",
          }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;