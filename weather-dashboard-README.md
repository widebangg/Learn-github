# Weather Dashboard 🌤️

A responsive web application that displays current weather information for any city worldwide using the OpenWeatherMap API.

## Features

- ✨ Clean and modern user interface
- 📱 Fully responsive design (mobile-friendly)
- 🔍 Real-time weather data from OpenWeatherMap
- 🌡️ Temperature, humidity, wind speed, and more
- 🖼️ Weather icons and descriptions
- 🔒 Secure API key storage (local browser storage)
- ⚠️ Comprehensive error handling
- 🎯 Easy-to-use interface with clear instructions

## Getting Started

### 1. Get an API Key

To use this weather dashboard, you need a free API key from OpenWeatherMap:

1. Visit [OpenWeatherMap API](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to your API keys section
4. Copy your API key

### 2. Run the Application

#### Option 1: Direct File Opening
Simply open `index.html` in your web browser.

#### Option 2: Local Web Server (Recommended)
For the best experience, serve the files using a local web server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open your browser and navigate to `http://localhost:8000`.

### 3. Configure Your API Key

1. Open the weather dashboard in your browser
2. Click on "⚙️ API Key Configuration" to expand the section
3. Enter your OpenWeatherMap API key
4. Click "Save"

Your API key is stored locally in your browser and is never sent to any server except OpenWeatherMap.

### 4. Search for Weather

1. Enter a city name (e.g., "London", "Tokyo", "New York")
2. Click "Search" or press Enter
3. View the current weather information

## Weather Information Displayed

- **Temperature**: Current temperature in Celsius
- **Weather Description**: Current weather conditions
- **Feels Like**: Perceived temperature
- **Humidity**: Relative humidity percentage
- **Wind Speed**: Wind speed in km/h
- **Pressure**: Atmospheric pressure in hPa
- **Visibility**: Visibility distance in kilometers
- **Weather Icon**: Visual representation of current weather

## Error Handling

The application handles various error scenarios:

- **Missing API Key**: Prompts user to configure API key
- **Empty City Name**: Asks user to enter a city name
- **Invalid City**: Shows error for cities that don't exist
- **Network Issues**: Displays appropriate error messages
- **API Rate Limits**: Informs user about request limits
- **Server Errors**: Handles API service unavailability

## Technology Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with flexbox and grid
- **Vanilla JavaScript**: No external dependencies
- **OpenWeatherMap API**: Weather data source

## Browser Compatibility

This application works on all modern browsers including:

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## File Structure

```
weather-dashboard/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md          # This documentation
```

## Security & Privacy

- ✅ API keys are stored locally in browser's localStorage
- ✅ No data is sent to any third-party servers except OpenWeatherMap
- ✅ All code is client-side and self-contained
- ✅ No tracking or analytics

## Responsive Design

The dashboard is optimized for all screen sizes:

- **Desktop**: Full-width layout with side-by-side elements
- **Tablet**: Stacked layout with optimized spacing
- **Mobile**: Single-column layout with touch-friendly buttons

## Keyboard Shortcuts

- `Ctrl/Cmd + /`: Focus on city search input
- `Enter`: Submit search when in city input field
- `Enter`: Save API key when in API key input field

## Troubleshooting

### API Key Issues
- Ensure your API key is valid and active
- New API keys may take a few minutes to activate
- Check that you haven't exceeded your API rate limits

### City Not Found
- Check the spelling of the city name
- Try using the full city name or add country code (e.g., "London, UK")
- Some smaller cities may not be available in the database

### Network Issues
- Check your internet connection
- Ensure your firewall/network allows API requests to api.openweathermap.org
- Try refreshing the page and searching again

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing

Feel free to contribute to this project by:

1. Reporting bugs or issues
2. Suggesting new features
3. Submitting pull requests
4. Improving documentation

## Credits

- Weather data provided by [OpenWeatherMap](https://openweathermap.org)
- Icons and weather information from OpenWeatherMap API
- Built with modern web technologies