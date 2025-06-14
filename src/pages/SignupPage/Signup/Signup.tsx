import styles from '../../LoginPage/Login/Login.module.css'
import { signupStore } from '../SignupStore';
import orchardLogo from "../../../assets/OrchardLogoGray.png"
import { Link } from "react-router-dom";

export default function Login() {
  const { email, password1, password2, showPassword, focusPassword1, focusPassword2, valid, setEmail, setPassword1, setPassword2, setShowPassword, setFocusPassword1, setFocusPassword2, setValid } = signupStore();
  const testSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (valid) {
      e.preventDefault();
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
      console.log("too short ")
      return "Password must be at least 8 characters long.";
    }
    else if (n > 64){
      return "Password must be less than 65 characters long";
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
      


      return errorList
    }

    else {
      setValid(true)
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
            onChange={(e) => setPassword1(e.target.value)} onFocus={() => setFocusPassword1(true)} 
            onBlur={(e) =>{ setFocusPassword1(false); validPassword(e.target.value)}  }
          />
          <button className={focusPassword1 ? styles.showPasswordButtonFocus: styles.showPasswordButton} onClick={setShowPassword}>
            {showPassword ? "Hide": "Show"}
          </button>
          <div className={styles.spacerDiv} />
          <input 
            className={styles.password} placeholder="Repeat Password" type={showPassword ? "text": "password"} autoComplete="current-password" 
            onChange={(e) => setPassword2(e.target.value)} onFocus={() => setFocusPassword2(true)} 
            onBlur={() => setFocusPassword2(false)}
          />
          <button className={focusPassword2 ? styles.showPasswordButtonFocus: styles.showPasswordButton} onClick={setShowPassword}>
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