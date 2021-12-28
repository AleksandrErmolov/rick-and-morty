import './App.css';
import Heroespage from './pages/Heroespage/Heroespage';
import { getApiResource } from './utils/network' 

function App() {


  getApiResource();

  return (

   <Heroespage />
  

  );
}

export default App;
