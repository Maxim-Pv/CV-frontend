import { Link } from 'react-router-dom';
import styles from "./Navigation.module.css";

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <Link to='/' className={styles.link}>
                Home
            </Link>
            <Link to='/experience' className={styles.link}>
                Experience
            </Link>
            <Link to='/apps' className={styles.link}>
                My apps
            </Link>
            <Link to='/contacts' className={styles.link}>
                Contacts
            </Link>
        </nav>
    )
}

export default Navigation;