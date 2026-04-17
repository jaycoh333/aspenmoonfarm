#!/usr/bin/env bash
# Downloads real farm photography from aspenmoonfarm.com (Wix CDN) at a
# web-optimized size and saves to /public/images with clean filenames.

set -euo pipefail

BASE="https://static.wixstatic.com/media"
FIT="v1/fit/w_2000,h_2000,q_85/image.jpg"
OUT_ROOT="public/images"

# Small ID table: dest-path|media-id
# Media IDs are Wix's exact paths (including the ~mv2 / _d_WxH_s_N suffixes).
download() {
  local dest="$1"
  local id="$2"
  mkdir -p "$(dirname "$dest")"
  local url="$BASE/$id/$FIT"
  echo "→ $dest"
  curl -sS -L --fail -o "$dest" "$url" || {
    echo "   (retry without fit)"
    curl -sS -L --fail -o "$dest" "$BASE/$id"
  }
}

# HERO / LANDSCAPE
download "$OUT_ROOT/hero/farm-banner.jpg"        "f305cc_4720812c955243b188ef196d3628f9b0~mv2.jpg"
download "$OUT_ROOT/hero/farm-home-feature.jpg"  "f305cc_cff76941d8b240b88cf77f45dea0b217~mv2.jpg"
download "$OUT_ROOT/hero/farm-sunrise.jpg"       "c300c3_9467d274d8554492ba65414d25cf14f7~mv2.jpg"

# PRODUCE
download "$OUT_ROOT/produce/organic-peppers.jpg"     "f305cc_f117b9deeefc4806be0041599762da3e~mv2.jpg"
download "$OUT_ROOT/produce/broccoli.jpg"            "f305cc_b987384a3b4f4b84ac6b76d82d94e997~mv2.jpg"
download "$OUT_ROOT/produce/heirloom-tomatoes.jpg"   "c300c3_5fe0e55039bc4bdd826b386c36edb98b~mv2.jpg"
download "$OUT_ROOT/produce/tomato-medley.jpg"       "c300c3_1683b4e9b36548238a8a8d7e51855edf~mv2.jpg"
download "$OUT_ROOT/produce/cherry-tomatoes.jpg"     "f305cc_0c3b98b6f7a54a4eb284fccf14419919~mv2.jpg"
download "$OUT_ROOT/produce/harvest-basket.jpg"      "c300c3_5f49c3e60f9f419fae530d456ada2d3e~mv2.jpg"

# FLOWERS
download "$OUT_ROOT/flowers/snapdragons-2023.jpg" "f305cc_f3aaac4f3e0b489887178d41a24ca29f~mv2.jpg"
download "$OUT_ROOT/flowers/statice-2023.jpg"     "f305cc_98a5a9a814ca4455982615670a08236c~mv2.jpg"

# CSA WEEKLY BOXES
download "$OUT_ROOT/csa/csa-week-1.jpg"   "f305cc_08fd68c27cdb49ff9c354b6152ebb68d~mv2.jpg"
download "$OUT_ROOT/csa/csa-week-2.jpg"   "f305cc_de114a6d49e64df694149ed289efb61b~mv2.jpg"
download "$OUT_ROOT/csa/csa-week-22.jpg"  "f305cc_e21aab0345af456a9f489377f8c6bb01~mv2.jpg"
download "$OUT_ROOT/csa/csa-pickup.jpg"   "f305cc_0d503f293cb2489ebb5de1a556a85ae0~mv2.jpg"

# FARM STAND / MARKETS
download "$OUT_ROOT/markets/farm-stand-roadside.jpg" "f305cc_52680a03bf984ab9a90101b40f170434~mv2.jpg"
download "$OUT_ROOT/markets/boulder-market.jpg"      "f305cc_b659b4987366414a910ec4a9c8058a6d~mv2.jpg"
download "$OUT_ROOT/markets/market-scene-1.jpg"      "c300c3_2c9eb734ea3e4a829401c60f09115e15~mv2_d_5616_3744_s_4_2.jpg"
download "$OUT_ROOT/markets/market-scene-2.jpg"      "c300c3_205522428bbe49ed874c7f95761826f8~mv2_d_5302_3535_s_4_2.jpg"
download "$OUT_ROOT/markets/market-scene-3.jpg"      "c300c3_b8f05c2f2fc54082b740424957ae2232~mv2.jpg"

# FARM FIELD / LIFESTYLE
download "$OUT_ROOT/farm/farm-field-rows.jpg"        "f305cc_4d7a5fe70af74a0e89d3b1142aec5409~mv2.jpg"
download "$OUT_ROOT/farm/farm-gallery-1.jpg"         "c300c3_0028feee4de848d88661f0ddd7155bc2~mv2_d_5318_3546_s_4_2.jpg"
download "$OUT_ROOT/farm/farm-gallery-2.jpg"         "c300c3_571176b216594d10bdad14607ad31a6e~mv2_d_5616_3744_s_4_2.jpg"
download "$OUT_ROOT/farm/farm-gallery-3.jpg"         "c300c3_2d7ba9306839494298a047a811e4b947~mv2_d_2448_2448_s_4_2.jpg"

# PLANTS / STARTS
download "$OUT_ROOT/plants/starter-plants.jpg"       "c300c3_776a977296004e12a9833e4d1e3c3864~mv2_d_5616_3744_s_4_2.jpg"
download "$OUT_ROOT/plants/organic-seeds.jpg"        "c300c3_46e5afde92af4da1adab7125f054a08d~mv2_d_1632_1224_s_2.jpg"

# GRAINS
download "$OUT_ROOT/grains/heritage-grains.jpg"      "c300c3_ec380c5e1f1145ddabcadf1a4a2bafb4~mv2_d_2560_1440_s_2.jpg"

# TEAM
download "$OUT_ROOT/team/erin-farm-owner.jpg"        "c300c3_104b537f27c6453081d1e70b26b88406~mv2_d_5535_3690_s_4_2.jpg"
download "$OUT_ROOT/team/many-hands.jpg"             "c300c3_52d7086e67e1418d83393ea36669bd01~mv2_d_5616_3744_s_4_2.jpg"

# CERTIFICATIONS (PNGs)
mkdir -p "$OUT_ROOT/logo"
curl -sS -L --fail -o "$OUT_ROOT/logo/aspen-moon-logo.png" \
  "$BASE/f305cc_c2bece20497c4e3c8cfb6160b2d3129d~mv2.png/v1/fit/w_800,h_300,q_90/image.png"
curl -sS -L --fail -o "$OUT_ROOT/logo/real-organic-project.png" \
  "$BASE/f305cc_3de71f6f34424f4fb93a28655b9502b1~mv2.png/v1/fit/w_400,h_400,q_90/image.png"
curl -sS -L --fail -o "$OUT_ROOT/logo/colorado-proud.png" \
  "$BASE/f305cc_3c05d0ee1b57461da0a68762617275d2~mv2.png/v1/fit/w_400,h_400,q_90/image.png"

echo ""
echo "✓ Done. Check public/images/"
