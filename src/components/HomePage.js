import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, Link } from "react-router-dom";

const HomePage = () => {
  const { user, isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    navigate("/login");
  };

  if (!isAuthenticated) {
    return null;
  }

  const cities = [
    { name: "Navi Mumbai", id: 1 },
    { name: "Bangalore", id: 2 },
    { name: "London", id: 3 },
    { name: "New York", id: 4 },
    { name: "Sydney", id: 5 },
  ];
  const style ={
   
    backgroundImage: 'url("https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
  }

  return (
    <div className="min-h-screen bg-cover " style={style}>
      <h1 className="text-center pt-5 font-bold text-2xl text-neutral-50">Weather App</h1>
      <h3 className="py-8 px-12 text-xl font-bold text-neutral-50">Welcome {user.nickname}</h3>

      <div
        className="max-w-3xl mx-auto mt-12"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <table className="min-w-[50%] bg-transparent mt-4 border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 text-center border-b text-stone-950 text-lg">City</th>
            </tr>
          </thead>
          <tbody>
            {cities.map(city => (
              <tr key={city.id}>
                <td className="py-2  text-center  text-white text-lg  font-bold">
                  <Link to={`/details/${encodeURIComponent(city.name)}`}>
                    {city.name}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="py-32 px-16 h-56 text-green-50 ">
        <button class="btn btn-danger" onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
};

export default HomePage;
