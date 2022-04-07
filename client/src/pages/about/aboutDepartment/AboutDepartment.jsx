import { useContext, useState, useEffect } from 'react';
import NavContext from '../../../store/NavContext';
import classes from './AboutDepartment.module.css';
import Axios from 'axios';
import EmployeeCard from '../../../components/employeeCard/EmployeeCard';

function AboutDepartment(props) {
  const navCtx = useContext(NavContext);

  const title = navCtx.viewDepartment;

  const [departmentInfo, setDepartmentInfo] = useState([]);

  useEffect(() => {
    const departmentReq = {
      method: 'GET',
      url: 'http://localhost:3001/getAllEmployees',
      params: { department: title },
    };

    Axios.request(departmentReq).then(response => {
      setDepartmentInfo([]);

      setDepartmentInfo(info => {
        return info.concat(response.data);
      });
    });
  }, [title]);

  return (
    <div className={classes.all}>
      <div className={classes.aboutDepartment}>
        <h1 className={classes.aboutDepartmentTitle}>About {title}</h1>

        <div className={classes.aboutDepartmentInfo}>
          <span>Bragility</span> {title} is Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptate odit asperiores obcaecati
          sequi iusto reprehenderit delectus maiores pariatur, qui mollitia.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil alias
          vitae ipsa labore cupiditate maxime.
        </div>
        <h1 className={classes.employeeTitle}>{title} employees</h1>
        <div className={classes.aboutContainer}>
          {departmentInfo &&
            departmentInfo.map(data => {
              return <EmployeeCard key={data.id} data={data} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default AboutDepartment;
