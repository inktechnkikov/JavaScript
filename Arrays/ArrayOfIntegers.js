function nums() {
    let nums = [1,2,3,4];
    nums.push(5);
    nums[2] = 500;
    console.log(nums.join(' - '));
}
function stringOfDays() {
    let weekDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    for(let index = 0;index < weekDays.length;index++){
        console.log(weekDays[index]);
    }
    let reversed = new Array(weekDays);
    reversed.reverse();
    console.log(reversed);
}
function stringOfTowns() {
    let capitals = ["Sofia","Washington","Berlin"];
    capitals.forEach(function (capital) {
        console.log(capital)
    });
   capitals.forEach(function (capital,number) {
       console.log(number + " - > " + " " +  capital);
   })
}
function dates() {
    let dataArr = [new Date()];
    console.log(dataArr);
}
nums();
stringOfDays();
dates();
stringOfTowns();