import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ deleteTodo, order, todos }) {

  if (order === 'DOWN') {
    return (
      <div className={styles.todo_list_container}>
        {todos.length === 0 && <h2>Todo list is empty</h2>}
        {todos.map(
          (todo, i) => <Todo index={i} deleteTodo={deleteTodo} key={i}
                             todo={todo}/>)}
      </div>
    );
  } else {
    return (
      <div className={styles.todo_list_container}>
        {todos.length === 0 && <h2>Todo list is empty</h2>}
        {todos.map(
          (todo, i) => <Todo index={i} deleteTodo={deleteTodo} key={i}
                             todo={todo}/>)
          .reverse()}
      </div>
    );
  }

}

export default TodoList;