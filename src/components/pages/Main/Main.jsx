import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import styles from "./Main.module.css";

const MainPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headers}>
          <h1>{t('name')}</h1>
          <h2>{t('position')}</h2>
        </div>
        <div className={styles.quoteContainer}>
          <p className={styles.quote}>
            {t('quote')}
            <span>{t('quoteAuthor')}</span>
          </p>
        </div>
        
        <div className={styles.icons}>
          <Link
            to="https://github.com/Maxim-Pv"
            className={`${styles.githubIcon}`}
          >
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </Link>
          <Link
            to="https://instagram.com/maxim_pavlov13?igshid=OGQ5ZDc2ODk2ZA=="
            className={`${styles.faInstagram}`}
          >
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/maksim-pavlov-12b22528b/?locale=en_US"
            className={`${styles.faLinkedin}`}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </Link>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.text}>
          <p>{t('text1')}</p>
          <p>{t('text2')}</p>
        </div>
        <ul className={styles.stack_list}>
          <li>HTML5</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
        </ul>
      </main>
    </div>
  );
};

export default MainPage;
