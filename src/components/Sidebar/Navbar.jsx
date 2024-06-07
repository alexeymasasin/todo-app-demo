import styles from './Navbar.module.css';
import Button from './../UI/Button';
import {
  RiGithubFill,
  RiGitRepositoryLine,
  RiQuestionLine,
  RiSettings2Line,
  RiStickyNoteLine,
} from 'react-icons/ri';
import { NavLink, useLocation } from 'react-router-dom';

function Navbar(props) {
  const location = useLocation();

  return (
    <div className={styles.sidebar}>
      <NavLink to="/todo"
               className={({ isActive }) => isActive
                 ? ` ${styles.active}`
                 : ''}>
        <Button title="Todo"><RiStickyNoteLine
          className={styles.sidebar_icon}/></Button>
      </NavLink>
      <NavLink to="/faq"
               className={({ isActive }) => isActive
                 ? ` ${styles.active}`
                 : ''}>
        <Button title="FAQ"><RiQuestionLine
          className={styles.sidebar_icon}/></Button>
      </NavLink>
      <NavLink to="/settings"
               className={({ isActive }) => isActive
                 ? ` ${styles.active}`
                 : ''}>
        <Button title="Settings"><RiSettings2Line
          className={styles.sidebar_icon}/></Button>
      </NavLink>
      <a href="https://github.com/alexeymasasin/todo-app-demo" target="_blank"
         rel="noopener noreferrer">
        <Button title="GitHub Repository"><RiGitRepositoryLine
          className={styles.sidebar_icon}/></Button>
      </a>
      <a href="https://github.com/alexeymasasin/" target="_blank"
         rel="noopener noreferrer">
        <Button title="My GitHub Page"><RiGithubFill
          className={styles.sidebar_icon}/></Button>
      </a>
    </div>
  );
}

export default Navbar;