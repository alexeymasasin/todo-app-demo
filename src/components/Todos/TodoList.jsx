import Todo from './Todo';

function TodoList({ todos }) {
  return (
    <div>
      {todos.map(
        (todo, i) => <Todo key={i} todo={todo}/>)}
    </div>
  );
}

export default TodoList;