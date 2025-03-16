import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Footer, Article } from "./components"
import { CategoryContent, LatestNews, Legals, PrivacyPolicy } from "./pages"
import { ArticlesProvider, DarkModeProvider } from './context';
import CookieConsent from './pages/CookieConsent';

function App() {

  return (
    <>
      <DarkModeProvider>
        <ArticlesProvider>
          <Router basename='/'>
            <Navbar />
            <CookieConsent />
            <Routes>
              <Route path="/" element={<LatestNews />} />
              <Route path="/article/:title" element={<Article />} />
              <Route path="/category/:categoryName" element={<CategoryContent />} />
              <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
              <Route path="/aviso-legal" element={<Legals />} />
            </Routes>
            <Footer />
          </Router>
        </ArticlesProvider>
      </DarkModeProvider>
    </>
  )
}

export default App
