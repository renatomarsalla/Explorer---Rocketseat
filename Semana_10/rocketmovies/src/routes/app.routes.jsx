import { Routes, Route } from 'react-router-dom';

import { Profile } from '../pages/Profile';
import { Home } from '../pages/Home';
import { CreateMovies } from '../pages/CreateMovie';
import { PreviewMovie } from '../pages/PreviewMovie';
// import { Signin } from '../pages/Signin/index.jsx';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/" element={<Signin />} /> */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/createMovie" element={<CreateMovies />} />
      <Route path="/previewmovie/:id" element={<PreviewMovie />} />
    </Routes>
  );
}
