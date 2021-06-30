function calcNumberIdenticalSymbols(str) {
  let transformation = str.split('').sort(function (a,b){
        return a.localeCompare(b);
      }).join('');

  return transformation.replace(/(.)\1+/g, (match, p1) => p1 + match.length);
}

module.exports = calcNumberIdenticalSymbols;
