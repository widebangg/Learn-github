// Weather Dashboard JavaScript

class WeatherDashboard {
    constructor() {
        this.apiKey = localStorage.getItem('openweathermap_api_key');
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
        this.iconUrl = 'https://openweathermap.org/img/wn/';
        
        this.initializeElements();
        this.bindEvents();
        this.loadApiKey();
    }

    initializeElements() {
        this.cityInput = document.getElementById('cityInput');
        this.searchBtn = document.getElementById('searchBtn');
        this.apiKeyInput = document.getElementById('apiKeyInput');
        this.saveApiKeyBtn = document.getElementById('saveApiKeyBtn');
        this.loadingSpinner = document.getElementById('loadingSpinner');
        this.errorMessage = document.getElementById('errorMessage');
        this.weatherCard = document.getElementById('weatherCard');
        
        // Weather card elements
        this.cityName = document.getElementById('cityName');
        this.currentTime = document.getElementById('currentTime');
        this.temperature = document.getElementById('temperature');
        this.weatherDescription = document.getElementById('weatherDescription');
        this.weatherIconImg = document.getElementById('weatherIconImg');
        this.feelsLike = document.getElementById('feelsLike');
        this.humidity = document.getElementById('humidity');
        this.windSpeed = document.getElementById('windSpeed');
        this.pressure = document.getElementById('pressure');
        this.visibility = document.getElementById('visibility');
        this.uvIndex = document.getElementById('uvIndex');
    }

    bindEvents() {
        this.searchBtn.addEventListener('click', () => this.searchWeather());
        this.cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.searchWeather();
            }
        });
        
        this.saveApiKeyBtn.addEventListener('click', () => this.saveApiKey());
        this.apiKeyInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.saveApiKey();
            }
        });
    }

    loadApiKey() {
        if (this.apiKey) {
            this.apiKeyInput.value = this.apiKey;
        }
    }

    saveApiKey() {
        const apiKey = this.apiKeyInput.value.trim();
        if (!apiKey) {
            this.showError('Please enter a valid API key');
            return;
        }

        localStorage.setItem('openweathermap_api_key', apiKey);
        this.apiKey = apiKey;
        this.showSuccess('API key saved successfully! You can now search for weather data.');
    }

    async searchWeather() {
        const cityName = this.cityInput.value.trim();
        
        if (!cityName) {
            this.showError('Please enter a city name');
            return;
        }

        if (!this.apiKey) {
            this.showError('Please configure your API key first');
            return;
        }

        try {
            this.showLoading();
            const weatherData = await this.fetchWeatherData(cityName);
            this.displayWeatherData(weatherData);
        } catch (error) {
            this.showError(error.message);
        }
    }

    async fetchWeatherData(cityName) {
        const url = `${this.baseUrl}?q=${encodeURIComponent(cityName)}&appid=${this.apiKey}&units=metric`;
        
        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                switch (response.status) {
                    case 401:
                        throw new Error('Invalid API key. Please check your API key and try again.');
                    case 404:
                        throw new Error(`City "${cityName}" not found. Please check the spelling and try again.`);
                    case 429:
                        throw new Error('Too many requests. Please wait a moment and try again.');
                    case 500:
                    case 502:
                    case 503:
                    case 504:
                        throw new Error('Weather service is temporarily unavailable. Please try again later.');
                    default:
                        throw new Error(`Failed to fetch weather data (Error ${response.status})`);
                }
            }

            const data = await response.json();
            return data;
        } catch (error) {
            if (error.name === 'TypeError' && error.message.includes('fetch')) {
                throw new Error('Network error. Please check your internet connection and try again.');
            }
            throw error;
        }
    }

    displayWeatherData(data) {
        // Update city name and time
        this.cityName.textContent = `${data.name}, ${data.sys.country}`;
        this.currentTime.textContent = this.formatDateTime(new Date());

        // Update main weather info
        this.temperature.textContent = Math.round(data.main.temp);
        this.weatherDescription.textContent = data.weather[0].description;
        
        // Update weather icon
        const iconCode = data.weather[0].icon;
        this.weatherIconImg.src = `${this.iconUrl}${iconCode}@2x.png`;
        this.weatherIconImg.alt = data.weather[0].description;

        // Update weather details
        this.feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
        this.humidity.textContent = `${data.main.humidity}%`;
        this.windSpeed.textContent = `${Math.round(data.wind.speed * 3.6)} km/h`; // Convert m/s to km/h
        this.pressure.textContent = `${data.main.pressure} hPa`;
        this.visibility.textContent = data.visibility ? `${(data.visibility / 1000).toFixed(1)} km` : 'N/A';
        
        // UV Index is not available in current weather API, so we'll show N/A
        this.uvIndex.textContent = 'N/A';

        // Show weather card and hide loading/error
        this.hideLoading();
        this.hideError();
        this.weatherCard.classList.remove('hidden');
    }

    formatDateTime(date) {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return date.toLocaleDateString('en-US', options);
    }

    showLoading() {
        this.loadingSpinner.classList.remove('hidden');
        this.hideError();
        this.weatherCard.classList.add('hidden');
        this.searchBtn.disabled = true;
        this.searchBtn.textContent = 'Searching...';
    }

    hideLoading() {
        this.loadingSpinner.classList.add('hidden');
        this.searchBtn.disabled = false;
        this.searchBtn.textContent = 'Search';
    }

    showError(message) {
        this.errorMessage.textContent = message;
        this.errorMessage.classList.remove('hidden');
        this.hideLoading();
        this.weatherCard.classList.add('hidden');
    }

    hideError() {
        this.errorMessage.classList.add('hidden');
    }

    showSuccess(message) {
        // Temporarily show success message in the error element with different styling
        this.errorMessage.textContent = message;
        this.errorMessage.style.backgroundColor = '#28a745';
        this.errorMessage.classList.remove('hidden');
        
        setTimeout(() => {
            this.hideError();
            this.errorMessage.style.backgroundColor = '#ff6b7d'; // Reset to error color
        }, 3000);
    }
}

// Initialize the weather dashboard when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new WeatherDashboard();
});

// Add some helpful keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Focus on city input with Ctrl+/ or Cmd+/
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        document.getElementById('cityInput').focus();
    }
});