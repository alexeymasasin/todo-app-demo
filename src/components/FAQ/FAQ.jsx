import { TbMessageCircleQuestion } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import styles from './FAQ.module.css';
import Title from '../UI/Title';

function FAQ() {
  useDocumentTitle('FAQ_PAGE');

  const { t } = useTranslation();

  return (
    <motion.div className={styles.faq} initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}>
      <Title title="FAQ"/>
      <div className={styles.faq_section}>
        <div className={styles.faq_item}>
          <h2><TbMessageCircleQuestion/> {t(`What's this Todo App?`)}</h2>
          <h3>{t('THIS_TODO_APP_IS')}</h3>
        </div>
        <div className={styles.faq_item}>
          <h2><TbMessageCircleQuestion/> {t('How do I use it?')}</h2>
          <h3>{t('HOW_TO')}</h3>
        </div>
        <div className={styles.faq_item}>
          <h2><TbMessageCircleQuestion/> {t(
            'Is there any way to organise my tasks?')}
          </h2>
          <h3>{t('ORGANISING')}</h3>
        </div>
        <div className={styles.faq_item}>
          <h2><TbMessageCircleQuestion/> {t(
            'Can I clear all my tasks quickly?')}</h2>
          <h3>{t('CLEAR_QUICKLY')}</h3>
        </div>
        <div className={styles.faq_item}>
          <h2><TbMessageCircleQuestion/> {t('OTHER_OPTIONS?')}</h2>
          <h3>{t('OPTIONS')}</h3>
        </div>
        <div className={styles.faq_item}>
          <h2><TbMessageCircleQuestion/> {t('CAN_SAVE?')}</h2>
          <h3>{t('SAVING')}</h3>
        </div>
      </div>
    </motion.div>
  );
}

export default FAQ;