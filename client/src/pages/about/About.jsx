import classes from './About.module.css';
import { useEffect, useContext } from 'react';
import NavContext from '../../store/NavContext';
import DepartmentCard from '../../components/departmentCard/DepartmentCard';
import serverImage from '../../components/images/serverRoom.jpeg';
import utviklingImage from '../../components/images/utvikling.jpeg';
import suportImage from '../../components/images/brukerstøtte.jpeg';
import marketingImage from '../../components/images/marketing.jpeg';
import administrationImage from '../../components/images/administration.jpeg';

function About() {
  const navCtx = useContext(NavContext);

  useEffect(() => {
    navCtx.changePage('about');
    navCtx.changeViewDepartment('');
  });

  return (
    <div className={classes.aboutContainer}>
      <div className={classes.aboutInfo}>
        <p>
          <span>Bragility</span> is a company with 161 employees, which offers
          various solutions within IT in the Norwegian market. The company
          offers full operation of IT systems to smaller companies, with server
          solutions, web solutions and service. They also offer service to
          private customers.
        </p>
      </div>
      <div className={classes.aboutContent}>
        <DepartmentCard
          title={'Operation'}
          description={'Operation'}
          image={serverImage}
        />
        <DepartmentCard
          title={'Development'}
          description={'Development'}
          image={utviklingImage}
        />
        <DepartmentCard
          title={'User suport'}
          description={'User suport'}
          image={suportImage}
        />
        <DepartmentCard
          title={'Marketing'}
          description={'Marketing'}
          image={marketingImage}
        />
        <DepartmentCard
          title={'Hr and administration'}
          description={'Hr and administration'}
          image={administrationImage}
        />
      </div>
    </div>
  );
}

export default About;
