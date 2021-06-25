import { readFile } from 'fs-extra';
import * as path from 'path';

const getText = async (fileName = 'text.txt'): Promise<string> => {
  const filePath = path.resolve(__dirname, '../../data', fileName);
  const text = await readFile(filePath);
  const textString = text.toString('utf-8');

  return textString.replace(/\n/g, '');
};

export default getText;
