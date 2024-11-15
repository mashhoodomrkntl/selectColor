import "./App.css";
import Aside1 from "./components/header";
import Aside2 from "./components/aside2";
import Footer from "./components/footer";
import Header from "./components/aside1";
import Counter from "./components/counter";

function App() {
  return (
    <>
      <div className="container">
        <Aside1 />
        <Header />
        <Aside2 />
        <Footer />
        <Footer />
        <Counter/>
      </div>
    </>
  );
}

export default App;
