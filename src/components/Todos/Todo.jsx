import { RiTodoLine } from 'react-icons/ri';
import { MdDeleteOutline, MdDone } from 'react-icons/md';
import styles from './Todo.module.css';

function Todo({ deleteTodo, todo, toggleTodo }) {
  return (
    <div className={`${styles.todo} 
      ${todo.isCompleted ? styles.completed_todo : ''}`}>
      <div className={styles.todo_text}>
        <RiTodoLine className={styles.todo_icon}/>
        {todo.text}
      </div>
      <MdDeleteOutline onClick={() => deleteTodo(todo.id)}
                       className={styles.todo_delete_icon}/>
      <MdDone onClick={() => toggleTodo(todo.id)}
              className={styles.todo_done_icon}/>
    </div>
  );
}

export default Todo;