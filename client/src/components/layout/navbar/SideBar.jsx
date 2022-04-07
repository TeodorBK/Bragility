import { useContext } from 'react';
import classes from '../Layout.module.css';
import NavContext from '../../../store/NavContext';
import { Link } from 'react-router-dom';

function Sidebar() {
  const navCtx = useContext(NavContext);

  return (
    <div
      className={navCtx.sideMenu ? classes.sidebarOpen : classes.sidebar}
      onChange={() => {
        console.log('d');
      }}
    >
      <Link
        to="/"
        className={navCtx.page === '' ? classes.navLinkOn : classes.navLinkOff}
        onClick={() => {
          navCtx.changePage('');
        }}
      >
        Home
      </Link>

      <Link
        to="/about"
        className={
          navCtx.page === 'about' ? classes.navLinkOn : classes.navLinkOff
        }
        onClick={() => {
          navCtx.changePage('about');
        }}
      >
        About
      </Link>

      <Link
        to="/contact"
        className={
          navCtx.page === 'contact' ? classes.navLinkOn : classes.navLinkOff
        }
        onClick={() => {
          navCtx.changePage('contact');
        }}
      >
        Contact
      </Link>

      <Link
        to="/faq"
        className={
          navCtx.page === 'faq' ? classes.navLinkOn : classes.navLinkOff
        }
        onClick={() => {
          navCtx.changePage('faq');
        }}
      >
        FAQ
      </Link>
    </div>
  );
}

export default Sidebar;
