import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-farm">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden />
            404 — Off the farm map
          </span>
          <h1 className="mt-5 font-display text-display-md font-semibold text-olive-900 text-balance">
            Looks like that page was fallow.
          </h1>
          <p className="mt-4 text-olive-800/85">
            The page you were looking for isn't here. Let's get you back to
            something fresh.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn-primary">
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to the farm
            </Link>
            <Link href="/csa" className="btn-secondary">
              See the CSA
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
