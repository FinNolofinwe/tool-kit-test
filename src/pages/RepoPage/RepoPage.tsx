import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useRepoQuery } from '../../helpers/QueryHelper'
import { useRepositoryStore } from '../../stores/useRepositoryStore'
import RepoContent from '../../components/repoContent/RepoContent'
import Layout from '../../components/UI/layout/Layout';
import Button from '../../components/UI/button/Button'
import styles from './RepoPage.module.scss'
import errorImg from '../../assets/error.png'
import Loader from '../../components/UI/loader/Loader'

const RepoPage: FC = () => {

    const { owner, name } = useParams();
    const { data, loading, error } = useRepoQuery(owner!, name!)

    const { repository, setRepository } = useRepositoryStore()

    useEffect(() => {
      if (data && 'repository' in data) {
        console.log(data.repository)
        setRepository(data.repository)
      }
    }, [data, setRepository]);

    return (
          <Layout>
            <Link to='/'>
              <Button>To the main page</Button>
            </Link>
              {loading && <Loader />}
              
              { (!loading) &&
                  repository && <RepoContent repository={repository}/>
              }

              {(!loading && !repository && error) && <img src={errorImg} alt="Error" className={styles.error}/>}
          </Layout>     
    )
}

export default RepoPage