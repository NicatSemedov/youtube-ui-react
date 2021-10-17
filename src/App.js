import './style/App.css';
import Header from './components/Header'
import MiniGuide from "./components/MiniGuide";
import Chips from './components/Chips';
import Contents from './components/Contents';

function App() {
  return (
    <div className="App">
      <Header />
      <MiniGuide />
      <div className="main">
        <Chips />
        <Contents />
      </div>
    </div>
  );
}

export default App;
