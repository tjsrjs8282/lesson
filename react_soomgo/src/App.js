import styles from "./App.css";
import Header from "./components/header/Header";
import CategoryList from "./components/category/CategoryList";

function App() {
  return (
    <>
      <Header name="react" color="red" className={styles.test} />
      <CategoryList />
    </>
  );
}

export default App;
