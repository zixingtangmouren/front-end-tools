import { scanAllFilesInDir } from './helpers/scanAllFilesInDir';

interface ScanUselessFilesPluginOptions {
  targetDir: string;
}

export default function ScanUselessFilesPlugin({ targetDir }: ScanUselessFilesPluginOptions) {
  const allFilePaths = scanAllFilesInDir(targetDir);
  console.log('allFilePaths', allFilePaths);
  return {
    name: 'scan-useless-files',
    resolveId(source: string) {
      console.log('resolveId', source);
    },
  };
}
