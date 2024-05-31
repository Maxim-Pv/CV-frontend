import React from 'react'
import { useTranslation } from 'react-i18next';
import st from './LanguageSwitcher.module.css'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={st.container}>
      <button className={st.btn} onClick={() => changeLanguage('en')}>en</button>
      <button className={st.btn} onClick={() => changeLanguage('ru')}>ru</button>
    </div>
  )
}

export default LanguageSwitcher