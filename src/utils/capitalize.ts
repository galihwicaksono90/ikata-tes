export const capitalize = (text: string) => {
  if (!text) {
    return undefined;
  }
  const capitalizedText = text.replace(/\w\S*/g, (w) =>
    w.replace(/^\w/, (c) => c.toUpperCase())
  );
  return capitalizedText;
};
