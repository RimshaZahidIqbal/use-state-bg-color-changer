import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); // light dark grey

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen ${mode === 'dark'
        ? 'bg-black text-white'
        : mode === 'grey'
          ? 'bg-gray-300 text-black'
          : 'bg-white text-black'
        }`}
    >
      <div className="flex flex-col items-center text-center space-y-6 px-4 sm:px-8">
        <h3 className="font-bold text-3xl sm:text-5xl md:text-6xl py-4 text-transparent bg-clip-text bg-gradient-to-r from-[#58C4DC] to-emerald-600">
          React useState Hook!
        </h3>
        <img
          src={mode === 'dark' || mode === 'grey' ? "/images/new-img.gif" : "/images/coding.gif"}
          alt="Background-based GIF"
          className="w-80 h-80 object-cover"
        />
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl my-2">
          Select a background from the dropdown
        </h2>

        <select
          onChange={handleModeChange}
          value={mode}
          className={`px-9 py-2 w-40 text-sm font-bold rounded-full shadow-lg sm:px-8 sm:py-4 sm:w-48 sm:text-base transition-all duration-300
    ${mode === 'dark'
              ? 'bg-white text-black border-2 border-black hover:bg-gray-100'
              : mode === 'grey'
                ? 'bg-black text-white border-2 border-white hover:bg-gray-800'
                : 'bg-black text-white border-2 border-white hover:bg-gray-800'
            }`}
        >
          <option
            value="light"
            className={`px-4 py-2 text-lg font-semibold ${mode === 'dark' ? 'text-black bg-white' : 'text-white bg-black'
              }`}
          >
            Light
          </option>
          <option
            value="dark"
            className={`px-4 py-2 text-lg font-semibold ${mode === 'dark' ? 'text-black bg-white' : 'text-white bg-black'
              }`}
          >
            Dark
          </option>
          <option
            value="grey"
            className={`px-4 py-2 text-lg font-semibold ${mode === 'dark' ? 'text-black bg-white' : 'text-white bg-black'
              }`}
          >
            Grey
          </option>
        </select>
      </div>
    </div>
  );
}

export default App;
