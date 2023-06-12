import {FC} from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/UI/button/Button'
import error from '../../assets/404.avif'
import Layout from '../../components/UI/layout/Layout'
import styles from './404.module.scss'

const Error404: FC = () => {
  return (
    <Layout>
        <Link to='/'>
          <Button>To the main page</Button>
        </Link>
        
        <img className={styles.error} src={error} alt="Error 404" />    
    </Layout>
  )
}

export default Error404