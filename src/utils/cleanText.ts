const cleanText = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9á-úÁ-ÚúÜ ]/g, ' ')
    .replace(/ +/g, ' ');
export default cleanText;
