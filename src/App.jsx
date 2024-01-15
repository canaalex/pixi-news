import snapLogo from "./assets/images/snapLogo.png";
import DashBoard from "./pages/Dashboard";

function App() {
  return (
    <div className="App min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-700 via-indigo-800 to-purple-900">
      <header>
        <div className="p-4  bg-black bg-opacity-50 backdrop-blur-xl  drop-shadow-lg flex justify-left text-4xl">
          <img src={snapLogo} alt="pixie" className="h-10 w-auto" />
        </div>
      </header>
      <DashBoard />
    </div>
  );
}

export default App;
