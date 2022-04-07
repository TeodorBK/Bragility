import classes from './Layout.module.css';
import Footer from '../footer/Footer';
import MainNavigation from './navbar/MainNavigation';
import Alert from '../alert/Alert';

function Layout(props) {
  return (
    <div className={classes.layout}>
      <MainNavigation />
      <Alert />

      {props.children}

      <Footer />
    </div>
  );
}

export default Layout;
