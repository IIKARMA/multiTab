export const timeFormat = (seconds) => {
  let mm = Math.floor(seconds / 60);
  let ss = seconds % 60;
  return `${mm < 10 ? "0" + mm : mm}:${ss < 10 ? "0" + ss : ss}`;
};
