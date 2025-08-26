import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductProvider from "../context/ProductContext";
import Header from "../components/Header";
import Home from "./pages/Home.jsx";
import AllProduct from "./pages/AllProducts.jsx";
import PaginationProduct from "./pages/PaginationProduct.jsx";
 
function App() {

  return (
      <Router>
        <Header/>
          <div className="container my-3">
            <ProductProvider>
              <Routes>
                <Route path="Home" element={<Home />}/>
                <Route path="Product" element={<AllProduct />} />
                <Route path="Product/pagination" element={<PaginationProduct />} />
              </Routes>
            </ProductProvider>
          </div>
      </Router>
  )
}

export default App;
