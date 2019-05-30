function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var index = -1;

  return function() {
    index = (index < list.length - 1 ? index + 1 : 0)
    return list[index]
  }
}

var rollLoadedDie = makeLoadedDie();


// Tests
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 1
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 2
console.log(rollLoadedDie());  // 3
console.log(rollLoadedDie());  // 3
console.log(rollLoadedDie());  // 5
console.log('~and repeat~')
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6