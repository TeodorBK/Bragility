import { createContext, useState } from 'react';

const NavContext = createContext({
  page: '',
  changePage: page => {},

  sideMenu: false,
  changeSideMenu: () => {},
  changeSideMenuOnScreenWidth: () => {},

  viewDepartment: '',
  changeViewDepartment: department => {},

  alert: '',
  alertChange: false,
  changeAlert: newAlert => {},
});

export function NavContextProvider(props) {
  const [page, setPage] = useState('');
  function changePageHandler(page) {
    setPage(page);
  }

  const [sideMenu, setSideMenu] = useState(false);
  function changeSideMenuHandler() {
    if (sideMenu) {
      return setSideMenu(false);
    } else {
      return setSideMenu(true);
    }
  }

  function changeSideMenuOnScreenWidth() {
    return setSideMenu(false);
  }

  const [viewDepartment, setViewDepartment] = useState('');

  function changeViewDepartment(department) {
    setViewDepartment(department);
  }

  const [alertTxt, setAlertTxt] = useState('');
  const [alertChange, setAlertChange] = useState(false);

  function changeAlertTxt(newAlert) {
    setAlertTxt(newAlert);
    if (!alertChange) {
      setAlertChange(true);
    } else {
      setAlertChange(false);
    }
  }

  const context = {
    page: page,
    changePage: changePageHandler,

    sideMenu: sideMenu,
    changeSideMenu: changeSideMenuHandler,
    changeSideMenuOnScreenWidth: changeSideMenuOnScreenWidth,

    viewDepartment: viewDepartment,
    changeViewDepartment: changeViewDepartment,

    alert: alertTxt,
    alertChange: alertChange,
    changeAlert: changeAlertTxt,
  };

  return (
    <NavContext.Provider value={context}>{props.children}</NavContext.Provider>
  );
}

export default NavContext;
