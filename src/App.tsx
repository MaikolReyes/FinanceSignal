import { Navbar, Header, Footer } from "./layout"
import logo from './assets/logoFinanceSignal.png'

export const App = () => {
  return (
    <>
      <img src={logo} alt="" className="w-64 mx-auto" />
      <Navbar />
      <Header />
      <Footer />
    </>
  )
};


