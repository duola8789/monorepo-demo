import { getTitle } from '@common/index';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Hello</p>
      <p>{getTitle()}</p>
    </main>
  );
}
