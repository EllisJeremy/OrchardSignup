import { useState } from "react";
import styles from "./Header.module.css";
import orchardLogo from "../../assets/OrchardLogoHeader.png";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import podcast from "../../assets/podcast.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}

      <header className={styles.headerDiv}>
        <div
          className={styles.headerDivFlex}
          style={menuOpen ? { transform: "translateX(-300px)" } : {}}
        >
          {/* Logo */}
          <a href="https://beyondsunday.org/" style={{ height: "46px" }}>
            <img className={styles.headerLogo} src={orchardLogo} alt="The Orchard" />
          </a>
          {/* Desktop Nav */}
          <nav className={styles.navLinks}>
            <a href="https://beyondsunday.org/index.php">HOME</a>
            <a href="https://beyondsunday.org/about.php">ABOUT US</a>
            <a href="https://beyondsunday.org/visit.php">VISIT US</a>
            <a href="https://beyondsunday.org/media.php">MEDIA</a>
            <a href="https://beyondsunday.org/otherchurches.php">OTHER CHURCHES</a>
            <a href="https://beyondsunday.org/contact.php">CONTACT US</a>
            <a
              href="/"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", borderRadius: "3px" }}
            >
              LOG IN
            </a>
          </nav>
          {!menuOpen && (
            <div className={styles.socials}>
              <a href="https://x.com/waybeyondsunday" target="_blank" rel="noreferrer">
                <div>
                  <img src={twitter} alt="Twitter" />
                </div>
              </a>

              <a
                href="https://www.instagram.com/orchardbeyondsunday/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <img src={instagram} alt="Instagram" />
                </div>
              </a>

              <a
                href="https://podcasts.apple.com/us/podcast/messages-of-the-orchard-church/id317760786"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <img src={podcast} alt="Podcast" />
                </div>
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
          <a href="https://beyondsunday.org/index.php">HOME</a>
          <a href="https://beyondsunday.org/about.php">ABOUT US</a>
          <a href="https://beyondsunday.org/visit.php">VISIT US</a>
          <a href="https://beyondsunday.org/media.php">MEDIA</a>
          <a href="https://beyondsunday.org/otherchurches.php">OTHER CHURCHES</a>
          <a href="https://beyondsunday.org/contact.php">CONTACT US</a>
          <a href="/" style={{ backgroundColor: "rgba(255, 255, 255, 0.3)", borderRadius: "3px" }}>
            LOG IN
          </a>
        </div>
      </header>
    </>
  );
}
