export type TimeOption = {
  key: string;
  label: string;
};

export const generateTimeOptions = (min: number, max: number, step = 5) => {
  const timeOptions: TimeOption[] = [];

  for (let i = min; i <= max; i += step) {
    timeOptions.push({ key: i.toString(), label: `${i} min` });
  }

  return timeOptions;
};
