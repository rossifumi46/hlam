import styles from './styles.module.scss';

export default function Main() {
  const a = "Hello World";
  const b = "main _colored"

  return (
    <div className={styles.main}>
      {/* <Header /> */}
      {a}
    </div>
  );
}