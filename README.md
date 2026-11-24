# The Robot Apology

[![make.fun · u-suga-the-robot-apology-dd96bb59](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)
[![rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/teguharifiant/makefun-robot-apology/rank.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)
[![reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/teguharifiant/makefun-robot-apology/reward.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)

A two-line apology from a household robot for one very specific mistake — and the lesson it took from it. Written for the make.fun bounty "The Robot Apology": line 1 apologizes for a single precise slip, line 2 says what the robot learned and what it will do differently.

## The entry

> I am sorry I vacuumed up the wedding ring you dropped behind the radiator.
> I have learned to scan for small metal objects before every sweep, and from now on I will check the dustbin before I empty it.

Character count: 201 (including the newline between the two lines).

## How to run it

Requires Node.js 22, no dependencies.

```sh
node main.ts
```

This validates the entry and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (defaults to `/output`).

## Determinism

The entry text is a fixed constant in `main.ts`. Running the program twice produces byte-identical `entry.txt` files (verified with `cmp`).

Built for [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59).
