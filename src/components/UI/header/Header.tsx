import { FC } from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import styles from './Header.module.scss'
import logo from '../../../assets/logo.png'


const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.header__wrapper}`}>
        <div className={styles.header__left}>
          <Link to="/">
            <img src={logo} alt="Logo" className={styles.logo}/>
          </Link>
          <h1 className={styles.header__name}>My test app</h1>
        </div>
        <Button>Log in</Button>
      </div>
    </header>
  )
}

export default Header