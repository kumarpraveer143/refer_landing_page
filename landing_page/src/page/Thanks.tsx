import React from "react";
import { useNavigate } from "react-router-dom";

const Thanks: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
        Thank You for Referring!
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-md drop-shadow-md">
        We appreciate your referral. Help more friends by referring again!
      </p>
      <button
        className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-yellow-500 transition transform hover:scale-105"
        onClick={() => navigate("/")}
      >
        Refer More
      </button>
    </div>
  );
};

export default Thanks;
