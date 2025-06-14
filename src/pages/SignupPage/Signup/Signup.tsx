import styles from '../../LoginPage/Login/Login.module.css'
import { signupStore } from '../SignupStore';
import orchardLogo from "../../../assets/OrchardLogoGray.png"
import { Link } from "react-router-dom";

export default function Login() {
  const { email, password1, password2, showPassword, focusPassword1, focusPassword2, setEmail, setPassword1, setPassword2, setShowPassword, setFocusPassword1, setFocusPassword2 } = signupStore();
  const testSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password1, password2)
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
            onBlur={() => setFocusPassword1(false)}
          />
          <button className={focusPassword1 ? styles.showPasswordButtonFocus: styles.showPasswordButton} onClick={setShowPassword}>
            {showPassword ? "Hide": "Show"}
          </button>
          <div className={styles.spacerDiv} />
          <input 
            className={styles.password} placeholder="Repeat Password" type={showPassword ? "text": "password"} autoComplete="current-password" 
            onChange={(e) => setPassword1(e.target.value)} onFocus={() => setFocusPassword2(true)} 
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