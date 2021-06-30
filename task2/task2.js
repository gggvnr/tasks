function calcNumberIdenticalSymbols(str) {
  return str.replace(/(.)\1+/g, (match, p1) => p1 + match.length);
}

module.exports = calcNumberIdenticalSymbols;
