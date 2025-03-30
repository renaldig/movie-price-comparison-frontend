# Movie Price Comparison Frontend

This is the frontend for the Movie Price Comparison application. It is a React application that displays a list of movies and allows users to click on a movie to view its cheapest price (retrieved from the backend). The UI follows a minimalistic, modern, and Apple-inspired design.

## Tech Stack
- **React** – JavaScript library for building user interfaces
- **Create React App** – Bootstrapping the React project
- **Fetch API** – For communicating with the backend
- **CSS** – For styling and layout (with a minimalistic design approach)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Setup
1. Clone the repository:
   git clone <repository-url>
   cd movie-price-comparison-frontend
2. Install dependencies:
   npm install
3. Configure API Endpoint:
   In src/services/movieService.js, ensure the BASE_URL matches the backend URL (e.g., http://localhost:5194/api).

## Running the Application
Start the frontend development server:
npm start
This will launch the app on http://localhost:3000.

## UI Overview
Movie List: Displays a list of movies fetched from the backend
Cheapest Price Panel: When a movie is clicked, the app calls the backend to retrieve and display the cheapest price

## Notes
- The frontend communicates exclusively with the backend API and does not directly interact with external movie providers
- The design uses a clean, minimalistic approach with separate CSS styling (see src/App.css for details)