import { Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';

import HomePage from './pages/HomePage/HomePage';
import ProductListingPage from './pages/ProductListingPage/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage/ProductViewPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/produtos" element={<ProductListingPage />} />

        <Route path="/products" element={<ProductListingPage />} />

        <Route path="/product/:id" element={<ProductViewPage />} />
      </Routes>
    </Layout>
  );
}

export default App;