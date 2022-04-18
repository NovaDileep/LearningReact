import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import New from "./components/New";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Visualization from "./components/Visualization";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Arya" />
      <Greet />
      <Welcome />
      <Welcome name="Adithya" /> */}
      {/* <Message />
      <New /> */}

      {/* <Home /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        {/* <Route path="home" element={<Home />} /> */}

        <Route path="/about" element={<About />}></Route>
        <Route path="/visualization" element={<Visualization />}></Route>
      </Routes>
    </div>
  );
}

export default App;
