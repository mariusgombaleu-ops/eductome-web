import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { Home } from './pages/Home';
import { CollectionDetails } from './pages/CollectionDetails';
import { Resources } from './pages/Resources';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { BecomeRelay } from './pages/BecomeRelay';
import { NotFound } from './pages/NotFound';
import { Quiz } from './pages/Quiz';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Overview as DashboardOverview } from './pages/dashboard/Overview';
import { ForumHome } from './pages/forum/ForumHome';
import { ForumThread } from './pages/forum/ForumThread';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { MyCourses } from './pages/dashboard/MyCourses';
import { Profile } from './pages/dashboard/Profile';
import { Settings } from './pages/dashboard/Settings';
import { CourseReader } from './pages/dashboard/CourseReader';
import { DashboardBoutique } from './pages/dashboard/DashboardBoutique';
import { StarterPack } from './pages/dashboard/StarterPack';
import { PaymentSuccess } from './pages/dashboard/PaymentSuccess';
import { ClaimPurchase } from './pages/dashboard/ClaimPurchase';
import { GradesCalculator } from './pages/dashboard/GradesCalculator';
import { Flashcards } from './pages/dashboard/Flashcards';
import { RelaisDashboard } from './pages/RelaisDashboard';
import { ParentDashboard } from './pages/ParentDashboard';
import { TimetablePage } from './pages/TimetablePage';
import { ApeDashboard } from './pages/ApeDashboard';

import { UserProvider } from './contexts/UserContext';

import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Public Routes */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/collections" element={<Navigate to="/#collections" replace />} />
              <Route path="/collections/:slug" element={<CollectionDetails />} />
              <Route path="/ressources" element={<Resources />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/devenir-relais" element={<BecomeRelay />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            {/* Private Routes (Espace Élève & Forum) */}
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<DashboardOverview />} />
              <Route path="/dashboard/starter-pack" element={<StarterPack />} />
              <Route path="/dashboard/courses" element={<MyCourses />} />
              <Route path="/dashboard/course/:courseId" element={<CourseReader />} />
              <Route path="/dashboard/objectifs" element={<GradesCalculator />} />
              <Route path="/dashboard/revisions" element={<Flashcards />} />
              <Route path="/dashboard/profile" element={<Profile />} />
              <Route path="/dashboard/settings" element={<Settings />} />
              <Route path="/dashboard/boutique" element={<DashboardBoutique />} />
              <Route path="/dashboard/ressources" element={<Resources />} />
              <Route path="/dashboard/blog" element={<Blog />} />
              <Route path="/dashboard/blog/:slug" element={<BlogPost />} />
              <Route path="/dashboard/devenir-relais" element={<BecomeRelay />} />
              <Route path="/dashboard/relais" element={<RelaisDashboard />} />
              <Route path="/dashboard/reclamer" element={<ClaimPurchase />} />
              <Route path="/dashboard/emploi-du-temps" element={<TimetablePage />} />
              <Route path="/forum" element={<ForumHome />} />
              <Route path="/forum/thread/:id" element={<ForumThread />} />
            </Route>

            {/* Standalone Route for Payment Success */}
            <Route path="/paiement-confirme" element={<PaymentSuccess />} />

            {/* Public parent progress view — no auth required */}
            <Route path="/parent/:studentUid" element={<ParentDashboard />} />

            {/* APE / COGES Dashboard */}
            <Route path="/ape" element={<ApeDashboard />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
