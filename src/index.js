import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
// There are n cities. Some of them are connected, while some are not.
// If city a is connected directly with city b, and city b is connected directly with city c,
// then city a is connected indirectly with city c.
// A province is a group of directly or indirectly connected
// cities and no other cities outside of the group.
// You are given an n x n matrix isConnected where isConnected[i][j] = 1
// if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.
// Return the total number of provinces.

const isConnected = [
  [1, 1, 0],
  [1, 0, 0],
  [0, 1, 0]
];
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  // temp varibles to count city connected
  let cityCount = 1;
  // track next city
  let nextCity;
  //     iterate over the first array of the matrix
  for (let i = 0; i < isConnected.length; i++) {
    // if there is a next city
    if (isConnected[i + 1]) {
      // sort the next city array
      nextCity = isConnected[i + 1].sort();
      // sort the current city array
      let currentCity = isConnected[i].sort();
      // if they are equal
      if (isEqual(currentCity, nextCity)) {
        // increment
        cityCount = cityCount + 1;
      }
    }
  }
  return cityCount;
};

const isEqual = (array1, array2) => {
  if (array1.length === array2.length) {
    return array1.every((element, index) => {
      if (element === array2[index]) {
        return true;
      }

      return false;
    });
  }

  return false;
};

console.log(findCircleNum(isConnected));
