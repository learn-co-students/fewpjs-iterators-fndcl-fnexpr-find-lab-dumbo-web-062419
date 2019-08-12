const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(info){
  let winningYear;
  info.find(function(o){
    if(o.result === 'W'){
      winningYear = o.year;
    }
  })
  return winningYear;
}
