import { RiTodoLine } from 'react-icons/ri';
import { MdDeleteOutline, MdDone } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from './Todo.module.css';

function Todo({ deleteTodo, todo, toggleTodo, importantTodo }) {
  const { t } = useTranslation();

  return (
    <motion.div
      transition={{ duration: 0.2, delay: 0.2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      key="todo"
      exit={{ opacity: 0, transition: { delay: 0.2 } }}
    >
      <motion.div className={`${styles.todo}  
      ${todo.isCompleted ? styles.completed : ''}
      ${todo.isImportant ? styles.important_todo : ''}`}>
        <motion.div className={styles.todo_left}>
          <RiTodoLine title={t('IMPORTANT_TODO')}
                      onClick={() => importantTodo(todo.id)}
                      className={`${styles.todo_icon} ${todo.isImportant
                        ? styles.important
                        : ''}`}/>
        </motion.div>
        <div className={styles.todo_text}>{todo.text}</div>
        <div className={styles.todo_right}>
          <MdDeleteOutline title={t('DELETE_TODO')}
                           onClick={() => deleteTodo(todo.id)}
                           className={styles.todo_delete_icon}/>
          <MdDone title={t('COMPLETE_TODO')}
                  onClick={() => toggleTodo(todo.id)}
                  className={styles.todo_done_icon}/>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Todo;