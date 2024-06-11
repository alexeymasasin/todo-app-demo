import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './NotFound.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function NotFound() {
  useDocumentTitle('NOT_FOUND');

  return (
    <motion.div className={styles.not_found} initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}>
      <h1 className={styles.not_found_title}>Page Not Found</h1>
      <NavLink to="/" className={styles.go_home}>
        Go to Home
      </NavLink>
    </motion.div>
  );
}

export default NotFound;