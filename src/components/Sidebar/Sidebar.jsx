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

function Sidebar(props) {
  return (
    <div className={styles.sidebar}>
      <div>
        <NavLink to="/">
          <Button title="Todo"><RiStickyNoteLine/></Button>
        </NavLink>
        <NavLink to="/faq/">
          <Button title="FAQ"><RiQuestionLine/></Button>
        </NavLink>
        <a href="https://github.com/alexeymasasin/todo-app-demo" target="_blank"
           rel="noopener noreferrer">
          <Button title="GitHub Repository"><RiGitRepositoryLine/></Button>
        </a>
        <a href="https://github.com/alexeymasasin/" target="_blank"
           rel="noopener noreferrer">
          <Button title="My GitHub Page"><RiGithubFill/></Button>
        </a>
      </div>

      <div>
        <NavLink to="/settings/">
          <Button title="Settings"><RiSettings2Line/></Button>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;