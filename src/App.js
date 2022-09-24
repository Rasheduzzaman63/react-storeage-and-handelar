import logo from './logo.svg';
import './App.css';
import Cosmatics from './components/Cosmatics/Cosmatics';
import Shoes from './components/Shoes/Shoes';
import Watch from './components/Watch/Watch';


function App() {
  return (
    <div className="App">
    <Cosmatics></Cosmatics>
    <Shoes></Shoes>
    <Watch></Watch>
    </div>
  );
}

export default App;
