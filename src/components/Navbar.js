// src/components/Navbar.js
import React from "react"; // Importazione unica di React
import { Link } from "react-router-dom"; // Per la navigazione con react-router-dom

function Navbar() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        {/* Collegamenti di navigazione */}
        <li style={styles.navItem}>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/info" style={styles.link}>Info</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/register" style={styles.link}>Registrati</Link>
        </li>
      </ul>
    </nav>
  );
}

// Stili per la navbar
const styles = {
  nav: {
    background: "#333",
    color: "white",
    padding: "1rem",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-around",
    margin: 0,
    padding: 0,
  },
  navItem: {
    fontSize: "1.2rem",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
};

export default Navbar;