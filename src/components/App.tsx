import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import Favorites from './pages/favorites/Favorites';
import Offer from './pages/offer/Offer';
import NotFoundPage from './pages/404/NotFoundPage';
import PrivateRoute from './common/PrivateRoute.tsx';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/favorites" element={<PrivateRoute><Favorites /></PrivateRoute>} />
      <Route path="/offer/:id" element={<Offer rentalOffers={1}/>} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
