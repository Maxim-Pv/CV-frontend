import { Link } from "react-router-dom";
import styles from "./Main.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contacts = () => {
    return (
        <div className={styles.container__contacts}>
            <div className={styles.contacts_item}>
                <h3 className={styles.contacts_heading}>Email</h3>
                <Link to="" className={styles.contacts_link}>information@untitled.tld</Link>
            </div>
            <div className={styles.contacts_item}>
                <h3 className={styles.contacts_heading}>Phone</h3>
                <span>(000) 000-0000</span>
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
                <Link to=''  className={`${styles.githubIcon}`}><FontAwesomeIcon icon={faGithub} size="2xl" /></Link>
                <Link to='' className={`${styles.faInstagram}`}><FontAwesomeIcon icon={faInstagram} size="2xl" /></Link>
                <Link to=''  className={`${styles.faLinkedin}`}><FontAwesomeIcon icon={faLinkedin} size="2xl" /></Link>           
            </div>
        </div>
        
    )
}

export default Contacts