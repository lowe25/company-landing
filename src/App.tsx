import "./style.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <div className="h-screen"></div>
        <Footer />
      </main>
    </>
  );
}

export default App;
