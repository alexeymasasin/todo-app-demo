import { GrClear, GrRefresh } from 'react-icons/gr';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Button from '../../UI/Button';
import styles from './TodosActions.module.css';

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div className={styles.actions_container} key={location.pathname}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Button title="Reset Todos" onClick={resetTodos}><GrRefresh/></Button>
          <Button title="Clear Completed Todos"
                  disabled={!completedTodosExist}
                  onClick={deleteCompletedTodos}><GrClear/></Button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default TodosActions;