import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <section id="sobre">{<Header />}</section>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <section id="contato">{<Footer />}</section>
    </Router>
  );
}

export default App;
