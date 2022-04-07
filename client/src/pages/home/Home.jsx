import classes from './Home.module.css';

import { IoIosArrowDown } from 'react-icons/io';
import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import NavContext from '../../store/NavContext';

function Home() {
  const navCtx = useContext(NavContext);

  useEffect(() => {
    navCtx.changePage('');
  });

  return (
    <div className={classes.homePage}>
      <main className={classes.main}>
        <div className={classes.flexItem}>
          <h1>The company that offers IT solutions throughout Norway</h1>
          <p>For large and small businesses</p>
        </div>
        <div className={`${classes.flexItem} ${classes.flexItemHidden}`}></div>
        <a href="#home-about">
          <IoIosArrowDown className={classes.downArrow} />
        </a>
      </main>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={classes.wave}
      >
        <path
          fill="#4a7eac"
          fill-opacity="1"
          d="M0,160L40,154.7C80,149,160,139,240,149.3C320,160,400,192,480,197.3C560,203,640,181,720,181.3C800,181,880,203,960,192C1040,181,1120,139,1200,122.7C1280,107,1360,117,1400,122.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>

      <div id="home-about" className={classes.homeAbout}>
        <div className={classes.aboutTitle}>
          <h2>About</h2>
        </div>

        <div className={classes.homeAboutBox}>
          <p>
            <span>Bragility</span> is a company with 161 employees, which offers
            various solutions within IT in the Norwegian market. The company
            offers full operation of IT systems to smaller companies, with
            server solutions, web solutions and service. They also offer service
            to private customers.
          </p>
          <Link to="/about" className={classes.homeAboutBtn}>
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
