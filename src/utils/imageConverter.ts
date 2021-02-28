const convertImagesToArrayBuffer = (files: File[]): ArrayBuffer[] => {
  var arr: ArrayBuffer[] = [];
  files.forEach((file) => {
    file.arrayBuffer().then((buffer) => {
      arr.push(buffer);
    });
  });
  return arr;
};

const convertImagesToFileNameArray = (files: File[]): string[] => {
  let ret: string[] = [];
  files.forEach((file) => {
    ret.push(file.name);
  });
  console.log("converted array", ret);
  return ret;
};

export { convertImagesToArrayBuffer, convertImagesToFileNameArray };
