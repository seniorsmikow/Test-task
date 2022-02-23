import styles from "./App.module.scss";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <div className={styles.app}>
      <Main />
    </div>
  );
}

export default App;
