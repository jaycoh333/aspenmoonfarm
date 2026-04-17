# Farm image assets

Real farm photography migrated from the original aspenmoonfarm.com site
(Wix CDN) on 2026-04-16. All images referenced through [`data/images.ts`](../../data/images.ts).

## Folder conventions

- `hero/` — wide landscape & banner images for page headers
- `produce/` — harvested vegetables, closeups of peppers/tomatoes/greens
- `flowers/` — cut flowers (snapdragons, statice) from the flower field
- `farm/` — working-field and gallery scenes
- `markets/` — farm stand + Boulder / Longmont market photos
- `csa/` — weekly share photography ("Farmers Choice" weeks)
- `plants/` — greenhouse starter plants and seeds
- `grains/` — heritage grain field and stone-milled grain
- `team/` — people, hands, owner portraits
- `logo/` — AMF logo + certification marks (Real Organic Project, Colorado Proud)

## Regenerating / adding images

See [`scripts/fetch-images.sh`](../../scripts/fetch-images.sh) — it pulls the
original Wix-hosted assets at a web-optimized size (`w_2000, q_85`). To add a
new image, append an entry there, run the script, and register the path in
`data/images.ts`.

## Swapping a photo

Because every component pulls its image through `data/images.ts`, changing a
photo is a one-line edit:

```ts
// data/images.ts
hero: {
  landscape: {
    src: "/images/hero/your-new-photo.jpg",
    alt: "...",
    width: 2400,
    height: 1350,
  },
}
```

No page or component code needs to change.

## Known TODOs

A few image slots still reuse close-enough farm photos where a dedicated
subject is not yet available. They're marked with `// TODO` comments in
`data/images.ts`:

- `story.compost` — soil building / compost process
- `story.cows` — biodynamic farm animals
- `community.donation` — food-donation program photo
- `community.tour` — school tour / education photo

Drop a real photo into the appropriate folder and update the `src` path to
replace.
