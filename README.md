# FitLog — Workout Library

FitLog is a responsive, dark-themed workout library built with Next.js. It lets users browse twelve exercises, inspect complete workout instructions, build a five-exercise plan for today, and save workouts for later. Plan state persists in the browser so the workout log survives page reloads.

## Features

- Responsive workout library with all 12 exercises from the FitLog API
- Dynamic workout detail pages with equipment, difficulty, sets, reps, duration, calories, rating, and instructions
- Today's Plan with a maximum of five workouts and live exercise, minute, and calorie totals
- Saved workout list with synchronized navbar counters
- Mark-as-done and remove actions with toast notifications
- Duration, calories, and rating sorting on the My Plan page
- Loading, API error, empty-list, and custom 404 states
- Local storage persistence for plan and saved workouts
- Mobile, tablet, and desktop layouts based on the supplied Figma design

## Technologies

- Next.js 15 with the App Router
- React 19
- Tailwind CSS 4
- Context API
- Lucide React icons
- React Hot Toast
- FitLog REST API

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Hero and workout library |
| `/workouts/[id]` | Dynamic workout details |
| `/my-plan` | Today's Plan, Saved workouts, metrics, and sorting |
| Any invalid URL | Custom 404 page |

## API

- All workouts: `https://api.abcz.workers.dev/api/fitlog`
- Single workout: `https://api.abcz.workers.dev/api/fitlog/:id`

## Run Locally

```bash
git clone https://github.com/kamrullab/assignment-6.git
cd assignment-6
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run lint
npm run build
```

## Repository

[github.com/kamrullab/assignment-6](https://github.com/kamrullab/assignment-6)
