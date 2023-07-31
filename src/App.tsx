import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./ui/Header";
import { Home } from "./ui/Home";
import { MovieProvider } from "./services/context/moviesProvider";
import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <MovieProvider>
        <div className={styles.App}>
          <Header />
          <Home />
        </div>
      </MovieProvider>
    </Router>
  );
}

export default App;
