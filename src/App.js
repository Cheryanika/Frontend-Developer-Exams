import { Routes,Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Froms } from './Components/Froms';
import { Pokemon } from './Components/Pokemon';
import { Function } from './Components/Function';

function App() {
  return (
    <div>
    <header>Frontend Developer Exams</header>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Froms/>}/>
      <Route path='pokemon' element={<Pokemon/>}/>
      <Route path='function' element={<Function/>}/>
    </Routes>
    </div>
  );
}

export default App;
