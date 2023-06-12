import { FC, useEffect } from "react";
import { useSearchQuery } from "../../helpers/QueryHelper";
import { useSearchedStore } from "../../stores/useSearchedStore";
import { usePagination } from "../../hooks/usePagination";
import RepoList from "../repoList/RepoList";
import Pagination from "../pagination/Pagination";
import styles from './SearchedRepoList.module.scss'

interface IList {
  currentPage: number
  setCurrentPage: (curruntPage: number) => void
}

const SearchedRepoList: FC<IList> = ({currentPage, setCurrentPage}) => {
  const maxCount = 100;
  const pageSize = 10;

  const { nodes, totalCount, setSearchedData} = useSearchedStore()
  const paginationCount: number = totalCount! <= 100 ? totalCount! : maxCount

  const { handlePageChange, 
          handleNextPage, 
          handlePrevPage, 
          count, page,
          hasNextPage, 
          hasPrevPage 
  }  = usePagination(paginationCount, currentPage, setCurrentPage)
  
  const query: string | null = localStorage.getItem("query")
  const { data, loading, error} = useSearchQuery(query, maxCount)

  useEffect(() => {
    (data && 'search' in data) 
      && setSearchedData({
        nodes: data.search.edges.map((edge: any) => edge.node),
        totalCount: data.search.repositoryCount
      }) 
  }, [data, setSearchedData])


  const startIdx = (page - 1) * pageSize
  const endIdx = startIdx + pageSize

  return (
      <>
            { (!loading && !error && data) &&
                (<>
                    <h2 className={styles.heading}>
                      {`Found ${totalCount} repos: `}
                    </h2>
                </>)
            }
            <RepoList 
              loading={loading}
              nodes={nodes}
              start={startIdx}
              end={endIdx}
              error={error}
            />
            { (!loading && !error && nodes?.length) &&
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

export default SearchedRepoList