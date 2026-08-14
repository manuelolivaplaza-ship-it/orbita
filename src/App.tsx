import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CreacionesPage from './pages/CreacionesPage';
import CaseStudyPage from './pages/CaseStudyPage';
import ServiciosPage from './pages/ServiciosPage';
import NotFoundPage from './pages/NotFoundPage';
import PreviewSitePage from './pages/PreviewSitePage';
import PropuestaPage from './pages/PropuestaPage';
import AdminPage from './pages/AdminPage';
import LegalPage from './pages/LegalPage';

function RedirectTrabajo() {
  const { slug } = useParams();
  return <Navigate to={slug ? `/creaciones/${slug}` : '/creaciones'} replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="preview/:slug" element={<PreviewSitePage />} />
      <Route path="propuesta/:slug" element={<PropuestaPage />} />
      <Route path="admin" element={<AdminPage />} />
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="creaciones" element={<CreacionesPage />} />
        <Route path="creaciones/:slug" element={<CaseStudyPage />} />
        <Route path="trabajo" element={<Navigate to="/creaciones" replace />} />
        <Route path="trabajo/:slug" element={<RedirectTrabajo />} />
        <Route path="servicios" element={<ServiciosPage />} />
        <Route path="privacidad" element={<LegalPage kind="privacidad" />} />
        <Route path="terminos" element={<LegalPage kind="terminos" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
