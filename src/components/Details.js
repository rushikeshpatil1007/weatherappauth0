/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";



const Details = () => {
  const {  logout } = useAuth0();
  const { cityName } = useParams();
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const apiKey = "2c883e6a53e94cef81623324187023f9";

  useEffect(() => {
    const fetchWeatherDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
        );

        setWeatherDetails(response.data);
      } catch (error) {
        console.error("Error fetching weather details:", error);
        setError("Error fetching weather details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherDetails();
  }, [cityName, apiKey]);

  if (error) {
    return <p>Error: {error}</p>;
  }
  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    navigate("/login");
  };

  return (
    <div className="text-neutral-50 text-xl px-16 py-16 bg-cover" style={{ backgroundImage: 'url("https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}>
      <h1>City Name: {cityName}</h1>
      <div className="flex justify-center items-center min-h-screen">
        {weatherDetails ? (
          <table className="min-w-[50%] bg-transparent  border-white">
            <tbody>
              <tr>
                <td className="py-2 text-center text-neutral-50">Temperature</td>
                <td className="py-2 text-center text-neutral-50">{weatherDetails.main.temp} °C</td>
              </tr>
              <tr>
                <td className="py-2 text-center text-neutral-50">Humidity</td>
                <td className="py-2 text-center text-neutral-50">{weatherDetails.main.humidity} %</td>
              </tr>
              <tr>
                <td className="py-2 text-center text-neutral-50">Wind Speed</td>
                <td className="py-2 text-center text-neutral-50">{weatherDetails.wind.speed} m/s</td>
              </tr>
              {weatherDetails.rain && (
                <tr>
                  <td className="py-2 text-center border text-neutral-50">Rain</td>
                  <td className="py-2 text-center border text-neutral-50">{weatherDetails.rain["1h"]} mm</td>
                </tr>
              )}
              <tr>
                <td className="py-2 text-center text-neutral-50">Time</td>
                <td className="py-2 text-center text-neutral-50">{new Date(weatherDetails.dt * 1000).toLocaleTimeString()}</td>
              </tr>
              <tr>
                <td className="py-2 text-center text-neutral-50">Date</td>
                <td className="py-2 text-center text-neutral-50">{new Date(weatherDetails.dt * 1000).toLocaleDateString()}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>No weather details available for this city.</p>
        )}
      </div>
      <div className="fixed bottom-0 left-0 p-4">
        <button class="btn btn-danger" onClick={() => handleLogout()}>Logout</button>
        <Link  className="mx-4 mb-4"to="/home">Home</Link>
      </div>
    </div>
  );
};

export default Details;
