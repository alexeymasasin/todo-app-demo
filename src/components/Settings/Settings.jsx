import { IoInvertModeOutline, IoLanguageSharp } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import useLocalStorage from './../../hooks/useLocalStorate';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import styles from './Settings.module.css';
import i18n from './../../i18n';
import { useState } from 'react';

function Settings() {
  useDocumentTitle('SETTINGS_PAGE');

  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'ru');

  const languageChangeHandler = () => {
    if (language === 'en') {
      i18n.changeLanguage('ru');
      setLanguage('ru');
    } else if (language === 'ru') {
      i18n.changeLanguage('en');
      setLanguage('en');
    }
  };

  const themeDataHandler = () => {
    if (document.querySelector('body').getAttribute('data-theme') === 'dark') {
      return 'dark';
    } else if (document.querySelector('body').getAttribute('data-theme') ===
      'light') {
      return 'light';
    }
  };

  const setDarkTheme = () => document.querySelector('body')
    .setAttribute('data-theme', 'dark');
  const setLightTheme = () => document.querySelector('body')
    .setAttribute('data-theme', 'light');

  const selectedTheme = localStorage.getItem('selectedTheme');

  if (selectedTheme === 'dark') {
    setDarkTheme();
  } else if (selectedTheme === 'light') {
    setLightTheme();
  }

  const themeChangeHandler = () => {
    if (themeDataHandler() === 'dark') {
      setLightTheme();
      localStorage.setItem('selectedTheme', 'light');
      setThemeData(themeDataHandler());
    } else {
      setDarkTheme();
      localStorage.setItem('selectedTheme', 'dark');
      setThemeData(themeDataHandler());
    }
  };

  const [themeData, setThemeData] = useState(themeDataHandler());
  const themeTitleHandler = () => {
    if (themeData === 'light') {
      return t('TURN_DARK');
    } else {
      return t('TURN_LIGHT');
    }
  };

  return (
    <motion.div className={styles.settings} initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}>
      <h1 className={styles.title}>{t('Settings')}</h1>
      <div className={styles.settings_items}>
        <div>
          <button className={styles.setting}
                  title={t('CHANGE_LANGUAGE')} onClick={() => {
            languageChangeHandler();
            // window.location.reload();
          }}>
            <IoLanguageSharp/>
          </button>
        </div>

        <div>
          <button className={styles.setting}
                  title={themeTitleHandler()} onClick={themeChangeHandler}>
            <IoInvertModeOutline/>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Settings;