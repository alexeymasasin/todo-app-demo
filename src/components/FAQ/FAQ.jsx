import { motion } from 'framer-motion';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Title from '../UI/Title';
import styles from './FAQ.module.css';
import FaqItem from './FaqItem/FaqItem';

function FAQ() {
	useDocumentTitle('FAQ_PAGE');

	return (
		<motion.div
			className={styles.faq}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			<Title title="FAQ" />
			<div className={styles.faq_section}>
				<FaqItem i18q={'WHATS_THIS_TODO_APP'} i18a={'THIS_TODO_APP_IS'} />
				<FaqItem i18q={'HOW_DO_I_USE_IT'} i18a={'HOW_TO'} />
				<FaqItem i18q={'DO_YOU_COLLECT'} i18a={'NOT_COLLECTING'} />
				<FaqItem i18q={'WAY_TO_ORGANISE'} i18a={'ORGANISING'} />
				<FaqItem i18q={'CAN_I_CLEAR_QUICKLY'} i18a={'CLEAR_QUICKLY'} />
				<FaqItem i18q={'OTHER_OPTIONS?'} i18a={'OPTIONS'} />
				<FaqItem i18q={'CAN_SAVE?'} i18a={'SAVING'} />
			</div>
		</motion.div>
	);
}

export default FAQ;
