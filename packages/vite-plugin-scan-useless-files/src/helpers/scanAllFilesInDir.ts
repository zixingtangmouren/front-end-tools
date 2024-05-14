import fs from 'fs';
import path from 'path';

export function scanAllFilesInDir(dir: string, arrayOfFiles: string[] = []) {
  const files = fs.readdirSync(dir);

  // 读取目录
  files.forEach((file) => {
    const fullPath = path.resolve(dir, file);
    if (fs.lstatSync(fullPath).isFile()) {
      arrayOfFiles.push(fullPath);
    } else {
      scanAllFilesInDir(fullPath, arrayOfFiles);
    }
  });

  return arrayOfFiles;
}
