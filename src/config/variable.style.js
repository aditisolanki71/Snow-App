export const rem = (pxValue) => {
  const ratio = 16; // Set according to the project configuration ratio
  let pxValues;
  if (Array.isArray(pxValue)) {
    pxValue = pxValue[0];
  }
  pxValues = parseInt(pxValue);
  return pxValues / ratio + "rem";
};