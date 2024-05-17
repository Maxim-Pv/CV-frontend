import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./Main.module.css";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headers}>
          <h1>Maxim Pavlov</h1>
          <h2>Frontend developer</h2>
        </div>
        <p className={styles.quote}>
          «Жизнь — это не поиск себя. Жизнь — это создание себя».
          <span>Джордж Бернард Шоу</span>
        </p>
        
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
          <p>
            Диплом инженера обеспечил аналитические навыки и способность к быстрому обучению. 
            Увлечен фронтенд-разработкой, имею опыт написания приложений используя 
            CSS Flexbox/Grid, Scss, React, Redux toolkit 
          </p>
          <p>
            В настоящее время изучаю Node.js, PostgreSQL, Webpack, TypeScript и Nuxt.js и конечно английский. 
            Стремлюсь к созданию удобных и эффективных пользовательских интерфейсов, 
            активно развиваюсь и совершенствую свои знания и умения. 
            Готов решать сложные задачи и приносить пользу команде. 
          </p>
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
