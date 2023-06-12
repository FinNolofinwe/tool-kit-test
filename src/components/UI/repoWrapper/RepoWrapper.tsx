import {ReactNode, FC} from 'react'
import styles from './RepoWrapper.module.scss'

type TWrapper = {
    children: ReactNode
}

const RepoWrapper: FC<TWrapper> = ({children}) => {
  return (
    <div className={styles.repo__wrapper}>
        {children}
    </div>
  )
}

export default RepoWrapper