import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Footer, Article } from "./components"
import { CategoryContent, LatestNews, Legals, PrivacyPolicy } from "./pages"
import { ArticlesProvider, DarkModeProvider } from './context';
import CookieConsent from './pages/CookieConsent';
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
                <Route path="/aviso-legal" element={<Legals />} />
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
