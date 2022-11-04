import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import LanguagePage from './pages/LanguagePage/LanguagePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Navigation from './components/Navigation/Navigation';


function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/language/:languageId' element={<LanguagePage />} />
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
