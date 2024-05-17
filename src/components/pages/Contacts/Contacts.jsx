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
                <span>Личный: +7(977)570-7193</span>
                <span>Телеграмм: +7(977)570-7193</span>
                <span>Whats up: +7(977)570-7193</span>
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