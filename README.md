# Online Exam Dashboard

# Frontend REACT Test

## Overview

This Online Exam Dashboard is a web application built with React and Vite for managing and displaying information about movies. Users can explore popular movies, search for specific movies, and view detailed information about each movie.

## Home Page

The home page of the application consists of a search input and a section displaying either popular movies or search results based on user input. The popular movies are fetched from The Movie Database (TMDb) API.

## Building Components and External Libraries

### Components

#### 1. Home Component

- Manages the search functionality and displays either popular movies or search results.
- Uses the `Popular` and `Search` components to render movie grids based on user input.

#### 2. Popular Component

- Fetches and displays a grid of popular movies using The Movie Database (TMDb) API.

#### 3. MovieGrid Component

- Displays a grid of movies with details such as title, release date, overview, and a button to view more details.
- Utilizes the `Details` component to show detailed information about a selected movie.

#### 4. Details Component

- Displays detailed information about a selected movie.
- Provides a button to close the details modal.

### External Libraries

- **Vite**: Used as the build tool for fast development and efficient production builds.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling components.

## Unique Features

- **Dynamic Search**: Users can dynamically search for movies, and the application updates the displayed results in real-time.
- **Detailed Information**: Clicking on the "Details" button in the movie grid opens a modal with detailed information about the selected movie.

## How to Run the Application

1. Clone the repository:

   ```bash
   git clone https://github.com/anaghaf/online-exam-dashboard.git
   cd online-exam-dashboard

   npm run dev
   ```
