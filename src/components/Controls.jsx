import Button from "./Button";

function Controls({
  config,
  selectedPart,
  setSelectedPart,
  styles,
  updateStyle,
}) {
  return (
    <>
      {/* Parts */}
      <div className="flex flex-col gap-6">
        <h2 className="text-sm font-bold uppercase text-slate-700 mb-3">
          Accessorize the Alpaca
        </h2>
        <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-2 ">
          {Object.keys(config.parts).map((part) => (
            <Button
              key={part}
              isActive={selectedPart === part}
              onClick={() => setSelectedPart(part)}
            >
              {part}
            </Button>
          ))}
        </div>

        {/* Styles */}
        <div>
          <h2 className="text-sm font-bold uppercase text-slate-700 mb-3">
            Style
          </h2>
          <div className="flex flex-wrap gap-2 max-h-60 overflow-y-auto pr-2 scrollbar-thin">
            {Object.keys(config.parts[selectedPart].styles).map((style) => (
              <Button
                key={style}
                isActive={styles[selectedPart] === style}
                onClick={() => updateStyle(selectedPart, style)}
              >
                {style}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Controls;
