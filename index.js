// Code your solution in this file!
superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
  return `${result.year}`
}
