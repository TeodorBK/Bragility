import classes from './DepartmentCard.module.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import NavContext from '../../store/NavContext';

function DepartmentCard(props) {
  const navCtx = useContext(NavContext);

  return (
    <Link
      to={'/about-department'}
      className={classes.departmentCard}
      onClick={() => {
        navCtx.changeViewDepartment(props.title);
      }}
    >
      <img src={props.image} alt="BackImage" className={classes.backImage} />
      <div className={classes.contentContainer}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.description}>
          {props.description} Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fuga sunt labore quis?
        </div>
        <div className={classes.arrow}>
          <FaLongArrowAltRight />
        </div>
      </div>
    </Link>
  );
}

export default DepartmentCard;
