export function timeFormat(seconds: number, minutes: number) {
  return `${(minutes < 10 && "0" + minutes) || minutes} : ${(seconds < 10 && "0" + seconds) || seconds}`;
}
