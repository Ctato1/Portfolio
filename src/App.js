import { BrowserRouter } from "react-router-dom";
//
import Header from "./components/Header/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  let loading = false;

  return (
    <div className="App">
      <BrowserRouter>
        {loading ? (
          <h2>Loading</h2>
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
