export const checkFileFormat = (filename: string): boolean => {
  const extension = filename.split('.').pop();
  return extension === 'log';
};
