import { FC } from 'react'
import styles from './RepoLang.module.scss'

type TLang = {
    color: string
    name: string
}

const RepoLang: FC<TLang> = ({color, name}) => {
  return (
    <li className={styles.repo__lang}>
        <div 
            className={styles.lang__color} 
            style={{backgroundColor: `${color}`}}
        ></div>
        <p className={styles.lang__name}>{name}</p>
    </li>
  )
}

export default RepoLang