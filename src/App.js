
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./components/MainPage";
import "./styles/MainPage.css"
import Navigation from "./components/Navigation";
import "./styles/Navigation.css"
import Footer from "./components/Footer";
import "./styles/Footer.css"
import About from "./components/About";
import "./styles/About.css"
import "./App.css"

const App = () => {
  return (
    <Router className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
