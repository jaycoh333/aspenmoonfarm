import { MapPin, Clock, ExternalLink, Calendar } from "lucide-react";
import type { Location } from "@/data/locations";

const kindLabel: Record<Location["kind"], string> = {
  "farm-stand": "Farm Stand",
  market: "Farmers Market",
  farm: "Farm",
};

export function LocationCard({ location }: { location: Location }) {
  return (
    <article
      id={location.id}
      className="card flex flex-col gap-5 p-7"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-medium uppercase tracking-[0.22em] text-gold-700">
          {kindLabel[location.kind]}
        </span>
        {location.highlight && (
          <span className="rounded-full bg-olive-800/8 px-2.5 py-1 text-[11px] font-medium text-olive-800">
            {location.highlight}
          </span>
        )}
      </div>

      <h3 className="font-display text-2xl font-semibold text-olive-900">
        {location.name}
      </h3>

      <div className="flex items-start gap-2.5 text-sm text-olive-800">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-olive-700" aria-hidden />
        <span>
          {location.address}
          <br />
          {location.city}, {location.state}
          {location.zip ? ` ${location.zip}` : ""}
        </span>
      </div>

      <div className="flex items-start gap-2.5 text-sm text-olive-800">
        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-olive-700" aria-hidden />
        <div>
          <ul className="space-y-0.5">
            {location.hours.map((h) => (
              <li key={h.label} className="flex justify-between gap-6">
                <span className="font-medium text-olive-900">{h.label}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-start gap-2.5 text-sm text-olive-700">
        <Calendar className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
        <span>{location.season}</span>
      </div>

      <p className="text-[15px] leading-relaxed text-olive-800/85">
        {location.description}
      </p>

      <a
        href={location.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary mt-auto w-full justify-center text-sm"
      >
        Get Directions
        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
      </a>
    </article>
  );
}
