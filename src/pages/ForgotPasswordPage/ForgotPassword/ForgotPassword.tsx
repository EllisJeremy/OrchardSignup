import styles from "../../LoginPage/Login/Login.module.css";
import { signupStore } from "../ForgotPasswordStore";
import orchardLogo from "../../../assets/OrchardLogoGray.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  // store
  const {
    email,
    emailValid,
    firstEditEmail,
    setEmail,
    setEmailValid,
    setFirstEditEmail,
  } = signupStore();

  // submit
  const testSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: MUST ENSURE THE EMAIL IS TIED TO AN ACCOUNT
    if (email !== "" && emailValid === true) {
      console.log(email);
    }
  };

  // border color if error
  const getBorderColorSimple = (firstEdit1: boolean, compare1: boolean) => {
    // error
    if (compare1 === false) {
      return "rgb(255, 53, 53)";
    }
    // correct
    if (!firstEdit1) {
      return "hsl(138, 100%, 40%)";
    }
    // normal
    return "rgb(225, 226, 231)";
  };

  // reset state on page leave
  const reset = signupStore((state) => state.reset);
  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

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
          <input
            className={styles.email}
            type="email"
            required
            placeholder="Email"
            autoComplete="email"
            onChange={(e) => {
              const newEmail = e.target.value;
              setEmail(newEmail);
              if (!firstEditEmail) setEmailValid(e.target.validity.valid);
            }}
            onBlur={(e) => {
              setFirstEditEmail(false);
              setEmailValid(e.target.validity.valid);
            }}
            style={{
              borderColor: getBorderColorSimple(firstEditEmail, emailValid),
            }}
          />
          {emailValid === true ? (
            <div className={styles.spacerDiv} />
          ) : (
            <p className={styles.error}>Please enter a valid email address.</p>
          )}

          <button className={styles.loginButton} type="submit">
            Sign up
          </button>
        </form>
      </div>

      <div className={styles.signupDiv}>
        <Link className={styles.loginButton} to="/">
          Return To Log in
        </Link>
      </div>
    </div>
  );
}
