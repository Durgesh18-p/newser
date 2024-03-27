import "./App.css";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.news.isAuthenticated);

  return (
    <>
      {isAuthenticated ? (
        <>
          <Header />
          <Navigation />
          <HomePage />
          <Footer />
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </>
  );
}

export default App;
