export const DataTimeFormatting = timeString => {
  return `${timeString.slice(-6, -4)}:${timeString.slice(-4, -2)}`;
};
