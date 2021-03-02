import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import thunk from 'redux-thunk'

const middleware = [thunk]
const enhancers = [];
if (
  process.env.NODE_ENV === "development" &&
  typeof window != undefined &&
  window.devToolsExtension
) {
  enhancers.push(
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  );
}
const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware), ...enhancers)
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;
