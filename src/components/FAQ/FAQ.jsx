import styles from './FAQ.module.css';

function FAQ() {
  return (
    <div className={styles.faq}>
      <h1 className={styles.faq_title}>FAQ</h1>
      <div>
        <div className={styles.faq_right}>
          <h2>Q: What's a Todo App?</h2>
          <h3>A: Todo App is a task management application to help you stay
            organized and manage your day-to-day by keeping your todos right in
            your browser tab</h3>
        </div>
        <div className={styles.faq_left}>
          <h2>Q: How do I use it?</h2>
          <h3>A: Just type about anything into the task field and click 'Done'
            or
            press Enter - your task will instantly fall into your to-do
            list.</h3>
        </div>
        <div className={styles.faq_right}>
          <h2>Q: Is there any way to sort my tasks?</h2>
          <h3>A: Yes, click the arrow below the task field and your todos will
            be
            sorted by old to new or vice versa</h3>
        </div>
        <div className={styles.faq_left}>
          <h2>Q: Can I clear all my completed tasks or delete all of them
            quickly?</h2>
          <h3>A: Absolutely! As soon as you add any task to the list, you'll see
            two buttons at the of page that will allow you to do this.</h3>
        </div>
      </div>
    </div>
  );
}

export default FAQ;