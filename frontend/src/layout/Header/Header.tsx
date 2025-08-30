import { useState } from "react";
import styles from "./Header.module.css";
import orchardLogo from "../../assets/OrchardLogoHeader.png";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import podcast from "../../assets/podcast.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.headerDiv}>
      <div
        className={styles.headerDivFlex}
        style={menuOpen ? { transform: "translateX(-300px)" } : {}}
      >
        {/* Logo */}
        <img className={styles.headerLogo} src={orchardLogo} alt="The Orchard" />

        {/* Desktop Nav */}
        <nav className={styles.navLinks}>
          <a href="/index.php">HOME</a>
          <a href="/about.php">ABOUT US</a>
          <a href="/visit.php">VISIT US</a>
          <a href="/media.php">MEDIA</a>
          <a href="/otherchurches.php">OTHER CHURCHES</a>
          <a href="/contact.php">CONTACT US</a>
          <a
            href="/contact.php"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", borderRadius: "3px" }}
          >
            LOG IN
          </a>
        </nav>
        {!menuOpen && (
          <div className={styles.socials}>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://podcasts.com" target="_blank" rel="noreferrer">
              <img src={podcast} alt="Podcast" />
            </a>
          </div>
        )}

        {/* Burger (mobile only) */}
        <button className={styles.burgerButton} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Side Menu */}
      <div className={`${styles.sideMenu} ${menuOpen ? styles.showMenu : ""}`}>
        <a href="/index.php">HOME</a>
        <a href="/about.php">ABOUT US</a>
        <a href="/visit.php">VISIT US</a>
        <a href="/media.php">MEDIA</a>
        <a href="/otherchurches.php">OTHER CHURCHES</a>
        <a href="/contact.php">CONTACT US</a>
        <a
          href="/contact.php"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.3)", borderRadius: "3px" }}
        >
          LOG IN
        </a>
      </div>
    </header>
  );
}
