export const DataTimeFormatting = timeString => {
  return `${timeString.slice(-6, -4)}:${timeString.slice(-4, -2)}`;
};

export const DataDurationFormatting = durationTotal => {
  const totalHours = parseInt(durationTotal / 3600);
  const totalMin = parseInt(durationTotal / 60) - totalHours * 60;
  return totalHours > 0 ? `${totalHours} h ${totalMin} min` : `${totalMin} min`;
};

export const DataPriceFormatting = priceTotal => {
  const priceFr = priceTotal.replace(".", ",");
  return `${priceFr} €`;
};
