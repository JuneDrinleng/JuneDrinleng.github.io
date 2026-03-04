import { Outlet, useLocation } from 'react-router';
import TitleBar from './components/TitleBar';
import BackToTop from './components/BackToTop';

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <TitleBar />
      <main key={location.key} className="page-transition">
        <Outlet />
      </main>
      <BackToTop />
    </>
  );
}
