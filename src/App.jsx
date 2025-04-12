import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Hero_Section from './Components/Hero_Section';
import AboutUsPage from './Components/AboutUsPage';
import ContactUsPage from './Components/ContactUsPage';
import CustomerReviewPage from './Components/CustomerReviewPage';
import Footer from './Components/footer';

function App() {

  return (
      <>
         <Navbar />
          <Routes>
          <Route path="/" element={<Hero_Section />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/ContactUs" element={<ContactUsPage />} />
              <Route path="/reviews" element={<CustomerReviewPage /> } />
                

          {/* Add other routes */}
          </Routes>
          <Footer />
    </>
  )
}

export default App
