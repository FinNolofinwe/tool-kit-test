import { FC } from "react"
import styles from './RepoContent.module.scss'
import avatar from '../../assets/avatar.png'
import RepoWrapper from '../UI/repoWrapper/RepoWrapper';
import RepoStars from '../UI/repoStars/RepoStars';
import RepoDate from '../UI/repoDate/RepoDate';
import RepoLang from "../UI/repoLang/RepoLang"
import { IRepo } from '../../types/index';

interface IData {
    repository: IRepo
}

const RepoContent: FC<IData> = ({repository}) => {
    const checkAvatar = repository.owner.avatarUrl ?? avatar

    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.owner}>
                    <div 
                        className={styles.owner__userpic}
                        style={{backgroundImage: `url(${checkAvatar})`}}
                    >
                        
                    </div>
                    <h3 className={styles.owner__username}>
                        <a href={repository.owner.url}>
                            {repository.owner.login}
                        </a>
                    </h3>
                </div>

                <div className={styles.repo}>
                    <RepoWrapper>
                        <div className={styles.repo__top}>
                            <h2 className={styles.repo__name}>{repository.name}</h2>
                            <div className={styles.repo__info}>
                                <RepoStars stars={repository.stargazerCount}/>
                                <RepoDate data={repository}/> 
                            </div>
                        </div>
                        <ul className={styles.repo__langs}>
                            {
                                repository.languages.nodes.map((lang, i) => {
                                    return (
                                        <RepoLang color={lang.color} name={lang.name} key={i}/>
                                    )
                                })
                            }
                        </ul>
                        <p className={styles.repo__descr}>{repository.description}</p>
                    </RepoWrapper>
                    
                </div>
            </div>
        </>
    )
}

export default RepoContent