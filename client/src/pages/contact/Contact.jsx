import classes from './Contact.module.css';
import { useEffect, useContext } from 'react';
import NavContext from '../../store/NavContext';
import ContactForm from '../../components/contactForm/ContactForm';
import { FiPhone } from 'react-icons/fi';
import { IoIosChatbubbles } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Contact() {
  const navCtx = useContext(NavContext);

  useEffect(() => {
    navCtx.changePage('contact');
  });
  return (
    <div className={classes.ContactContainer}>
      <div className={classes.contactContent}>
        <div className={classes.contactInfoBox}>
          <h1>Contact us about Lorem ipsum dolor sit</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
            tempore molestias accusantium sed, aliquid facere, quidem non
            distinctio eligendi optio incidunt cumque numquam. Id, corporis.
            Blanditiis earum sequi rem consequuntur, vel ipsum eligendi unde
            nobis aliquid dolores facilis praesentium perferendis?
          </p>
        </div>
        <div className={classes.allContactBox}>
          <div className={classes.contactFlexContainer}>
            <div className={classes.contactFlexItem}>
              <div className={classes.contactPhoneInfo}>
                <div>
                  <FiPhone className={classes.phoneIcon} />
                </div>

                <div className={classes.contactPhoneInfoBox}>
                  <p>Call us in Brigility</p>

                  <a href="tel:42069420" className={classes.contactPhoneNumber}>
                    420 69 420
                  </a>
                  <br />
                  <br />

                  <Link to="/" className={classes.ContactNumberLink}>
                    Call support
                  </Link>
                </div>
              </div>

              <div className={classes.contactChatInfo}>
                <div>
                  <IoIosChatbubbles className={classes.chatIcon} />
                </div>

                <div className={classes.contactChatInfoBox}>
                  <p className={classes.chatInfo}>Chat with our suport team</p>

                  <button className={classes.contactChatBtn}>
                    Chat with support
                  </button>
                </div>
              </div>
            </div>

            <div
              className={(classes.contactFlexItem, classes.contactFlexItemForm)}
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
