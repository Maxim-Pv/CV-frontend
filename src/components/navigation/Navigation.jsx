import { Link } from 'react-router-dom';
import styles from "./Navigation.module.css";

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <Link to='/' className={styles.link}>
                Home
            </Link>
            <Link to='/portfolio' className={styles.link}>
                Portfolio
            </Link>
            <Link to='/contacts' className={styles.link}>
                Contacts
            </Link>
        </nav>
    )
}

export default Navigation;