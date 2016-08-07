function arr() {
    let array = [1,2,3,4,5];
    let joined = array.join('|');
    return joined;
}
function fruits() {
    let fruits = ["banana","orange","pear","grapes"];
    let joined = fruits.join(" and");
    return joined;
}
function allLeters() {
  for (let letter = 65;letter<91;letter++){
      let char = String.fromCharCode(letter);
      console.log(char);
  }
}
console.log(arr());
console.log(fruits());
allLeters();