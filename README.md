🌤️ Weather Application

A responsive React weather application that allows users to search for a city and retrieve its current weather information using the OpenWeather API.
This project was built as part of a React practice series to strengthen practical understanding of React state management, component communication, asynchronous API requests, environment variables, conditional rendering, and working with external API responses.

📌 Overview

The Weather Application provides a simple interface where a user can:
Search for a city by name.
Fetch its current weather information.
Display the city and country.
Display the current temperature in Celsius.
Display the current weather description.
Display the current date.
Show a loading state while the API request is being processed.
Handle unsuccessful API responses.
Load an initial weather location when the application starts.
The application uses the OpenWeather Current Weather API, which provides current conditions such as temperature, humidity, wind, pressure, clouds, and weather descriptions. OpenWeather supports querying current weather by city name through its weather API.

✨ Features

🔎 City Search

Users can enter a city name and request its current weather.
Example:
Karachi
Lahore
Islamabad
London
New York
The search value is maintained in React state and passed between the parent Weather component and the Search component.

🌡️ Current Temperature

The application reads the temperature from the API response:
weatherData?.main?.temp
The request uses:
units=metric
so temperatures are returned in Celsius.

🌤️ Weather Description

The current weather condition is extracted from:
weatherData?.weather?.[0]?.description
For example:
clear sky
broken clouds
light rain
overcast clouds

🌍 Location Information

The application displays:
weatherData?.name
and:
weatherData?.sys?.country
Example:
Lahore, PK

📅 Current Date

The application generates and displays the current date using JavaScript's Date API.
Example:
Saturday, August 29, 2026

⏳ Loading State

While a weather request is being processed, the application displays a loading indicator.
const [loading, setLoading] = useState(false);

⚠️ API Error Handling

The application checks the HTTP response before accepting the returned data:
if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch weather');
}
This prevents failed API requests from being treated as successful weather responses.

🔐 Environment Variable Configuration

The OpenWeather API key is stored locally in an environment file rather than being hardcoded directly into the component.
For Vite, variables exposed to client-side code use the VITE_ prefix and are accessed through import.meta.env. Vite also loads .env files when the development server starts.

🛠️ Tech Stack

Technology
Purpose
React
Building the user interface
JavaScript
Application logic
Vite
Development server and build tooling
OpenWeather API
Current weather data
CSS
Styling
React Hooks
State and lifecycle management
Fetch API
HTTP requests

📁 Project Structure

The relevant project structure is:
weatherApp/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   │
│   │   ├── search/
│   │   │   └── index.jsx
│   │   │
│   │   └── weather/
│   │       └── index.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env                 # Local only - DO NOT COMMIT
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

🧩 Component Architecture

The application currently follows a simple parent-child component structure:
App
 │
 ▼
Weather
 │
 ├── Search
 │
 └── Weather Data UI
App

The root component renders the main weather component:
import Weather from './components/weather';

function App() {
    return (
        <div className="App">
            <Weather />
        </div>
    );
}

Weather

The Weather component is responsible for:

Search state
Loading state
Weather data state
API requests
Search handling
Initial weather request
Formatting the current date
Rendering weather information

Main state:

const [search, setSearch] = useState('');
const [loading, setLoading] = useState(false);
const [weatherData, setWeatherData] = useState(null);

Search

The Search component handles the search UI.
The parent passes state and functions to it:

<Search
    search={search}
    setSearch={setSearch}
    handleSearch={handleSearch}
/>

This demonstrates an important React pattern: lifting state up and passing data/functions between components through props.

🔄 Application Data Flow

The basic flow of the application is:
User enters city
       │
       ▼
Search component
       │
       │ setSearch()
       ▼
Weather component state
       │
       ▼
User clicks Search
       │
       ▼
handleSearch()
       │
       ▼
fetchWeatherData(search)
       │
       ▼
OpenWeather API
       │
       ▼
JSON response
       │
       ▼
setWeatherData(data)
       │
       ▼
React re-renders
       │
       ▼
Weather information displayed

🌐 API Integration

The application uses the OpenWeather current weather endpoint.
General request format:

https://api.openweathermap.org/data/2.5/weather
    ?q=CITY
    &appid=API_KEY
    &units=metric
For example:

https://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=YOUR_API_KEY&units=metric
OpenWeather documents the Current Weather API and supports city-based requests through its built-in location handling.

📦 Example API Response

A successful response contains information similar to:
{
    "coord": {
        "lon": 74.3436,
        "lat": 31.5497
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "main": {
        "temp": 38.99,
        "feels_like": 45.99,
        "temp_min": 38.99,
        "temp_max": 38.99,
        "pressure": 997
    },
    "name": "Lahore",
    "sys": {
        "country": "PK"
    }
}

The application extracts only the information required by the current UI.

City
weatherData?.name
Country
weatherData?.sys?.country
Temperature
weatherData?.main?.temp
Weather Description
weatherData?.weather?.[0]?.description
Weather Icon Code

Available from:

weatherData?.weather?.[0]?.icon
The icon value can be used later to display an OpenWeather weather icon.

🔐 Environment Variables

Create a local .env file in the project root:

VITE_WEATHER_API_KEY=your_openweather_api_key
The application reads it using:
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
Important
Do not commit the real .env file.

The .gitignore should contain:

.env
.env.*
!.env.example
A safe .env.example can be committed:

VITE_WEATHER_API_KEY=your_openweather_api_key_here

⚠️ Frontend API-Key Limitation

Because this is a Vite React frontend, a VITE_* variable is exposed to the client bundle. Vite explicitly warns that VITE_* variables should not be considered secret because their values are bundled into client-side code.
For a learning project using an API such as OpenWeather, this setup is convenient. For a production application where the credential must remain genuinely secret, the API request should be moved behind a backend/serverless endpoint.

🚀 Getting Started

1. Clone the repository
git clone <repository-url>
2. Enter the project
cd weatherApp
3. Install dependencies
npm install
4. Create the environment file

Create:
.env
Then add:

VITE_WEATHER_API_KEY=your_openweather_api_key
5. Start the development server
npm run dev
Vite will provide a local development URL, typically:
http://localhost:5173/
6. Build for production
npm run build
7. Preview the production build
npm run preview

🧪 How to Use

Start the application.
Enter a city in the search field.
Click Search.
The application sends the city to OpenWeather.
The API response is converted from JSON.
The weather state is updated.
The UI displays the returned information.

Example:
Input:
Karachi

Output:
Karachi, PK
Saturday, August 29, 2026
28.9
clear sky

🧠 React Concepts Practiced
This project was specifically useful for practicing several core React concepts.
useState
Used for managing:
search
loading
weatherData
useEffect
Used to perform an initial weather request when the component mounts:
useEffect(() => {
    fetchWeatherData('Lahore');
}, []);
Props

The Weather component passes:

search
setSearch
handleSearch
to the Search component.
Conditional Rendering
The application displays a loading state while the request is running:
loading
    ? <div>Loading...</div>
    : <WeatherData />
Optional Chaining
The application safely reads nested API properties:
weatherData?.main?.temp
and:

weatherData?.weather?.[0]?.description
This avoids errors while weatherData is initially null.
Async/Await

The API request uses:

const response = await fetch(url);
const data = await response.json();
Error Handling
The request is wrapped in:
try {
    ...
} catch (error) {
    ...
}
and HTTP errors are explicitly checked using:
if (!response.ok) {
    throw new Error(...);
}

🐛 Error Handling

The application handles API failures through the try/catch block.
For example, if a user enters an invalid city, OpenWeather can return an unsuccessful HTTP response.
The application checks:
if (!response.ok)
before updating the weather state.
A future version can improve this by displaying the error directly in the UI rather than only logging it to the console.

Architecture

As the application grows, weather API logic could be separated from the UI:
src/
├── components/
├── services/
│   └── weatherApi.js
├── hooks/
│   └── useWeather.js
└── utils/

This would make the application easier to maintain and test.
Security / Production Architecture
For a production version, move the OpenWeather request to a server-side API or serverless function so the weather provider credential is not embedded directly in the client bundle.

📚 What I Learned

This project helped reinforce the following practical concepts:

React component structure
Parent-child communication
Passing functions through props
Controlled inputs
State management with useState
Side effects with useEffect
API requests with fetch
async/await
JSON parsing
HTTP response validation
Conditional rendering
Optional chaining
Environment variables with Vite
Loading states
Basic API error handling
Working with nested API response objects

🔗 Resources

OpenWeather API: https://openweathermap.org/api
OpenWeather FAQ: https://openweathermap.org/faq
Vite Environment Variables: https://vite.dev/guide/env-and-mode
Vite Documentation: https://vite.dev/

👨‍💻 Project Status

Status: Completed — initial React weather application
The current version focuses on learning and practicing React fundamentals and API integration rather than being a production-ready weather platform.

📄 License

This project was created for learning and educational purposes.
