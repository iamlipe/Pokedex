export function numberThreeCharacters(
  number: string | number
): string | number {
  if (Number(number) < 10) {
    return `00${number}`;
  }
  if (Number(number) < 100) {
    return `0${number}`;
  }
  return number;
}
