import fs from 'fs';
import path from 'path';

export const createFolderAndFiles = (folderPath, files) => {
  fs.mkdirSync(folderPath, { recursive: true });

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    fs.writeFileSync(filePath, '');
  });
};

export const writeToFile = (filePath, content) => {
  fs.writeFileSync(filePath, content.trim());
};