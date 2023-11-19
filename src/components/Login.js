import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate("/home");
  }

  return (<>
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("https://images.pexels.com/photos/4198029/pexels-photo-4198029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}>
      <div className="text-white text-center">
        <h1 className="text-6xl font-bold mb-4 text-stone-950">Welcome to weather app</h1>
         <pre>
           <p className="text-xl text-stone-950 font-semibold">A web application which displays weather information about 5 cities
            login/signup to continue
           </p>
         </pre>

        <div className="py-8">
          <button
            onClick={() => loginWithRedirect()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Login
          </button>
          <button
            onClick={() => loginWithRedirect()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-4 py-2 px-4 rounded-full"
          >
            Signup
          </button>
        </div>
      </div>
    </div></>
  );
};

export default Login;
