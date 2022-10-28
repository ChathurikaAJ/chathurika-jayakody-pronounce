import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import LanguagePage from './pages/LanguagePage/LanguagePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/:language' element={<LanguagePage />} />
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
