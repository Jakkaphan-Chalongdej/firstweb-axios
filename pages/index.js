import styles from "../styles/Home.module.css";
import Design from "./design";
import Solution from "../pages/solution";
import Team from "../pages/team";
import Form from '../components/layouts/form'
export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        
       <Form/>
      </main>
      <div id="about">
        <Design />
      </div>
      <div id="solution">
        <Solution />
      </div>
      <div id="team">
        <Team />
      </div>
    </div>
  );
}
