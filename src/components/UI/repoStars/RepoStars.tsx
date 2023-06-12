import { FC } from 'react'
import star from '../../../assets/star.svg'
import styles from './RepoStars.module.scss'

type TStar = {
    stars: number
}

const RepoStars: FC<TStar> = ({stars}) => {
  return (
    <div className={styles.repo__stars}>
        <img src={star} alt="star" /><p>{stars}</p>
    </div>
  )
}

export default RepoStars