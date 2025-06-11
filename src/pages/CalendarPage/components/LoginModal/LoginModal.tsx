import styles from './LoginModal.module.css'

import { modalStore } from "../../calendarStore"

import x from '../../../../assets/X.svg'

export default function LoginModal() {

  const { loginModal, openCloseLoginModal } = modalStore();


  if (!loginModal) {
    return null
  }
  return (
    <>
      <div className={styles.overlayDiv} onClick={() => { openCloseLoginModal() }} />
      <div className={styles.modalDiv}>
        <div className={styles.headerDiv}>
          &nbsp;
          <button className={styles.buttonExit} onClick={openCloseLoginModal}>
            <img className={styles.X} src={x} />
          </button>
        </div>

        <div className={styles.loginDiv}>
          <h2 className={styles.title}>Login</h2>
          <input className={styles.input} placeholder='username' />
          <input className={styles.input} placeholder='password' />
        </div>

        <div className={styles.signupDiv}>
          <h2 className={styles.title}>Signup </h2>
          <input className={styles.input} placeholder='username' />
          <input className={styles.input} placeholder='password' />
        </div>







      </div>
    </>
  )
}