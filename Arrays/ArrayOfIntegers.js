function nums() {
    let nums = [1,2,3,4];
    nums.push(5);
    nums[2] = 500;
    console.log(nums.join(' - '));
}
function stringOfDays() {
    let weekDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    console.log(weekDays);
}
nums();
stringOfDays();
