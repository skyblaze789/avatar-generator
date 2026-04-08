import { useState } from "react";

export function useAvatar(config) {
  const [selectedPart, setSelectedPart] = useState(
    Object.keys(config.parts)[0]
  );

  const [styles, setStyles] = useState(config.defaultState);

  const updateStyle = (part, style) => {
    setStyles((prev) => ({
      ...prev,
      [part]: style,
    }));
  };

  const randomize = () => {
    const newState = {};

    for (let part in config.parts) {
      const stylesArr = Object.keys(config.parts[part].styles);
      const random = stylesArr[Math.floor(Math.random() * stylesArr.length)];
      newState[part] = random;
    }

    setStyles(newState);
  };

  const downloadImage = async () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 500;
    canvas.height = 500;

    for (let part of config.layers) {
      const img = new Image();
      img.src = config.parts[part].styles[styles[part]];

      await new Promise((resolve) => {
        img.onload = () => {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve();
        };
      });
    }

    const link = document.createElement("a");
    link.download = "alpaca.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return {
    selectedPart,
    setSelectedPart,
    styles,
    updateStyle,
    randomize,
    downloadImage,
  };
}
