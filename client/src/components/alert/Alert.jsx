import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import NavContext from '../../store/NavContext';
import classes from './Alert.module.css';

function Alert() {
  const navCtx = useContext(NavContext);
  const [alertAnimte, setAlertAnimte] = useState(false);

  useEffect(() => {
    if (!document.getElementById('alertBox').style.animation) {
      if (navCtx.alert.length > 0) {
        setAlertAnimte(true);
        console.log(document.getElementById('alertBox').style);
        setTimeout(() => {
          setAlertAnimte(false);
          console.log(document.getElementById('alertBox').style);
        }, 6000);
      }
    }
  }, [navCtx.alertChange]);

  return (
    <div
      id="alertBox"
      className={!alertAnimte ? classes.alertBox : classes.alertBoxAnimate}
    >
      {navCtx.alert}
    </div>
  );
}

export default Alert;
