import { Route, Routes } from 'react-router-dom';

import { Signin } from '../pages/Signin/index.jsx';
import { Signup } from '../pages/Signup/index.jsx';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
  );
}
