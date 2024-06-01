import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import st from './MyApps.module.css'

const MyApps = () => {
  const { t } = useTranslation();
  return (
    <ul className={st.container}>
      <li className={st.item}>
        <h3 className={st.header}>{t('app1.name')}</h3>
        <ul className={st.list}>
          <li>{t('userCan')}</li>
          <li>{t('userCanText1')}</li>
          <li>{t('userCanText2')}</li>
          <li>{t('app1.userCanText3')}</li>
          <li>{t('app2.userCanText4')}</li>
        </ul>
        <div className={st.buttonLink}>
          <Link to="https://interactive-comments-omega-snowy.vercel.app/" className={`${st.link} ${st.image1}`}/>
        </div>
      </li>

      <li className={st.item}>
        <h3 className={st.header}>{t('app2.name')}</h3>
        <ul className={st.list}>
          <li>{t('userCan')}</li>
          <li>{t('userCanText1')}</li>
          <li>{t('userCanText2')}</li>
          <li>{t('app2.userCanText3')}</li>
          <li>{t('app2.userCanText4')}</li>
          <li>{t('app2.userCanText5')}</li>
          <li>{t('app2.userCanText6')}</li>
        </ul>
        <div className={st.buttonLink}>
          <Link to="https://sneakers-shop-eight.vercel.app/" className={`${st.link} ${st.image2}`}/>
        </div>
      </li>

      <li className={st.item}>
        <h3 className={st.header}>{t('app3.name')}</h3>
        <ul className={st.list}>
          <li>{t('userCan')}</li>
          <li>{t('userCanText1')}</li>
          <li>{t('userCanText2')}</li>
          <li>{t('app3.userCanText3')}</li>
          <li>{t('app3.userCanText4')}</li>
          <li>{t('app3.userCanText5')}</li>
          <li>{t('app3.userCanText6')}</li>
          <li>{t('app3.userCanText7')}</li>
          <li>{t('app3.userCanText8')}</li>
          <li>{t('app3.userCanText9')}</li>
        </ul>
        <div className={st.buttonLink}>
          <Link to="https://fr-mentor-todo-app.vercel.app/" className={`${st.link} ${st.image3}`}/>
        </div>
      </li>
    </ul>
  )
}

export default MyApps