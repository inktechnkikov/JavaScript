function popupBoxes() {
    let answer = confirm("Hello,do you want to continue?");
    if(answer){
        let name = prompt("What is your name?");
        alert("Hello " + name + " how are you feel?");
    }

}