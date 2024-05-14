import { scanAllFilesInDir } from '../src/helpers/scanAllFilesInDir';
import path from 'path';

describe('heplers', () => {
  it('scanAllFilesInDir', () => {
    const dir = path.resolve(__dirname, '../');
    const files = scanAllFilesInDir(dir);
    console.log(files);
    expect(files.length).toEqual(5);
  });
});
