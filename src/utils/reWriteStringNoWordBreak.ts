export function reWriteStringNoWordBreak(arr: string[]): string {
  let description: string;

  arr.forEach((text: string) => {
    if (!description) {
      description = text;
    } else {
      description = `${description} ${text}`;
    }
  });

  return description;
}
