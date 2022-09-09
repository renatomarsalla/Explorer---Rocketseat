import { Routes, Route } from 'react-router-dom';

import { New } from '../pages/New/New.jsx';
import { Profile } from '../pages/Profile/Profile.jsx';
import { Details } from '../pages/Details/Details.jsx';
import { Home } from '../pages/Home/Home.jsx';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}
