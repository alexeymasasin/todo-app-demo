import { RiTodoLine } from 'react-icons/ri';
import styles from './Todo.module.css';

function Todo({ deleteTodo, todo }) {
  return (
    <div onDoubleClick={() => (deleteTodo(todo.id))} className={styles.todo}>
      <div className={styles.todo_text}>
        <RiTodoLine className={styles.todo_icon}/>
        {todo.text}
      </div>
    </div>
  );
}

export default Todo;