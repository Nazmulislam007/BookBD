/* eslint-disable react-refresh/only-export-components */

export function UrlFormat(str: string) {
  return str.toLowerCase().replace(/\s/g, "-");
}

export function HeadingFormat(str: string) {
  return str
    .replace(/-/g, " ")
    .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
}

export function fixed(num: number): number {
  return +num.toFixed(2);
}

type CallbackFn<T extends any[]> = (...arg: T) => void;

export function debounce<T extends any[]>(cb: CallbackFn<T>, delay: number) {
  let timeout: NodeJS.Timeout;

  return (...arg: T) => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      cb(...arg);
    }, delay);
  };
}

export const colorGenerator = () => {
  const hue = Math.floor(Math.random() * 360);
  const color = `hsla(${hue}, 100%, 100%, 1)`;
  const bgColor = `hsla(${hue}, 80%, 65%, 1)`;
  return { color, bgColor };
};
