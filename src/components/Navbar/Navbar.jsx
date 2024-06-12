import {
  RiGithubFill,
  RiGitRepositoryLine,
  RiQuestionLine,
  RiSettings2Line,
  RiStickyNoteLine,
} from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.css';
import Button from './../UI/Button';

function Navbar() {
  const { t } = useTranslation();

  return (
    <div className={styles.navbar}>
      <NavLink to="/" end
               className={({ isActive }) => isActive
                 ? ` ${styles.active}`
                 : ''}>
        <Button title={t('HOME_PAGE')}><RiStickyNoteLine
          className={styles.sidebar_icon}/></Button>
      </NavLink>

      <NavLink to="/settings"
               className={({ isActive }) => isActive
                 ? ` ${styles.active}`
                 : ''}>
        <Button title={t('SETTINGS_PAGE')}><RiSettings2Line
          className={styles.sidebar_icon}/></Button>
      </NavLink>

      <NavLink to="/faq"
               className={({ isActive }) => isActive
                 ? ` ${styles.active}`
                 : ''}>
        <Button title={t('FAQ_PAGE')}><RiQuestionLine
          className={styles.sidebar_icon}/></Button>
      </NavLink>

      <a href="https://github.com/alexeymasasin/todo-app-demo" target="_blank"
         rel="noopener noreferrer">
        <Button title={t('GITHUB_REPO')}><RiGitRepositoryLine
          className={styles.sidebar_icon}/></Button>
      </a>

      <a href="https://github.com/alexeymasasin/" target="_blank"
         rel="noopener noreferrer">
        <Button title={t('GITHUB_PAGE')}><RiGithubFill
          className={styles.sidebar_icon}/></Button>
      </a>
    </div>
  );
}

export default Navbar;