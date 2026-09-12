import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import HomePage from './pages/HomePage';

const CreacionesPage = lazy(() => import('./pages/CreacionesPage'));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'));
const ServiciosPage = lazy(() => import('./pages/ServiciosPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const ContactoPage = lazy(() => import('./pages/ContactoPage'));
const CrmLandingPage = lazy(() => import('./pages/CrmLandingPage'));
const GaleriaPage = lazy(() => import('./pages/GaleriaPage'));
const GaleriaSectorPage = lazy(() => import('./pages/GaleriaSectorPage'));
const PreciosPage = lazy(() => import('./pages/PreciosPage'));
const PreviewSitePage = lazy(() => import('./pages/PreviewSitePage'));
const PropuestaPage = lazy(() => import('./pages/PropuestaPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));
const CrmPage = lazy(() => import('./pages/CrmPage'));

function PageFallback() {
  return <div className="min-h-[50vh] bg-[#F7F8FC]" aria-hidden />;
}

function RedirectTrabajo() {
  const { slug } = useParams();
  return <Navigate to={slug ? `/creaciones/${slug}` : '/creaciones'} replace />;
}

export default function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="preview/:slug" element={<PreviewSitePage />} />
        <Route path="propuesta/:slug" element={<PropuestaPage />} />
        <Route path="crm/demo" element={<CrmPage />} />
        <Route path="crm/:slug" element={<CrmPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="creaciones" element={<CreacionesPage />} />
          <Route path="creaciones/:slug" element={<CaseStudyPage />} />
          <Route path="galeria" element={<GaleriaPage />} />
          <Route path="galeria/:sector" element={<GaleriaSectorPage />} />
          <Route path="trabajo" element={<Navigate to="/creaciones" replace />} />
          <Route path="trabajo/:slug" element={<RedirectTrabajo />} />
          <Route path="servicios" element={<ServiciosPage />} />
          <Route path="precios" element={<PreciosPage />} />
          <Route path="crm" element={<CrmLandingPage />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="privacidad" element={<LegalPage kind="privacidad" />} />
          <Route path="terminos" element={<LegalPage kind="terminos" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
