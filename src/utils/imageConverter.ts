const convertImagesToArrayBuffer = (files: File[]): ArrayBuffer[] => {
  var arr: ArrayBuffer[] = [];
  files.forEach((file) => {
    file.arrayBuffer().then((buffer) => {
      arr.push(buffer);
    });
  });
  return arr;
};

export { convertImagesToArrayBuffer };
