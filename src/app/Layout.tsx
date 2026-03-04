import { Outlet } from 'react-router';
import TitleBar from './components/TitleBar';
import BackToTop from './components/BackToTop';

export default function Layout() {
  return (
    <>
      <TitleBar />
      <Outlet />
      <BackToTop />
    </>
  );
}
