import cleanText from '../utils/cleanText';
import getText from '../utils/getText';

describe('Quijote', () => {
  let text: string;
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
    // expect(text.indexOf('ó')).toBeGreaterThan(0);
    expect(text.indexOf(' ')).toBeGreaterThan(0);
  });

  // it('splits words', (): void => {
  //   expect(text.length).toBeGreaterThan(100);
  // });
});
