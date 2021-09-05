
var utility = {
  splitLine: (coords, index) => {
    var coordsCopy = coords.slice();
    var pointA = coords[index];
    var isAtStart = index === coords.length -1;
    var pointB = isAtStart? coords[0] : coords[index + 1];
    var newX = (pointA[0] + pointB[0]) /2;
    var newY = (pointA[1] + pointB[1]) /2;
    if (isAtStart) {
      coordsCopy.splice(0, 0, [newX, newY]);
    } else {
      coordsCopy.splice(index + 1, 0, [newX, newY]);
    }
    return coordsCopy;
  },
  removeNode: (coords, index) => {
    var coordsCopy = coords.slice();
    coordsCopy.splice(index, 1);
    return coordsCopy;
  },
  makeClipString: (coordArr) => {
    var clipString = 'polygon(';
    coordArr.forEach((pair, index) => {
      var xCoord = Math.round(pair[0] * 100) / 100;
      var yCoord = Math.round(pair[1] * 100) / 100;
      clipString += xCoord + '% ' + yCoord +  '%';
      if (index !== coordArr.length - 1) {
        clipString += ', ';
      } else {
        clipString += ')';
      }
    });
    return clipString;
  }
}
export default utility;