# Date Time Checker

A full-stack web application for comparing dates and times across different timezones.

## Features

- Compare two dates and times
- Support for all timezones
- Detailed difference calculation (milliseconds, seconds, minutes, hours, days)
- Clean and responsive UI
- Real-time validation

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

## Running the Application

1. Start the backend server:
   ```bash
   npm run server
   ```
2. In a new terminal, start the frontend:
   ```bash
   npm run client
   ```
3. Or run both simultaneously:
   ```bash
   npm run dev
   ```

The application will be available at:

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

### GET /api/timezones

Returns a list of all available timezones.

### POST /api/compare-dates

Compares two dates and returns the difference.

Request body:

```json
{
  "date1": "2024-03-20T10:00:00",
  "date2": "2024-03-21T15:30:00",
  "timezone": "UTC"
}
```

## Technologies Used

- Frontend:
  - React
  - CSS3
- Backend:
  - Node.js
  - Express
  - Moment.js
  - Moment Timezone
