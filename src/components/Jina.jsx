import { useState } from "react";
import { nameData } from "../data/names.js";

function Jina() {
  const [name, setName] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleCheck = () => {
    if (!name.trim()) {
      return;
    }

    setLoading(true);
    const cleanName = name.toLowerCase().trim();

    // Simulate API call with setTimeout
    setTimeout(() => {
      if (nameData[cleanName]) {
        setResult({
          ...nameData[cleanName],
          name: name.charAt(0).toUpperCase() + name.slice(1),
        });
      } else {
        setResult({
          tribe: "Tribe Not Found",
          funFact: "Sorry. This name is not in our database currently!",
          name: name.charAt(0).toUpperCase() + name.slice(1),
        });
      }
      setLoading(false);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCheck();
    }
  };

  return (
    <div
      className={`h-screen w-screen overflow-hidden flex flex-col ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-b from-green-50 to-green-100"
      }`}
    >
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-opacity-80 transition-colors z-10"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1
            className={`text-5xl font-bold mb-6 ${
              darkMode ? "text-green-400" : "text-green-700"
            }`}
          >
            Kenyan Traditional Name Analyzer
          </h1>
          <p
            className={`text-xl mb-8 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Discover the cultural heritage behind Kenyan names. Enter a name to
            learn about its tribal origin and interesting cultural facts.
          </p>
        </div>

        {/* Search and Results Container */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Search Section */}
            <div
              className={`p-8 rounded-lg shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2
                className={`text-2xl font-bold mb-6 ${
                  darkMode ? "text-green-400" : "text-green-700"
                }`}
              >
                Search a Name
              </h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter a Kenyan name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className={`w-full p-4 pr-16 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all text-lg ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white focus:border-green-500"
                      : "border-gray-200 focus:border-green-500"
                  }`}
                />
                <button
                  onClick={handleCheck}
                  disabled={loading || !name.trim()}
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 rounded-lg
                    ${
                      loading
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-green-600"
                    }
                    ${darkMode ? "bg-green-500" : "bg-green-500"}
                    text-white transition-colors`}
                >
                  {loading ? "..." : "Search"}
                </button>
              </div>
              <div
                className={`mt-3 p-3 rounded-lg ${
                  darkMode ? "bg-gray-700/50" : "bg-green-50"
                }`}
              >
                <p
                  className={`text-sm flex items-center ${
                    darkMode ? "text-gray-300" : "text-green-700"
                  }`}
                >
                  <span className="mr-2">ℹ️</span>
                  Please enter names without apostrophes (e.g., "Ochieng"
                  instead of "Ochieng'")
                </p>
              </div>
            </div>

            {/* Results Section */}
            {result && (
              <div
                className={`p-8 rounded-lg shadow-lg transform transition-all duration-300 ease-out ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <h2 className="text-3xl font-bold mb-4">{result.name}</h2>
                <div
                  className={`inline-block px-4 py-2 rounded-full text-lg mb-6 ${
                    darkMode
                      ? "bg-green-900 text-green-300"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {result.tribe}
                </div>
                <p
                  className={`text-xl ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {result.funFact}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Footer Note */}
      <div
        className={`w-full py-4 text-center ${
          darkMode ? "bg-gray-800/50" : "bg-green-50"
        }`}
      >
        <p
          className={`text-sm flex items-center justify-center ${
            darkMode ? "text-gray-300" : "text-green-700"
          }`}
        >
          <span className="mr-2">📊</span>
          This analyzer includes names from Kenya's five largest tribes by
          population: Kikuyu, Luhya, Kalenjin, Luo, and Kamba.
        </p>
      </div>
    </div>
  );
}

export default Jina;
