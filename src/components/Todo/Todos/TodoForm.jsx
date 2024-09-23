import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoIosAdd, IoIosArrowDown } from 'react-icons/io';
import styles from './TodoForm.module.css';

function TodoForm({ addTodo, hideTodos, hidden }) {
	const [text, setText] = useState('');
	const [arrowUp, setArrowUp] = useState(false);

	const { t } = useTranslation();

	const onSubmitHandler = (e) => {
		e.preventDefault();
		addTodo(text);
		setText('');
	};

	return (
		<div className={`${styles.container} `}>
			<form onSubmit={onSubmitHandler}>
				<input
					placeholder={t('ENTER_NEW_TODO')}
					type="text"
					value={text}
					onChange={(e) => setText(e.target.value)}
					maxLength="150"
				/>
				<button type="submit" title={t('DONE')}>
					<IoIosAdd className={styles.done_icon} />
				</button>
			</form>

			<IoIosArrowDown
				onClick={() => {
					hideTodos();
					setArrowUp(!arrowUp);
				}}
				className={`${styles.arrow_icon} ${arrowUp ? styles.down : styles.up}`}
				title={hidden ? t('SHOW_TODOS') : t('HIDE_TODOS')}
			/>
		</div>
	);
}

export default TodoForm;
