exports.rgbToHex = (rgb) => {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = `0${hex}`;
  }
  return hex;
};
exports.fullColourHex = (r, g, b) => {
  const red = this.rgbToHex(r);
  const green = this.rgbToHex(g);
  const blue = this.rgbToHex(b);
  return `${red}${green}${blue}`;
};
