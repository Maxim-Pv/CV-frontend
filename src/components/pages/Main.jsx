import { Link } from 'react-router-dom';
import styles from './Main.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';

const PageIndex = () => {

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Maxim Pavlov</h1>
                <h2>Frontend developer</h2>
                <p className={styles.whatIdo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>     
                <div className={styles.icons}>
                    <Link to=''  className={`${styles.githubIcon}`}><FontAwesomeIcon icon={faGithub} size="2xl" /></Link>
                    <Link to='' className={`${styles.faInstagram}`}><FontAwesomeIcon icon={faInstagram} size="2xl" /></Link>
                    <Link to=''  className={`${styles.faLinkedin}`}><FontAwesomeIcon icon={faLinkedin} size="2xl" /></Link>           
                </div>
            </header>
            <main className={styles.main}>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem minima debitis laudantium, voluptas harum voluptatum, optio porro cupiditate eveniet itaque voluptatem! Officia asperiores eveniet expedita quam iure error mollitia.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci harum odio earum. Debitis quibusdam dolores porro tenetur excepturi officia a voluptas quasi facere odit in ratione, totam animi quis?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid soluta explicabo nisi illum iste culpa consequatur cupiditate officiis, modi placeat accusantium magni cum deleniti. Cumque repudiandae quo soluta ipsam ipsum!</p>
                </div>
            </main>
        </div>       
    )
}

export default PageIndex