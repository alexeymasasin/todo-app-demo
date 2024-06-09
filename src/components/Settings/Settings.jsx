import { IoInvertModeOutline, IoLanguageSharp } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import useLocalStorage from './../../hooks/useLocalStorate';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import styles from './Settings.module.css';
import i18n from './../../i18n';

function Settings() {
  useDocumentTitle('Settings');

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

  const themeChangeHandler = () => {
    if (themeDataHandler() === 'dark') {
      document.querySelector('body').setAttribute('data-theme', 'light');
    } else {
      document.querySelector('body').setAttribute('data-theme', 'dark');
    }
  };

  return (
    <div className={styles.settings}>
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
                  title={themeDataHandler() === 'light' ? t('TURN_DARK') : t(
                    'TURN_LIGHT')} onClick={themeChangeHandler}>
            <IoInvertModeOutline/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;