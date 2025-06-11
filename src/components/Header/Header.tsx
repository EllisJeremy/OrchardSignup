import styles from './Header.module.css'
import orchardLogo from '../../assets/OrchardLogoHeader.png'
export default function Header() {
  return (
    <div className={styles.headerDiv}>
      <div className={styles.headerDivFlex}>
        <img className={styles.headerLogo} src={orchardLogo} />
      </div>
    </div>
  )

}