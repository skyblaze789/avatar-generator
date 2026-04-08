import { AVATARS } from "./config";
import { useAvatar } from "./hooks/useAvarar";
import Preview from "./components/Preview";
import Controls from "./components/Controls";
import Button from "./components/Button";

function App() {
  const config = AVATARS.alpaca; // later dynamic

  const {
    selectedPart,
    setSelectedPart,
    styles,
    updateStyle,
    randomize,
    downloadImage,
  } = useAvatar(config);

  return (
    <div className="min-h-dvh bg-gray-200 flex justify-center py-6 px-4">
      <main className="w-full max-w-5xl">
        <h1 className="pb-6 text-3xl text-left font-bold text-blue-950 tracking-wider uppercase">
          AVATAR GENERATOR
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stretch">
          <Preview config={config} styles={styles} />

          <Controls
            config={config}
            selectedPart={selectedPart}
            setSelectedPart={setSelectedPart}
            styles={styles}
            updateStyle={updateStyle}
          />
        </div>

        <div className="py-6 space-x-4">
          <h2 className="text-sm font-bold uppercase text-slate-700 mb-3">
            Special Buttons
          </h2>
          <Button
            className="bg-orange-500 border-orange-500 text-white hover:bg-orange-700 hover:text-white hover:border-orange-700"
            onClick={randomize}
          >
            Randomize
          </Button>
          <Button
            className="bg-green-500 border-green-500 text-white hover:bg-green-700 hover:text-white hover:border-green-700"
            onClick={downloadImage}
          >
            Download
          </Button>
        </div>
      </main>
    </div>
  );
}

export default App;
