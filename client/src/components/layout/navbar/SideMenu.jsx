import classes from '../Layout.module.css';

function SideMenu(props) {
  return (
    <div className={classes.hamburgerContainer} onClick={props.changeSideMenu}>
      <div
        id="hamburgerMenu"
        className={
          props.sideMenu ? classes.hamburgerMenuClicked : classes.hamburgerMenu
        }
      ></div>
    </div>
  );
}

export default SideMenu;
