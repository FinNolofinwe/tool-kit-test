import { FC } from 'react'
import { IRepo } from '../../types/index'
import { Link } from 'react-router-dom'
import styles from './RepoItem.module.scss'
import gitHub from '../../assets/github.svg'
import RepoWrapper from '../UI/repoWrapper/RepoWrapper'
import RepoDate from '../UI/repoDate/RepoDate'
import RepoStars from '../UI/repoStars/RepoStars'

interface IRepoNode {
    node: IRepo
}

const RepoItem: FC<IRepoNode> = ({node}) => {

    const onShowUrl = (link: string) => {
        window.open(link, '_blank')
    }

    const { name, url, stargazerCount, owner} = node;

    return (
        <Link to={`${owner.login}/${name}`}>
            <RepoWrapper>
                <div className={styles.repo__top}>
                    <h3 className={styles.repo__name}>{name}</h3>
                    <RepoDate data={node} />
                </div>
                
                <div className={styles.repo__bottom}>
                    <RepoStars stars={stargazerCount}/>
                    <div className={styles.link}>
                        <p onClick={() => onShowUrl(`${url}`)} >
                            <span>Link to</span> 
                            <img src={gitHub} alt="GitHub" />
                        </p>
                    </div>
                </div>
            </RepoWrapper>
         </Link>
    )
}

export default RepoItem