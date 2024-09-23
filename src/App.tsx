import { Navbar, Footer } from "./components"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './assets/logoFinanceSignal.png'
import { LatestNews, Finance, Technology, Cryptocurrencies } from "./pages"
import './index.css';


export const App = () => {
  return (
    <>
      <img src={logo} alt="" className="w-64 mx-auto" />

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
    </>
  )
};


