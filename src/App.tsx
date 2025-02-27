import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Footer } from "./components"
import { LatestNews } from "./pages"
import { ArticlesProvider } from './context/ArticlesProvider';
import { Article } from './components/Article';
import { CategoryContent } from './pages/CategoryContent';
import { DarkModeProvider } from './context/DarkModeProvider';

function App() {

  return (
    <>

      <DarkModeProvider>
        <ArticlesProvider>
          <Router basename='/'>
            <Navbar />
            <Routes>
              <Route path="/" element={<LatestNews />} />
              <Route path="/article/:title" element={<Article />} />
              <Route path="/category/:categoryName" element={<CategoryContent />} />
            </Routes>
            <Footer />
          </Router>
        </ArticlesProvider>
      </DarkModeProvider>
    </>
  )
}

export default App
