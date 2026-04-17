import { Leaf, Sun, Mountain, Heart, type LucideIcon } from "lucide-react";
import { trustPoints } from "@/data/offerings";

const iconMap: Record<string, LucideIcon> = {
  leaf: Leaf,
  sun: Sun,
  mountain: Mountain,
  heart: Heart,
};

export function TrustPoints() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {trustPoints.map((point) => {
        const Icon = iconMap[point.icon] ?? Leaf;
        return (
          <div
            key={point.title}
            className="card flex flex-col gap-3 p-6"
          >
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-olive-800/8 text-olive-800">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="font-display text-lg font-semibold text-olive-900">
              {point.title}
            </h3>
            <p className="text-sm leading-relaxed text-olive-800/85">
              {point.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
