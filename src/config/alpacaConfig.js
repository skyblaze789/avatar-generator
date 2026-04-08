import { alpacaAssets as assets } from "../assets/alpaca";

export const alpacaConfig = {
  name: "alpaca",

  layers: [
    "Backgrounds",
    "Ears",
    "Neck",
    "Hair",
    "Accessories",
    "Leg",
    "Nose",
    "Eyes",
    "Mouth",
  ],

  parts: {
    Hair: {
      styles: assets.Hair,
    },
    Ears: {
      styles: assets.Ears,
    },
    Eyes: {
      styles: assets.Eyes,
    },
    Mouth: {
      styles: assets.Mouth,
    },
    Neck: {
      styles: assets.Neck,
    },
    Leg: {
      styles: assets.Leg,
    },
    Accessories: {
      styles: assets.Accessories,
    },
    Backgrounds: {
      styles: assets.Backgrounds,
    },
    Nose: {
      styles: assets.Nose,
    },
  },

  defaultState: {
    Hair: "Default",
    Ears: "Default",
    Eyes: "Default",
    Mouth: "Default",
    Neck: "Default",
    Leg: "Default",
    Accessories: "Earing",
    Backgrounds: "Blue50",
    Nose: "Default",
  },
};
