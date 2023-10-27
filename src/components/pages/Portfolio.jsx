import { useNavigate } from "react-router-dom";
import styles from './Main.module.css';

const PagePortfolio = () => {

    return (
        <>
            <ul className={styles.container__portfolio}>
                <li className={styles.portfolio_item}>
                    <div className={styles.portfolio_data}>
                        July - Dec 2020
                    </div>
                    <div className={styles.portfolio_content}>
                        <h1 className={styles.portfolio_heading}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione adipisci error laborum et, magni accusamus labore velit, modi quasi sequi deleniti nostrum a. Cumque enim repudiandae eius blanditiis? Modi, unde.</p>
                    </div>              
                </li>
                <li className={styles.portfolio_item}>
                    <div className={styles.portfolio_data}>
                        July - Dec 2021
                    </div>
                    <div className={styles.portfolio_content}>
                        <h1 className={styles.portfolio_heading}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione adipisci error laborum et, magni accusamus labore velit, modi quasi sequi deleniti nostrum a. Cumque enim repudiandae eius blanditiis? Modi, unde.</p>
                    </div>              
                </li>
                <li className={styles.portfolio_item}>
                    <div className={styles.portfolio_data}>
                        July - Dec 2022
                    </div>
                    <div className={styles.portfolio_content}>
                        <h1 className={styles.portfolio_heading}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione adipisci error laborum et, magni accusamus labore velit, modi quasi sequi deleniti nostrum a. Cumque enim repudiandae eius blanditiis? Modi, unde.</p>
                    </div>              
                </li>
                <li className={styles.portfolio_item}>
                    <div className={styles.portfolio_data}>
                        July - Dec 2023
                    </div>
                    <div className={styles.portfolio_content}>
                        <h1 className={styles.portfolio_heading}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione adipisci error laborum et, magni accusamus labore velit, modi quasi sequi deleniti nostrum a. Cumque enim repudiandae eius blanditiis? Modi, unde.</p>
                    </div>              
                </li>
            </ul> 
        </>
       
    )
}

export default PagePortfolio