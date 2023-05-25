// rrd
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
// layers cmp
import TopBar from './TopBar';
import SideBar from './SideBar';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  const [open, setOpen] = useState(false);

  const toggleSideBar = (toggle) => (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }
    setOpen(toggle);
  };

  return (
    <>
      <TopBar open={toggleSideBar} />
      <Header />
      <SideBar open={open} close={toggleSideBar} />
      <main style={{ paddingBottom: 10 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
