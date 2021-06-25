import cleanText from '../utils/cleanText';
import countWords from '../utils/countWords';
import getText from '../utils/getText';
import splitText from '../utils/splitText';

describe('Quijote', () => {
  let text: string;
  let words: string[];
  it('Reads file', async () => {
    text = await getText();
    expect(text.length).toBeGreaterThan(100);

    expect(text.indexOf('\n')).toBe(-1);
  });

  it('replaces dots', (): void => {
    text = cleanText(text);

    expect(text.indexOf('.')).toBe(-1);
    expect(text.indexOf(';')).toBe(-1);
    expect(text.indexOf(',')).toBe(-1);
    expect(text.indexOf('ó')).toBeGreaterThan(0);
    expect(text.indexOf(' ')).toBeGreaterThan(0);
  });

  it('splits words', (): void => {
    words = splitText(text);
    expect(words.indexOf(' ')).toBe(-1);
    expect(words.some((w) => w.length <= 0)).toBeFalsy();
  });

  // it('counts words', (): void => {
  //   const info = countWords(words);

  //   expect(info.keys.length).toBe(words.length);
  // });
});
