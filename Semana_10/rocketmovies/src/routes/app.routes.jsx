import { Routes, Route } from 'react-router-dom';

import { Profile } from '../pages/Profile';
import { Home } from '../pages/Home';
import { CreateMovies } from '../pages/CreateMovie';
import { PreviewMovie } from '../pages/PreviewMovie';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/createMovie" element={<CreateMovies />} />
      <Route path="/previewmovie" element={<PreviewMovie />} />
    </Routes>
  );
}
