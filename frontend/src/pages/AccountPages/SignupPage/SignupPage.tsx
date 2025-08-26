import styles from "../accountPages.module.css";
import { signupStore } from "./SignupStore";
import orchardLogo from "../../../assets/OrchardLogoGray.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import eye from "../../../assets/eye.svg";
import eyeClosed from "../../../assets/eyeClosed.svg";
import { EmailInput } from "../components/EmailInput";
import { createUser } from "./signupNetwork";

export default function SignupPage() {
  // store
  const {
    email,
    password1,
    password2,
    emailValid,
    showPassword,
    focusPassword1,
    focusPassword2,
    passwordError,
    match,
    firstEdit1,
    firstEdit2,
    firstEditEmail,
    setEmail,
    setPassword1,
    setPassword2,
    setEmailValid,
    setShowPassword,
    setFocusPassword1,
    setFocusPassword2,
    setPasswordError,
    setMatch,
    setFirstEdit1,
    setFirstEdit2,
    setFirstEditEmail,
    reset,
  } = signupStore();

  // submit
  const testSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      // fields are not blank
      email !== "" &&
      password1 !== "" &&
      password2 !== "" &&
      // no email error
      emailValid === true &&
      // no password error
      passwordError === "" &&
      // passwords match
      password1 === password2
    ) {
      (async () => {
        const res = await createUser(email, password1, "john");
        console.log(res);
      })();
    }
  };

  const regexUpper = /[A-Z]/;
  const regexLower = /[a-z]/;
  const regexNumber = /[0-9]/;
  const regexSpecial = /[!@#$%^&*()\-_=+[\]{}|;:',.<>/?]/;

  const validPassword = (password1: string) => {
    const n: number = password1.length;

    if (n < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      return;
    } else if (n > 64) {
      setPasswordError("Password must be less than 65 characters long");
      return;
    }
    const hasUpper: boolean = regexUpper.test(password1);
    const hasLower: boolean = regexLower.test(password1);
    const hasNumber: boolean = regexNumber.test(password1);
    const hasSpecial: boolean = regexSpecial.test(password1);

    if (!hasUpper || !hasLower || !hasNumber || !hasSpecial) {
      const errorList: string[] = [];
      if (!hasUpper) {
        errorList.push("uppercase letter");
      }
      if (!hasLower) {
        errorList.push("lowercase letter");
      }
      if (!hasNumber) {
        errorList.push("number");
      }
      if (!hasSpecial) {
        errorList.push("special character");
      }
      let errorLine: string = "Password must contain at least 1 ";
      if (errorList.length === 1) {
        errorLine += errorList[0];
      } else if (errorList.length === 2) {
        errorLine += errorList[0] + " and " + errorList[1];
      } else if (errorList.length === 3) {
        errorLine += errorList[0] + ", " + errorList[1] + ", and " + errorList[2];
      } else if (errorList.length === 4) {
        errorLine +=
          errorList[0] + ", " + errorList[1] + ", " + errorList[2] + ", and " + errorList[3];
      }

      errorLine += ".";
      setPasswordError(errorLine);
    } else {
      setPasswordError("");
    }
  };

  // border color if error
  const getBorderColor = (
    firstEdit1: boolean,
    firstEdit2: boolean,
    compare1: string | boolean,
    compare2: string | boolean,
    compare3: string | boolean,
    compare4: string | boolean,
    focus: boolean,
  ) => {
    // error
    if (compare1 !== compare2 || compare3 !== compare4) {
      return "rgb(255, 53, 53)";
    }
    // correct
    if (!firstEdit1 && !firstEdit2) {
      return "hsl(138, 100%, 40%)";
    }
    // focus
    else if (focus) {
      return "rgb(175, 176, 191)";
    }
    // normal
    return "rgb(225, 226, 231)";
  };

  // reset state on page leave
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
              style={{
                borderColor: getBorderColor(
                  firstEdit1,
                  firstEdit1,
                  passwordError,
                  "",
                  passwordError,
                  "",
                  focusPassword1,
                ),
              }}
              onChange={(e) => {
                const newPassword1 = e.target.value;
                setPassword1(newPassword1);
                if (!firstEdit1) validPassword(newPassword1);
                if (!firstEdit2) setMatch(newPassword1 === password2);
              }}
              onFocus={() => setFocusPassword1(true)}
              onBlur={(e) => {
                setFocusPassword1(false);
                validPassword(e.target.value);
                setFirstEdit1(false);
              }}
            />
            <button
              type="button"
              style={{
                borderColor: getBorderColor(
                  firstEdit1,
                  firstEdit1,
                  passwordError,
                  "",
                  passwordError,
                  "",
                  focusPassword1,
                ),
              }}
              className={styles.showPasswordButton}
              onClick={setShowPassword}
            >
              <img className={styles.eye} src={showPassword ? eye : eyeClosed} />
            </button>
          </div>
          {passwordError === "" ? (
            <div className={styles.spacerDiv} />
          ) : (
            <p className={styles.error}>{passwordError}</p>
          )}
          <div className={styles.inputDiv}>
            <input
              style={{
                borderColor: getBorderColor(
                  firstEdit1,
                  firstEdit2,
                  match,
                  true,
                  passwordError,
                  "",
                  focusPassword2,
                ),
              }}
              className={styles.password}
              placeholder="Repeat Password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              onChange={(e) => {
                const newPassword2 = e.target.value;
                setPassword2(newPassword2);
                if (!firstEdit2) setMatch(password1 === newPassword2);
              }}
              onFocus={() => setFocusPassword2(true)}
              onBlur={() => {
                setFocusPassword2(false);
                setMatch(password1 === password2);
                setFirstEdit2(false);
              }}
            />
            <button
              type="button"
              style={{
                borderColor: getBorderColor(
                  firstEdit1,
                  firstEdit2,
                  match,
                  true,
                  passwordError,
                  "",
                  focusPassword2,
                ),
              }}
              className={styles.showPasswordButton}
              onClick={setShowPassword}
            >
              <img className={styles.eye} src={showPassword ? eye : eyeClosed} />
            </button>
          </div>
          {match === true ? (
            <div className={styles.spacerDiv} />
          ) : (
            <p className={styles.error}>Passwords do not match.</p>
          )}

          <input
            className={styles.name}
            placeholder="First Name"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            onChange={(e) => {
              const newPassword2 = e.target.value;
              setPassword2(newPassword2);
              if (!firstEdit2) setMatch(password1 === newPassword2);
            }}
            onBlur={() => {
              setFocusPassword2(false);
              setMatch(password1 === password2);
              setFirstEdit2(false);
            }}
          />
          {match === true ? (
            <div className={styles.spacerDiv} />
          ) : (
            <p className={styles.error}>First Name Required</p>
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
