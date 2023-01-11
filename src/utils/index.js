export const loop = (times, callback) => {
  [...Array(times)].forEach((item) => callback());
};
