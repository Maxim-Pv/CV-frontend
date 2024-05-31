import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from "./Navigation.module.css";

const Navigation = () => {
  const { t } = useTranslation();
    return (
        <nav className={styles.nav}>
            <Link to='/' className={styles.link}>
                {t('home')}
            </Link>
            <Link to='/experience' className={styles.link}>
                {t('experience')}
            </Link>
            <Link to='/apps' className={styles.link}>
                {t('apps')}
            </Link>
            <Link to='/contacts' className={styles.link}>
                {t('contacts')}
            </Link>
        </nav>
    )
}

export default Navigation;
