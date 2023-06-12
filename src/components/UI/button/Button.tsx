import { ReactNode, FC } from 'react'
import styles from './Button.module.scss'

type Btn = {
    children: ReactNode
    onClick?: () => void
}

const Button: FC<Btn> = ({children, onClick}) => {
  return (
    <button 
      onClick={onClick}
      className={styles.btn}>
        {children}
    </button>
  )
}

export default Button