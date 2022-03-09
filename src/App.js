import './App.css';

import SideBar from './SideBar';
import Counter from './ShowCounter';

import { Provider } from "react-redux"
import { store } from './store'



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SideBar />
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
