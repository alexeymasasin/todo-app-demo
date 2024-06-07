import styles from './Sidebar.module.css';
import Button from './../UI/Button';
import {
  RiGithubFill,
  RiGitRepositoryLine,
  RiQuestionLine,
  RiSettings2Line,
  RiStickyNoteLine,
} from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import SidebarDivider from './SidebarDivider';

function Sidebar(props) {
  return (
    <div className={styles.sidebar}>
      <NavLink to="/">
        <Button title="Todo"><RiStickyNoteLine
          className={styles.sidebar_icon}/></Button>
      </NavLink>
      <SidebarDivider/>
      <NavLink to="/faq/">
        <Button title="FAQ"><RiQuestionLine
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
      <SidebarDivider/>
      <NavLink to="/settings/">
        <Button title="Settings"><RiSettings2Line
          className={styles.sidebar_icon}/></Button>
      </NavLink>
    </div>
  );
}

export default Sidebar;