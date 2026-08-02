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

        borderRadius: "25px",

        border: "1px solid rgba(198, 170, 255, 0.7)",

        boxShadow:
          "0 0 20px rgba(72, 0, 255, 0.45), 0 0 45px rgba(68, 0, 255, 0.25)",

        color: "black",
      }}
    >
      {/* Left Side */}
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
            fontSize: "30px",
            color: "#000",
          }}
        >
          DNS
        </h2>
      </div>

      {/* Right Side */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
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