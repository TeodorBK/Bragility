import classes from '../../pages/about/aboutDepartment/AboutDepartment.module.css';

function EmployeeCard(props) {
  const employees = props.data;

  return (
    <div className={classes.cardContainer}>
      <div className={classes.profileImageBox}>
        <img
          src={require('../../components/images/profileIcon.png')}
          alt="Profile icon"
        />
      </div>
      <h1 className={classes.nameTag}>{employees.name}</h1>
      {employees.departmentLeader === 'true' ? (
        <p className={classes.departmentTag}>{employees.department} leader</p>
      ) : null}

      {employees.departmentLeader === 'false' &&
      employees.apprentice === 'false' &&
      employees.department === 'dailyLeader' ? (
        <p className={classes.departmentTag}>{employees.department}</p>
      ) : null}

      {employees.departmentLeader === 'false' &&
      employees.apprentice === 'false' &&
      employees.department !== 'dailyLeader' ? (
        <p className={classes.departmentTag}>{employees.department} employee</p>
      ) : null}

      {employees.apprentice === 'true' ? (
        <p className={classes.departmentTag}>
          {employees.department} apprentice
        </p>
      ) : null}

      <p className={classes.contactTag}>
        Email: <span className={classes.contactTagSpan}>{employees.email}</span>
      </p>
      <p className={classes.contactTag}>
        Tlf: <span className={classes.contactTagSpan}>{employees.phone}</span>
      </p>
    </div>
  );
}

export default EmployeeCard;
