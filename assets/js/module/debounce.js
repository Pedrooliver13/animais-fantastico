export default function debouce(callback, delay) {
  let timer;

  return (...args) => {
    if (timer) clearInterval(args);

    timer = setInterval(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}
