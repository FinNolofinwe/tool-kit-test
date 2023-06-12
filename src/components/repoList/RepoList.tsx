import { ApolloError } from '@apollo/client';
import { IRepo } from '../../types/index';
import Skeleton from '../UI/skeleton/Skeleton';
import RepoItem from '../repoItem/RepoItem';
import styles from './RepoList.module.scss'
import error from '../../assets/error.png'

interface IRepoList {
    nodes: IRepo[] | null
    start: number
    end: number
    loading: boolean
    error?: ApolloError
}

const RepoList = ({nodes, loading, start, end}: IRepoList) => {

    return (
        <>
            <div className={styles.repo__wprapper}>
                {loading && [... new Array(10)].map((_, i) => {
                return (
                    <Skeleton height={105} key={`skeleton-${i}`}/>
                )
                })}

                { !loading &&
                    nodes?.slice(start, end).map((item) => {
                        
                        return (
                            <RepoItem node={item} key={item.id}/>
                        )
                    })
                }

                {(!loading && !nodes && error) && <img src={error} alt="Error" className={styles.error}/>}
            </div>
        </>
    )
}

export default RepoList