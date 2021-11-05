import styles from "../styles/Home.module.css";
import Image from "next/image";
import Nav from "../components/Nav";

function NotFound() {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.card}>
            <h1 className={`${styles["title"]} err404`}>404</h1>
            <Image
              src={"/404/404-" + Math.floor(Math.random() * 7) + ".gif"}
              alt="There should be a picture here lol"
              width={500}
              height={500}
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default NotFound;
