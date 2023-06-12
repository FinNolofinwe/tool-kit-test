import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from '../UI/header/Header';
import Home from '../../pages/Home/Home';
import RepoPage from '../../pages/RepoPage/RepoPage';
import Error404 from '../../pages/404/404';

function App() {

  // fetch('https://api.github.com/rate_limit')
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data);
  // })
  // .catch(error => {
  //   console.error(error);
  // });

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:owner/:name' element={<RepoPage />}/>
        <Route path='*' element={<Error404 />}/>
      </Routes>
    </>
  )
}

export default App
