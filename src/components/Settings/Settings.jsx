import styles from './Settings.module.css';
import { useTranslation } from 'react-i18next';
import useLocalStorage from './../../hooks/useLocalStorate';
import i18n from './../../i18n';
import { IoLanguageSharp } from 'react-icons/io5';

function Settings() {
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

  return (
    <div className={styles.settings}>
      <h1 className={styles.title}>{t('Settings')}</h1>
      <div className={styles.settings_items}>
        <button className={styles.setting}
                title={t('Change language to Russian')} onClick={() => {
          languageChangeHandler();
          // window.location.reload();
        }}>
          <IoLanguageSharp/>
        </button>
      </div>
    </div>
  );
}

export default Settings;