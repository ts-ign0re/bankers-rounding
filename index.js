'use strict';

// source http://stackoverflow.com/a/3109234
function bankersRounding(num, decimalPlaces = 0) {
  const m = 10 ** decimalPlaces;
  const n = +(decimalPlaces ? num * m : num).toFixed(8);
  const i = Math.floor(n);
  const f = n - i;
  const e = 1e-8;
  const r =
    f > 0.5 - e && f < 0.5 + e ? (i % 2 === 0 ? i : i + 1) : Math.round(n);
  return decimalPlaces ? r / m : r;
}

module.exports = bankersRounding;
