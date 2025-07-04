import styles from "./Login.module.css";
import { loginStore } from "../LoginStore";
import orchardLogo from "../../../assets/OrchardLogoGray.png";
import { Link } from "react-router-dom";
import eye from "../../../assets/eye.svg";
import eyeClosed from "../../../assets/eyeClosed.svg";
import { EmailInput } from "../Components/EmailInput";
import { useEffect } from "react";

export default function Login() {
  const {
    email,
    password,
    showPassword,
    focusPassword,
    firstEditEmail,
    emailValid,
    setEmail,
    setPassword,
    setShowPassword,
    setFocusPassword,
    setFirstEditEmail,
    setEmailValid,
    reset,
  } = loginStore();

  const testSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
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
            testSubmit(e);
          }}
          noValidate
        >
          <EmailInput
            value={email}
            onChange={setEmail}
            onValidChange={setEmailValid}
            firstEdit={firstEditEmail}
            setFirstEdit={setFirstEditEmail}
            emailValid={emailValid}
          />

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
