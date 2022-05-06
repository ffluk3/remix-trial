export const msDelay = (timeInMs: number): Promise<void> =>
  new Promise((res) => {
    setTimeout(res, timeInMs);
  });
