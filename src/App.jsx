import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Hero_Section from './Components/Hero_Section';
import AboutUsPage from './Components/AboutUsPage';
import Footer from './Components/footer';

function App() {

  return (
      <>
         <Navbar />
          <Routes>
          <Route path="/" element={<Hero_Section />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          {/* Add other routes */}
          </Routes>
          <Footer />
    </>
  )
}

export default App
