import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <aside className={styles.aside}>
        <div className={styles.aside__links}>
          <Link href={"/find-room"}>Find a room</Link>
        </div>
      </aside>
      <div id={"app"}>
        <header>
          <h1 className={styles.h1}>URLShare</h1>
          <nav className={styles["nav-links"]}></nav>
          <nav className={styles["nav-burger"]}>
            <div></div>
            <div></div>
            <div></div>
          </nav>
        </header>
        <main>
          <h2>Insert your URL</h2>
          <form action="" method="POST">
            <div className={styles.fields}>
              <label>
                <p></p>
                <input type="text" />
              </label>
            </div>
            <div className={styles.submit}>
              <button type="submit">Поділитись</button>
              <div className={styles.submit__dialog}>
                <button type="button"></button>
                <div className={styles.submit__options}>
                  <input type="text" placeholder="Код кімнати" />
                  <button type="button">Скопіювати</button>
                </div>
              </div>
            </div>
          </form>
        </main>
        <footer></footer>
      </div>
    </>
  );
}
