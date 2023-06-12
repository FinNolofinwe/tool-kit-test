import { FC, ReactNode } from 'react'
import styles from './Layout.module.scss'
type TLayout = {
    children: ReactNode
}

const Layout: FC<TLayout> = ({children}) => {
  return (
    <div className={styles.layout}>
      <div className="container">
        <div className="wrapper">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout