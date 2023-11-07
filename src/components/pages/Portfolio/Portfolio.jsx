import styles from './Portfolio.module.css';

const portfolioData = [
    {
      date: 'July - Dec 2020',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione adipisci error laborum et, magni accusamus labore velit, modi quasi sequi deleniti nostrum a. Cumque enim repudiandae eius blanditiis? Modi, unde.',
    },
    {
      date: 'July - Dec 2021',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione adipisci error laborum et, magni accusamus labore velit, modi quasi sequi deleniti nostrum a. Cumque enim repudiandae eius blanditiis? Modi, unde.',
    },
    {
      date: 'July - Dec 2022',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione adipisci error laborum et, magni accusamus labore velit, modi quasi sequi deleniti nostrum a. Cumque enim repudiandae eius blanditiis? Modi, unde.',
    },
    {
      date: 'July - Dec 2023',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione adipisci error laborum et, magni accusamus labore velit, modi quasi sequi deleniti nostrum a. Cumque enim repudiandae eius blanditiis? Modi, unde.',
    },
  ];
  
  const PagePortfolio = () => {
    return (
      <ul className={styles.container__portfolio}>
        {portfolioData.map((item, index) => (
          <li key={index} className={styles.portfolio_item}>
            <div className={styles.portfolio_data}>
              {item.date}
            </div>
            <div className={styles.portfolio_content}>
              <h1 className={styles.portfolio_heading}>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  };
  
  export default PagePortfolio;
  
  
  
  
  
  
  
