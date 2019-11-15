export const dateAndTimeToAPIFormat = (date, time) => {
  const dateToAPIFormat = date
    .toLocaleDateString()
    .split("/")
    .reverse()
    .join("");

  const timeToAPIFormat = time.toLocaleTimeString().replace(/:/g, "");

  return dateToAPIFormat + "T" + timeToAPIFormat;
};
