const cleanText = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9áéíóúü ]/g, ' ')
    .replace(/ +/g, ' ');
export default cleanText;
