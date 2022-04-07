import classes from './Footer.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import NavContext from '../../store/NavContext';

function Footer() {
  const navCtx = useContext(NavContext);

  return (
    <footer className={classes.footer}>
      <div className={(classes.footerItem, classes.footerShortcut)}>
        <h3>Shortcuts</h3>
        <div className={classes.navList}>
          <div className={classes.navItem}>
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
          </div>

          <div className={classes.navItem}>
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
          </div>

          <div className={classes.navItem}>
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
          </div>

          <div className={classes.navItem}>
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
        </div>
      </div>
      <div className={classes.footerItem}>
        <h3>Contact us</h3>
        <div className={classes.navList}>
          <div className={classes.navItem}>
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
          </div>
          <div className={classes.navItem}>
            <Link
              to="/about-department"
              className={
                navCtx.page === 'about' &&
                navCtx.viewDepartment === 'User suport'
                  ? classes.navLinkOn
                  : classes.navLinkOff
              }
              onClick={() => {
                navCtx.changePage('about');
                navCtx.changeViewDepartment('User suport');
              }}
            >
              User suport
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.footerItem}>
        <h3>Visit us</h3>
        <span>Oslo</span>
        <p>
          Pilestredet 56 <br /> 0167 Oslo
        </p>

        <span>Drammen</span>
        <p>
          Skogliveien 4 <br /> 3047 Drammen
        </p>
      </div>
      <div className={classes.footerItem}>
        <Link to="/">
          <img
            className={classes.logo}
            src={require('../../components/images/bragilityLogoW.svg').default}
            alt="Logo"
          />
        </Link>
        <br />
        <br />
        <p className={classes.privacyTxt}>Privacy and cookies</p>

        <p>
          Org. nr.: 420 69 420 <br /> post@bragility.no
        </p>
      </div>
    </footer>
  );
}

export default Footer;
