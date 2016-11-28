export const setAllButLast = (i, length, style) => {
  if (i === length - 1 && length != 1)
    return {};
  return style;
}

export const setZeroIfNull = (value) => {
  if (!value)
    return 0;
  return value;
}
