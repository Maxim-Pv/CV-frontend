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
            <Link to='/page404' className={styles.link}>
                Page404
            </Link>
        </nav>
    )
}

export default Navigation;