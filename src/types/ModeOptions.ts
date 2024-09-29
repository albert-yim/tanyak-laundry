export type ModeButtonOpionType = {
  left?: OptionType[];
  right?: OptionType[];
};

export type OptionType = {
  // nmae of the mode option
  mode: string;
  // duration time of the option
  duration: number;
  // position of the modeOption on ModeButton
  position: "top" | "center" | "bottom";
};
