import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './components/Todo/Todo';
import Sidebar from './components/Sidebar/Sidebar';
import NotFound from './components/NotFound/NotFound';
import FAQ from './components/FAQ/FAQ';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar/>
        <Routes>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/" element={<Todo/>}/>
          <Route path="/faq/" element={<FAQ/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
