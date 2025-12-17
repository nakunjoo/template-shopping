import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { MainPage } from "./pages/main";
import { ProductPage } from "./pages/product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
