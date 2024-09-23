<<<<<<< HEAD
import { Navbar, Footer } from "./components"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './assets/logoFinanceSignal.png'
import { LatestNews, Finance, Technology, Cryptocurrencies } from "./pages"
import './index.css';

=======
import { Navbar, SectionPrincipal, Footer } from "./components"
import logo from "./assets/logoFinanceSignal.png"
>>>>>>> e984c2c0f7e0756935e73713c025b927e3a9e8db

export const App = () => {
  return (
    <>
      <img src={logo} alt="" className="w-64 mx-auto" />
<<<<<<< HEAD

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LatestNews />} />
          <Route path="/finances" element={<Finance />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
        </Routes>
        <Footer />
      </Router>
=======
      <Navbar />
      <SectionPrincipal />
      <Footer />
>>>>>>> e984c2c0f7e0756935e73713c025b927e3a9e8db
    </>
  )
};


