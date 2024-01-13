import pixieLogo from "./assets/images/pixiLogo.png";

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <header>
        <div className="p-4  bg-white bg-opacity-50 backdrop-blur-xl  drop-shadow-lg flex justify-left text-4xl">
          <img src={pixieLogo} alt="pixie" className="h-10 w-auto" />
        </div>
      </header>
    </div>
  );
}

export default App;
