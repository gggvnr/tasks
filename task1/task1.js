function checkUniqueness(str) {

  if (str === '' || str === undefined || str === null) {

    return false;

  } else {
      for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
          if (str[i] == str[j]) {
            return false;
        }
      }
    }


      return true;
  }
}

module.exports = checkUniqueness;