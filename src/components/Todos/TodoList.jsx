import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ deleteTodo, order, todos, toggleTodo }) {

  if (order === 'DOWN') {
    return (
      <div className={styles.todo_list_container}>
        {todos.length === 0 && <h2>Todo list is empty</h2>}
        {todos.map(
          (todo) => <Todo deleteTodo={deleteTodo} todo={todo} key={todo.id}
                          toggleTodo={toggleTodo}
          />)}
      </div>
    );
  } else {
    return (
      <div className={styles.todo_list_container}>
        {todos.length === 0 && <h2>Todo list is empty</h2>}
        {todos.map(
          (todo) => <Todo deleteTodo={deleteTodo} key={todo.id}
                          todo={todo} toggleTodo={toggleTodo}/>)
          .reverse()}
      </div>
    );
  }

}

export default TodoList;