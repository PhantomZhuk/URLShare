import styles from "./page.module.css";
import Form from "./form";

export default function Home() {
  return (
    <div id="app">
      <header>
        <h1 className={styles.h1}>URLShare</h1>
        <button>Go to url-chat</button>
      </header>
      <main className={styles.main}>
        <div className={styles.border_box}></div>
        <input
          hidden
          type="checkbox"
          id="url_block_input"
          className={styles.change_mode_checkbox}
        />
        <div className={styles.url_block}>
          <label htmlFor="url_block_input" className={styles.change_mode}>
            Change mode
          </label>
          <div className={styles.getCodeDiv}>
            <h2>Secure your access to web</h2>
            <Form act="getCode" name="url" text="Insert your url" type="text" />
          </div>
          <div className={styles.getUrlDiv}>
            <h2>Retrieve your saved url</h2>
            <Form
              act="getUrl"
              name="code"
              text="Insert your code"
              type="number"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
