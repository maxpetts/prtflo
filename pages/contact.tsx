import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";

function Contact() {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Contact</h1>
        </main>
      </div>
    </>
  );
}

export default Contact;
