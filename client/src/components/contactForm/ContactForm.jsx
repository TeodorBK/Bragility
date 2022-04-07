import classes from './ContactForm.module.css';
import Axios from 'axios';
import { useRef } from 'react';
import { useContext } from 'react';
import NavContext from '../../store/NavContext';

function ContactForm() {
  const navCtx = useContext(NavContext);

  const messageName = useRef();
  const messageEmail = useRef();
  const messagePhone = useRef();
  const messageMessage = useRef();

  function sendMessage() {
    if (
      messageName.current.value.length < 1 ||
      messageEmail.current.value.length < 1 ||
      messagePhone.current.value.length < 1 ||
      messageMessage.current.value.length < 1
    ) {
      navCtx.changeAlert(
        'To send a message you need to fill in all the fields'
      );
    } else if (!messageEmail.current.value.includes('@')) {
      navCtx.changeAlert('To send a message you need to fill in a email');
    } else if (messagePhone.current.value.length !== 8) {
      navCtx.changeAlert(
        'To send a message you need to have a 8 digit phone number'
      );
    } else {
      const messageReq = {
        method: 'PUT',
        url: 'http://localhost:3001/sendMessage',
        params: {
          name: messageName.current.value,
          email: messageEmail.current.value,
          phone: messagePhone.current.value,
          message: messageMessage.current.value,
        },
      };

      Axios.request(messageReq).then(response => {
        console.log(response);
        messageName.current.value = '';
        messageEmail.current.value = '';
        messagePhone.current.value = '';
        messageMessage.current.value = '';

        navCtx.changeAlert('Message send');
      });
    }
  }

  return (
    <div className={classes.contactFormContainer}>
      <div className={classes.contactFormTxt}>
        <h2>Send message to Bragility</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae optio
          illum expedita illo ratione, ex molestiae beatae, voluptates corrupti
          nihil asperiores quaerat? Iure illum provident quos eveniet. Non,
          dolore ipsum!
        </p>
      </div>
      <form className={classes.contactForm}>
        <div className={classes.ContactFormItem}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Name" ref={messageName} />
        </div>

        <div className={classes.ContactFormItem}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            ref={messageEmail}
          />
        </div>

        <div className={classes.ContactFormItem}>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            ref={messagePhone}
          />
        </div>

        <div className={classes.ContactFormItem}>
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            rows="7"
            ref={messageMessage}
          />
        </div>

        <div
          className={(classes.ContactFormItem, classes.contactFormSubmitBox)}
        >
          <button
            className={classes.contactFormSubmitBtn}
            onClick={e => {
              e.preventDefault();

              sendMessage();
            }}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
