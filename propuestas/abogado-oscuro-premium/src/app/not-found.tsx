import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="lost">
        <div>
          <p className="kicker">404</p>
          <h1>Esta página no está en el expediente.</h1>
          <p>
            El vínculo no existe o se movió. Vuelve al estudio o llama si es
            urgencia.
          </p>
          <a className="btn btn-primary" href="/">
            Volver a {site.name}
          </a>
        </div>
      </main>
    </>
  );
}
