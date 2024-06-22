import { AnimatePresence, motion } from 'framer-motion';
import styles from './CompletedTodos.module.css';
import { useTranslation } from 'react-i18next';

const CompletedTodos = ({ completedTodosCount }) => {
  const todosDeclinationHandler = () => {
    if (completedTodosCount % 10 === 1 && completedTodosCount % 100 !== 11) {
      return t('TASKS_ONE');
    } else if (completedTodosCount % 10 >= 2 && completedTodosCount % 10 <= 4 &&
      (completedTodosCount % 100 < 10 || completedTodosCount % 100 >= 20)) {
      return t('TASKS_FEW');
    } else {
      return t('TASKS_MANY');
    }
  };
  const { t } = useTranslation();

  return (
    <AnimatePresence key="completed_todos">
      {!!completedTodosCount &&
        <motion.div layout="position"
                    className={styles.completed_todos}
                    key="completed_todos_count"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{
                      opacity: 0,
                    }}>
          {t(
            'YOU_COMPLETED')} {completedTodosCount} {todosDeclinationHandler()}
        </motion.div>
      }
    </AnimatePresence>
  );
};

export default CompletedTodos;