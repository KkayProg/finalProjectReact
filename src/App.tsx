import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import styles from './styles/variables.module.css'
import MainPage from './components/pages/MainPage';
import Header from './components/header';
import Footer from './components/footer';
import AboutMovie from './components/pages/AboutMovie';
import AuthModalForm from './components/authorization/AuthModalForm';


const App = () => {
  return (
    <div className={styles.app}>
      <Router >
        <Header />
        <Routes>
          {/* Главная страница */}
          <Route path="/" element={<MainPage />} />
          {/* Другие страницы */}
          {/* <Route path="/other" element={<OtherPage />} /> */}
          <Route path='/about-movie' element={<AboutMovie />} />
          <Route path="/about-movie/:id" element={<AboutMovie />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
};

export default App;
