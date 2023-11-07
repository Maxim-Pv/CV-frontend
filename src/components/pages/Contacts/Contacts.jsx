import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from "./Contacts.module.css";

const Contacts = () => {
    return (
        <div className={styles.container__contacts}>
            <div className={styles.contacts_item}>
                <h3 className={styles.contacts_heading}>Email</h3>
                <Link to="https://mail.google.com/mail" className={styles.contacts_link}>maximpv13@gmail.com</Link>
            </div>
            <div className={styles.contacts_item}>
                <h3 className={styles.contacts_heading}>Phone</h3>
                <span>+7(977)570-7193</span>
            </div>
            <div className={styles.contacts_item}>
                <h3 className={styles.contacts_heading}>Address</h3>
                <span className={styles.contacts_address}>
                    1234 Somewhere Road #5432
                    Nashville, TN 00000
                    United States of America
                </span>
            </div>
            <div className={styles.contacts_icons}>
                <Link to='https://github.com/Maxim-Pv'  className={`${styles.githubIcon}`}>
                    <FontAwesomeIcon icon={faGithub} size="2xl" />
                </Link>
                <Link to='https://instagram.com/maxim_pavlov13?igshid=OGQ5ZDc2ODk2ZA==' className={`${styles.faInstagram}`}>
                    <FontAwesomeIcon icon={faInstagram} size="2xl" />
                </Link>
                <Link to='https://www.linkedin.com/in/maksim-pavlov-12b22528b/?locale=en_US'  className={`${styles.faLinkedin}`}>
                    <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                </Link>           
            </div>
        </div>
        
    )
}

export default Contacts