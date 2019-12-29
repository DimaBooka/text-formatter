export const generateKey = (selectedIndexes: number[]) => {
  return selectedIndexes.toString().replace(',', '-');
};

export const splitText = (text: string, selectedIndexes: number[]): string[] => {
  const parts = [];

  parts.push(text.substring(0, selectedIndexes[0]));
  parts.push(text.substring(selectedIndexes[0], selectedIndexes[1]));
  parts.push(text.substring(selectedIndexes[1], text.length - 1));

  return parts;
};
