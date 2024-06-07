import { useState } from 'react';
import styles from './TodoFrom.module.css';
import { IoIosAdd, IoIosArrowDown } from 'react-icons/io';

function TodoForm({ addTodo, switchOrder }) {
  const [text, setText] = useState('');
  const [arrowUp, setArrowUp] = useState(false);

  const rotate180Deg = { transform: 'rotate(180deg)' };
  const rotate0Deg = { transform: 'rotate(0deg)' };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div className={`${styles.todo_form_container} `}>
      <form onSubmit={onSubmitHandler}>
        <input placeholder="Enter new todo..." type="text"
               value={text} onChange={e => setText(e.target.value)}
               maxLength={50}/>
        <button type="submit" title="Done">
          <IoIosAdd className={styles.done_icon}/></button>
      </form>

      <IoIosArrowDown onClick={() => {
        switchOrder();
        setArrowUp(!arrowUp);
      }}
                      className={`${styles.order_arrow_icon} `}
                      style={arrowUp ? rotate180Deg : rotate0Deg}
                      title="Change Todos Order"
      />
    </div>

  );
}

export default TodoForm;

