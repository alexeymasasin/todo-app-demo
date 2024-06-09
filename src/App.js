import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './components/Todo/Todo';
import Navbar from './components/Sidebar/Navbar';
import NotFound from './components/NotFound/NotFound';
import FAQ from './components/FAQ/FAQ';
import Settings from './components/Settings/Settings';
import './App.css';

function App() {
  document.body.style.zoom = '110%';

  return (
    <BrowserRouter basename="/todo-app-demo">
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/" element={<Todo/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
