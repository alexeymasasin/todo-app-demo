import { RiTodoLine } from 'react-icons/ri';
import { MdDeleteOutline, MdDone } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { motion, Reorder, useDragControls } from 'framer-motion';
import styles from './Todo.module.css';
import TodoMoveIcon from './TodoMoveIcon';

function Todo({
  deleteTodo,
  todo,
  toggleTodo,
  importantTodo,
  constraintsRef,
}) {
  const { t } = useTranslation();

  const dragControls = useDragControls();

  return (
    <motion.div
      transition={{ duration: 0.2, delay: 0.2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      key="todo"
      exit={{ opacity: 0, transition: { delay: 0.2 } }}
    >
      <Reorder.Item
        className={styles.reorder_item}
        value={todo} key={todo.id}
        dragListener={false}
        dragControls={dragControls}
        dragConstraints={constraintsRef}
        dragTransition={{
          bounceStiffness: 300,
          bounceDamping: 50,
        }}
        exit={{
          height: 0,
          transition: { delay: 0.3, duration: 0.3 },
        }}
      >
        <motion.div className={`${styles.todo}  
      ${todo.isCompleted ? styles.completed : ''}
      ${todo.isImportant ? styles.important_todo : ''}`}>
          <motion.div className={styles.todo_left}>
            <RiTodoLine title={t('IMPORTANT_TODO')}
                        onClick={() => importantTodo(todo.id)}
                        className={`${styles.todo_icon} ${todo.isImportant
                          ? styles.important
                          : ''}`}/>
          </motion.div>
          <div className={styles.todo_text}>{todo.text}</div>
          <div className={styles.todo_right}>
            <MdDone title={t('COMPLETE_TODO')}
                    onClick={() => toggleTodo(todo.id)}
                    className={styles.todo_done_icon}/>
            <MdDeleteOutline title={t('DELETE_TODO')}
                             onClick={() => deleteTodo(todo.id)}
                             className={styles.todo_delete_icon}/>
            <TodoMoveIcon dragControls={dragControls}
            />
          </div>
        </motion.div>
      </Reorder.Item>
    </motion.div>
  );
}

export default Todo;