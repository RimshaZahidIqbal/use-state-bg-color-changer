import { useState } from 'react';

function App() {
  const [mode, setMode] = useState(false);  // mode = true => theme black | mode = false => theme white
  const [visibility, setVisibility] = useState(true);

  return (
    <div className={`flex justify-center items-center min-h-screen ${mode ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="flex flex-col items-center text-center space-y-6 px-4 sm:px-8">
        <h3 className="font-bold text-3xl sm:text-5xl md:text-6xl py-4 text-transparent bg-clip-text bg-gradient-to-r from-[#58C4DC] to-emerald-600">
          React useState Hook!
        </h3>
        <img
          src={mode ? "/images/new-img.gif" : "/images/coding.gif"}
          alt="Theme-based GIF"
          className="w-80 h-80 object-cover"
        />
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl my-2">
          Click this button to change theme
        </h2>
        <button
          onClick={() => setMode(!mode)}
          className={`px-4 py-2 w-40 text-sm font-bold rounded-full hover:shadow-lg sm:px-8 sm:py-4 sm:w-48 sm:text-base ${mode ? 'bg-white text-black border-black' : 'bg-black text-white border-white'}`}
        >
          {mode ? "Light" : "Dark"} Mode
        </button>

        {visibility && (
          <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl my-2">
            Click button below 👇 to hide this text.
          </h2>
        )}

        <button
          onClick={() => setVisibility(!visibility)}
          className={`px-4 py-2 w-40 text-sm font-bold rounded-full hover:shadow-lg sm:px-8 sm:py-4 sm:w-48 sm:text-base ${mode ? 'bg-white text-black border-black' : 'bg-black text-white border-white'}`}
        >
          {visibility ? "Hide" : "Show"} Text
        </button>
      </div>
    </div>
  );
}

export default App;
