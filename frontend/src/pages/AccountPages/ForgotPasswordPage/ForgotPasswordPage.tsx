import styles from "../accountPages.module.css";
import { signupStore } from "./ForgotPasswordStore";
import orchardLogo from "../../../assets/OrchardLogoGray.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import EmailInput from "../components/EmailInput";

export default function ForgotPasswordPage() {
  // store
  const { email, emailValid, setEmail, reset } = signupStore();

  // submit
  const testSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: MUST ENSURE THE EMAIL IS TIED TO AN ACCOUNT
    if (email !== "" && emailValid === true) {
      console.log(email);
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
            testSubmit(e);
          }}
          noValidate
        >
          <EmailInput value={email} onChange={setEmail} />
          <div className={styles.spacerDiv} />
          <button className={styles.loginButton} type="submit">
            Send Email
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
