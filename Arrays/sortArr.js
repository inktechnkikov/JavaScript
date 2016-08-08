function arrSort() {
    let arr = [1,2,5,89,9,100];
    arr.sort((a,b)=>a-b);
    console.log(arr);
}
function arrSortDesc() {
    let arr = [5,8,7,11,856,99,100,542];
    arr.sort((a,b)=>b-a);
    console.log(arr);
}
arrSort();
arrSortDesc();