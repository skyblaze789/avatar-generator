import nose from "../assets/alpaca/nose.png";
function Preview({ config, styles }) {
  return (
    <div className="bg-white shadow-lg overflow-hidden flex items-center justify-center aspect-square relative">
      {config.layers.map((part) => (
        <img
          key={part}
          src={config.parts[part].styles[styles[part]]}
          className={`absolute  w-full h-full ${
            part === "Backgrounds" ? "object-cover" : "object-contain"
          }`}
        />
      ))}
    </div>
  );
}

export default Preview;
