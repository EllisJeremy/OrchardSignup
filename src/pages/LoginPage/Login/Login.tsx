import styles from './Login.module.css'
import orchardLogo from "../../../assets/OrchardLogoGray.png"

export default function Login() {
  return (
    <div className={styles.mainDiv}>

      <div className={styles.loginDiv}>
        <div className={styles.headerDiv}>
          <img className={styles.orchardLogo} src={orchardLogo} />
        </div>

        <input className={styles.username} placeholder='username' />
        <input className={styles.password} placeholder='password' />
        <button className={styles.loginButton} >Log in</button>
      </div>

      <div className={styles.signupDiv}>
        <button className={styles.loginButton} >Sign up</button>
        <button className={styles.loginButton} >Continue as Guest</button>
      </div>
    </div>
  );
}