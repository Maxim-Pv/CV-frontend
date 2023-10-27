import { useNavigate } from "react-router-dom";
import styles from './Main.module.css';

const Page404 = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container_404}>
            <span className={styles.number404}>404</span>
            <h1>Page not found</h1>
            <button onClick={() => navigate('/')} className={styles.button}>Go home</button>
        </div> 
    )
}   

export default Page404