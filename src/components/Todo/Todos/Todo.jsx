import { RiTodoLine } from 'react-icons/ri';
import { MdDeleteOutline, MdDone } from 'react-icons/md';
import styles from './Todo.module.css';
import { useTranslation } from 'react-i18next';

function Todo({ deleteTodo, todo, toggleTodo, importantTodo }) {
  const { t } = useTranslation();

  return (
    <div className={`${styles.todo} 
      ${todo.isCompleted ? styles.completed_todo : ''}`}>
      <div className={styles.todo_text}>
        <RiTodoLine title={t('IMPORTANT_TODO')}
                    onClick={() => importantTodo(todo.id)}
                    className={`${styles.todo_icon} ${todo.isImportant
                      ? styles.important
                      : ''}`}/>
        {todo.text}
      </div>
      <MdDeleteOutline title={t('DELETE_TODO')}
                       onClick={() => deleteTodo(todo.id)}
                       className={styles.todo_delete_icon}/>
      <MdDone title={t('COMPLETE_TODO')} onClick={() => toggleTodo(todo.id)}
              className={styles.todo_done_icon}/>
    </div>
  );
}

export default Todo;