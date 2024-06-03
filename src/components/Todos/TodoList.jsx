import Todo from './Todo';

function TodoList({ todos, order }) {

  if (order === 'DOWN') {
    return (
      <div>
        {todos.map(
          (todo, i) => <Todo key={i} todo={todo}/>)}
      </div>
    );
  } else {
    return (
      <div>
        {todos.map(
          (todo, i) => <Todo key={i} todo={todo}/>).reverse()}
      </div>
    );
  }

}

export default TodoList;