import styles from './FAQ.module.css';
import { TbMessageCircleQuestion } from 'react-icons/tb';

function FAQ() {
  return (
    <div className={styles.faq}>
      <h1 className={styles.faq_title}>FAQ</h1>
      <div className={styles.faq_section}>
        <div className={styles.faq_item}>
          <h2><TbMessageCircleQuestion/> What's this Todo App?</h2>
          <h3>This Todo App is a task management
            application developed & designed by Alexey Masasin
            to help you stay organized and manage your day-to-day tasks by
            keeping your todos right in
            your browser tab</h3>
        </div>
        <div className={styles.faq_item}>
          <h2><TbMessageCircleQuestion/> How do I use it?</h2>
          <h3>Just type about anything into the task
            field and click 'Done'
            or
            press Enter - your task will instantly fall into your to-do
            list</h3>
        </div>
        <div className={styles.faq_item}>
          <h2><TbMessageCircleQuestion/> Is there any way to organise my tasks?
          </h2>
          <h3>Certainly! Click the arrow below the task field
            and your tasks will be
            be
            sorted by old to new or vice versa. You can also mark your tasks as
            completed by clicking the check icon and delete them by clicking the
            trash can icon</h3>
        </div>
        <div className={styles.faq_item}>
          <h2><TbMessageCircleQuestion/> Can I clear all my tasks quickly?</h2>
          <h3>Yes! Once you add any task to the list and mark any of them as
            completed, two buttons will appear at the top of the page - they
            will allow you to reset all your tasks or clear completed ones.</h3>
        </div>
        <div className={styles.faq_item}>
          <h2><TbMessageCircleQuestion/> Are there any other options in the
            application?</h2>
          <h3>Of course, among other things, you can mark tasks as more
            important by clicking the task icon</h3>
        </div>
      </div>
    </div>
  );
}

export default FAQ;