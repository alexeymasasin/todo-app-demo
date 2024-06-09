import styles from './NotFound.module.css';
import { NavLink } from 'react-router-dom';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function NotFound() {
  useDocumentTitle('Not Found');

  return (
    <div className={styles.not_found}>
      <h1 className={styles.not_found_title}>Page Not Found</h1>
      <NavLink to="/" className={styles.go_home}>
        Go to Home
      </NavLink>
    </div>
  );
}

export default NotFound;