import { useTranslation } from 'react-i18next';
import { TbMessageCircleQuestion } from 'react-icons/tb';
import styles from './FaqItem.module.css';

function FaqItem({ i18q, i18a }) {
	const { t } = useTranslation();

	return (
		<div className={styles.faq_item}>
			<h2>
				<TbMessageCircleQuestion /> {t(`${i18q}`)}
			</h2>
			<h3>{t(`${i18a}`)}</h3>
		</div>
	);
}

export default FaqItem;
