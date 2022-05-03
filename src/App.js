import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Posts from "./components/posts";
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Posts />
    </Provider>
  );
}

export default App;
