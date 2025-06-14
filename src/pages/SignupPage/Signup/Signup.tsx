import styles from '../../LoginPage/Login/Login.module.css'
import { signupStore } from '../SignupStore';
import orchardLogo from "../../../assets/OrchardLogoGray.png"
import { Link } from "react-router-dom";

export default function Login() {
  const { 
    email, password1, password2, showPassword, focusPassword1, focusPassword2, valid, passwordError,
    setEmail, setPassword1, setPassword2, setShowPassword, setFocusPassword1, setFocusPassword2, setValid, setPasswordError
  } = signupStore();
  const testSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (valid) {
      
      console.log(email, password1, password2)
    }
  }

  // regex
  const regexUpper = /[A-Z]/;
  const regexLower = /[a-z]/;
  const regexNumber = /[0-9]/;
  const regexSpecial = /[!@#$%^&*()\-_=+[\]{}|;:',.<>/?]/;

  const validPassword = (password1: string) => {
    const n: number = password1.length;
    
    if (n < 8){
      setPasswordError("Password must be at least 8 characters long.");
      return 
    }
    else if (n > 64){
      setPasswordError("Password must be less than 65 characters long");
      return
    }
    const hasUpper: boolean = regexUpper.test(password1);
    const hasLower: boolean = regexLower.test(password1);
    const hasNumber: boolean = regexNumber.test(password1);
    const hasSpecial: boolean = regexSpecial.test(password1);

    if (!hasUpper || !hasLower || !hasNumber || !hasSpecial) {
      const errorList: string[] = [];
      if (!hasUpper) {
        console.log("too short ")
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
      setPasswordError(errorList.join("")) 
    }
    else {
      setPasswordError("") 
    }


  }

  return (
    <div className={styles.mainDiv}>

      <div className={styles.loginDiv}>
        <div className={styles.headerDiv}>
          <img className={styles.orchardLogo} src={orchardLogo} />
        </div>
        <form onSubmit={testSubmit} >
          <input className={styles.username} type="email" placeholder="Email" autoComplete="email" onChange={(e) => setEmail(e.target.value)} />
          <div className={styles.spacerDiv} />
          <input 
            className={styles.password} placeholder="Password" type={showPassword ? "text": "password"} autoComplete="current-password" 
            style={{borderColor: passwordError === "" ? "rgb(225, 226, 231)" : "red"}}
            onChange={(e) => setPassword1(e.target.value)} onFocus={() => setFocusPassword1(true)} 
            onBlur={(e) =>{ setFocusPassword1(false); validPassword(e.target.value)}}
          />
          <button type="button" className={focusPassword1 ? styles.showPasswordButtonFocus: styles.showPasswordButton} onClick={setShowPassword}>
            {showPassword ? "Hide": "Show"}
          </button>
          {
            passwordError === "" 
            ? <div className={styles.spacerDiv} />
            : <p className={styles.error}>{passwordError}</p>
          }
          <input 
            className={styles.password} placeholder="Repeat Password" type={showPassword ? "text": "password"} autoComplete="current-password" 
            onChange={(e) => setPassword2(e.target.value)} onFocus={() => setFocusPassword2(true)} 
            onBlur={() => setFocusPassword2(false)}
          />
          <button type="button" className={focusPassword2 ? styles.showPasswordButtonFocus: styles.showPasswordButton} onClick={setShowPassword}>
            {showPassword ? "Hide": "Show"}
          </button>


          <div className={styles.spacerDiv} />
          <button className={styles.loginButton} type="submit" >Sign up</button>
        </form>
      </div>
      
      <div className={styles.signupDiv}>
        <Link className={styles.loginButton} to="/">Return To Log in</Link>
      </div>
    </div>
  );
}