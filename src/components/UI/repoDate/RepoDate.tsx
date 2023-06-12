import { FC } from 'react'
import styles from './RepoDate.module.scss'
import { IRepo } from '../../../types'
import { returnDate } from '../../../helpers/UIHelper'

type TDate = {
    data: IRepo
}

const RepoDate: FC<TDate> = ({data}) => {
    const lastCommit = data.defaultBranchRef?.target.history.nodes[0].committedDate;
    return (
        <div className={styles.repo__date}>
            <p>Last commit at:</p> 
            <p>{returnDate(lastCommit) ?? `--`}</p>
        </div>
    )
}

export default RepoDate