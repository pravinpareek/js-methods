/**
 * Flattens `array` recursively.
 * @param {Array} array
 * @returns {Array} Returns new flattened array
 */
let flattenedArray = []
// function arrayIteration(array, flattenedArray){
//   array.map((item) => {
//     const length = item.length
//     // check if item is array using array length property
//     // if undefined, means it is not an array then push into flattenedArray
//     if (length === undefined) {
//       flattenedArray.push(item)
//     } else {
//       // if array length is not undefined (actual length) means it is a array
//       // then recursively call itself 
//       arrayIteration(item, flattenedArray)
//     }
//   }) 
// }

function flattenDeep(array) {
  // i don't want declare flattendArray variable outside of the outer function 
  let flattenedArray = []
  if (!Array.isArray(array)){ 
    throw new TypeError('parameter should be of Array type') 
  }
  
  function recursiveFunction1(array){
    // loop through array
    array.map((item) => {
      // check if item is array using array length property
      // if undefined, means it is not an array then push into flattenedArray
      if (item.length === undefined) {
        flattenedArray.push(item)
      } else {
        // if array length is not undefined (actual length) means it is a array
        // then recursively call itself 
        recursiveFunction(item)
      }
    })    
  } 
  function recursiveFunction(array){
    // loop through array
    let i = 0
    while(i < array.length){
      let item = array[i]
      // check if item is array using array length property
      // if undefined, means it is not an array then push into flattenedArray
      if (item.length === undefined) {
        flattenedArray.push(item)
      } else {
        // if array length is not undefined (actual length) means it is a array
        // then recursively call itself 
        recursiveFunction(item)
      }
      i++
    }    
  }
  recursiveFunction(array)
  return flattenedArray
}

module.exports = flattenDeep