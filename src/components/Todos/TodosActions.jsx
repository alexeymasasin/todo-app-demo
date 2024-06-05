import { GrClear, GrRefresh } from 'react-icons/gr';
import Button from './../UI/Button';
import styles from './TodosActions.module.css';

function todosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <div className={styles.actions_container}>
      <Button title="Reset Todos" onClick={resetTodos}><GrRefresh/></Button>
      <Button title="Clear Completed Todos"
              disabled={!completedTodosExist}
              onClick={deleteCompletedTodos}><GrClear/></Button>
    </div>
  );
}

export default todosActions;