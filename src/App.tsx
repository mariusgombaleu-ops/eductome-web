import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { UserProvider } from './contexts/UserContext';
import { AuthProvider } from './contexts/AuthContext';
import { AnimatedRoutes } from './AnimatedRoutes';

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <BrowserRouter>
          <ScrollToTop />
          <AnimatedRoutes />
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
