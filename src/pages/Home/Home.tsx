import { FC, useState, useEffect, useCallback } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import Layout from '../../components/UI/layout/Layout';
import AccountRepoList from '../../components/AccountRepoList/AccountRepoList';
import SearchedRepoList from '../../components/SearchedRepoList/SearchedRepoList';

const Home: FC = () => {
  const [value, setValue] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);


  useEffect(() => {
    const storedQuery = localStorage.getItem('query');
    if (storedQuery !== null) setValue(storedQuery)
  }, []);

  useEffect(() => {
    if (value === '') {
      localStorage.removeItem('query');
    } else {
      localStorage.setItem('query', value);
    }
  }, [value]);

  const handleSearch = useCallback((searchVal: string) => {
    setValue(searchVal)
    setCurrentPage(1)
    localStorage.setItem('page', '1');
  }, [value]);

  return (
    <Layout>
      <SearchBar value={value} setValue={handleSearch} />
      {value === '' 
          ? <AccountRepoList currentPage={currentPage} setCurrentPage={setCurrentPage}/> 
          : <SearchedRepoList currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      }
    </Layout>
  );
};

export default Home;