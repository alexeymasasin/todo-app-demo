import { useState } from 'react';
import styles from './TodoFrom.module.css';
import { IoIosAdd, IoIosArrowDown } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

function TodoForm({ addTodo, hideTodos, hidden }) {
  const [text, setText] = useState('');
  const [arrowUp, setArrowUp] = useState(false);

  const rotate180Deg = { transform: 'rotate(180deg)' };
  const rotate0Deg = { transform: 'rotate(0deg)' };

  const { t } = useTranslation();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div className={`${styles.container} `}>
      <form onSubmit={onSubmitHandler}>
        <input placeholder={t('Enter new todo...')} type="text"
               value={text} onChange={e => setText(e.target.value)}
               maxLength="150"/>
        <button type="submit" title={t('Done')}>
          <IoIosAdd className={styles.done_icon}/></button>
      </form>

      <IoIosArrowDown onClick={() => {
        hideTodos();
        setArrowUp(!arrowUp);
      }}
                      className={`${styles.arrow_icon} ${arrowUp
                        ? styles.down
                        : styles.up}`}
                      title={hidden ? t('SHOW_TODOS') : t('HIDE_TODOS')}
      />
    </div>

  );
}

export default TodoForm;

