import { useState } from 'react';

function TodoForm(props) {
  const [text, setText] = useState('');

  const addTodo = e => {
    e.preventDefault();
    props.setTodos([...props.todos, text]);
    setText('');
  };

  return (
    <form>
      <input placeholder="Enter new todo..." type="text"
             value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={addTodo}>Submit</button>
    </form>
  );
}

export default TodoForm;

