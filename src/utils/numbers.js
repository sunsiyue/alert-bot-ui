function shortenNumber(input) {
  if (input > 1000000000) {
    let prefix = input / 1000000000;
    return prefix.toFixed(1) + "B";
  }
  if (input > 1000000) {
    let prefix = input / 1000000;
    return prefix.toFixed(1) + "M";
  }
  if (input > 1000) {
    let prefix = input / 1000;
    return prefix.toFixed(1) + "K";
  }
  return input.toFixed(1);
}

export default shortenNumber;
