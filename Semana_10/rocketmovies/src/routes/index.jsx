import { BrowserRouter } from 'react-router-dom';

import { AuthRoutes } from './auth.routes.jsx';
import { AppRoutes } from './app.routes.jsx';

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
}
