# Weather Application

A modern, responsive weather application built with React and Vite. Get real-time weather information for any city in the world using the OpenWeatherMap API.

## Features

- 🌍 **Search Weather by City** - Enter any city name to get current weather conditions
- 🌡️ **Real-time Data** - Displays current temperature, weather description, humidity, and wind speed
- ⚡ **Fast & Lightweight** - Built with Vite for optimal performance
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🔄 **Auto-Load** - Automatically loads weather for Lahore on startup

## Tech Stack

- **Frontend Framework**: React 19.2.8
- **Build Tool**: Vite 8.2.2
- **Styling**: CSS3
- **API**: OpenWeatherMap API
- **Development Tools**: TypeScript support, oxlint for code quality

## Project Structure

```
weatherApp/
├── src/
│   ├── components/
│   │   ├── search/        # Search component for city lookup
│   │   └── weather/       # Main weather display component
│   ├── App.jsx           # Root application component
│   ├── App.css           # Application styles
│   ├── main.jsx          # Entry point
│   ├── index.css         # Global styles
│   └── assets/           # Static assets
├── public/               # Public static files
├── index.html           # HTML template
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd weatherApp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the `weatherApp` directory
   - Add your OpenWeatherMap API key:
     ```
     VITE_WEATHER_API_KEY=your_api_key_here
     ```
   - Get your free API key at: https://openweathermap.org/api

### Running the Application

**Development Server:**

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

**Production Build:**

```bash
npm run build
```

This creates an optimized build in the `dist` directory.

**Preview Production Build:**

```bash
npm run preview
```

**Code Quality Check:**

```bash
npm run lint
```

Runs oxlint to check code quality.

## Usage

1. Open the application in your browser
2. By default, it displays weather for Lahore
3. Use the search bar to enter any city name
4. Press Enter or click the search button to get weather for that city
5. View temperature, weather description, wind speed, and humidity

## Weather Data Displayed

- **City & Country** - Location name and country code
- **Current Date** - Formatted date (weekday, month, day, year)
- **Temperature** - Current temperature in Celsius
- **Weather Description** - Brief description (e.g., "clear sky", "rainy")
- **Wind Speed** - Wind speed in m/s
- **Humidity** - Relative humidity percentage

## API Information

This application uses the [OpenWeatherMap API](https://openweathermap.org/api):

- Endpoint: `https://api.openweathermap.org/data/2.5/weather`
- Free tier available with API key registration
- Temperature displayed in Celsius (metric units)

## Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Create production build                  |
| `npm run preview` | Preview production build locally         |
| `npm run lint`    | Run code quality checks with oxlint      |

## Environment Variables

Create a `.env.local` file with the following:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Add weather forecast for next 7 days
- [ ] Display weather icons/emojis
- [ ] Add geolocation support
- [ ] Save favorite cities
- [ ] Dark mode theme
- [ ] Temperature unit toggle (Celsius/Fahrenheit)
- [ ] Weather alerts and notifications

## Troubleshooting

**Issue: "Failed to fetch weather"**

- Verify your API key is correctly set in `.env.local`
- Check if the city name is spelled correctly
- Ensure your OpenWeatherMap API account is active

**Issue: Development server won't start**

- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Delete Vite cache: `.vite` folder
- Restart the development server

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues or questions, please open an issue in the repository.
