import { RiTodoLine } from 'react-icons/ri';
import { MdDeleteOutline, MdDone } from 'react-icons/md';
import styles from './Todo.module.css';
import { useState } from 'react';

function Todo({ deleteTodo, todo, toggleTodo }) {
  const [isImportant, setIsImportant] = useState(false);
  return (
    <div className={`${styles.todo} 
      ${todo.isCompleted ? styles.completed_todo : ''}`}>
      <div className={styles.todo_text}>
        <RiTodoLine onClick={() => setIsImportant(!isImportant)}
                    className={`${styles.todo_icon} ${isImportant
                      ? styles.important
                      : ''}`}/>
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