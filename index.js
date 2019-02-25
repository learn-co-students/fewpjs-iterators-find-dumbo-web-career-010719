// Code your solution in this file!

const superbowlWin = (array) => {
  let game = array.find(game => game.result === "W")
  return game.year
}
