import React, { useEffect, useState } from 'react';
import Search from '../search/index';
const Weather = () => {

    const API_KEY=import.meta.env.VITE_WEATHER_API_KEY
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    
    async function fetchWeatherData(param) {
        setLoading(true)
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${API_KEY}&units=metric`);

            const data = await response.json();
            console.log("WEATHER ARRAY:", data.weather);
            console.log("DESCRIPTION:", data.weather?.[0]?.description);
            if (!response.ok) {
                    throw new Error(data.message || 'Failed to fetch weather');
            }
            console.log(data);
            if(data){
                setWeatherData(data);
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    function handleSearch(){
        fetchWeatherData(search);
    }

    useEffect(() => {
        fetchWeatherData('Lahore');
    }, [])

    function getCurrentDate(){
        return new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }
    return (
        <div>
            <Search 
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
            />
            {
                loading ? <div className='loading'>Loading...</div> :
                <div>
                    <div className='city-name'>
                        <h2>
                            {weatherData?.name}, 
                            <span>
                                {weatherData?.sys?.country}
                                </span>
                        </h2>
                    </div>
                    
                    <div className='date'>
                        {getCurrentDate()}
                    </div>

                    <div className='temp'>
                        {weatherData?.main?.temp}
                    </div>

                    <p className='description'>
                    {weatherData?.weather?.[0]?.description}
                    </p>
                    <div className='weather-info'>
                        <div className='column'>
                            <div>
                                <p className='wind'>{weatherData?.wind?.speed}</p>
                                <p>Speed</p>
                            </div>
                        </div>
                        <div className='column'>
                            <div>
                                <p className='humidity'>{weatherData?.main?.humidity}</p>
                                <p>humidity</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Weather;
