import styles from './Header.module.css'


export default function Header(){
  return(
    <div className={styles.headerDiv}>
      <div className={styles.headerDivFlex}>
        <img className={styles.headerLogo} src={'/OrchardLogoHeader.png'} />
      </div>
    </div>
  )
  
}