import { motion } from 'framer-motion';
import styles from './Title.module.css';

function Title({ title }) {
  return (
    <motion.h1 className={styles.title}>{title}</motion.h1>);
}

export default Title;
