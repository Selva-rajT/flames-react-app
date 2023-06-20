import FlamesUI from "./flames/flamesUI";
import './App.css'
import Result from './results/result';
import {Routes,Route} from 'react-router-dom';
function App() {

  return (
    
    <div className="App">
      <Routes>
        <Route path='/' element={<FlamesUI />}/>
        <Route path='/result' element={<Result />}/>
        <Route path='*' element={<FlamesUI />}/>
      </Routes>
    </div>
  );
}

export default App;
