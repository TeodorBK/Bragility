import { useContext } from 'react';
import { Link } from 'react-router-dom';
import NavContext from '../../../store/NavContext';
import classes from '../Layout.module.css';
import SideBar from './SideBar';
import SideMenu from './SideMenu';

function MainNavigation() {
  const navCtx = useContext(NavContext);

  let lastScrollTop = 0;

  window.addEventListener('scroll', event => {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop < lastScrollTop || lastScrollTop === 0) {
      // upscroll code
      document.getElementById('nav').style.transform = 'translate3d(0, 0, 0)';
    } else {
      // downscroll code
      document.getElementById('nav').style.transform =
        'translate3d(0, -70px, 0)';
    }
    lastScrollTop = scrollTop;
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 500) {
      navCtx.changeSideMenuOnScreenWidth();
    }
  });

  return (
    <nav>
      <div className={classes.nav} id="nav">
        <div className={classes.logoBox}>
          <Link
            to="/"
            onClick={() => {
              navCtx.changePage('');
            }}
          >
            <img
              className={classes.logo}
              src={require('../../images/bragilityLogoW.svg').default}
              alt="Logo"
            />
          </Link>
        </div>

        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <Link
              to="/"
              className={
                navCtx.page === '' ? classes.navLinkOn : classes.navLinkOff
              }
              onClick={() => {
                navCtx.changePage('');
              }}
            >
              Home
            </Link>
          </li>

          <li className={classes.navItem}>
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
          </li>

          <li className={classes.navItem}>
            <Link
              to="/contact"
              className={
                navCtx.page === 'contact'
                  ? classes.navLinkOn
                  : classes.navLinkOff
              }
              onClick={() => {
                navCtx.changePage('contact');
              }}
            >
              Contact
            </Link>
          </li>

          <li className={classes.navItem}>
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
          </li>
        </ul>

        <SideMenu
          sideMenu={navCtx.sideMenu}
          changeSideMenu={navCtx.changeSideMenu}
        />
      </div>
      <SideBar />
    </nav>
  );
}

export default MainNavigation;
