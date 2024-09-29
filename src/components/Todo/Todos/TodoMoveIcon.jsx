import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CgMenuGridR } from 'react-icons/cg';
import styles from './Todo.module.css';

function TodoMoveIcon({ dragControls }) {
	const { t } = useTranslation();
	return (
		<motion.div
			style={{ touchAction: 'none' }}
			whileTap={{ cursor: 'grabbing' }}
			whileDrag={{ cursor: 'grabbing' }}
			whileHover={{ scale: 1.2, cursor: 'grab' }}
			onPointerDown={(event) => dragControls.start(event)}
		>
			<CgMenuGridR className={styles.todo_move_icon} title={t('MOVE_TODO')} />
		</motion.div>
	);
}

export default TodoMoveIcon;
