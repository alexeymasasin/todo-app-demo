import { RiTodoLine } from 'react-icons/ri';
import styles from './Todo.module.css';

function Todo({ index, deleteTodo, todo }) {
  return (
    <div onDoubleClick={() => (deleteTodo(index))} className={styles.todo}>
      <div className={styles.todo_text}>
        <RiTodoLine className={styles.todo_icon}/>
        {todo}
      </div>
    </div>
  );
}

export default Todo;