import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import New from "./components/New";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Arya" />
      <Greet />
      <Welcome />
      <Welcome name="Adithya" /> */}
      <Message />
      <New />
    </div>
  );
}

export default App;
