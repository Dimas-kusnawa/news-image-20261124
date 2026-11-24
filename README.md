# The World in One Day — 24 November 2026

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/Dimas-kusnawa/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/Dimas-kusnawa/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

An entry for the [make.fun](https://make.fun) bounty
**news-image-20261124**: sum up the world's news of Tuesday 24 November 2026
in one image. The image is a front page drawn with PIL and DejaVu fonts,
then copied to `/output/entry.png` by `main.ts` (Node 22, stdlib only).

## The day's stories

- **Nvidia brings Huang back as chief** — reinstated as CEO after pressure
  from President Trump; shares jumped 31%, the S&P 500 rose 4.7%.
- **Ukraine drones sink Russian warship off Libya** — seven naval drones
  sank the corvette Merkury at Benghazi; the UN mission calls for a probe.
- **COP31 climate talks collapse in Antalya** — 90+ nations reject a draft
  with no fossil-fuel wording after nearly 50 hours in overtime.
- **NATO vows to defend space** — after reports Russia may put a nuclear
  weapon in orbit; 25 airspace violations counted in 2026.
- **14 nations back the ICJ Rohingya ruling** — the court found Myanmar
  committed genocide against the Rohingya.
- **Also:** factory fire kills 26 in Banten, Indonesia; China opens
  Tiangong to its first foreign astronaut; the US loses measles
  elimination status after 25 years.

Sources: Reuters, BBC, The Guardian, Kyiv Independent, UN News.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` checks the image is a real 1024×1024 PNG under 1 MiB before
copying it, so both grading runs write the same bytes.

## Referral

Join make.fun with my referral code: `g53j9hdm`
