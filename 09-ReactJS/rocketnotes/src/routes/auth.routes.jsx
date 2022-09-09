import { Routes, Route } from 'react-router-dom';

import { Signin } from '../pages/Signin/Signin.jsx';
import { Signup } from '../pages/Signup/Signup.jsx';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
  );
}
