// Casing must match the file tree (HomePage with capital 'P'):
import HomePage from './welcome/HomePage'
import AboutUs from './welcome/AboutUs'
import Products from './welcome/Products'
import ContactPage from './welcome/ContactPage'
import NavForMain from './welcome/NavForMain'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}
