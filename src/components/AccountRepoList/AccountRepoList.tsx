import { FC, useEffect } from 'react'
import RepoList from '../repoList/RepoList';
import Pagination from '../pagination/Pagination';
import { useAccountStore } from '../../stores/useAccountStore';
import { usePagination } from '../../hooks/usePagination';
import { useAccountQuery } from '../../helpers/QueryHelper';
import styles from './AccountRepoList.module.scss'

interface IList {
  currentPage: number
  setCurrentPage: (currentPage: number) => void
}

const AccountRepoList: FC<IList> = ({currentPage, setCurrentPage}) => {
  
  const maxCount = 100;
  const pageSize = 10;

  const { repos, totalCount, setAccountData, login} = useAccountStore();

  const { handlePageChange, 
    handleNextPage, 
    handlePrevPage, 
    count, hasNextPage, 
    hasPrevPage, page
  }  = usePagination(totalCount, currentPage, setCurrentPage)

  const { data, loading, error} = useAccountQuery(null, maxCount)
  
  useEffect(() => {

      (data && 'viewer' in data) 
        && setAccountData({
          login: data.viewer.login,
          id: data.viewer.id,
          repos: data.viewer.repositories.nodes,
          totalCount: data.viewer.repositories.totalCount,
        }) 
  }, [data, setAccountData])


  const startIdx = (page - 1) * pageSize
  const endIdx = startIdx + pageSize

  return (
    <>
          { (!loading && !error && data) &&
              (<>
                  <h2 className={styles.heading}>
                    {`Repositories by ${login}:`}
                  </h2>
              </>)
          }

          <RepoList 
            loading={loading}
            nodes={repos}
            start={startIdx}
            end={endIdx}
          />

          { (!loading && !error && repos?.length) &&
            <Pagination 
              count={count}
              onPrevPage={handlePrevPage}
              onNextPage={handleNextPage}
              onChangePage={handlePageChange}
              activePage={page}
              hasPrevPage={hasPrevPage}
              hasNextPage={hasNextPage}
            />
          }
      

    </>
  )
}

export default AccountRepoList