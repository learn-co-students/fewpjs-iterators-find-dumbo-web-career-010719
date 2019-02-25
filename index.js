// Code your solution in this file!
const superbowlWin =(record)=>{
    const win= record.find(rec=> rec.result === "W")
    return win.year.toString()
}