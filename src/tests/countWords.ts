import * as path from 'path';
import { writeFile, ensureDir } from 'fs-extra';
import cleanText from '../utils/cleanText';
import countWords, { countWordsRecord } from '../utils/countWords';
import getText from '../utils/getText';
import splitText from '../utils/splitText';

describe('Count Quijote words', () => {
  let text: string;
  let words: string[];

  test('Este es mi test', (): void => {
    expect(1 + 2).toBe(3);
  });

  it('sums correctly', (): void => {
    expect(1 + 2).toBe(3);
  });

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
    expect(text.indexOf('  ')).toBe(-1);
  });

  it('splits words', (): void => {
    words = splitText(text);
    expect(words.indexOf(' ')).toBe(-1);
    expect(words.some((w) => w.length <= 0)).toBeFalsy();
  });

  it('counts words', async (): Promise<void> => {
    console.time('Map count');
    const info = countWords(words);
    console.timeEnd('Map count');

    console.time('Record count');
    countWordsRecord(words);
    console.timeEnd('Record count');

    const dir = path.resolve(__dirname, '../../data/outputs');
    await ensureDir(dir);

    const filePath = path.resolve(dir, 'quijote.txt');

    const finalText = info
      .map((entry) => `${entry.word}: ${entry.count}`)
      .join('\n');

    await writeFile(filePath, finalText, { encoding: 'utf-8' });

    expect(info.length).toBeGreaterThan(500);
  });
});
