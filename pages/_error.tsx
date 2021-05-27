import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Error() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.card}>
                    <h1 className={`${styles["title"]} ${styles["err404"]}`}>404</h1>
                    <Image
                        src={"/404-" + Math.floor(Math.random() * 7) + ".gif"}
                        alt="There should be a picture here lol"
                        width={500}
                        height={500}
                    />
                </div>
            </main>
        </div>
    );
}
