import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import CoffeeList from './pages/CoffeeList/CoffeeList';
import Coffee from './pages/Coffee/Coffee';
import NotFound from './pages/NotFound/NotFound';
import Layout from './components/Layout';

function App() {
  return (
    <>
  <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route element={<Home />} />
        <Route path="coffees" element={<CoffeeList />} />
        <Route path="coffees/:coffee" element={ <Coffee /> } />
      </Route>  
      <Route path="/*" element={ <NotFound /> } />
  </Routes>
    </>
  )
}

export default App;
