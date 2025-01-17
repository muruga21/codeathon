import bronze from "../assets/images/bronze.png";
import silver from "../assets/images/silver.png";
import gold from "../assets/images/gold.png";

const Prizes = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-blue-800 mb-10">🏆 Prizes 🏆</h1>

      {/* Prizes Container */}
      <div className="relative flex items-end justify-center w-full max-w-4xl">
        {/* 2nd Prize - Left Side */}
        <div className="flex flex-col items-center absolute left-0 bottom-5 md:bottom-10">
          <span className="text-2xl md:text-3xl font-bold text-gray-700 bg-yellow-300 px-5 py-2 rounded-lg">
            ₹25,000
          </span>
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-300 rounded-full blur-2xl opacity-50 w-44 h-44"></div>
            <img
              src={silver}
              alt="2nd Prize"
              className="w-48 md:w-56 rounded-lg shadow-lg transform hover:scale-105 transition-transform relative"
            />
          </div>
          <p className="mt-3 text-2xl md:text-3xl font-bold text-gray-700">2nd Prize</p>
        </div>

        {/* 1st Prize - Centered & Elevated */}
        <div className="flex flex-col items-center relative top-[-50px] md:top-[-60px]">
          <span className="text-3xl md:text-4xl font-bold text-gray-700 bg-yellow-500 px-5 py-2 rounded-lg">
            ₹50,000
          </span>
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400 rounded-full blur-3xl opacity-70 w-56 h-56"></div>
            <img
              src={gold}
              alt="1st Prize"
              className="w-56 md:w-64 rounded-lg shadow-lg transform hover:scale-110 transition-transform relative"
            />
          </div>
          <p className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-700">1st Prize</p>
        </div>

        {/* 3rd Prize - Right Side */}
        <div className="flex flex-col items-center absolute right-0 bottom-5 md:bottom-10">
          <span className="text-2xl md:text-3xl font-bold text-gray-700 bg-yellow-200 px-5 py-2 rounded-lg">
            ₹10,000
          </span>
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-200 rounded-full blur-2xl opacity-50 w-44 h-44"></div>
            <img
              src={bronze}
              alt="3rd Prize"
              className="w-48 md:w-56 rounded-lg shadow-lg transform hover:scale-105 transition-transform relative"
            />
          </div>
          <p className="mt-3 text-2xl md:text-3xl font-bold text-gray-700">3rd Prize</p>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
