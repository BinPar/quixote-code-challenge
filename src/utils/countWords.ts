const countWords = (words: string[]): Map<string, number> => {
  const info = words.reduce((acc, word): Map<string, number> => {
    if (!acc.has(word)) {
      acc.set(word, 1);
    } else {
    }
  }, new Map<string, number>());

  return info;
};

export default countWords;
