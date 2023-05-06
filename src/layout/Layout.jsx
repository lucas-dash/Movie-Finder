// rrd
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
// layers cmp
import TopBar from './TopBar';
import SideBar from './Sidebar';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  const [open, setOpen] = useState(false);

  const drawerOpen = () => {
    setOpen(true);
  };

  const drawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TopBar open={drawerOpen} />
      <Header />
      <SideBar open={open} close={drawerClose} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
