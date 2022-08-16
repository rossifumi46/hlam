import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__container}>
           <a href="/" className={styles.header__logo}>Logo</a>
           <nav>
            <ul>
              <li></li>
              <li>Log out</li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
           </nav>                  
        </div>
      </div>
    </header>
  );
}