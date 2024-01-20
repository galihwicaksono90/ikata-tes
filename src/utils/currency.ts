export const numberToCurrency = (inputNumber: number): string => {
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "IDR",
    compactDisplay: "short",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  };

  const currency = new Intl.NumberFormat("id", options).format(inputNumber);
  return currency;
};
