import NotFoundPage from './NotFoundPage';

/** /preview/* no se indexa y en producción responde HTTP 404 (vercel.json). */
export default function PreviewSitePage() {
  return <NotFoundPage />;
}
