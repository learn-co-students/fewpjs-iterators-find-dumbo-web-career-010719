// Code your solution in this file!
let superbowlWin = param => {
    win = param.find(year => year.result === "W")
    return win.year.toString();  
}