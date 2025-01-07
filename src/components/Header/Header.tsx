import styles from './Header.module.css'


export default function Header(){
  return(
    <div className={styles.headerDiv}>
      <div className={styles.headerDivFlex}>
        <img className={styles.headerLogo} src={'public/OrchardLogoHeader.png'} />
      </div>
    </div>
  )
  
}