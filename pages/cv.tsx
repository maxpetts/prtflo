import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";

function Cv() {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>MP CV</h1>
        </main>
      </div>
    </>
  );
}

export default Cv;
