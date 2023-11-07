import { Link } from "react-router-dom";
import styles from './Page404.module.css';

const Page404 = () => {

    return (
        <div className={styles.container_404}>
            <span className={styles.number404}>404</span>
            <h1>Page not found</h1>
            <Link to='/' className={styles.link}>Go home</Link>
        </div> 
    )
}   

export default Page404