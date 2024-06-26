import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './NotFound.module.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Title from '../UI/Title';
import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();
  useDocumentTitle(t('NOT_FOUND'));

  return (
    <motion.div className={styles.not_found} initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}>
      <Title title={t('NOT_FOUND')}/>
      <NavLink to="/" className={styles.go_home}>{t('GO_HOME')}</NavLink>
    </motion.div>
  );
}

export default NotFound;