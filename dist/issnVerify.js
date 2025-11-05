export function issn(input) {
  if (input.length < 8) {
    input = input.padStart(8, "0");
  }
  const reg = /^\d{4}\-?\d{3}[\dX]$/;
  if (!input.match(reg)) {
    return false;
  }
  const num = input.substr(0, input.length - 1).replace(/\-/, "").split("").reverse().reduce(function(prv, cur, idx) {
    let i = idx + 2;
    return prv + cur * i;
  }, 0) % 11;
  const check = num === 0 ? 0 : 11 - num;
  if (check === 10) {
    return "X" === input.substr(-1);
  }
  return check === parseInt(input.substr(-1));
}
//# sourceMappingURL=issnVerify.js.map
