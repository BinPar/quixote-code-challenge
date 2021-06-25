const splitText = (text: string): string[] => {
  const splitted = text.split(' ').filter((w) => !!w);

  return splitted;
};

export default splitText;
