import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

function Layout() {
  return (
    <>
      {/* Classe wrapper é para fixar/centralizar o footer */}
      <div className="wrapper">
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
