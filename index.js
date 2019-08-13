// const testVar = {}

// function testFunc() {
//   return "hi"
// }
// console.log(testFunc())

const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]

console.log(superbowlWin(record))
// => 2017

function superbowlWin(recordArray){
    let ans
    recordArray.find(yearResult => {
        if (yearResult.result === "W"){
            ans = yearResult.year
        }
    })
    return ans
}