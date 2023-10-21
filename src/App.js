import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after the initial HTML structure is loaded
    setLoading(false);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <Loading />
          </div>
        ) : (
          <>
            <Header />
            <Hero />
            <About />
            <Work />
            <Contact />
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;