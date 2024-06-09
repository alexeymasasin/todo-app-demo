import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './components/Todo/Todo';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import FAQ from './components/FAQ/FAQ';
import Settings from './components/Settings/Settings';
import './App.css';

function App() {
  document.body.style.zoom = '110%';

  const setDarkTheme = () => document.querySelector('body')
    .setAttribute('data-theme', 'dark');
  const setLightTheme = () => document.querySelector('body')
    .setAttribute('data-theme', 'light');

  const selectedTheme = localStorage.getItem('selectedTheme');

  if (selectedTheme === 'dark') {
    setDarkTheme();
  } else if (selectedTheme === 'light') {
    setLightTheme();
  }

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
