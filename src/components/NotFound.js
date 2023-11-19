import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className=" min-h-screen page_404 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="four_zero_four_bg bg-cover bg-center h-96 w-full flex items-center justify-center">
            <h1 className="text-white text-6xl">404</h1>
          </div>

          <div className="contant_box_404 text-center mt-8">
            <h3 className="text-4xl font-bold">Looks like you're lost</h3>
            <p className="text-lg">The page you are looking for is not available!</p>
            <Link
              to="/"
              className="link_404 inline-block px-6 py-3 bg-green-500 text-white rounded-full mt-6"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
