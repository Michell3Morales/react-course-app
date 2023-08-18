import logo from './logo.svg';
import './App.css';
import Navbar from './components/navegacion/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Combos from './components/paginas/Combos';

function App() {
  return (
   <div className="App">
<Router>
  <Navbar/>
</Router>

   </div>


  );
}

export default App;
