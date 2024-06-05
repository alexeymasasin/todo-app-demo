import styles from './FAQ.module.css';
import FAQDividerShort from './FAQDividerShort';
import FAQDividerLong from './FAQDividerLong';

function FAQ() {
  return (
    <div className={styles.faq}>
      <h1 className={styles.faq_title}>FAQ</h1>
      <FAQDividerShort/>
      <div className={styles.q_and_a}>
        <h2>Q: What's a Todo App?</h2>
        <h3>A: Todo App is a task management application to help you stay
          organized and manage your day-to-day by keeping your todos right in
          your browser tab</h3>
        <FAQDividerLong/>
        <h2>Q: How do I use it?</h2>
        <h3>A: Just type about anything into the task field and click 'Done' or
          press Enter - your task will instantly fall into your to-do list.</h3>
        <FAQDividerShort/>
        <h2>Q: Is there any way to sort my tasks?</h2>
        <h3>A: Yes, click the arrow below the task field and your todos will be
          sorted by old to new or vice versa</h3>
        <FAQDividerLong/>
        <h2>Q: Can I clear all my completed tasks or delete all of them
          quickly?</h2>
        <h3>A: Absolutely! As soon as you add any task to the list, you'll see
          two buttons at the of page that will allow you to do this.</h3>
        <FAQDividerShort/>
      </div>
    </div>
  );
}

export default FAQ;