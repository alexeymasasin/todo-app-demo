import { GrClear, GrRefresh } from 'react-icons/gr';
import { motion } from 'framer-motion';
import Button from '../../UI/Button';
import styles from './TodosActions.module.css';
import { useTranslation } from 'react-i18next';

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  const { t } = useTranslation();

  return (
    <motion.div className={styles.actions_container} key="actions_container"
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Button key="reset_todos" title={t('RESET_TODOS')}
              onClick={resetTodos}><GrRefresh/></Button>
      <Button key="clear_todos" title={t('CLEAR_COMPLETED')}
              disabled={!completedTodosExist}
              onClick={deleteCompletedTodos}><GrClear/></Button>
    </motion.div>
  );
}

export default TodosActions;