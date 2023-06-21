/* eslint-disable react-refresh/only-export-components */

export function UrlFormat(str: string) {
  return str.toLowerCase().replace(/\s/g, "-");
}

export function HeadingFormat(str: string) {
  return str
    .replace(/-/g, " ")
    .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
}
