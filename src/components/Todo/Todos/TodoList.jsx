import Todo from './Todo';
import styles from './TodoList.module.css';
import { AnimatePresence, motion, Reorder } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import CompletedTodos from './CompletedTodos';

function TodoList({
  importantTodo,
  completedTodosCount,
  deleteTodo,
  todos,
  hidden,
  setTodos,
  toggleTodo,
}) {

  const { t } = useTranslation();
  const constraintsRef = useRef(null);

  return (
    <motion.div ref={constraintsRef}>
      <AnimatePresence mode="wait">
        {todos.length === 0 &&
          <motion.h3 className={styles.is_todolist_empty}
                     key="is_todolist_empty"
                     transition={{ duration: 0.3, delay: 0.5 }}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{
                       opacity: 0, transition: { delay: 0 },
                     }}>{t('TODOLIST_IS_EMPTY')}</motion.h3>}
      </AnimatePresence>
      <motion.div layout>
        <AnimatePresence>
          <Reorder.Group layout axis="y" values={todos}
                         onReorder={setTodos}
                         initial={{
                           opacity: 0,
                         }}
                         animate={{ opacity: 1 }}
                         exit={{
                           opacity: 0,
                           transition: { delay: 0.2 },
                         }}
                         key="reorder_group" class={styles.reorder_group}>
            <AnimatePresence key="todos_map_anim">
              {hidden ? null : todos.map((todo) => (
                <Reorder.Item
                  style={{ position: 'relative' }}
                  value={todo} key={todo.id}
                  dragConstraints={constraintsRef}
                  dragTransition={{
                    bounceStiffness: 300,
                    bounceDamping: 50,
                  }}
                  whileTap={{ cursor: 'grabbing' }}
                  whileDrag={{
                    cursor: 'grabbing',
                  }}
                  whileHover={{
                    cursor: '-webkit-grab',
                    scale: 1.015,
                    transition: { duration: 0.2 }, // on-hover transition
                  }}
                  transition={{
                    duration: 0.2, // on-hover-exit transition
                  }}
                >
                  <Todo importantTodo={importantTodo}
                        deleteTodo={deleteTodo}
                        todo={todo} key={todo.id}
                        toggleTodo={toggleTodo}/>
                </Reorder.Item>
              ))}
            </AnimatePresence>
            <CompletedTodos key="completed_todos"
                            completedTodosCount={completedTodosCount}/>
          </Reorder.Group>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default TodoList;