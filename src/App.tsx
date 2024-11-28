import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Footer } from "./components"
import { LatestNews, Finance, Technology, Cryptocurrencies } from "./pages"
import logo from './assets/logoFinanceSignal.png';
import { ArticlesProvider } from './context/ArticlesProvider';

function App() {

  return (
    <>
      <img src={logo} alt="" className="h-40 mx-auto" />

      <ArticlesProvider>
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
      </ArticlesProvider>
    </>
  )
}

export default App
