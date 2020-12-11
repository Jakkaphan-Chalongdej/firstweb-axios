import styles from "../styles/Home.module.css";
import Design from "./design";
import Solution from "../pages/solution";
import Team from "../pages/team";
import Form from "../components/layouts/form";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div id="about" >
          <Design />
        </div>
        <div id="team">
          <Team />
        </div>
        <Form />
        <div id="solution">
          <Solution />
        </div>
      </main>
    </div>
  );
}
