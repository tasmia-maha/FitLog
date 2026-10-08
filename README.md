# FitLog — Workout Library

FitLog is a dark, responsive workout library designed to help users explore workouts, view detailed workout information, create a personal workout plan, save workouts for later, and track completed workouts.

## Live Demo

https://fitlog-workout-blush.vercel.app/

## Screenshots

### Workout Library

![FitLog Workout Library](./public/screenshots/home.png)

### Workout Details

![Workout Details](./public/screenshots/details.png)

### My Plan

![My Plan](./public/screenshots/my-plan.png)

## Technologies Used

* **Next.js** — React framework for building the application
* **React** — Component-based UI development
* **TypeScript** — Type-safe JavaScript
* **Tailwind CSS** — Responsive and utility-first styling
* **Lucide React** — Icons
* **REST API** — Fetching workout data
* **LocalStorage** — Storing personal plan, saved workouts, and completed workouts
* **Vercel** — Deployment

## Key Features

### 1. Workout Library

Browse a collection of workouts with useful information including:

* Workout name
* Muscle groups
* Equipment
* Duration
* Calories burned
* Rating

### 2. Workout Details

View detailed information about each workout, including:

* Description
* Difficulty
* Muscle groups
* Equipment
* Duration
* Calories
* Sets and reps
* Step-by-step instructions

### 3. Today's Plan

Users can add workouts to their personal **Today's Plan** and manage their planned workouts from the My Plan page.

### 4. Save for Later

Users can save workouts for later and access them from their saved workout collection.

### 5. Mark as Done

Users can mark planned workouts as completed using the **Mark as Done** button with a check indicator.

### 6. Remove Workout

Users can remove a workout from Today's Plan using the remove button.

### 7. Dynamic Navbar Counters

The navbar displays the current number of:

* Planned workouts
* Saved workouts

The counters update when workouts are added, saved, or removed.

### 8. Responsive Design

The application is designed to work across:

* Mobile devices
* Tablets
* Desktop screens

## API

Workout data is fetched from a REST API:

```text
https://api.api-store.workers.dev/api/fitlog
```

Workout details are retrieved using the workout ID.

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

### Installation

Clone the repository:

```bash
git clone https://github.com/tasmia-maha/FitLog.git
```

Go to the project directory:

```bash
cd FitLog
```

Install dependencies:

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

## Project Structure

```text
FitLog/
├── app/
│   ├── my-plan/
│   ├── workout/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── WorkoutLibrary.tsx
│   ├── WorkOutCards.tsx
│   └── WorkoutAction.tsx
│
├── public/
│   ├── assets/
│   └── screenshots/
│
├── package.json
└── README.md
```

## Deployment

FitLog is deployed using **Vercel**.

## Author

**Tasmia Akter**

GitHub: [@tasmia-maha](https://github.com/tasmia-maha)

