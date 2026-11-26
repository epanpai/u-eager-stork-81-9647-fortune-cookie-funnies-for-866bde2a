# Fortune Cookie Funnies for Engineers — "The code you wrote at 2 a.m.…"

[![Fortune Cookie Funnies for Engineers](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/epanpai/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/epanpai/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)

Entry for the [Fortune Cookie Funnies for Engineers](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a) bounty on make.fun.

## The entry

> The code you wrote at 2 a.m. will be reviewed at 9 a.m. by someone who slept.

77 characters, one line: the tired 2 a.m. code meets a rested 9 a.m. reviewer — and the review will show it. The two clocks are the setup, "slept" is the punchline at the very end.

## How it works

`main.ts` (Node 22, stdlib only) writes the fixed line to `/output/entry.txt` — 77 characters, inside the 1–120 character gate. Deterministic, no network, no secrets, no randomness.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
