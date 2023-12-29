import './App.css';
import { Routes, Route } from "react-router-dom";
// import Nav from './components/Nav';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <main className="content">
        <Routes>
          <Route  path='/' element={<Home/>} />
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
