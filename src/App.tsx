import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Footer, Article } from "./components"
import { About, CategoryContent, Contact, CookieConsent, LatestNews, Legals, PrivacyPolicy } from "./pages"
import { ArticlesProvider, DarkModeProvider } from './context';
import { CategoriesProvider } from './context/CategoriesProvider';


function App() {

  return (
    <>
      <DarkModeProvider>
        <CategoriesProvider>
          <ArticlesProvider>
            <Router basename='/'>
              <Navbar />
              <CookieConsent />
              <Routes>
                <Route path="/" element={<LatestNews />} />
                <Route path="/article/:slug" element={<Article />} />
                <Route path="/category/:categoryName" element={<CategoryContent />} />
                <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/aviso-legal" element={<Legals />} />
                {/* <Route path="/stock" element={<Tradingview symbol="NASDAQ:AAPL" />} /> */}
                <Route path="/sobre-nosotros" element={<About />} />
              </Routes>
              <Footer />
            </Router>
          </ArticlesProvider>
        </CategoriesProvider>
      </DarkModeProvider>
    </>
  )
}

export default App
