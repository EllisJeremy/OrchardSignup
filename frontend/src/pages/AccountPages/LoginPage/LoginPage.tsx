import styles from "../accountPages.module.css";
import { loginStore } from "./LoginStore";
import { useAuthStore } from "../../../globalStores/useAuthStore";
import orchardLogo from "../../../assets/OrchardLogoGray.png";
import { Link } from "react-router-dom";
import eye from "../../../assets/eye.svg";
import eyeClosed from "../../../assets/eyeClosed.svg";
import EmailInput from "../components/EmailInput";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { login, user } = useAuthStore();
  const {
    email,
    password,
    showPassword,
    focusPassword,
    loginFailed,
    setEmail,
    setPassword,
    setShowPassword,
    setFocusPassword,
    setLoginFailed,
    reset,
  } = loginStore();

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/menu");
    }
  }, [user, navigate]);

  const attemptLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = await login(email, password);
    if (!success) {
      setLoginFailed(true);
    }
  };

  useEffect(() => {
    return () => reset();
  }, [reset]);

  return (
    <div className={styles.mainDiv}>
      <div className={styles.loginDiv}>
        <div className={styles.headerDiv}>
          <img className={styles.orchardLogo} src={orchardLogo} />
        </div>
        <form
          onSubmit={(e) => {
            attemptLogin(e);
          }}
          noValidate
        >
          <EmailInput value={email} onChange={setEmail} />
          <div className={styles.spacerDiv} />
          <div className={styles.inputDiv}>
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
              className={focusPassword ? styles.showPasswordButtonFocus : styles.showPasswordButton}
              onClick={setShowPassword}
            >
              <img className={styles.eye} src={showPassword ? eye : eyeClosed} />
            </button>
          </div>
          <div className={styles.spacerDiv} />
          <button className={styles.loginButton} type="submit">
            Log in
          </button>
          {!loginFailed ? (
            <div className={styles.spacerDiv} />
          ) : (
            <p className={styles.error}>Email or password is incorrect</p>
          )}
        </form>
      </div>

      <div className={styles.signupDiv}>
        <Link className={styles.loginButton} to="/ForgotPassword">
          Forgot Password
        </Link>
        <div className={styles.spacerDiv} />
        <Link className={styles.loginButton} to="/Signup">
          Sign up
        </Link>
        <div className={styles.spacerDiv} />
        <Link className={styles.loginButton} to="/Menu">
          Continue as Guest
        </Link>
      </div>
    </div>
  );
}
