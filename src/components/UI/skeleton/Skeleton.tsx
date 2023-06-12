import { FC } from 'react';
import styles from './Skeleton.module.scss';

type TSkeleton = {
  height: number
}

const Skeleton: FC<TSkeleton> = ({height}) => {

  return (
    <>
        <div className={styles.skeleton} style={{height: height}}>
            <div  className={styles.skeleton__card}>
                <div className={styles.shimmer__wrapper}>
                    <div className={styles.shimmer}></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Skeleton