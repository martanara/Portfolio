import React, { ReactNode, useEffect } from 'react';
import Footer from 'page/Footer';
import Navbar from 'page/Navbar';
import { useNavigationType, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType !== 'POP') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [location.pathname, navigationType]);

  return (
    <React.Fragment>
      <Navbar />
        {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
