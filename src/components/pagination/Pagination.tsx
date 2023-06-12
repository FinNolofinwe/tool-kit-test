import { FC } from 'react'
import styles from './Pagination.module.scss'
import arrow from '../../assets/arrow.svg'

type TPaginator = {
    count: number | null
    onChangePage: (page: number) => void
    onPrevPage: () => void
    onNextPage: () => void
    hasPrevPage: boolean
    hasNextPage: boolean
    activePage: number
}

const Pagination: FC<TPaginator> = ({
            count, 
            onChangePage, 
            onNextPage, 
            onPrevPage, 
            activePage, 
            hasNextPage, 
            hasPrevPage,
    }) => {

    return (
        <>
                <div className={styles.pagination__wrapper}>
                    <button 
                        className={styles.arrow}
                        style={{backgroundImage: `url(${arrow})`}}
                        onClick={onPrevPage}
                        disabled={!hasPrevPage}
                    ></button>
                    <ul className={styles.pagination__list}>
                        {
                            count && [... new Array(count)].map((_, i) => {
                                const pageNumber = i + 1
                                return (
                                    <li 
                                        onClick={() => onChangePage(pageNumber)}
                                        className={`${styles.pagination__item} ${pageNumber === activePage && styles.active}`} 
                                        key={pageNumber}>{pageNumber}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <button 
                        style={{backgroundImage: `url(${arrow})`}}
                        className={styles.arrow}
                        onClick={onNextPage}
                        disabled={!hasNextPage}
                    ></button>
                </div>
        </>
    )
}

export default Pagination