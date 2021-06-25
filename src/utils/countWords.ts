export interface WordData {
  word: string;
  count: number;
}

const countWords = (words: string[]): WordData[] => {
  const info = words.reduce((acc, word): Map<string, number> => {
    if (!acc.has(word)) {
      acc.set(word, 1);
    } else {
      acc.set(word, acc.get(word)! + 1);
    }
    return acc;
  }, new Map<string, number>());

  const dataObject = new Array<WordData>();
  info.forEach((value, key) => {
    dataObject.push({ word: key, count: value });
  });
  return dataObject.sort((a, b) => b.count - a.count);
};

export const countWordsRecord = (words: string[]): Record<string, number> => {
  const info = words.reduce(
    (acc: Record<string, number>, word: string): Record<string, number> => {
      if (!acc[word]) {
        acc[word] = 1;
      } else {
        acc[word]++;
      }
      return acc;
    },
    {},
  );

  return info;
};

export default countWords;
