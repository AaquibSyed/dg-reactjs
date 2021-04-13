import Content from "./components/Content";
import Header from "./components/Header";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/Store";
function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Content />
      </div>
    </Provider>
  );
}

export default App;
