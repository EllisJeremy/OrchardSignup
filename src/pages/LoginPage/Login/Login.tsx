import styles from "./Login.module.css";
import { loginStore } from "../LoginStore";
import orchardLogo from "../../../assets/OrchardLogoGray.png";
import { Link } from "react-router-dom";

export default function Login() {
  const {
    email,
    password,
    showPassword,
    focusPassword,
    setEmail,
    setPassword,
    setShowPassword,
    setFocusPassword,
  } = loginStore();
  const testSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.loginDiv}>
        <div className={styles.headerDiv}>
          <img className={styles.orchardLogo} src={orchardLogo} />
        </div>
        <form onSubmit={testSubmit}>
          <input
            className={styles.username}
            type="email"
            placeholder="Email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={styles.spacerDiv} />
          <input
            className={styles.password}
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setFocusPassword(true)}
            onBlur={() => setFocusPassword(false)}
          />
          <button
            type="button"
            className={
              focusPassword
                ? styles.showPasswordButtonFocus
                : styles.showPasswordButton
            }
            onClick={setShowPassword}
          >
            {showPassword ? "Hide" : "Show"}
          </button>

          <div className={styles.spacerDiv} />
          <button className={styles.loginButton} type="submit">
            Log in
          </button>
        </form>
      </div>

      <div className={styles.signupDiv}>
        <Link className={styles.loginButton} to="/">
          Forgot Password
        </Link>
        <div className={styles.spacerDiv} />
        <Link className={styles.loginButton} to="/signup">
          Sign up
        </Link>
        <div className={styles.spacerDiv} />
        <Link className={styles.loginButton} to="/menu">
          Continue as Guest
        </Link>
      </div>
    </div>
  );
}
