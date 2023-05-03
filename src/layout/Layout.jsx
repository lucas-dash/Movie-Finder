// rrd
import { Outlet } from 'react-router-dom';
// layers cmp
import TopBar from './TopBar';
import SideBar from './Sidebar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <TopBar />
      {/* <SideBar /> */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
