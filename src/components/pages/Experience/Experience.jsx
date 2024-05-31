import { useTranslation } from 'react-i18next';
import st from './Experience.module.css';
  
  const Experience = () => {
    const { t } = useTranslation();
    return (
      <ul className={st.container}>
        <li className={st.item}>
          <div className={st.header}>
            <h3 className={st.heading}>Gold apple</h3>
            <span className={st.date}>{t('dataWork1')}</span> 
          </div>
          <h3 className={st.heading}>{t('positionWork1')}</h3>
          <div className={st.text}>
            {t('descriptionWork1')}
            <p>
              <span>{t('achievements')}</span> {t('achievementsText1')}
            </p>
          </div>
        </li>
        <li className={st.item}>
          <div className={st.header}>
            <h3 className={st.heading}>{t('work2')}</h3>
            <span className={st.date}>{t('dataWork2')}</span> 
          </div>
          <h3 className={st.heading}>{t('positionWork2')}</h3>
          <div className={st.text}>
            {t('descriptionWork2')}
            <p>
              <span>{t('achievements')}</span> {t('achievementsText2')}
            </p>
          </div>
        </li>
      </ul>
    );
  };
  
  export default Experience;
  
  
  
  
  
  
  
