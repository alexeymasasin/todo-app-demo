import { RiTodoLine } from 'react-icons/ri';
import { MdDeleteOutline, MdDone } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from './Todo.module.css';

function Todo({ deleteTodo, todo, toggleTodo, importantTodo }) {
  const { t } = useTranslation();

  return (
    <motion.div className={`${styles.todo}
      ${todo.isCompleted ? styles.completed_todo : ''} 
      ${todo.isImportant ? styles.important_todo : ''}`}>
      <div className={styles.todo_left}>
        <RiTodoLine title={t('IMPORTANT_TODO')}
                    onClick={() => importantTodo(todo.id)}
                    className={`${styles.todo_icon} ${todo.isImportant
                      ? styles.important
                      : ''}`}/>
      </div>
      <div className={styles.todo_text}>{todo.text}</div>
      <div className={styles.todo_right}>
        <MdDeleteOutline title={t('DELETE_TODO')}
                         onClick={() => deleteTodo(todo.id)}
                         className={styles.todo_delete_icon}/>
        <MdDone title={t('COMPLETE_TODO')} onClick={() => toggleTodo(todo.id)}
                className={styles.todo_done_icon}/>
      </div>
    </motion.div>
  );
}

export default Todo;